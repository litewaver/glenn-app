import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Reels from './pages/Reels'; // Assuming you have a Reels page
import Services from './pages/Services'; // Assuming you have a Services page
import About from './pages/About'; // Assuming you have an About page
import Booking from './pages/Booking'; // Assuming you have a Booking page

import NavBar from './components/NavBar'; // Importing NavBar component
import './App.css'; // Importing global styles
import './index.css'; // Importing index styles
import HomePage from '../src/HomePage.jsx';
import { createRoot } from 'react-dom/client'



function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
            {/* Add more routes as needed */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
