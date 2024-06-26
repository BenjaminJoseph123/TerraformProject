import React, { useEffect } from 'react';
import './App.css';

// Import audio files for piano notes (adjust paths as per your project structure)
import cNote from './sounds/piano_C.mp3';
import dNote from './sounds/piano_D.mp3';
import eNote from './sounds/piano_E.mp3';
import fNote from './sounds/piano_F.mp3';
import gNote from './sounds/piano_G.mp3';
import aNote from './sounds/piano_A.mp3';
import bNote from './sounds/piano_B.mp3';

function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key.toLowerCase()) {
        case 'a':
          playSound(cNote);
          break;
        case 's':
          playSound(dNote);
          break;
        case 'd':
          playSound(eNote);
          break;
        case 'f':
          playSound(fNote);
          break;
        case 'g':
          playSound(gNote);
          break;
        case 'h':
          playSound(aNote);
          break;
        case 'j':
          playSound(bNote);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Press A - J for piano notes (one octave)</p>
      </header>
      <div className="piano-keys">
        <div className="piano-key" onClick={() => playSound(cNote)}>C</div>
        <div className="piano-key" onClick={() => playSound(dNote)}>D</div>
        <div className="piano-key" onClick={() => playSound(eNote)}>E</div>
        <div className="piano-key" onClick={() => playSound(fNote)}>F</div>
        <div className="piano-key" onClick={() => playSound(gNote)}>G</div>
        <div className="piano-key" onClick={() => playSound(aNote)}>A</div>
        <div className="piano-key" onClick={() => playSound(bNote)}>B</div>
      </div>
    </div>
  );
}

export default App;










