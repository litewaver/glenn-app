import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import NavBar from './NavBar.jsx'
import './index.css'
import './App.css'
import BookingForm from './BookingForm.jsx'


function App() {
  return (
<div>
  <NavBar/>
  <BookingForm/>
  <Biography/>
</div>
);
}

export default App;
