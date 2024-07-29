import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css'; // Make sure to include styles for your components

// Import images
import ZagIcon from './ZagIcon.png'; // Correct path if in the same directory
import MelIcon from './MelIcon.png'; // Correct path if in the same directory

function Dashboard() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstName');

  // State for controlling popup visibility and selection
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');

  // Function to handle game selection
  const handleGameSelection = (game) => {
    setSelectedGame(game);
    setShowPopup(false);
  };

  return (
    <div className="container">
      <h1>Hey, {firstName}!</h1>
      <p>Welcome to your dashboard.</p>
      
      <button onClick={() => setShowPopup(true)}>Hades Tracker</button>
      
      {showPopup && (
        <div className="popup">
          <h2>Select a Game</h2>
          <button onClick={() => handleGameSelection('Hades')}>Hades</button>
          <button onClick={() => handleGameSelection('Hades 2')}>Hades 2</button>
        </div>
      )}

      {selectedGame === 'Hades' && (
        <div className="image-container">
          <h3>Hades</h3>
          <img src={ZagIcon} alt="Hades Icon" />
        </div>
      )}

      {selectedGame === 'Hades 2' && (
        <div className="image-container">
          <h3>Hades 2</h3>
          <img src={MelIcon} alt="Hades 2 Icon" />
        </div>
      )}
    </div>
  );
}

export default Dashboard;

