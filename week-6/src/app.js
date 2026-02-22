const express = require("express");
const app = express();

const books = require("../database/books");

app.use(express.json());

app.put("/api/books/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);

    // Check if ID is numeric
    if (isNaN(id)) {
      return res.status(400).json({ message: "Input must be a number" });
    }

    const { title, author } = req.body;

    // Check for missing title
    if (!title) {
      return res.status(400).json({ message: "Bad Request" });
    }

    // Find book
    const book = books.find(b => b.id === id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Update book
    book.title = title;
    if (author) book.author = author;

    return res.status(204).send();

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = app;