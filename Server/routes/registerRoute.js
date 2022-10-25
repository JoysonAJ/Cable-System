const express = require('express');
const router = express.Router();
const User = require("../models/registerModel");

router.post("/register", async (req, res) => {
    const {name, email, userId, password} = req.body

    // const existingUser = await User.find({
    //     email, userId
    // })
    // if (existingUser.length > 0) {
    //     return res.status(400).json({message: "User already Exists"})
    // }
    const newUser = new User(
        {name, email, userId, password}
    )

    try {
        newUser.save();
        res.send("User registered successfully")
    } catch (e) {
        return res.status(400).json({message: e})
    }
})

router.post("/login", async (req, res) => {
    const {userId, password} = req.body;


    try {
        const user = await User.find({userId, password});

        if (user.length > 0) {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                userId: user[0].userId,
                isAdmin: user[0].isAdmin,
                isReceptionist: user[0].isReceptionist,
                _id: user[0]._id,
            };
            res.send(currentUser)

        }
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: 'Something went wrong'});
    }
})

module.exports = router
