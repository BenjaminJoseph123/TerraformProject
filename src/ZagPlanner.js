import React, { useState } from 'react';
import './ZagPlanner.css'; // Import CSS for styling
import ImageOrder from './ImageOrder.json'; // Import metadata file

function ZagPlanner() {
  // Import images from each folder
  const skillsImages = require.context('./ZagSkill', false, /\.webp$/);
  const demBoonsImages = require.context('./DemBoons', false, /\.webp$/);
  const athenaBoonsImages = require.context('./AthenaBoons', false, /\.webp$/);
  const aresBoonsImages = require.context('./AresBoons', false, /\.webp$/);
  const zeusBoonsImages = require.context('./ZeusBoons', false, /\.webp$/);
  const artemisBoonsImages = require.context('./ArtemisBoons', false, /\.webp$/);
  const dioBoonsImages = require.context('./DioBoons', false, /\.webp$/);
  const poseidonBoonsImages = require.context('./PoseidonBoons', false, /\.webp$/);
  const aphroBoonsImages = require.context('./AphroBoons', false, /\.webp$/); // Import AphroBoons images

  const zagDadImage = require('./ZagSkill/ZagDad.webp'); // Import ZagDad image

  // Define state for highlighted image
  const [highlightedImage, setHighlightedImage] = useState(null);

  // Order images
  const orderedSkillsImages = (ImageOrder.ZagSkill || []).map(filename => skillsImages(`./${filename}`));
  const orderedDemBoonsImages = (ImageOrder.DemBoons || []).map(filename => demBoonsImages(`./${filename}`));
  const orderedAthenaBoonsImages = (ImageOrder.AthenaBoons || []).map(filename => athenaBoonsImages(`./${filename}`));
  const orderedAresBoonsImages = (ImageOrder.AresBoons || []).map(filename => aresBoonsImages(`./${filename}`));
  const orderedZeusBoonsImages = (ImageOrder.ZeusBoons || []).map(filename => zeusBoonsImages(`./${filename}`));
  const orderedArtemisBoonsImages = (ImageOrder.ArtemisBoons || []).map(filename => artemisBoonsImages(`./${filename}`));
  const orderedDioBoonsImages = (ImageOrder.DioBoons || []).map(filename => dioBoonsImages(`./${filename}`));
  const orderedPoseidonBoonsImages = (ImageOrder.PoseidonBoons || []).map(filename => poseidonBoonsImages(`./${filename}`));
  const orderedAphroBoonsImages = (ImageOrder.AphroBoons || []).map(filename => aphroBoonsImages(`./${filename}`)); // Order AphroBoons images

  const boonDependencies = {
    DemBoons: {
      'Demeter_symbol.webp': ["Frozen_Touch_I.webp"],
      "Frozen_Touch_I.webp": [],
    },
    // Define other boon dependencies similarly
  };

  // Initialize the state for all boon types
  const [unlockedBoons, setUnlockedBoons] = useState({
    DemBoons: ['Demeter_symbol.webp'],
    AthenaBoons: ['boon1'],
    AresBoons: [],
    ZeusBoons: [],
    ArtemisBoons: [],
    DioBoons: [],
    PoseidonBoons: [],
    AphroBoons: [], // Initialize AphroBoons state
  });

  const handleImageClick = (boonType, boonName) => {
    if (highlightedImage === boonName) {
      setHighlightedImage(null); // Unhighlight if the same image is clicked
      return;
    }

    const currentUnlocked = unlockedBoons[boonType] || [];
    if (currentUnlocked.includes(boonName)) {
      setUnlockedBoons(prevState => ({
        ...prevState,
        [boonType]: prevState[boonType].filter(b => b !== boonName)
      }));
    } else {
      const newUnlockedBoons = [...currentUnlocked, boonName];
      const dependencies = boonDependencies[boonType]?.[boonName] || [];
      dependencies.forEach(dep => {
        if (!newUnlockedBoons.includes(dep)) {
          newUnlockedBoons.push(dep);
        }
      });

      setUnlockedBoons(prevState => ({
        ...prevState,
        [boonType]: newUnlockedBoons
      }));
    }
    setHighlightedImage(boonName); // Set the highlighted image
  };

  return (
    <div className="zag-planner-container">
      <h1>ZagPlanner</h1>
      <div className="image-grid-container">
        <div className="image-grid">
          {/* Render images for each column */}
          {orderedSkillsImages.map((image, index) => (
            <div key={`skill-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 1 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.ZagSkill[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('ZagSkill', ImageOrder.ZagSkill[index])}
              >
                <img
                  src={image}
                  alt={`ZagSkill ${index}`}
                  className="zag-image"
                />
              </button>
            </div>
          ))}

          {orderedDemBoonsImages.map((image, index) => (
            <div key={`dem-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 2 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.DemBoons[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('DemBoons', ImageOrder.DemBoons[index])}
              >
                <img
                  src={unlockedBoons.DemBoons.includes(ImageOrder.DemBoons[index]) ? image : zagDadImage}
                  alt={`DemBoons ${index}`}
                  className="zag-image"
                  onError={(e) => {
                    console.error(`Failed to load image: ${ImageOrder.DemBoons[index]}`);
                    e.target.src = zagDadImage; // Fallback to ZagDad image on error
                  }}
                />
              </button>
            </div>
          ))}

          {orderedAthenaBoonsImages.map((image, index) => (
            <div key={`athena-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 3 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.AthenaBoons[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('AthenaBoons', ImageOrder.AthenaBoons[index])}
              >
                <img
                  src={image}
                  alt={`AthenaBoons ${index}`}
                  className="zag-image"
                />
              </button>
            </div>
          ))}

          {orderedAresBoonsImages.map((image, index) => (
            <div key={`ares-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 4 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.AresBoons[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('AresBoons', ImageOrder.AresBoons[index])}
              >
                <img
                  src={image}
                  alt={`AresBoons ${index}`}
                  className="zag-image"
                />
              </button>
            </div>
          ))}

          {orderedZeusBoonsImages.map((image, index) => (
            <div key={`zeus-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 5 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.ZeusBoons[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('ZeusBoons', ImageOrder.ZeusBoons[index])}
              >
                <img
                  src={image}
                  alt={`ZeusBoons ${index}`}
                  className="zag-image"
                />
              </button>
            </div>
          ))}

          {orderedArtemisBoonsImages.map((image, index) => (
            <div key={`artemis-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 6 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.ArtemisBoons[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('ArtemisBoons', ImageOrder.ArtemisBoons[index])}
              >
                <img
                  src={image}
                  alt={`ArtemisBoons ${index}`}
                  className="zag-image"
                />
              </button>
            </div>
          ))}

          {orderedDioBoonsImages.map((image, index) => (
            <div key={`dio-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 7 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.DioBoons[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('DioBoons', ImageOrder.DioBoons[index])}
              >
                <img
                  src={image}
                  alt={`DioBoons ${index}`}
                  className="zag-image"
                />
              </button>
            </div>
          ))}

          {orderedPoseidonBoonsImages.map((image, index) => (
            <div key={`poseidon-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 8 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.PoseidonBoons[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('PoseidonBoons', ImageOrder.PoseidonBoons[index])}
              >
                <img
                  src={image}
                  alt={`PoseidonBoons ${index}`}
                  className="zag-image"
                />
              </button>
            </div>
          ))}

          {orderedAphroBoonsImages.map((image, index) => (
            <div key={`aphro-${index}`} className="image-container" style={{ gridRow: index + 1, gridColumn: 9 }}>
              <button
                className={`image-button ${highlightedImage === ImageOrder.AphroBoons[index] ? 'highlighted' : ''}`}
                onClick={() => handleImageClick('AphroBoons', ImageOrder.AphroBoons[index])}
              >
                <img
                  src={image}
                  alt={`AphroBoons ${index}`}
                  className="zag-image"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ZagPlanner;


