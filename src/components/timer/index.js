import React, { useContext } from 'react';
import { GameStateContext } from '../pages/game';
import { TimerText } from './timer.styles';
import Stopwatch from './stopwatch';
import Countdown from './countdown';

const Timer = () => {
  const gameState = useContext(GameStateContext);
  const { loading, timer, timeLimit } = gameState;
  const { stopGame, setStopGame } = gameState.game;
  //timeLimit can be '5', '10' or 'none'
  //isNaN checks for 'none' ? mount stopwatch : mount countdown
  return (
    <TimerText>
      {isNaN(Number(timeLimit)) ? (
        <Stopwatch start={loading} stop={stopGame} timer={timer} />
      ) : (
        <Countdown
          start={loading}
          stop={stopGame}
          setStopGame={setStopGame}
          duration={timeLimit}
        />
      )}
    </TimerText>
  );
};

export default Timer;
