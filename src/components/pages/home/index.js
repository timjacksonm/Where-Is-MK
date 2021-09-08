import React from 'react';
import './index.css';
import Footer from './../../footer';
import Settings from '../settings';
import Logo from '../../../assets/Mortal-Kombat-logo.png';

const Home = () => {
  return (
    <div className="home">
      <div className="logoContainer">
        <h1>WHERE IS</h1>
        <div className="textImageText">
          <h1>MORTAL</h1>
          <img className="image" src={Logo} alt="Mortal Kombat Dragon Logo" />
          <h1>KOMBAT</h1>
        </div>
        <div>a Seek-and-Find game</div>
      </div>
      <Settings />
      <Footer />
    </div>
  );
};

export default Home;
