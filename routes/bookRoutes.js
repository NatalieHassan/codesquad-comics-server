const express = require('express');
const router = express.Router();
const { getAllBooks, getBook, createBook, updateBook, deleteBook } = require("../controllers/bookController");

// Get all books
router.get('/', getAllBooks);

// Get single book by id
router.get('/:id', getBook);

// Create new book
router.post('/create/new', createBook);

// Update book by id
router.put('/edit/:id', updateBook);

// Delete book by id
router.delete('/delete/:id', deleteBook);

module.exports = router; 