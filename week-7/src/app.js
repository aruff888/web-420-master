/**
 * Author: Amanda Ruff
 * Date: 03/01/26
 * File Name: app.js
 * Description: Express application with login route
 */

const express = require("express");
const bcrypt = require("bcryptjs");
const users = require("../database/users");

const app = express();
app.use(express.json());

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Bad Request" });
    }

    // Find user by email
    const user = users.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Compare password using bcrypt
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return res.status(200).json({ message: "Authentication successful" });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = app;