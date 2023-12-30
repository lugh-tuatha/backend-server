const { default: mongoose, mongo } = require('mongoose');

const reflectionSchema = new mongoose.Schema({
    from: String,
    summary: String,
    day: Number,
    date: Date,
    edited: Boolean
})

const Reflection = mongoose.model('reflection', reflectionSchema)

module.exports = Reflection;