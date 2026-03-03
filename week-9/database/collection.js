// database/collection.js

const collection = [
  {
    email: "harry@hogwarts.edu",
    books: ["9780439708180"]
  }
];

const findOne = async (query) => {
  return collection.find(item => item.email === query.email);
};

const addBook = async (email, isbn) => {
  const userCollection = collection.find(item => item.email === email);
  if (userCollection) {
    userCollection.books.push(isbn);
    return true;
  }
  return false;
};

module.exports = {
  findOne,
  addBook
};