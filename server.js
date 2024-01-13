require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Middleware for parsing JSON bodies
app.use(express.json());

// Use Routes
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});