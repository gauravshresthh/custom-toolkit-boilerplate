import React from 'react';
import { AudioWrapper } from '../style';
import AttachmentIcon from '../../../../../assets/images/messages/AttachmentIcon';
import useAudioPlayer from './useAudioPlayer';
import Bar from './Bar';
import Loader from '../../../../elements/Loader';

function AudioPlayer({  audio,messageObj ,isMyMsg}) {
  if (!messageObj) {
    return null;
  }
  if (!audio) {
    return null;
  }
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer(messageObj.clientId);

  return (
    <AudioWrapper>
      <audio id={`audio-player`+ messageObj.clientId} controls hidden>
        <source src={audio.url} />
      </audio>
      <div className='controls d-flex'>
        <div className='icon-wrapper'>
          {audio.uploadStatus === 'UPLOADING' || messageObj.delivered === 'PENDING' ? <Loader width='28px'  color={!isMyMsg ?'#666': '#fff'} wrapperHeight='100%' /> :
            playing ?
              <div className='player__button' onClick={() => setPlaying(false)}>
                <AttachmentIcon.PauseAudio color={!isMyMsg ?'#666': '#fff'} />
              </div> :
              <div className='player__button' onClick={() => setPlaying(true)}>
                <AttachmentIcon.PlayAudio color={!isMyMsg ?'#666': '#fff'} />
              </div>}
        </div>
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
          barColor={!isMyMsg ? '#666' :'#fff'}
        />
      </div>
    </AudioWrapper>

  );
}

export default AudioPlayer;
