// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import users from './users'; // Import the user data

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Find the user in the users array
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      setIsLoggedIn(true); // Set isLoggedIn state to true for successful login
      setLoginError(''); // Clear any previous login error messages
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }

    // Clear username and password fields after login attempt
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <p className="success-message">Login successful!</p>
      ) : (
        <>
          <h1>Login</h1>
          {loginError && <p className="error-message">{loginError}</p>}
          <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
          </form>
          <a href="/register">
            <button>Register Here</button>
          </a>
        </>
      )}
    </div>
  );
}

export default LoginPage;
