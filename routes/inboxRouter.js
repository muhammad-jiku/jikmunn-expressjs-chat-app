// dependencies
const express = require('express');

// importing files
const { getInbox } = require('../controllers/inboxController');
const { checkSignIn } = require('../middlewares/common/checkSignIn');
const decorateHtmlResHandler = require('../middlewares/common/decorateHtmlResHandler');

// defining router
const router = express.Router();

// set page title
const page_title = 'Inbox';

// sign in page
router.get('/', decorateHtmlResHandler(page_title), checkSignIn, getInbox);

module.exports = router;
