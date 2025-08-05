
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker styles

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

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
        {/* nested routes render here */}
        <Outlet />
      </main>

      <footer>© {new Date().getFullYear()} Glenn Coco</footer>
    </div>
  );
};

export default App;
