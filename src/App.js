// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import users from './users'; // Import the user data
import RegistrationPage from './RegistrationPage'; // Import the RegistrationPage component

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // State to manage login form visibility

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if the entered username and password match any user in the list
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      setIsLoggedIn(true); // Set isLoggedIn state to true for successful login
      setShowLogin(false); // Hide login form upon successful login
    } else {
      alert('Invalid username or password. Please try again.'); // Show an alert for failed login (for demonstration)
    }

    // Clear username and password fields after login attempt
    setUsername('');
    setPassword('');
  };

  return (
    <Router>
      <div className="container">
        {/* Conditional rendering of login form */}
        {showLogin && !isLoggedIn && (
          <>
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
            {/* Button to navigate to RegistrationPage */}
            <Link to="/register">
              <button>Register Here</button>
            </Link>
          </>
        )}

        {/* Display successful login message if isLoggedIn is true */}
        {isLoggedIn && (
          <p className="success-message">Login successful!</p>
        )}

        {/* Routes for different pages */}
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
















