import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic login validation: check if username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true); // Set isLoggedIn state to true for successful login
    } else {
      alert('Please enter both username and password.'); // Show an alert for failed login (for demonstration)
    }

    // Clear username and password fields after login attempt
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleLogin}>
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

      {isLoggedIn && (
        <p className="success-message">Login successful!</p>
      )}
    </div>
  );
}

export default App;
