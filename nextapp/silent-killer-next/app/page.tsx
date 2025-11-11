import React from 'react';
import HeroSlider from './components/HeroSlider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <Footer />
    </div>
  );
};

export default HomePage;