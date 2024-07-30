import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Dashboard.css'; // Ensure styles are correctly applied

// Import images
import ZagIcon from './ZagIcon.png'; // Path to the Hades icon
import MelIcon from './MelIcon.png'; // Path to the Hades 2 icon

function Dashboard() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstName');

  // State for controlling popup visibility
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="container">
      <h1>Hey, {firstName}!</h1>
      <p>Welcome to your dashboard.</p>
      
      <button onClick={() => setShowPopup(true)}>Hades Tracker</button>
      
      {showPopup && (
        <div className="popup">
          <h2>Select a Game</h2>
          <div className="popup-button-group">
            <Link to="/zag-planner" className="popup-button-link">
              <button className="popup-button">
                Hades
                <img src={ZagIcon} alt="Hades Icon" className="popup-image" />
              </button>
            </Link>
            <Link to="/mel-planner" className="popup-button-link">
              <button className="popup-button">
                Hades 2
                <img src={MelIcon} alt="Hades 2 Icon" className="popup-image" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;



