// Importing modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Adding support for .env file for better security
require('dotenv').config();

// Importing schema for todo app
const todoSchema = require('./models/todoSchema');

// Creating express app
const app = express();

// Defining port
const PORT = process.env.PORT || 5000;

// Middleware for using cors
app.use(cors());

// Middleware for parsing request with JSON payloads
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_CONNECTION_URI)
.then(() => {
  console.log('Connection established to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Creating model for the todo-database
const Todo = mongoose.model('Todo', todoSchema);

// Starting server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});