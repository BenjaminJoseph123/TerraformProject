const express = require('express');
const { addUser } = require('./users');

const app = express();
app.use(express.json()); // Required to parse JSON body

// POST endpoint for registration
app.post('/register', (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  if (!firstName || !lastName || !username || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Add user to the users list
  addUser(firstName, lastName, username, password);

  res.status(200).json({ message: 'User registered successfully.' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
