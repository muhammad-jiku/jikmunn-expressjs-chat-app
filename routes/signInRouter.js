// dependencies
const express = require('express');

// importing files
const { getSignIn, signIn } = require('../controllers/signInController');
const decorateHtmlResHandler = require('../middlewares/common/decorateHtmlResHandler');
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require('../middlewares/signIn/signInValidators');

// defining router
const router = express.Router();

// set page title
const page_title = 'Sign In';

// displaying sign-in page
router.get('/', decorateHtmlResHandler(page_title), getSignIn);

// sign-in
router.post(
  '/',
  decorateHtmlResHandler(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  signIn
);

module.exports = router;
