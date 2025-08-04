    import React from 'react';

    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Home from './pages/Home'; // Assuming you have a Home page   
    import Services from './pages/Services'; // Assuming you have a Services page
    import About from './pages/About'; // Assuming you have an About page
    import Booking from './pages/Booking'; // Assuming you have a Booking page
    import NavBar from './components/NavBar'; // Importing NavBar component
    import './App.css'; // Importing global styles
    import './index.css'; // Importing index styles

    
    function About() {
      return (
        <div>
          <h1>About Us</h1>
          <p>This is the about page content.</p>
        </div>
      );
    }

    export default About;