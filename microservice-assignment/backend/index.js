const express = require('express');
const app = express();
const PORT = 3000;

const books = [
  { id: 1, title: "Satyagraha in South Africa", author: "Mahatma Gandhi" },
  { id: 2, title: "Target 3 Billion", author: "A. P. J. Abdul Kalam" },
  { id: 3, title: "Microservices with Node.js", author: "Ryan Dahl" }
];

app.get('/books', (req, res) => {
  console.log("Request received from frontend");
  res.json(books);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
