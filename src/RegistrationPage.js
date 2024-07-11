// RegistrationPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import users from './users'; // Import the user data
import './LoginPage.css'

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleRegistration = (event) => {
    event.preventDefault();

    // Validation
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      setRegistrationStatus('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setRegistrationStatus('Passwords do not match. Please try again.');
      return;
    }

    // Check if the username already exists
    const isExistingUser = users.some(user => user.username === username);

    if (isExistingUser) {
      setRegistrationStatus('Username already exists. Please choose a different one.');
      return;
    }

    // Add new user to the users array (for demonstration; in a real app, you'd use a server or database)
    const newUser = { username, password };
    users.push(newUser);

    // Clear form fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');

    // Update registration status
    setRegistrationStatus('Registration successful!');
  };

  return (
    <div className="container">
      <h1>Registration Page</h1>
      <form onSubmit={handleRegistration}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
      {registrationStatus && <p>{registrationStatus}</p>}
      <div className="centered-container">
        <Link to="/" className="return-button">
          <button>Return to Login</button>
        </Link>
      </div>
    </div>
  );
}

export default RegistrationPage;

