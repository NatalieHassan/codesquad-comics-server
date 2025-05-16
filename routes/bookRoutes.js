const express = require('express');
const router = express.Router();

// Get all books
router.get('/', (req, res, next) => {
  res.status(200).json({ message: "This will send all of the book data" });
});

// Get single book by id
router.get('/:id', (req, res, next) => {
  res.status(200).json({ message: "This will send a single book by its id" });
});

// Create new book
router.post('/create/new', (req, res, next) => {
  res.status(200).json({ message: "This will create a new book" });
});

// Update book by id
router.put('/edit/:id', (req, res, next) => {
  res.status(200).json({ message: "This will update a book by its id" });
});

// Delete book by id
router.delete('/delete/:id', (req, res, next) => {
  res.status(200).json({ message: "This will delete a book by its id" });
});

module.exports = router; 