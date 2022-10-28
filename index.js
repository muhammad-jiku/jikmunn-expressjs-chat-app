// dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// app initialization
const app = express();
const port = process.env.PORT || 4000;

// middleware
dotenv.config();
app.use(express.json());

// displaying simple message
app.get('/', (req, res) => {
  res.send('Welcome here!');
});

// listening to the port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
