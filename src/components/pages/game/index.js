import React from 'react';
import './index.css';
import Loader from '../../../assets/loader.svg';
import Header from './../../header';
import GameImage from '../../../assets/mkbackground.jpeg';
import { useParams } from 'react-router-dom';

const Game = () => {
  const { time, characters } = useParams();
  console.log(`time: ${time}Minutes, characters: ${characters}`);

  return (
    <div className="game">
      <Header start />
      <img className="background" src={GameImage} alt="" />
      {/* {Loader} */}
    </div>
  );
};

export default Game;
