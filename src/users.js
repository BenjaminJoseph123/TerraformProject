// users.js

let users = [
  { username: 'benji', password: 'joseph' },
  { username: 'jeff', password: 'jijy' },
  { username: 'alice', password: 'li' },
];

const addUser = (username, password) => {
  const newUser = { username, password };
  users.push(newUser);
};

export { users, addUser };

  