import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reels from '../src/pages/Reels'; // correct
import Services from '../src/pages/Services'; // correct
import About from '../src/pages/About'; //correct
import HomePage from '../src/pages/HomePage'; //correct 
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker styles
import BookingForm from '../src/components/BookingForm'; //correct
import NavBar from '../src/components/NavBar'; // correct

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nav" element={<NavBar />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </BrowserRouter>
      );
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
