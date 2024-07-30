import React from 'react';
import './ZagPlanner.css'; // Import CSS for styling

function ZagPlanner() {
  // Dynamically import all .webp images from the 'ZagSkill' folder
  const images = require.context('../ZagSkill', false, /\.webp$/);

  return (
    <div className="zag-planner-container">
      <h1>ZagPlanner</h1>
      <p>Here are some images from the ZagSkill folder:</p>
      <div className="image-row">
        {images.keys().map((imagePath, index) => (
          <img
            key={index}
            src={images(imagePath).default}
            alt={`ZagSkill ${index}`}
            className="zag-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ZagPlanner;
