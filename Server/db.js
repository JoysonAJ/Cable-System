const mongoose = require('mongoose');
const dbURL = "mongodb://localhost:27017/TC_HUB"
mongoose.connect(dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected ...... to Compass")
})

db.on('error', () => {
    console.log("Something went wrong.......")
})

module.exports = mongoose;