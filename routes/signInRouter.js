// dependencies
const express = require('express');

// importing files
const { getSignIn } = require('../controllers/signInController');
const decorateHtmlResHandler = require('../middlewares/decorateHtmlResHandler');

// defining router
const router = express.Router();

// sign in page
router.get('/sign-in', decorateHtmlResHandler('Sign In'), getSignIn);

module.exports = router;
