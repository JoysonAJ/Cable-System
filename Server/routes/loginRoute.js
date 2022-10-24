const express = require('express');
const router = express.Router();
const User = require("../models/registerModel");

router.post("/login",async (req,res) =>{
    const{userId,password} = req.body;

    try {
        const user = await User.find({userId, password});
        if(user.length > 0){
            res.send("loged In...........");
            console.log(use)
            console.log(userId)
            console.log(password)
        }
    } catch (e) {
        console.log(e);
        return res.status(400).json({ message: 'Something went wrong' });
    }
    })
module.exports = router
