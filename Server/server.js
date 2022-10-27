const express = require('express');
const app = express();
const db = require("./db");
const channel_Basic_Model = require("./models/channel_basic");
const chBasicRoute = require("./routes/chBasicRoute");
const registerRoute = require("./routes/registerRoute");
const orderRoute = require("./routes/orderRoute")
const loginRoute = require("./routes/loginRoute")

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is working");
})

app.use("/api/channel", chBasicRoute);
app.use("/api/users", registerRoute)
// app.use("/api/user",loginRoute)
app.use("/api/users", registerRoute)
app.use("/api/orders/", orderRoute)


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    `Server running on port ${PORT}`
    console.log(`Server is running .....${PORT}`)
    // res.send("")
})

//the data rendering page is
//http://localhost:8000/api/channel/channelbasic