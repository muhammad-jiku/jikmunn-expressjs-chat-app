// dependencies
const mongoose = require('mongoose');

// importing file
const peopleSchema = require('../schemas/peopleSchema');

const People = new mongoose.model('People', peopleSchema);

module.exports = People;
