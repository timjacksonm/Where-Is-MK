import React, { useState, useEffect, useContext } from 'react';
import { GameStateContext } from '../pages/game';
import { TimerText } from './timer.styles';
import Stopwatch from './stopwatch';
import Countdown from './countdown';

const Timer = ({ time, setTime, characters }) => {
  const [allFound, setAllFound] = useState(false);
  const gameState = useContext(GameStateContext);
  const { loading, remaining, timer, timeLimit } = gameState;

  useEffect(() => {
    if (remaining.characters.length === 0) {
      setAllFound(true);
    }
  }, [remaining]);

  return (
    <TimerText>
      {isNaN(Number(timeLimit)) ? (
        <Stopwatch start={loading} stop={allFound} timer={timer} />
      ) : (
        <Countdown start={loading} timer={timer} />
      )}
    </TimerText>
  );
};

export default Timer;
