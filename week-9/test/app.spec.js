// test/app.spec.js

const request = require("supertest");
const app = require("../src/app");

describe("In-N-Out-Books API", () => {

  test("GET / should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Welcome to In-N-Out-Books API");
  });

  test("GET /api/books should return book array", async () => {
    const res = await request(app).get("/api/books");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST reset-password should return 200 when correct", async () => {
    const res = await request(app)
      .post("/api/users/harry@hogwarts.edu/reset-password")
      .send({
        securityQuestions: [
          { answer: "Fluffy" },
          { answer: "Quidditch Through the Ages" },
          { answer: "Evans" }
        ],
        newPassword: "newpassword"
      });

    expect(res.statusCode).toBe(200);
  });

  test("POST reset-password should return 401 when incorrect", async () => {
    const res = await request(app)
      .post("/api/users/harry@hogwarts.edu/reset-password")
      .send({
        securityQuestions: [
          { answer: "Wrong" },
          { answer: "Wrong" },
          { answer: "Wrong" }
        ],
        newPassword: "newpassword"
      });

    expect(res.statusCode).toBe(401);
  });

});