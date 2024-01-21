const { SUCCESS } = require('../../constants/shared/success')
const { ERROR } = require('../../constants/shared/error')

const Book = require('../../models/aclc-library-module/book-schema')

class AclcLibraryController {
    // @desc   Get All Books
    // @route  GET /api/v1/aclc-library/books
    // @access Public
    async fetchBooks(req, res){
        try {
            const fetchBooks = await Book.find()

            res.status(200).json({
                status: SUCCESS.RESPONSES.SUCCESS,
                results: fetchBooks.length,
                books:  fetchBooks,
            })
        } catch (error) {
            res.status(404).json({
                status: ERROR.API_ERROR_404,
                message: error.message
            })
        }
    }
}

module.exports = new AclcLibraryController();