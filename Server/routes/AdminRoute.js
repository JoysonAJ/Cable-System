const express = require('express');
const router = express.Router();
const channel_basic = require("../models/channel_basic");
const channelPack = require("../models/channel_basic");

router.post("/addchannel", async (req, res) => {

    const {newChannel} = req.body
    const channelDesc = newChannel.type
    try {
        const decsc = {
            // channelDesc : newChannel.description
            Bundle: "Including set plans are involved",
            Individual: "Set of 2 channel hd and non Hd"
        }
        const newChannelPack = new channel_basic({
            name: newChannel.Name,
            type: [newChannel.type],
            price: [{
                Basic: Number(newChannel.price),
                Individual: Number(newChannel.price)
            }],
            categories: newChannel.type,
            image: newChannel.image,
            Description: decsc


            // channelDesc : newChannel.description,


        })
        newChannelPack.save();
        res.status(201).send("New pack added ")
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e})
    }

});
router.post("/getChannelbyID", async (req, res) => {

    const channelId = req.body.PlanID

    console.log(channelId)
    try {
        const channel = await channelPack.findOne({_id: channelId})
        console.log(channel)
        res.send(channel)
    } catch (e) {
        return res.status(400).json({message: e})
    }

});

router.post("/updatechannelpack", async (req, res) => {
    const updatePack = req.body.updatedPlan

    // console.log(updatePack)
    // console.log(updatePack.Description)
    descp = {
        Basic: updatePack.description
    }
    console.log("/n/n")
    try {
        const oldPack = await channel_basic.findOne({_id: updatePack._id})

        typePlan = updatePack.type
        oldPack.name = updatePack.Name,
            oldPack.Description = [descp],
            oldPack.type = updatePack.type,
            oldPack.price = {
                Basic: updatePack.price
            }

        await oldPack.save();
        console.log("saved.....")
        res.status(201).send("Update Done.....");
    } catch (error) {
        console.log("some thing")
        res.status(400).json({message: error});
    }
})

router.post("/deleteChannel", async (req, res) => {
    const planId = req.body.PlanID
    console.log(planId)
    try {
        await channel_basic.findByIdAndDelete({_id: planId})
        res.status(200).send("Pack deleted Successfully")
    } catch (e) {
        res.status(404).json({message: e})
    }
})


module.exports = router;