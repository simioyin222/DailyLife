const mongoose = require('mongoose');

// Define the schema for a user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // Specifies that each username must be unique
  },
  email: {
    type: String,
    required: true,
    unique: true // Email should also be unique
  },
  password: {
    type: String,
    required: true
  }
  // You can add more fields like dateCreated, profilePicture, etc.
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;