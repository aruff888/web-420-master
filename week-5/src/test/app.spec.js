const request = require("supertest");
const app = require("../app");

describe("Chapter 4: API Tests", () => {

  test("Should return a 201-status code when adding a new book", async () => {
    const response = await request(app)
      .post("/api/books")
      .send({
        id: 3,
        title: "Dune",
        author: "Frank Herbert"
      });

    expect(response.status).toBe(201);
  });

  test("Should return a 400-status code when adding a new book with missing title", async () => {
    const response = await request(app)
      .post("/api/books")
      .send({
        id: 4,
        author: "Unknown"
      });

    expect(response.status).toBe(400);
  });

  test("Should return a 204-status code when deleting a book", async () => {
    const response = await request(app)
      .delete("/api/books/1");

    expect(response.status).toBe(204);
  });

});
