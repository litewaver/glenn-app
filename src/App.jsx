import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Reels from '../src/pages/Reels'; // correct
import Services from '../src/pages/Services'; // correct
import About from '../src/pages/About'; //correct
import BookingForm from '../src/components/BookingForm'; //correct
import NavBar from '../src/components/NavBar'; // correct
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker styles




function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/nav" element={<NavBar />} /> 
        </Routes>
      </main>
    </Router>
  );
}

export default App;
