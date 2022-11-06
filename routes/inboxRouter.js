// external imports
const express = require('express');

// internal imports
const {
  getInbox,
  searchUser,
  addConversation,
  getMessages,
  sendMessage,
} = require('../controllers/inboxController');
const { checkSignIn } = require('../middlewares/common/checkSignIn');
const decorateHtmlResHandler = require('../middlewares/common/decorateHtmlResHandler');
const attachmentUpload = require('../middlewares/inbox/attachmentUpload');

// defining router
const router = express.Router();

// set page title
const page_title = 'Inbox';

// sign in page
router.get('/', decorateHtmlResHandler(page_title), checkSignIn, getInbox);

// search user for conversation
router.post('/search', checkSignIn, searchUser);

// add conversation
router.post('/conversation', checkSignIn, addConversation);

// get messages of a conversation
router.get('/messages/:conversation_id', checkSignIn, getMessages);

// send message
router.post('/message', checkSignIn, attachmentUpload, sendMessage);

module.exports = router;
