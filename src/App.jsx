import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Biography from './components/Biography';
import FadeInText from './components/FadeInText'; 


const App = () => {
  return (
    <>
      <Home />
      <About />
      <Contact />
      <NavBar />
      <Biography />
      <FadeInText text="Welcome to Glenn Coco's Official Site!" delay={1000} />
      




    </>
  );
};



    /*    <NavBar />
        <Biography />
        <FadeInText text="Welcome to Glenn Coco's Offical Site!" delay={1000} />

*/
