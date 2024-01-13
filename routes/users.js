const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password // Remember to hash passwords in a real-world app
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add other user-related routes (e.g., login, profile update) here...

module.exports = router;