import React, { memo } from 'react';
import Timer from 'react-compound-timer';

import { CheckMathSign } from '../../utils/helper';

function TimerComponent({ title, initialTime }) {
  return (
    <Timer
      direction="forward"
      initialTime={CheckMathSign(initialTime) ? initialTime : 0}
    >
      {({ start, pause, resume, stop, reset, getTimerState, getTime }) => (
        <>
          {title}{' '}
          <Timer.Hours
            formatValue={value => `${value < 10 ? `0${value}` : value}`}
          />{' '}
          : {''}
          <Timer.Minutes
            formatValue={value => `${value < 10 ? `0${value}` : value}`}
          />{' '}
          : {''}
          <Timer.Seconds
            formatValue={value => `${value < 10 ? `0${value}` : value}`}
          />
          {'       '}
          <div hidden>
            <div id="timer-value">
              {getTime()} {getTimerState()}
            </div>
            <button id="start-timer" hidden type="button" onClick={start}>
              Start
            </button>
            <button id="pause-timer" hidden type="button" onClick={pause}>
              Pause
            </button>
            <button id="resume-timer" hidden type="button" onClick={resume}>
              Resume
            </button>
            <button id="stop-timer" hidden type="button" onClick={stop}>
              Stop
            </button>
            <button id="reset-timer" hidden type="button" onClick={reset}>
              Reset
            </button>
          </div>
        </>
      )}
    </Timer>
  );
}

export default memo(TimerComponent);
