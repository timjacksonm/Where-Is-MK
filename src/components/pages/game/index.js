import React, { useState, useEffect, useRef, createContext } from 'react';
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
import SubmitScoreForm from '../../submitscoreform';
export const GameStateContext = createContext();

const Game = () => {
  const { timeLimit, amountToFind } = useParams();
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState();
  const [positionXY, setPositionXY] = useState(false);
  const [alertText, setAlertText] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [stopGame, setStopGame] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const charactersToFind = useCharacters(
    getRandomCharacters(amountToFind, 1, 79)
  );

  const imgRef = useRef();

  const handleClick = (e) => {
    const headerHeight = 112;
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

  const redirectToLeaderboard = () => {
    setTimeout(() => {
      setAlertText({
        string: 'Redirecting to Leaderboard...',
        bgColor: '#006400',
      });
    }, 1000);
    setTimeout(() => {
      window.location.replace(
        `#/leaderboards/${timeLimit}/${amountToFind}/${time}`
      );
    }, 5000);
  };

  useEffect(() => {
    if (charactersToFind.characters.length === 0) {
      setStopGame(true);
    }
  }, [charactersToFind]);

  useEffect(() => {
    if (stopGame) {
      if (charactersToFind.characters.length === 0) {
        setTimeout(() => {
          setAlertText({
            string: 'Challenge Completed',
            bgColor: '#006400',
          });
        }, 2000);
        setOpenForm(true);
      } else {
        setTimeout(() => {
          setAlertText({
            string: 'Challenge incomplete',
            bgColor: '#ea1a30',
          });
        }, 2000);
        setTimeout(() => {
          setAlertText({
            string: 'Redirecting to Home...',
            bgColor: '#006400',
          });
        }, 4000);
        setTimeout(() => {
          window.location.replace(`#/`);
        }, 8000);
      }
    }
  }, [stopGame, time]);

  useEffect(() => {
    (async function loadImage() {
      const image = new Image();
      image.src = GameImage;
      await image.decode();
      setBackground(image.src);
      setLoading(false);
      setDropdownOpen(true);
    })();
  }, []);
  return (
    <GameStateContext.Provider
      value={{
        loading: loading,
        timeLimit: timeLimit,
        game: {
          stopGame: stopGame,
          setStopGame: (value) => setStopGame(value),
        },
        timer: { time: time, setTime: (value) => setTime(value) },
      }}
    >
      <PageContent>
        <Header
          charactersToFind={charactersToFind}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
        <Loader style={loading ? { display: 'block' } : { display: 'none' }} />
        <MainContent>
          {alertText && (
            <Alert $alertText={alertText}>{alertText.string}</Alert>
          )}
          {openForm && (
            <SubmitScoreForm
              setOpenForm={setOpenForm}
              redirectToLeaderboard={redirectToLeaderboard}
            />
          )}
          <BackgroundImage
            ref={imgRef}
            src={background}
            alt="Mortal Kombat Seek And Find Artwork"
            style={loading ? { display: 'none' } : { display: 'block' }}
            onClick={!stopGame ? handleClick : () => console.log('game ended')}
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
    </GameStateContext.Provider>
  );
};

export default Game;
