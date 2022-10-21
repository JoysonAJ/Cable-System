const express = require('express');
const router = express.Router();
const channelPack = require("../models/channel_basic");

// router.get("/getallchannel", async (req, res) => {
router.get("/channelbasic", async (req, res) => {
    try {
        const channels = await channelPack.find({});
        res.send(channels);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e})
    }
});

module.exports = router;