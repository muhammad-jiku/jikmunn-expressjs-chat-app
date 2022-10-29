// dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userHandler = require('./routes/userHandler');

// app initialization
const app = express();
const port = process.env.PORT || 4000;

// middleware
dotenv.config();
app.use(express.json());

// database connection with mongoose
const uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASSWORD}@cluster0.pzzsrxw.mongodb.net/${process.env.DB_NAME2}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected!!');
  })
  .catch((err) => {
    console.log(err);
  });

// application routes
app.use('/user', userHandler);

// displaying simple message
app.get('/', (req, res) => {
  res.send('Welcome here!');
});

// listening to the port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
