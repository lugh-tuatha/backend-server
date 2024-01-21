const express = require('express');
const router = express.Router();
const AclcLibraryController = require('../controllers/aclc-library-module/aclc-library-controller');

router.get("/books", AclcLibraryController.fetchBooks);

module.exports = router;