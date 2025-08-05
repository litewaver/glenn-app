import Biography from '../components/Biography';
import FadeInText from '../components/FadeInText';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      
      <Biography />
      <FadeInText 
        text="Welcome to Glenn Coco's Official Site!" 
        delay={1000} 
      />
    </>
  );
};

export default HomePage;


