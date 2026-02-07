// Import dependencies
const express = require("express");
const app = express();

// Import the books collection
const books = require("../database/books");

/**
 * GET /api/books
 * Returns an array of all books
 */
app.get("/api/books", async (req, res) => {
  try {
    const booksList = await books.find();
    res.json(booksList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * GET /api/books/:id
 * Returns a single book by id
 */
app.get("/api/books/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Input must be a number" });
    }

    const book = await books.findOne({ id });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
