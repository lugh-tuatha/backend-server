const { default: mongoose, mongo } = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    cover: String,
    rented: Boolean,
    created_at: Date,
    updated_at: Date,
})

const Book = mongoose.model('books', bookSchema)

module.exports = Book;