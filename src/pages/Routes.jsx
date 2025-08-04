    // src/App.js
    import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Home from './pages/Home'; // Assuming you have a Home page
    import About from './pages/Services';

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* Add more routes for other pages */}
          </Routes>
        </BrowserRouter>
      );
    }

    export default App;