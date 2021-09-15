import React from 'react';
import './home.css';
import Footer from './../../footer';
import Settings from './settings';
import Logo from '../../../assets/Mortal-Kombat-logo.png';

const Home = () => {
  return (
    <div className="home">
      <div className="logoContainer">
        <h1>Where is</h1>
        <div className="textImageText">
          <h1>Mortal</h1>
          <img className="image" src={Logo} alt="Mortal Kombat Dragon Logo" />
          <h1>Kombat</h1>
        </div>
        <div>A Seek-And-Find Game</div>
      </div>
      <Settings />
      <Footer />
    </div>
  );
};

export default Home;
