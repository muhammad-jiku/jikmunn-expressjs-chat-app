// dependencies
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

// router setup
const router = express.Router();

// Signing  up
// using async await and try-catch method to get the returned promise
router.post('/sign-up', async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(200).json({
      message: 'Signing up new user successfully!!',
      data: savedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
});

module.exports = router;
