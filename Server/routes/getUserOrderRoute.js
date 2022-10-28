const express = require('express');
const router = express.Router();
const Order = require("../models/orderModel");


router.post('/getuserorder', async (req, res) => {
    const {userId} = req.body

    try {
        const orders = await Order.find({userId})
        res.status(200).send(orders);
    } catch (e) {
        res.status(400).json({
            message:"Something went wrong",
            error:e.stack
        })

    }
})


module.exports = router