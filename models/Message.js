// external exports
const mongoose = require('mongoose');

// internal exports
const messageSchema = require('../schemas/messageSchema');

const Message = new mongoose.model('Message', messageSchema);

module.exports = Message;
