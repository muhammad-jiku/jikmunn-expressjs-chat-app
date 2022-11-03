// dependencies
const express = require('express');

// importing files
const {
  getUsers,
  addUser,
  removeUser,
} = require('../controllers/userController');
const decorateHtmlResHandler = require('../middlewares/common/decorateHtmlResHandler');
const avatarUpload = require('../middlewares/users/avatarUpload');
const {
  addUserValidators,
  addUserValidationHandler,
} = require('../middlewares/users/userValidator');

// defining router
const router = express.Router();

// sign in page
router.get('/', decorateHtmlResHandler('Users'), getUsers);

// add user
router.post(
  '/',
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// remove user
router.post('/:id', removeUser);

module.exports = router;
