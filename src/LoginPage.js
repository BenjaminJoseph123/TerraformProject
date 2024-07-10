// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement login logic here
    setIsLoggedIn(true); // Assuming successful login sets isLoggedIn to true
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <p className="success-message">Login successful!</p>
      ) : (
        <>
          <h1>Login</h1>
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
          <Link to="/register">Register Here</Link>
        </>
      )}
    </div>
  );
}

export default LoginPage;
