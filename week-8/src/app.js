const express = require("express");
const Ajv = require("ajv");
const users = require("../database/users");

const app = express();
app.use(express.json());

const ajv = new Ajv();

const securityQuestionsSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      answer: { type: "string" }
    },
    required: ["answer"],
    additionalProperties: false
  }
};

const validate = ajv.compile(securityQuestionsSchema);

app.post("/api/users/:email/verify-security-question", (req, res) => {
  try {
    const { email } = req.params;

    // AJV validation
    const valid = validate(req.body);
    if (!valid) {
      return res.status(400).json({ message: "Bad Request" });
    }

    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const answersMatch = req.body.every((question, index) => {
      return question.answer === user.securityQuestions[index].answer;
    });

    if (!answersMatch) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return res.status(200).json({
      message: "Security questions successfully answered"
    });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = app;