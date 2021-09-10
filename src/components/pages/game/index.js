import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { ReactComponent as Loader } from '../../../assets/loader.svg';
import Header from './../../header';
import GameImage from '../../../assets/mkbackground.jpeg';
import { useParams } from 'react-router-dom';
import Choices from '../../choices';
import MasterList from '../../../data/characters';

const Game = () => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  const { time, characters } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [background, setBackground] = useState();
  const [mouseXY, setMouseXY] = useState(false);
  const [charactersToFind, setCharactersToFind] = useState(() => {
    const array = [];
    const length = Number(characters) || 79;
    for (let i = 0; array.length !== length; i++) {
      const value = getRandomIntInclusive(1, 79);
      if (!array.some((item) => item === value)) {
        array.push(value);
      }
    }
    return array.map((number) =>
      MasterList.find((object) => object.id === number)
    );
  });
  const imgRef = useRef();

  const handleClick = (e) => {
    if (
      imgRef.current.offsetWidth - e.pageX < 350 &&
      imgRef.current.offsetHeight - e.pageY > 200
    ) {
      setMouseXY({
        modalX: e.pageX - 375,
        modalY: e.pageY + 25,
        targetX: e.pageX - 25,
        targetY: e.pageY - 25,
      });
    } else if (
      imgRef.current.offsetHeight - e.pageY < 200 &&
      imgRef.current.offsetWidth - e.pageX > 350
    ) {
      setMouseXY({
        modalX: e.pageX + 25,
        modalY: e.pageY - 230,
        targetX: e.pageX - 25,
        targetY: e.pageY - 25,
      });
    } else if (
      imgRef.current.offsetWidth - e.pageX < 350 &&
      imgRef.current.offsetHeight - e.pageY < 200
    ) {
      setMouseXY({
        modalX: e.pageX - 375,
        modalY: e.pageY - 230,
        targetX: e.pageX - 25,
        targetY: e.pageY - 25,
      });
    } else {
      setMouseXY({
        modalX: e.pageX + 30,
        modalY: e.pageY + 25,
        targetX: e.pageX - 25,
        targetY: e.pageY - 25,
      });
    }
  };

  useEffect(() => {
    (async function loadImage() {
      const image = new Image();
      image.src = GameImage;
      await image.decode();
      setBackground(image.src);
      setLoaded(true);
    })();
  }, []);
  return (
    <div className="game">
      <Header start />
      <Loader
        className="loader"
        style={!loaded ? { display: 'block' } : { display: 'none' }}
      />
      <img
        ref={imgRef}
        className="background"
        src={background}
        alt="Mortal Kombat Seek And Find Artwork"
        style={loaded ? { display: 'block' } : { display: 'none' }}
        onClick={handleClick}
      />
      {mouseXY && (
        <Choices charactersToFind={charactersToFind} mouseXY={mouseXY} />
      )}
    </div>
  );
};

export default Game;
