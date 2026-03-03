const request = require("supertest");
const app = require("../src/app");

describe("Chapter 7: API Tests", () => {

  it("should return a 200 status with 'Security questions successfully answered' message", async () => {
    const res = await request(app)
      .post("/api/users/harry@hogwarts.edu/verify-security-question")
      .send([
        { answer: "Fluffy" },
        { answer: "Quidditch Through the Ages" },
        { answer: "Evans" }
      ]);

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Security questions successfully answered");
  });

  it("should return a 400 status code with 'Bad Request' message when the request body fails ajv validation", async () => {
    const res = await request(app)
      .post("/api/users/harry@hogwarts.edu/verify-security-question")
      .send([
        { wrongProperty: "Fluffy" }
      ]);

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Bad Request");
  });

  it("should return a 401 status code with 'Unauthorized' message when the security questions are incorrect", async () => {
    const res = await request(app)
      .post("/api/users/harry@hogwarts.edu/verify-security-question")
      .send([
        { answer: "Wrong" },
        { answer: "Wrong" },
        { answer: "Wrong" }
      ]);

    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual("Unauthorized");
  });

});