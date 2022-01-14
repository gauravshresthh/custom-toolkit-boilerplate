import React from 'react';
import moment from 'moment';
import { BarStyle } from '../style';

export default function Bar(props) {
  const { duration, curTime, onTimeUpdate, audioId } = props;

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(value) {
    return moment()
      .set({ hour: 0, minute: 0, second: 0, millisecond: value * 1000 })
      .format('mm:ss', { trim: false });
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(`.bar__progress`);
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }

  return (
    <BarStyle
      audioPlayerWidth={props.audioPlayerWidth}
      barColor={props.barColor}
    >
      <div className={`bar__progress`} onMouseDown={e => handleTimeDrag(e)}>
        <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      {duration && formatDuration(duration) !== 'Invalid date' && (
        <span className="bar__time" hidden={props.hideTime}>
          {formatDuration(duration)}
        </span>
      )}
    </BarStyle>
  );
}
