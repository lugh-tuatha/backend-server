const express = require('express');
const app = express();

require("dotenv").config();

const colors = require("colors");


const connectDB = require('./ConnectDB')

connectDB();

app.use("/api", require("./routes/router"))


app.listen(process.env.PORT, () => {
    console.log('Server Started at ' + `http://localhost:${process.env.PORT}/`.brightGreen.underline)
})