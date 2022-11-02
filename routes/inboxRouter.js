// dependencies
const express = require('express');

// importing files
const { getInbox } = require('../controllers/inboxController');
const decorateHtmlResHandler = require('../middlewares/common/decorateHtmlResHandler');

// defining router
const router = express.Router();

// sign in page
router.get('/', decorateHtmlResHandler('Inbox'), getInbox);

module.exports = router;
