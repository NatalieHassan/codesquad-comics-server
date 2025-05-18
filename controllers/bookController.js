const booksData = require('../data/books');

// Get all books
const getAllBooks = async (req, res, next) => {
  try {
    const books = booksData;
    return res.status(200).json({
      success: { message: "Successfully retrieved all books" },
      data: { books }
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Failed to retrieve books" }
    });
  }
};

// Get single book by id
const getBook = async (req, res, next) => {
  const { _id } = req.params;
  try {
    const book = booksData.find((book) => book._id === _id);
    return res.status(200).json({
      success: { message: "Successfully retrieved book" },
      data: { book }
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Failed to retrieve book" }
    });
  }
};

// Create new book
const createBook = async (req, res, next) => {
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } = req.body;
  try {
    const newBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl
    };
    return res.status(201).json({
      success: { message: "Successfully created new book" },
      data: { newBook }
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Failed to create book" }
    });
  }
};

// Update book
const updateBook = async (req, res, next) => {
  const { _id } = req.params;
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } = req.body;
  try {
    const updatedBook = {
      _id,
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl
    };
    return res.status(201).json({
      success: { message: "Successfully updated book" },
      data: { updatedBook }
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Failed to update book" }
    });
  }
};

// Delete book
const deleteBook = async (req, res, next) => {
  const { _id } = req.params;
  try {
    const books = booksData.filter((book) => book._id !== _id);
    return res.status(200).json({
      success: { message: "Successfully deleted book" },
      data: { books }
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Failed to delete book" }
    });
  }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
