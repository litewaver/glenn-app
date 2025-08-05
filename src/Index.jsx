// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../src/App'; // the layout with <Outlet />
import HomePage from '../src/pages/HomePage';
import Reels from '../src/pages/Reels'; // correct
import Services from '../src/pages/Services'; // correct
import About from '../src/pages/About'; // correct
import BookingForm from './components/BookingForm';
import BookingForm from '../src/components/Biography'; //

import Biography from '../src/components/Biography';
import NavBar from '../src/components/NavBar'; // correct
import FadeInText from './components/FadeInText';
import NotFound from './pages/NotFound'; // correct

import 'react-datepicker/dist/react-datepicker.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="reels" element={<Reels />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="booking" element={<BookingForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
