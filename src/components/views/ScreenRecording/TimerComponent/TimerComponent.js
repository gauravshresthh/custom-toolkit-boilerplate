import React, { useState, useEffect } from 'react';
import TimerStyle from './Style';

const isNumber = x => typeof x === 'number';

const validateTime = totalTime => {
  if (!isNumber(totalTime)) return false;
  return totalTime >= 0;
};

const getSeconds = totalTime => {
  if (!validateTime(totalTime)) return '';
  const seconds = totalTime % 60;
  if (seconds < 10) return `0${seconds}`;
  return seconds;
};

const getMinutes = totalTime => {
  if (!validateTime(totalTime)) return '';
  const minutes = Math.floor(totalTime / 60);
  if (minutes < 10) return `0${minutes}`;
  return minutes;
};

const TimerComponent = () => {
  const [totalTimePassed, setTotalTimePassed] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTotalTimePassed(time => time + 1);
    }, 1000);

    // Called this when it unmounts.
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <TimerStyle>
      <div className="timer-wrapper">
        <span>
          {getMinutes(totalTimePassed)}:{getSeconds(totalTimePassed)}
        </span>
      </div>
    </TimerStyle>
  );
};

export default TimerComponent;
