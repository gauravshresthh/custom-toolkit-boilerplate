import React, { useEffect, useState } from 'react';
import check from '../../../../../../../assets/images/common/check.svg';
import cross from '../../../../../../../assets/images/common/cross.svg';
import doubleCircle from '../../../../../../../assets/images/common/double_circle.svg';
import TimerComponent from '../../../../../ScreenRecording/TimerComponent/TimerComponent';
import { AudioRecordStyle } from './Style';
import { stopTracks, getUserMedia } from './helper';
import { CreateUUIDWithoutDash } from '../../../../../../../utils/helper';

const AudioRecord = ({
  refId,
  parentMsgId,
  selectedMentions,
  setAudioRecord,
  onFileSelection,
  onAudioUpload,
}) => {
  const [audioStream, setAudioStream] = useState(null);
  const [mediaRecord, setMediaRecord] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(false);

  useEffect(() => {
    getUserMedia({
      audio: true,
      video: false,
    }).then(audioStream => {
      setAudioStream(audioStream);
      let chunks = [];
      const mediaRecord = new MediaRecorder(audioStream);
      setMediaRecord(mediaRecord);
      mediaRecord.ondataavailable = event => {
        chunks = [...chunks, event.data];
      };
      mediaRecord.start();
      mediaRecord.onstop = () => {
        const type = chunks.length ? chunks[0].type : 'audio/webm';
        const blob = new Blob(chunks, { type });
        const url = URL.createObjectURL(blob);
        stopTracks(audioStream);
        const typeArr = blob && blob.type.split(';');
        const audioId = CreateUUIDWithoutDash();
        const title = `audio-${audioId}-${Date.now()}`;
        const file = new File([blob], title, {
          type: typeArr[0],
        });
        
        setFile(file);

        // set variables to initial state.
        chunks = [];
        setAudioStream(null);
        setMediaRecord(null);
        setAudioRecord(false);
      };
    });
  }, []);


  useEffect(()=>{
    if(file && uploadFile){
      const scheduledDate = "";
      onAudioUpload(
        {
          id: CreateUUIDWithoutDash(),
          file
        },
        refId,
        parentMsgId,
        selectedMentions,
        scheduledDate,
        CreateUUIDWithoutDash(),
        onFileSelection,
      );
    }
  }, [file, uploadFile]);

  return (
    <AudioRecordStyle>
      {audioStream ? (
        <div
          style={{
            display: 'flex',
            zIndex: '99',
            position: 'absolute',
            right: '5px',
            bottom: '40px',
          }}
        >
          <button
            className="action-button"
            onClick={() => {
              setUploadFile(true);
              mediaRecord.state === 'recording' ? mediaRecord.stop(): setMediaRecord(false);
            }}
          >
            <img src={check} alt="ok" />
          </button>
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '10px' }}
          >
            <img src={doubleCircle} alt="cancel" style={{ width: '15px' }} />
            <TimerComponent />
          </div>
          <button
            className="action-button"
            onClick={() => {
              setUploadFile(false);
              mediaRecord.state === 'recording' ? mediaRecord.stop(): setMediaRecord(false);
            }}
          >
            <img src={cross} alt="cancel" />
          </button>
        </div>
      ) : (
        ''
      )}
    </AudioRecordStyle>
  );
};

export default AudioRecord;
