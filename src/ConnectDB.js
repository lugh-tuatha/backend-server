const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const connectDB = async () => {
console.log(DB)
    try {
        const conn = await mongoose.connect(DB);
        console.log('MongoDB connected: ' + `${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;