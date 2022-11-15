const express = require('express');
const router = express.Router();
const channelPack = require("../models/channel_basic");

// router.get("/getallchannel", async (req, res) => {
router.get("/channelbasic", async (req, res) => {
    try {
        console.log("here we came..")
        const channels = await channelPack.find({});
        // console.log(channels)
        res.send(channels);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e})
    }
});

router.get("/addchannel", async (req, res) => {
    console.log("the new route calling")
    const {newChannel} = req.body
    try {
        console.log(newChannel)
        res.send("Done for the day")
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e})
    }

});

module.exports = router;