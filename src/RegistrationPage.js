// RegistrationPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './LoginPage.css'

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleRegistration = async (event) => {
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

    try {
      // Make a POST request to backend to register user
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        password
      });

      // Check if registration was successful based on response status
      if (response.status === 201) {
        setRegistrationStatus('Registration successful!');
      } else {
        setRegistrationStatus('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationStatus('Error during registration. Please try again later.');
    }

    // Clear form fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');
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


