const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Temporary in-memory storage; replace with database in production
let users = [];

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register a new user
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Please provide both username and password.' });
  }

  // Check if username already exists
  if (users.some(user => user.username === username)) {
    return res.status(400).json({ error: 'Username already exists. Please choose a different one.' });
  }

  // Add new user to array (for demo purposes)
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).json({ message: 'Registration successful!', user: newUser });
});

// Authenticate a user
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find user in array
  const foundUser = users.find(user => user.username === username && user.password === password);

  if (foundUser) {
    res.status(200).json({ message: 'Login successful!', user: foundUser });
  } else {
    res.status(401).json({ error: 'Invalid username or password. Please try again.' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


