import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isUsernameTaken } from './users'; // Import the isUsernameTaken function
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if the username exists and password matches
    const userExists = isUsernameTaken(username);
    const isValidUser = userExists && users.some(user => user.username === username && user.password === password);

    if (isValidUser) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }

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
          <div className="centered-container">
            <Link to="/register">
              <button>Register Here</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default LoginPage;



