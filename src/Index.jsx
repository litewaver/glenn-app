// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'; // the layout with <Outlet />
import HomePage from './pages/HomePage';
import Reels from './pages/Reels';
import Services from './pages/Services';
import About from './pages/About';
import BookingForm from './components/BookingForm';
import NotFound from './components/NotFound'; // optional 404
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
