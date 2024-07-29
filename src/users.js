let users = [];

// Load users data from localStorage on module load
const loadData = () => {
  try {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      users = JSON.parse(usersData);
    } else {
      users = [];
    }
  } catch (error) {
    console.error('Error loading users data:', error);
    users = [];
  }
};

// Function to save users data to localStorage
const saveData = () => {
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users data:', error);
  }
};

// Function to add a new user
const addUser = (firstName, lastName, username, password) => {
  const newUser = { firstName, lastName, username, password };
  users.push(newUser);
  saveData(); // Save updated users data to localStorage
};

// Function to check if a username already exists
const isUsernameTaken = (username) => {
  return users.some(user => user.username === username);
};

// Load initial users data on module load
loadData();

export { users, addUser, isUsernameTaken };



  