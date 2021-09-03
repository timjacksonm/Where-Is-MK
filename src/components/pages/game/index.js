import React from 'react';
import './index.css';
import Loader from '../../../assets/loader.svg';
import Header from './../../header';
import GameImage from '../../../assets/mkbackground.jpeg';

const Game = () => {
  return (
    <div className="game">
      <Header start />
      <img className="background" src={GameImage} alt="" />
      {/* {Loader} */}
    </div>
  );
};

export default Game;
