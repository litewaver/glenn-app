import React from 'react'
import { createRoot } from 'react-dom/client'
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from '../src/components/NavBar.jsx';
import Biography from '../src/components/Biography.jsx';
import './index.css'
import './App.css'
import BookingForm from './components/BookingForm.jsx'
import Biography from "./components/Biography.jsx";
import FadeInText from './components/FadeInText.jsx'

// Main App component
function HomePage() {
  return (
<div>
  <NavBar/>
  <Biography/>
  <BookingForm/>
</div>
);
}


export default App;
