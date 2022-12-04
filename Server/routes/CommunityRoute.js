const express = require('express');

const router = express.Router();
const communityModel = require("../models/communityModel")

router.post("/question", async (req, res) => {
    const data = req.body
    const name = data.name
    const userType = data.userType
    const question = data.question
    // const response = data.response
    console.log(data);
    try {
        const comment = new communityModel({
            name, userType, question
        });
        comment.save();
        res.status(200).send("Sucessfulll")
    } catch (e) {
        res.status(400).json({message: e.stack});
    }
})

router.get("/getquestion", async (req, res) => {

    try {
        const getQuestion = await communityModel.find({})
        // console.log(getQuestion)
        res.status(200).send(getQuestion)
    } catch (e) {
        res.status(400).json({message: e})
    }


})

router.post("/response", async (req, res) => {
    try {
        let responseArray = new Array();
        const data = req.body
        console.log(data)
        const updateRespose = {
            name: req.body.name,
            userType: req.body.userType,
            responseQuestion: req.body.response
        }
        const findId = req.body.upadteId
        const reqQuestionObj = await communityModel.findOne({_id: findId})
        console.log(reqQuestionObj)
        const existedResponse = reqQuestionObj.response
        existedResponse &&
        existedResponse.map(responseData => {
            responseArray.push(responseData)
        })
        responseArray.push(updateRespose)
        reqQuestionObj.response = responseArray

        await reqQuestionObj.save();

        res.status(200).send("here we go")
    } catch (e) {
        res.status(404).json({message: e.stack})
    }

})


module.exports = router;