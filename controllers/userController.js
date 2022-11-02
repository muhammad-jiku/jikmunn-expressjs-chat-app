// dependencies
const bcrypt = require('bcrypt');

// importing files
const People = require('../models/People');

// get users page
const getUsers = async (req, res, next) => {
  try {
    const users = await People.find();
    res.render('users', {
      users: users,
    });
  } catch (err) {
    next(err);
  }
};

// add user
const addUser = async (req, res, next) => {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (req.files && req.files.length > 0) {
    newUser = new People({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new People({
      ...req.body,
      password: hashedPassword,
    });
  }

  // save user or send error
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: 'User was added successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: 'Unknown error occured!',
        },
      },
    });
  }
};

module.exports = {
  getUsers,
  addUser,
};
