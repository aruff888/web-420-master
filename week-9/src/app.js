// src/app.js

const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to In-N-Out-Books API");
});

// Books route
const books = require("../database/books");
app.get("/api/books", async (req, res) => {
  const result = await books.find();
  res.status(200).json(result);
});

// Reset password route
const users = require("../database/users");
app.post("/api/users/:email/reset-password", async (req, res) => {
  const { email } = req.params;
  const { securityQuestions, newPassword } = req.body;

  const user = await users.findOne({ email });

  if (!user) return res.status(404).send("User not found");

  const correctAnswers = user.securityQuestions.every(
    (q, i) => q.answer === securityQuestions[i].answer
  );

  if (!correctAnswers) {
    return res.status(401).send("Unauthorized");
  }

  await users.updatePassword(email, newPassword);
  res.status(200).send("Password updated");
});

// Required for Render
const PORT = process.env.PORT || 3000;

// Only start server if not in test mode
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

module.exports = app;