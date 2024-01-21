// External Dependencies
const express = require('express');
const cors = require('cors');
const colors = require("colors");

require("dotenv").config();

// Internal Dependencies
const corsOptions = require('../config/development/CorsOptions.js');
const connectDB = require('./ConnectDB')

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

connectDB();

app.use("/api", require("./routes/router"))

app.listen(process.env.PORT, () => {
    console.log('Server Started at ' + `http://localhost:${process.env.PORT}/`.brightGreen.underline)
})