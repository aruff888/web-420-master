const express = require("express");
const books = require("./database/books");

const app = express();
app.use(express.json());

/**
 * POST /api/books
 */
app.post("/api/books", (req, res, next) => {
  try {
    const { id, title, author } = req.body;

    if (!title) {
      const err = new Error("Book title is required");
      err.status = 400;
      throw err;
    }

    const newBook = { id, title, author };
    books.insert(newBook);

    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/books/:id
 */
app.delete("/api/books/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    books.delete(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message
  });
});

module.exports = app;
