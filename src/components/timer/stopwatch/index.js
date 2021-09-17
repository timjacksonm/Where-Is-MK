import React, { useState, useEffect } from 'react';
import { toDate, format, differenceInMilliseconds } from 'date-fns';

const Stopwatch = ({ start, stop, timer }) => {
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState('00:00:00');

  useEffect(() => {
    //once image is loaded set startTime which is used to measure time elasped
    if (start) {
      setStartTime(toDate(new Date()));
    }
  }, [start]);

  useEffect(() => {
    //once all characters have been found. setState from parent with current formatted time
    if (stop) {
      timer.setTime(timeElapsed);
    }
  }, [stop, timer, timeElapsed]);

  useEffect(() => {
    //timer functionality - counts up from 0 until game stops
    let interval;
    if (start && !stop) {
      interval = setInterval(() => {
        setTimeElapsed(
          format(differenceInMilliseconds(new Date(), startTime), 'mm:ss:SS')
        );
      }, 1);
    }
    if (stop) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, stop, startTime]);

  return <div>{timeElapsed}</div>;
};

export default Stopwatch;
