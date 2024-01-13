const mongoose = require('mongoose');

// Define the schema for a post
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // Add other fields as necessary
});

// Create a model from the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;