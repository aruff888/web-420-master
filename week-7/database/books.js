/**
 * Author: Amanda Ruff
 * Date: 03/01/26
 * File Name: books.js
 * Description: Books collection file for the in-n-out-books application
 */

const Collection = require("./collection");

const books = new Collection([
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell"
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee"
  }
]);

module.exports = books;