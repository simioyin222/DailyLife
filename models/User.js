const mongoose = require('mongoose');

// Define the schema for a user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // Ensures usernames are unique
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures emails are unique
  },
  password: {
    type: String,
    required: true
  }
  // You can add additional fields as needed
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;