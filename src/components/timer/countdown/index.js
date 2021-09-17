import React, { useState, useEffect } from 'react';
import { toDate, format, differenceInMilliseconds, addMinutes } from 'date-fns';

const Countdown = ({ start, stop, setStopGame, duration }) => {
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState();

  useEffect(() => {
    //once image is loaded set startTime which is used to measure time elasped
    if (start) {
      setStartTime(toDate(addMinutes(new Date(), duration)));
    }
  }, [start, duration]);

  useEffect(() => {
    //timer functionality - counts down from startTime + minutes added
    let interval;
    if (start && !stop) {
      interval = setInterval(() => {
        setTimeElapsed(
          format(differenceInMilliseconds(startTime, new Date()), 'mm:ss:SS')
        );
      }, 1);
    }
    if (startTime && timeElapsed === '00:00:00') {
      clearInterval(interval);
      setStopGame(true);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, stop, setStopGame, startTime, timeElapsed]);

  return <div>{timeElapsed ? timeElapsed : '00:00:00'}</div>;
};

export default Countdown;
