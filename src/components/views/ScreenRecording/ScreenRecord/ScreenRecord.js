import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TimerComponent from '../TimerComponent/TimerComponent';
import ScreenRecordStyle from './Style';

function getDisplayMedia(constrants) {
  return navigator.mediaDevices.getDisplayMedia(constrants);
}

function getUserMedia(mediaStream) {
  return navigator.mediaDevices.getUserMedia(mediaStream);
}

const ScreenRecord = ({
  title,
  audio,
  video,
  closeModal,
  getBlobAndUrl,
  isScreenRecording,
  onCancel,
  selectedMicrophone,
  setScreenRecordPreview,
  clearScreenRecord
}) => {
  const [stream, setStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = async () => {
    try {
      const mediaStream = await getDisplayMedia();
      let tracks = [...mediaStream.getTracks()];
      if (audio) {
        const audioConstrants = selectedMicrophone?{audio: {deviceId: {exact: selectedMicrophone.deviceId}}, video: false}: {audio: true, video: false};
        const audioStream = await getUserMedia(audioConstrants);
        tracks = [...tracks, ...audioStream.getTracks()];
      }
      const str = new MediaStream(tracks);
      setStream(str);
      isScreenRecording(true);
    } catch (err) {
      isScreenRecording(false);
      onCancel();
      closeModal();
      clearScreenRecord && clearScreenRecord();
      console.error('Error on screen capture ', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      closeModal();
      console.log('stop recording ');
    }
  };

  const stopAndClose = () => {
    stopRecording();
  };

  useEffect(() => {
    if (!stream) return;
    try {
      let chunks = [];
      const options = { mimeType: 'video/webm' };
      const mediaRec = new MediaRecorder(stream, options);
      mediaRec.ondataavailable = event => {
        chunks = [...chunks, event.data];
      };

      mediaRec.start();
      mediaRec.onstop = () => {
        console.log('Stop recording........');
        const type = chunks.length ? chunks[0].type : 'video/webm';
        const blob = new Blob(chunks, { type });
        const url = URL.createObjectURL(blob);
        getBlobAndUrl(blob, url);
        chunks = [];
        stream.getTracks().forEach(track => track.stop());
        isScreenRecording(false);
      };

      // handle stop recording for browser default button.
      stream.getTracks().forEach(track => {
        track.onended = () => {
          mediaRec.stop();
          closeModal();
          isScreenRecording(false);
          clearScreenRecord && clearScreenRecord();
        };
      });

      setMediaRecorder(mediaRec);
    } catch (err) {
      console.error('Error ', err);
    }
  }, [stream]);

  useEffect(() => {
    startRecording();
  }, []);

  if (stream) {
    return (
      <ScreenRecordStyle>
        <div className="record-screen-wrapper">
          <div className="left-screen">
            <div className="rec">
              <span className="dot" />
              <span>REC</span>
            </div>
            <TimerComponent title="timer" initialTime={Date.now()}/>
          </div>
          <div className="right-screen">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                isScreenRecording(false);
                onCancel();
                stopAndClose();
                clearScreenRecord && clearScreenRecord();
              }}
              style={{
                background: '#fff',
                marginRight: '4px',
                minWidth: '80px',
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="stop-rec-btn"
              onClick={() => {
                stopAndClose();
                setScreenRecordPreview(true);
              }}
            >
              Stop Recording
            </button>
          </div>
        </div>
      </ScreenRecordStyle>
    );
  }
  return null;
};

ScreenRecord.propTypes = {
  title: PropTypes.string,
  audio: PropTypes.bool,
  closeModal: PropTypes.func,
  setMediaURL: PropTypes.func,
};

export default ScreenRecord;
