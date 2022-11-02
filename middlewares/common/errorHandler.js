// dependecies
// require('dotenv').config()
const createError = require('http-errors');

// 404 error handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, 'Your requested content is not found!'));
};

// default error handler
const errorHandler = (err, req, res, next) => {
  // sending data as variable
  res.locals.error =
    process.env.NODE_ENV === 'development' ? err : { message: err.message };

  res.status(err.status || 500);

  if (res.locals.html) {
    // html response
    res.render('error', {
      title: 'Error Page',
    });
  } else {
    // json response
    console.log(err);
    res.json(res.locals.error);
  }
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
