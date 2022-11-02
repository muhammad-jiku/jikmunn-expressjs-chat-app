// dependencies
const express = require('express');

// importing files
const { getUsers } = require('../controllers/userController');
const decorateHtmlResHandler = require('../middlewares/common/decorateHtmlResHandler');

// defining router
const router = express.Router();

// sign in page
router.get('/', decorateHtmlResHandler('Users'), getUsers);

module.exports = router;
