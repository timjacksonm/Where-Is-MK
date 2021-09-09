import React, { useState, useEffect } from 'react';
import './index.css';
import { ReactComponent as Loader } from '../../../assets/loader.svg';
import Header from './../../header';
import GameImage from '../../../assets/mkbackground.jpeg';
import { useParams } from 'react-router-dom';

const Game = () => {
  const [loaded, setLoaded] = useState(false);
  const [background, setBackground] = useState();
  const { time, characters } = useParams();

  const loadImage = async () => {
    const image = new Image();
    image.src = GameImage;
    await image.decode();
    setBackground(image.src);
    setLoaded(true);
  };

  useEffect(() => {
    loadImage();
  }, []);
  return (
    <div className="game">
      <Header start />
      <Loader
        className="loader"
        style={!loaded ? { display: 'block' } : { display: 'none' }}
      />
      <img
        className="background"
        src={background}
        alt="Mortal Kombat Seek And Find Artwork"
        style={loaded ? { display: 'block' } : { display: 'none' }}
      />
    </div>
  );
};

export default Game;
