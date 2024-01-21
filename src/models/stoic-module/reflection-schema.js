const { default: mongoose, mongo } = require('mongoose');

const reflectionSchema = new mongoose.Schema({
    author: String,
    date: Date,
    title: String,
    summary: String,
    created_at: Date,
    updated_at: Date,
})

const Reflection = mongoose.model('reflections', reflectionSchema)

module.exports = Reflection;