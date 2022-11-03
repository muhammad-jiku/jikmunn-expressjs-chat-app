// dependencies
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const path = require('path');
const dotenv = require('dotenv');
const moment = require('moment');
const cookieParser = require('cookie-parser');

// import files
const {
  notFoundHandler,
  errorHandler,
} = require('./middlewares/common/errorHandler');
const signInRouter = require('./routes/signInRouter');
const userRouter = require('./routes/userRouter');
const inboxRouter = require('./routes/inboxRouter');

// app initialization
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;

// middleware
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// socket creation
const io = require('socket.io')(server);
global.io = io;

// set comment as app locals
app.locals.moment = moment;

// database connection with mongoose
const uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASSWORD}@cluster0.pzzsrxw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

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

// middleware
app.use(express.json());

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', signInRouter);
app.use('/users', userRouter);
app.use('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

// listening to the port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
