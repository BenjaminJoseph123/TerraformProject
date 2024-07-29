import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstName');

  return (
    <div className="container">
      <h1>Hey, {firstName}!</h1>
      <p>Welcome to your dashboard.</p>
    </div>
  );
}

export default Dashboard;
