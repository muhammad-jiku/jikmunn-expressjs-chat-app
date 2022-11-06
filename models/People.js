// external imports
const mongoose = require('mongoose');

// internal imports
const peopleSchema = require('../schemas/peopleSchema');

const People = new mongoose.model('People', peopleSchema);

module.exports = People;
