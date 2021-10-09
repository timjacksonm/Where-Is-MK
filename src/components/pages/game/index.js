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
import { useCharacters } from '../../../globalHelpers';
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
  const charactersToFind = useCharacters(amountToFind);
  const imgRef = useRef();

  const setTargetAndModalPosition = (e) => {
    const headerHeight = 112;
    const { pageX, pageY } = e;
    const exactCoords = {
      x: pageX / imgRef.current.offsetWidth,
      y: (pageY - headerHeight) / imgRef.current.offsetHeight,
    };
    const targetPosition = { targetX: pageX - 25, targetY: e.pageY - 25 };

    const { availableSpaceX, availableSpaceY } = {
      availableSpaceX: imgRef.current.offsetWidth - pageX,
      availableSpaceY: imgRef.current.offsetHeight - pageY,
    };
    let modalPosition = { modalX: pageX + 30, modalY: pageY + 25 };
    //modalPosition default position set. The position is adjusted if the modal partially appears off screen with the below if statement.
    //modal exact size: width:350px, height:200px
    if (!stopGame) {
      if (availableSpaceX < 350 && availableSpaceY > 200) {
        modalPosition = {
          modalX: pageX - 375,
          modalY: pageY + 25,
        };
      }
      if (availableSpaceX > 350 && availableSpaceY < 200) {
        modalPosition = {
          modalX: pageX + 25,
          modalY: pageY - 230,
        };
      }
      if (availableSpaceX < 350 && availableSpaceY < 200) {
        modalPosition = {
          modalX: pageX - 375,
          modalY: pageY - 230,
        };
      }
      setPositionXY({
        exactCoords,
        modalPosition,
        targetPosition,
      });
    }
  };

  const redirectToLeaderboard = () => {
    setTimeout(() => {
      setAlertText({
        string: 'Redirecting to Leaderboard...',
        bgColor: '#006400',
      });
    }, 1000);
    setTimeout(() => {
      window.location.replace(`#/leaderboards/${timeLimit}/${amountToFind}`);
    }, 5000);
  };

  useEffect(() => {
    if (charactersToFind.characters.length === 0) {
      setDropdownOpen(false);
      setStopGame(true);
    }
  }, [charactersToFind]);

  useEffect(() => {
    if (stopGame && charactersToFind.characters.length === 0) {
      setTimeout(() => {
        setAlertText({
          string: 'Challenge Completed',
          bgColor: '#006400',
        });
      }, 2000);
      setOpenForm(true);
    }
    if (stopGame && charactersToFind.characters.length > 0) {
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
  }, [charactersToFind.characters.length, stopGame, time]);

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
              time={time}
              timeLimit={timeLimit}
              amountToFind={amountToFind}
            />
          )}
          <BackgroundImage
            ref={imgRef}
            src={background}
            alt="Mortal Kombat Seek And Find Artwork"
            style={loading ? { display: 'none' } : { display: 'block' }}
            onClick={setTargetAndModalPosition}
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
