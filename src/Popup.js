// src/Popup.js
import React from 'react';
import './Popup.css'; // Optional: CSS for styling

const Popup = ({ imageName, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{imageName}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
