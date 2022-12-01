const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const communitySection = new Schema({
    name: {
        type: String,
        // require
    },
    userType: {
        type: String,
        // require
    },
    question: {
        type: String
    },
    response: {
        type: []
    }
})
// const exportCommunity =

module.exports = mongoose.model("community", communitySection)
// exportCommunity