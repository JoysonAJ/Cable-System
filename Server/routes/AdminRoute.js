const express = require('express');
const router = express.Router();
const channel_basic = require("../models/channel_basic");

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
               name : newChannel.Name,
                type:[newChannel.type],
                price: [{
                    Basic :Number(newChannel.price),
                    Individual:Number(newChannel.price)
                }],
                categories : newChannel.type,
                image:newChannel.image,
                Description : decsc


                    // channelDesc : newChannel.description,


        })
        newChannelPack.save();
        res.status(201).send("New pack added ")
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e})
    }

});

module.exports = router;