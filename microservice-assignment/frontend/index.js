const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

const BACKEND_URL = 'http://192.168.56.11:3000/books';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(BACKEND_URL);
    const books = response.data;

    let html = `<h1>Bookstore Microservices</h1><ul>`;
    books.forEach(book => {
      html += `<li><b>${book.title}</b> — ${book.author}</li>`;
    });
    html += `</ul>`;

    res.send(html);
  } catch (error) {
    res.send('Error connecting to backend: ' + error.message);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend running on port ${PORT}`);
});
