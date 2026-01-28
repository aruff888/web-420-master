/**
 * Name: Amanda Ruff
 * Date: January 27, 2026
 * File: app.js
 * Description: Express server for the In-N-Out-Books application.
 * This server serves a styled landing page and includes basic error handling.
 */

const express = require("express");
const app = express();

/**
 * GET / - Landing Page
 */
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>In-N-Out-Books</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          color: #333;
        }
        header {
          background-color: #2c3e50;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
        main {
          padding: 20px;
        }
        section {
          background: #fff;
          margin-bottom: 20px;
          padding: 20px;
          border-radius: 5px;
        }
        h2 {
          color: #2c3e50;
        }
        ul {
          list-style-type: square;
          padding-left: 20px;
        }
        footer {
          background-color: #2c3e50;
          color: #fff;
          text-align: center;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>In-N-Out-Books</h1>
        <p>Your personal platform for managing and discovering great books</p>
      </header>

      <main>
        <section>
          <h2>About Us</h2>
          <p>
            In-N-Out-Books is an API-driven application designed for book lovers
            who want to organize, manage, and explore their personal book
            collections. Whether you're tracking what you've read or managing a
            shared library, we make it simple.
          </p>
        </section>

        <section>
          <h2>Top Selling Books</h2>
          <ul>
            <li>The Great Gatsby – F. Scott Fitzgerald</li>
            <li>To Kill a Mockingbird – Harper Lee</li>
            <li>1984 – George Orwell</li>
            <li>The Catcher in the Rye – J.D. Salinger</li>
          </ul>
        </section>

        <section>
          <h2>Hours of Operation</h2>
          <p>
            Monday – Friday: 9:00 AM – 6:00 PM<br />
            Saturday: 10:00 AM – 4:00 PM<br />
            Sunday: Closed
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            Email: support@innoutbooks.com<br />
            Phone: (555) 123-4567
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 In-N-Out-Books</p>
      </footer>
    </body>
    </html>
  `);
});

/**
 * 404 Error Middleware
 */
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

/**
 * 500 Error Middleware
 */
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

module.exports = app;
