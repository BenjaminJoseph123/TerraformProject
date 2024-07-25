const express = require('express');
const { addUser } = require('./users');

const app = express();
app.use(express.json()); // Required to parse JSON body

// POST endpoint for registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  // Add user to the users list
  addUser(username, password);

  res.status(200).json({ message: 'User registered successfully.' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});