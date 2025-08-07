
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../src/App'; // the layout with <Outlet />
import HomePage from '../src/pages/HomePage';
import Reels from '../src/pages/Reels'; // correct
import Services from '../src/pages/Services'; // correct
import About from '../src/pages/About'; // correct
import Booking from '../src/pages/Booking'; // correct
import NotFound from '../src/pages/NotFound'; // correct

import { createRoot } from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="reels" element={<Reels />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
    </BrowserRouter>
</StrictMode>
);


