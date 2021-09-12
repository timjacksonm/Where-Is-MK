import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { ReactComponent as Loader } from '../../../assets/loader.svg';
import Header from './../../header';
import GameImage from '../../../assets/mkbackground.jpeg';
import { useParams } from 'react-router-dom';
import Choices from '../../choices';
import { getRandomCharacters, useCharacters } from '../../../globalHelpers';

const Game = () => {
  const { time, amountToFind } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [background, setBackground] = useState();
  const [mouseXY, setMouseXY] = useState(false);
  const [alertText, setAlertText] = useState(false);
  const charactersToFind = useCharacters(
    getRandomCharacters(amountToFind, 1, 79)
  );

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
      <div>
        {alertText && <h1>{alertText}</h1>}
        <img
          ref={imgRef}
          className="background"
          src={background}
          alt="Mortal Kombat Seek And Find Artwork"
          style={loaded ? { display: 'block' } : { display: 'none' }}
          onClick={handleClick}
        />
      </div>
      {mouseXY && (
        <Choices
          charactersToFind={charactersToFind}
          mouseXY={mouseXY}
          setMouseXY={setMouseXY}
          setAlertText={setAlertText}
        />
      )}
    </div>
  );
};

export default Game;
