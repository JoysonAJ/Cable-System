const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

const ChannelBasicSchema = new Schema({
    name: {
        type: String,
        require
    },
    type: [],
    price: [],
    categories:{
        type: String,
        require
    },
    image:{
        type: String,
        require
    },
    Description:[]
},{
    timestamps:true,
});

// const channel_Basic_Model = mongoose.model("Channel_Basic_Plans",ChannelBasicSchema);
const channel_Basic_Model = mongoose.model("channel_basic_plans",ChannelBasicSchema);
// data connected dto collection --> TC_HUB.channel_basic_plans

module.exports = channel_Basic_Model;