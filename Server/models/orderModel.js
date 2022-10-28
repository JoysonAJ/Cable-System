const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const orderSchema = new Schema({
    name: {
        type: String,
        required: [true, 'order name required']
    },

    email: {
        type: String,
        required: [true, 'email is required']
    },

    userId: {
        type: String,
        required: true
    },

    order_Items: [],

    orderAmount: {
        type: String,
        required: true
    },

    transcation_Id: {
        type: String,
        require: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("order", orderSchema)