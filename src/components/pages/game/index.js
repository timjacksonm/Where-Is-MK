import React, { useState, useEffect, useRef } from 'react';
import {
  PageContent,
  Loader,
  MainContent,
  Alert,
  BackgroundImage,
} from './game.styles';
import Header from './../../header';
import GameImage from '../../../assets/mkbackground.jpeg';
import { useParams } from 'react-router-dom';
import Choices from '../../choices';
import { getRandomCharacters, useCharacters } from '../../../globalHelpers';

const Game = () => {
  const { time, amountToFind } = useParams();
  const [Loading, setLoading] = useState(false);
  const [background, setBackground] = useState();
  const [positionXY, setPositionXY] = useState(false);
  const [alertText, setAlertText] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const charactersToFind = useCharacters(
    getRandomCharacters(amountToFind, 1, 79)
  );

  const imgRef = useRef();

  const handleClick = (e) => {
    const headerHeight = dropdownOpen ? 292 : 100;
    const { pageX, pageY } = e;
    const exactCoords = {
      x: pageX / imgRef.current.offsetWidth,
      y: (pageY - headerHeight) / imgRef.current.offsetHeight,
    };
    const targetPosition = { targetX: e.pageX - 25, targetY: e.pageY - 25 };
    const { availableSpaceX, availableSpaceY } = {
      availableSpaceX: imgRef.current.offsetWidth - pageX,
      availableSpaceY: imgRef.current.offsetHeight - pageY,
    };
    let modalPosition = { modalX: e.pageX + 30, modalY: pageY + 25 };
    //modal width:350px, height: 200px
    //availableSpace < width || height ? change choices modal position so it stays visable on page : keep the same
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

  useEffect(() => {
    (async function loadImage() {
      const image = new Image();
      image.src = GameImage;
      await image.decode();
      setBackground(image.src);
      setLoading(true);
    })();
  }, []);
  return (
    <PageContent>
      <Header
        charactersToFind={charactersToFind}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        start
      />
      <Loader style={Loading ? { display: 'none' } : { display: 'block' }} />
      <MainContent>
        {alertText && <Alert $alertText={alertText}>{alertText.string}</Alert>}
        <BackgroundImage
          ref={imgRef}
          src={background}
          alt="Mortal Kombat Seek And Find Artwork"
          style={Loading ? { display: 'block' } : { display: 'none' }}
          onClick={handleClick}
        />
      </MainContent>
      {positionXY && (
        <Choices
          charactersToFind={charactersToFind}
          positionXY={positionXY}
          setPositionXY={setPositionXY}
          setAlertText={setAlertText}
        />
      )}
    </PageContent>
  );
};

export default Game;
