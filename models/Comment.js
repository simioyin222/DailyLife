const mongoose = require('mongoose');

// Define the schema for a comment
const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
  // You can add a reference to the Post model if needed
});

// Create a model from the schema
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
