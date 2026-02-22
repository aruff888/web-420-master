const request = require("supertest");
const app = require("../src/app");

describe("Chapter 5: API Tests", () => {

  test("Should update a book and return a 204-status code", async () => {
    const response = await request(app)
      .put("/api/books/1")
      .send({ title: "Updated Title", author: "New Author" });

    expect(response.status).toEqual(204);
  });

  test("Should return a 400-status code when using a non-numeric id", async () => {
    const response = await request(app)
      .put("/api/books/foo")
      .send({ title: "Test" });

    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual("Input must be a number");
  });

  test("Should return a 400-status code when updating a book with a missing title", async () => {
    const response = await request(app)
      .put("/api/books/1")
      .send({ author: "Only Author" });

    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual("Bad Request");
  });

});