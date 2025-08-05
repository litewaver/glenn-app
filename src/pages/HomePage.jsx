
import BookingForm from '../src/components/BookingForm'; //correct
import NavBar from '../src/components/NavBar'; // correct
import HomePage from '../src/pages/HomePage'; //correct 
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker styles


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


export default HomePage;
