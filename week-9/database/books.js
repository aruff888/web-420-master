// database/books.js

const books = [
  {
    isbn: "9780439708180",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
  },
  {
    isbn: "9780618640157",
    title: "The Hobbit",
    author: "J.R.R. Tolkien"
  }
];

const find = async () => books;

const findOne = async (query) => {
  return books.find(book => book.isbn === query.isbn);
};

module.exports = {
  find,
  findOne
};