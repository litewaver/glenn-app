import 'react-datepicker/dist/react-datepicker.css';
import { Outlet, NavLink } from 'react-router-dom';


const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="/reels">Reels</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Booking</NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
         <NavBar />
        <Biography />
         {/* page content will render here */}
      </main>
    </>
  );
};

export default App;



    /*    <NavBar />
        <Biography />
        <FadeInText text="Welcome to Glenn Coco's Offical Site!" delay={1000} />

*/
