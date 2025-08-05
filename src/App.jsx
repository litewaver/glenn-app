
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker styles
import { Outlet, Link } from 'react-router-dom';
import Biography from '../src/components/Biography';
import NavBar from '../src/components/NavBar'; // correct
import FadeInText from './components/FadeInText';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/reels">Reels</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/booking">Booking</NavLink>
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
