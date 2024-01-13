const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your schema fields here
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Compile model from schema
const User = mongoose.model('User', userSchema);

module.exports = User;