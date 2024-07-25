const fs = require('fs');
const path = require('path');

let users = [];

// Load users data from file on module load
const loadData = () => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, 'users.json'));
    users = JSON.parse(data);
  } catch (error) {
    console.error('Error reading users data:', error);
    users = [];
  }
};

// Function to save users data to file
const saveData = () => {
  try {
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync(path.resolve(__dirname, 'users.json'), data);
  } catch (error) {
    console.error('Error saving users data:', error);
  }
};

// Function to add a new user
const addUser = (username, password) => {
  const newUser = { username, password };
  users.push(newUser);
  saveData(); // Save updated users data to file
};

// Load initial users data on module load
loadData();

module.exports = { users, addUser };


  