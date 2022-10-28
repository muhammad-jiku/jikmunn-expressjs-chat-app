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

// database connection with mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASSWORD}@cluster0.pzzsrxw.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('DB connected!!');
  })
  .catch((err) => {
    console.log(err);
  });

// displaying simple message
app.get('/', (req, res) => {
  res.send('Welcome here!');
});

// listening to the port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
