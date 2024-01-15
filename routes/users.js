const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post'); // Import the Post model

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

// Route to get all posts by a specific user
router.get('/:userId/posts', async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add other user-related routes (e.g., login, profile update) here...

module.exports = router;