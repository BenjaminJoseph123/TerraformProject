// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import Dashboard from './Dashboard'; // Import the new Dashboard component
import ZagPlanner from './ZagPlanner'; // Import ZagPlanner component
import MelPlanner from './MelPlanner'; // Import MelPlanner component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add this route */}
        <Route path="/zag-planner" element={<ZagPlanner />} /> {/* New route for ZagPlanner */}
        <Route path="/mel-planner" element={<MelPlanner />} /> {/* New route for MelPlanner */}
      </Routes>
    </Router>
  );
}

export default App;

















