// external imports
const express = require('express');
const { check } = require('express-validator');

// internal imports
const {
  getUsers,
  removeUser,
  addUser,
} = require('../controllers/userController');
const { checkSignIn } = require('../middlewares/common/checkSignIn');
const decorateHtmlResHandler = require('../middlewares/common/decorateHtmlResHandler');
const avatarUpload = require('../middlewares/users/avatarUpload');
const {
  addUserValidators,
  addUserValidationHandler,
} = require('../middlewares/users/userValidator');

const router = express.Router();

// set page title
const page_title = 'Users';

// users page
router.get('/', decorateHtmlResHandler(page_title), checkSignIn, getUsers);

// add user
router.post(
  '/',
  checkSignIn,
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// remove user
router.delete('/:id', removeUser);

module.exports = router;
