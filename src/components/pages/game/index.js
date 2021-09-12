import React, { useState, useEffect, useRef } from 'react';
import './game.css';
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
  const [positionXY, setPositionXY] = useState(false);
  const [alertText, setAlertText] = useState(false);
  const charactersToFind = useCharacters(
    getRandomCharacters(amountToFind, 1, 79)
  );

  const imgRef = useRef();

  const handleClick = (e) => {
    const { pageX, pageY } = e;
    const exactCoords = {
      x: pageX / imgRef.current.offsetWidth,
      y: (pageY - 100) / imgRef.current.offsetHeight,
    };
    const targetPosition = { targetX: e.pageX - 25, targetY: e.pageY - 25 };
    const { availableSpaceX, availableSpaceY } = {
      availableSpaceX: imgRef.current.offsetWidth - pageX,
      availableSpaceY: imgRef.current.offsetHeight - pageY,
    };
    let modalPosition = { modalX: e.pageX + 30, modalY: pageY + 25 };
    //modal width:350px, height: 200px
    // availableSpace < width || height ? change choices modal position so it stays visable on page : keep the same
    if (availableSpaceX < 350 && availableSpaceY > 200) {
      modalPosition = {
        modalX: e.pageX - 375,
        modalY: e.pageY + 25,
      };
    }
    if (availableSpaceX > 350 && availableSpaceY < 200) {
      modalPosition = {
        modalX: e.pageX + 25,
        modalY: e.pageY - 230,
      };
    }
    if (availableSpaceX < 350 && availableSpaceY < 200) {
      modalPosition = {
        modalX: e.pageX - 375,
        modalY: e.pageY - 230,
      };
    }
    setPositionXY({
      exactCoords,
      modalPosition,
      targetPosition,
    });
  };

  // useEffect(() => {
  //   window.addEventListener('mousemove', (e) => {
  //     const { pageX, pageY } = e;
  //     const exactCoords = {
  //       x: pageX / imgRef.current.offsetWidth,
  //       y: (pageY - 100) / imgRef.current.offsetHeight,
  //     };
  //     console.log(exactCoords);
  //   });
  // });

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
    <div className="gameScreen">
      <Header start />
      <Loader
        className="loader"
        style={!loaded ? { display: 'block' } : { display: 'none' }}
      />
      <div className="main">
        {alertText && (
          <h1
            className="alertText"
            style={{ backgroundColor: alertText.bgColor }}
          >
            {alertText.string}
          </h1>
        )}
        <img
          ref={imgRef}
          className="background"
          src={background}
          alt="Mortal Kombat Seek And Find Artwork"
          style={loaded ? { display: 'block' } : { display: 'none' }}
          onClick={handleClick}
        />
      </div>
      {positionXY && (
        <Choices
          charactersToFind={charactersToFind}
          positionXY={positionXY}
          setPositionXY={setPositionXY}
          setAlertText={setAlertText}
        />
      )}
    </div>
  );
};

export default Game;
