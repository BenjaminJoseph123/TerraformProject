import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import users from './users'; // Import the user data
import RegistrationPage from './RegistrationPage'; // Import the RegistrationPage component

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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

  return (
    <Router>
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

        {/* Link to Registration Page */}
        <p>No Account?, <Link to="/register">Register Here</Link></p>

        {/* Display message on successful login */}
        {isLoggedIn && (
          <p className="success-message">Login successful!</p>
        )}

        {/* Define routes */}
        <Switch>
          <Route path="/register">
            <RegistrationPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




