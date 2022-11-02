// dependencies
const express = require('express');
const { check } = require('express-validator');

// importing files
const { getUsers } = require('../controllers/userController');
const decorateHtmlResHandler = require('../middlewares/common/decorateHtmlResHandler');
const avatarUpload = require('../middlewares/users/avatarUpload');

// defining router
const router = express.Router();

// sign in page
router.get('/', decorateHtmlResHandler('Users'), getUsers);

// add user's avatar
router.post('/', avatarUpload, [
  check('name').isLength({ min: 1 }).withMessage('Name is required!!'),
  check('email').isEmail().withMessage('Invalid email!!'),
]);

module.exports = router;
