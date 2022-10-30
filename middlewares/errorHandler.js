// dependecies
const createError = require('http-errors');

// 404 error handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, 'Your requested content is not found!'));
};

// default error handler
const errorHandler = (err, req, res, next) => {
  res.render('error', {
    title: 'Error Page',
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
