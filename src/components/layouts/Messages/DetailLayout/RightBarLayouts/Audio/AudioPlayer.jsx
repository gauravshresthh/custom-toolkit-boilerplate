import React from 'react';
import { AudioWrapper } from './style';
import AttachmentIcon from '../../../../../../assets/images/messages/AttachmentIcon';
import useAudioPlayer from './useAudioPlayer';
import Bar from './Bar';

function AudioPlayer({ audio, messageObj, isMyMsg }) {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer(messageObj.clientId);

  if (!messageObj) {
    return null;
  }
  if (!audio) {
    return null;
  }

  return (
    <AudioWrapper>
      <audio id={`pinned-audio-player` + messageObj.clientId} controls hidden>
        <source src={audio.url} />
      </audio>
      <div className="controls d-flex">
        <div className="icon-wrapper">
          {playing ? (
            <div className="player__button" onClick={() => setPlaying(false)}>
              <AttachmentIcon.PauseAudio color={!isMyMsg ? '#666' : '#fff'} />
            </div>
          ) : (
            <div className="player__button" onClick={() => setPlaying(true)}>
              <AttachmentIcon.PlayAudio color={!isMyMsg ? '#666' : '#fff'} />
            </div>
          )}
        </div>
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={time => setClickedTime(time)}
          barColor={!isMyMsg ? '#666' : '#fff'}
        />
      </div>
    </AudioWrapper>
  );
}

export default AudioPlayer;
