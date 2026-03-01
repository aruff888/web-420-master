/**
 * Author: Amanda Ruff
 * Date: 03/01/26
 * File Name: app.spec.js
 * Description: Unit tests for login route
 */

const request = require("supertest");
const app = require("../src/app");

describe("Chapter 7: API Tests", () => {

  it("should log a user in and return a 200-status with 'Authentication successful' message.", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({
        email: "harry@hogwarts.edu",
        password: "potter"
      });

    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("Authentication successful");
  });

  it("should return a 401-status code with 'Unauthorized' message when logging in with incorrect credentials.", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({
        email: "harry@hogwarts.edu",
        password: "wrongpassword"
      });

    expect(response.status).toEqual(401);
    expect(response.body.message).toEqual("Unauthorized");
  });

  it("should return a 400-status code with 'Bad Request' when missing email or password.", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({
        email: ""
      });

    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual("Bad Request");
  });

});