import Biography from './Biography';
import FadeInText from './FadeInText';
import '../src/index.css';
import App from '../src/App';

const HomePage = () => {
  return (
    <>
      <Biography />
    <FadeInText text="Welcome to Glenn Coco's Offical Site!" delay={1000} />



    </>
  );
};

export default HomePage;


