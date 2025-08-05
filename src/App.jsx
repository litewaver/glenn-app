
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker styles
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Biography from '../src/components/Biography';
import NavBar from '../src/components/NavBar'; // correct
import FadeInText from './components/FadeInText';

import App from '../src/App'; // the layout with <Outlet />
import HomePage from '../src/pages/HomePage';
import Reels from '../src/pages/Reels'; // correct
import Services from '../src/pages/Services'; // correct
import About from '../src/pages/About'; // correct
import BookingForm from './components/BookingForm';
import BookingForm from '../src/components/Biography'; //

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/reels">Reels</Link> |{' '}
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/booking">Booking</Link>
      </nav>

      <main>
        <NavBar />
        <Biography />
        <FadeInText text="Welcome to Glenn Coco's Offical Site!" delay={1000} />
        {/* Outlet for nested routes */}  
        <Outlet />
      </main>
      <footer>© {new Date().getFullYear()} Glenn Coco</footer>
    </div>
  );
};

export default App;
