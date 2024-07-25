import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addUser, isUsernameTaken } from './users'; // Import addUser and isUsernameTaken functions
import './LoginPage.css';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleRegistration = (event) => {
    event.preventDefault();

    // Validation
    if (username.trim().length < 3) {
      setRegistrationStatus('Username must be at least 3 characters long.');
      return;
    }

    if (!password.trim() || !confirmPassword.trim()) {
      setRegistrationStatus('Please fill out all password fields.');
      return;
    }

    if (password !== confirmPassword) {
      setRegistrationStatus('Passwords do not match. Please try again.');
      return;
    }

    // Check if the username already exists
    const usernameTaken = isUsernameTaken(username);

    if (usernameTaken) {
      setRegistrationStatus('Username already exists. Please choose a different one.');
      return;
    }

    // Add new user to the users array
    addUser(username, password);

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









