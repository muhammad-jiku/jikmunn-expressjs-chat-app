// external exports
const mongoose = require('mongoose');

// internal exports
const conversationSchema = require('../schemas/conversationSchema');

const Conversation = new mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
