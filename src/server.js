// External Dependencies
const express = require('express');
const cors = require('cors');
const colors = require("colors");
require("dotenv").config();

// Internal Dependencies
const corsOptions = require('../config/development/CorsOptions.js');
const connectDB = require('./ConnectDB')
const { SUCCESS } = require('./constants/shared/success')
const { ERROR } = require('./constants/shared/error')

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.set('view engine', 'ejs')

connectDB();

app.get("/", (req, res) => {
    // res.send("welcome to server")
    res.render('index')
})

app.use("/api", require("./routes/router"))

app.listen(process.env.PORT, () => {
    console.log('Server Started at ' + `http://localhost:${process.env.PORT}/`.brightGreen.underline)
})