import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import NavBar from './NavBar.jsx'
import './index.css'
import './App.css'
import BookingForm from './BookingForm.jsx'
import Biography from "./Biography";
import FadeInText from './FadeInText.jsx'

// Main App component
function App() {
  return (
<div>
  <NavBar/>
  <Biography/>
  <BookingForm/>
</div>
);
}

export default App;
