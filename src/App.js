import React, { useState } from 'react';
import users from './users'; // Import the user data

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonText, setButtonText] = useState('Register Here');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Check if the entered username and password match any user in the list
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      setIsLoggedIn(true); // Set isLoggedIn state to true for successful login
    } else {
      alert('Invalid username or password. Please try again.'); // Show an alert for failed login (for demonstration)
    }

    // Clear username and password fields after login attempt
    setUsername('');
    setPassword('');
  };

  const handleButtonClick = () => {
    setButtonText('Entering Registration'); // Change button text
    setRegistrationStatus('Entering Registration...'); // Update registration status text
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

      {/* Button and registration status */}
      <button onClick={handleButtonClick}>{buttonText}</button>
      <p>{registrationStatus}</p>

      {isLoggedIn && (
        <p className="success-message">Login successful!</p>
      )}
    </div>
  );
}

export default App;








