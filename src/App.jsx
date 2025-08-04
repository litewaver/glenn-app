import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/NavBar.jsx';
import Biography from './components/Biography.jsx';
import BookingForm from './components/BookingForm.jsx';
import FadeInText from './components/FadeInText.jsx';
import HomePage from '../src/HomePage.jsx';
import { createRoot } from 'react-dom/client'
import './App.css'
import NavBar from './components/NavBar.jsx'
import '../src/index.css'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/fade-in-text" element={<FadeInText />} />
          <Route path="/logo" element={<Logo />} />
            {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
