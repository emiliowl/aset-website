import React from 'react';
import Menu from './common/Menu';
import MainCarousel from './common/MainCarousel';
import About from './common/About';
import Specialties from './common/Specialties';
import Team from './common/Team';
import WhatsApp from './common/WhatsApp';
import Footer from './common/Footer';

import './Home.css';

function Home() {
  return (
    <div className="App">
      <Menu />
      <MainCarousel />
      <About />
      <Specialties />
      <Team />
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default Home;
