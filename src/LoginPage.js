import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { users } from './users'; // Import users array correctly
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Use useNavigate to handle redirection

  const handleLogin = (event) => {
    event.preventDefault();

    // Find the user with the provided username and password
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      // Clear form fields
      setUsername('');
      setPassword('');
      setLoginError('');

      // Redirect to the dashboard with user's first name
      navigate(`/dashboard?firstName=${encodeURIComponent(user.firstName)}`);
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default LoginPage;




