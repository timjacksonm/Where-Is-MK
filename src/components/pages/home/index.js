import React from 'react';
import './index.css';
import Header from './../../header';
import Footer from './../../footer';
import { pictures } from '../../../data/pictures/index.js';

const Home = () => {
  console.log(pictures);
  return (
    <div className="home">
      <Header />
      {pictures.map((image) => {
        return <img src={image} alt="" />;
      })}
      <Footer />
    </div>
  );
};

export default Home;
