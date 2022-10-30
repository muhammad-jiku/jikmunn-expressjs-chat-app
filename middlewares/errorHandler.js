// dependecies
const createError = require('http-errors');

// 404 error handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, 'Your requested content is not found!'));
};

// default error handler
const errorHandler = (err, req, res, next) => {
  // sending data as variable
  res.locals.title = 'Error Page';
  res.locals.message = 'There is something went wrong!';
  res.render('error');
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
