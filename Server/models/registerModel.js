const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const registerSchema = new Schema({
    name: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    userId: {
        type: String,
        require
    },
    password: {
        type: String,
        require
    },
    isAdmin: {
        type: Boolean,
        require,
        default: false
    },
    //chanes applied latter
    isReceptionist: {
            type: Boolean,
            require,
            default: false
        }
         // till here
}, {
    timestamps: true,
})

module.exports = mongoose.model('users',registerSchema);