const express = require('express');
const router = express.Router();
const Order = require("../models/orderModel");


router.post('/getuserorder', async (req, res) => {
    // const {userId} = req.body
    const {userId, name, email} = req.body
    console.log(name)
    console.log(userId)
    console.log(email)


    try {
        const orders = await Order.find({userId}).sort({_id: '-1'})
        console.log(order)
        res.status(200).send(orders);
    } catch (e) {
        res.status(400).json({
            message: "Something went wrong",
            error: e.stack
        })

    }
})


module.exports = router