import React from 'react';
import HomePage from './components/HomePage';
import About from './components/About';

import Biography from './components/Biography';
import FadeInText from './components/FadeInText'; 


const App = () => {
  return (
    <>
      <HomePage />
      <About />
  
      <Biography />
      <FadeInText text="Welcome to Glenn Coco's Official Site!" delay={1000} />





    </>
  );
};

export default App;

    /*    <NavBar />
        <Biography />
        <FadeInText text="Welcome to Glenn Coco's Offical Site!" delay={1000} />

*/
