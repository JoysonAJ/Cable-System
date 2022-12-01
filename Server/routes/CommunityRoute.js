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


module.exports = router;