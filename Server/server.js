const express = require('express');
const app = express();
const db = require("./db");
const channel_Basic_Model = require("./models/channel_basic");
const chBasicRoute = require("./routes/chBasicRoute");

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is working");
})

app.use("/api/channel",chBasicRoute);

{/* app.get("/getchannel", (req, res) => {
    channel_Basic_Model.find({}, (err, docs) => {
        if (err) {
            console.log(docs);
            console.log(err);
        } else {
            console.log(docs);
            res.send(docs);
        }
    });
 })*/}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    `Server running on port ${PORT}`
    console.log(`Server is running .....${PORT}`)
    // res.send("")
})

//the data rendering page is
//http://localhost:8000/api/channel/channelbasic