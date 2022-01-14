import { useEffect, useState } from 'react';

function useAudioPlayer(id) {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.getElementById('pinned-audio-player' + id);
    if (audio) {
      // state setters wrappers
      const setAudioData = () => {
        if (audio.duration === Infinity) {
          audio.currentTime = Number.MAX_SAFE_INTEGER;
          audio.ontimeupdate = function() {
            this.ontimeupdate = () => {
              return;
            };
            audio.currentTime = 0.1;
            audio.currentTime = 0;
            setDuration(audio.duration);
            setCurTime(audio.currentTime);
          };
        } else {
          setDuration(audio.duration);
          setCurTime(audio.currentTime);
        }
      };

      const setAudioTime = () => setCurTime(audio.currentTime);
      // DOM listeners: update React state on DOM events
      audio.addEventListener('loadeddata', setAudioData);

      audio.addEventListener('timeupdate', setAudioTime);

      // React state listeners: update DOM on React state changes
      playing ? audio.play() : audio.pause();

      if (clickedTime && clickedTime !== curTime) {
        audio.currentTime = clickedTime;
        setClickedTime(null);
      }

      // effect cleanup
      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
      };
    }
  });

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
}

export default useAudioPlayer;
