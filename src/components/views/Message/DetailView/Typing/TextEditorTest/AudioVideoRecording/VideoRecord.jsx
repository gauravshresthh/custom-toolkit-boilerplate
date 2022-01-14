import React, { useEffect, useState } from 'react';
import PopupModal from '../../../../../../elements/PopupModal';
import { AudioRecordStyle } from './Style';
import { stopTracks } from './helper';
import startRecordIcon from '../../../../../../../assets/images/common/start-record.svg';
import stopRecordIcon from '../../../../../../../assets/images/common/stop-record.svg';
import sendVideoIcon from '../../../../../../../assets/images/common/send-video.svg';
import rightArrow from '../../../../../../../assets/images/common/right_pointer.svg';
import Popover from '../../../../../../elements/PopoverModal/index';
import { CreateUUIDWithoutDash } from '../../../../../../../utils/helper';

const VideoRecord = ({
  visible,
  closeModal,
  mediaDevices,
  setMediaDevices,
  selectedCamera,
  selectedMicrophone,
  setSelectedCamera,
  setSelectedMicrophone,
  refId,
  parentMsgId,
  selectedMentions,
  onVideoSelection,
  removeSelectedVideo,
  onVideoUpload,
}) => {
  const states = ['INITIAL', 'RECORDING', 'PREVIEW'];
  const [stream, setStream] = useState(null);
  const [currentState, setCurrentState] = useState(states[0]);
  const [openPopoverModal, setOpenPopoverModal] = useState(false);
  const [mediaRecord, setMediaRecord] = useState(null);
  const [url, setUrl] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const startRecording = () => {
    setCurrentState(states[1]);
    if (stream) {
      let chunks = [];
      const mediaRecord = new MediaRecorder(stream);
      setMediaRecord(mediaRecord);
      mediaRecord.ondataavailable = event => {
        chunks = [...chunks, event.data];
      };
      mediaRecord.start();
      mediaRecord.onstop = event => {
        setCurrentState(states[2]);
        stopTracks(stream);
        const video = document.getElementById('videoRecord');
        video.srcObject = null;

        if (!video.hasAttribute('controls')) {
          video.setAttribute('controls', 'controls');
        }

        const type = chunks.length ? chunks[0].type : 'video/webm';
        const blob = new Blob(chunks, { type });
        const url = URL.createObjectURL(blob);
        setUrl(url);

        const typeArr = blob && blob.type.split(';');
        const videoId = CreateUUIDWithoutDash();
        const title = `video-${videoId}-${Date.now()}`;
        const file = new File([blob], title, {
          type: typeArr[0],
        });
        
        setVideoFile(file);
      };
    }
  };

  const gotDevices = deviceInfos => {
    const devices = {
      audio: deviceInfos.filter(device => device.kind === 'audioinput'),
      video: deviceInfos.filter(device => device.kind === 'videoinput'),
    };
    setMediaDevices(devices);
  };

  const handleError = error => {
    console.log('Error while getting device info');
  };

  useEffect(() => {
    if (visible) {
      const video = document.getElementById('videoRecord');
      if (stream) {
        stopTracks(stream);
        video.srcObject = null;
      }
      const constrants = {
        audio: selectedMicrophone
          ? { deviceId: { exact: selectedMicrophone.deviceId } }
          : true,
        video: selectedCamera
          ? { deviceId: { exact: selectedCamera.deviceId } }
          : true,
        mandatory: {
          googNoiseSupression: true
        }
      };
      navigator.mediaDevices
        .getUserMedia(constrants)
        .then(stream => {
          if(!mediaDevices){
            navigator.mediaDevices
            .enumerateDevices()
            .then(gotDevices)
            .catch(handleError);
          }          
          if (video.hasAttribute('controls')) {
            video.removeAttribute('controls');
          }
          setCurrentState(states[0]);
          if (stream) {
            setStream(stream);
            const video = document.getElementById('videoRecord');
            if (video) {
              video.srcObject = stream;
              video.onloadedmetadata = () => {
                video.play();
              };
            }
          }
        })
        .catch(err => {
          console.log('Error in getting user media');
        });
    }
  }, [visible, selectedCamera, selectedMicrophone]);

  return (
    <>
      <PopupModal
        modalVisible={visible}
        onCancel={() => {
          closeModal();
          stopTracks(stream);
          setCurrentState(states[0]);
          setUrl('');
          setSelectedCamera(null);
          setSelectedMicrophone(null);
        }}
        modalTitle="Record Video"
        width="600px"
        children={
          <AudioRecordStyle>
            <div className="video-modal">
              {currentState === states[0] && (
                <img
                  className="start-record-icon"
                  src={startRecordIcon}
                  alt="start record video"
                  onClick={() => startRecording()}
                />
              )}
              {currentState === states[1] && (
                <img
                  className="start-record-icon"
                  src={stopRecordIcon}
                  alt="start record video"
                  onClick={() => {
                    mediaRecord &&
                      mediaRecord.state === 'recording' &&
                      mediaRecord.stop();
                  }}
                />
              )}
              <video width="100%" id="videoRecord" muted>
                <source id="video-source" src={url} />
              </video>
            </div>
            <div className="footer">
              <Popover
                trigger="click"
                children={<button className="setting-btn">Settings</button>}
                placement="top"
                visible={openPopoverModal}
                onVisibleChange={visibility => {
                  setOpenPopoverModal(visibility);
                }}
                onClick={() => setOpenPopoverModal(true)}
                popoverContent={
                  <div className="setting-popup-container">
                    <div className="popup-element" tabIndex="1">
                      <Popover
                        trigger="click"
                        popoverContent={
                          <div className="setting-popup-container">
                            {mediaDevices &&
                              mediaDevices.video &&
                              mediaDevices.video.map((device, index) => (
                                <div
                                  className="popup-element"
                                  key={'device-camera-' + index}
                                  tabIndex={'1' + index}
                                  onClick={() => {
                                    setOpenPopoverModal(false);
                                    setSelectedCamera(device);
                                  }}
                                >
                                  {device.label}
                                </div>
                              ))}
                          </div>
                        }
                        placement="right"
                        children={
                          <div className="popup-inner-element">
                            <button className="pop-up-child-btn">Camera</button>
                            <img src={rightArrow} />
                          </div>
                        }
                      />
                    </div>
                    <div className="popup-element" tabIndex="2">
                      <div>
                        <Popover
                          trigger="click"
                          popoverContent={
                            <div className="setting-popup-container">
                              {mediaDevices &&
                                mediaDevices.audio &&
                                mediaDevices.audio.map((device, index) => (
                                  <div
                                    className="popup-element"
                                    key={'device-microphone-' + index}
                                    tabIndex={'2' + index}
                                    onClick={() => {
                                      setOpenPopoverModal(false);
                                      setSelectedMicrophone(device);
                                    }}
                                  >
                                    {device.label}
                                  </div>
                                ))}
                            </div>
                          }
                          placement="right"
                          children={
                            <div className="popup-inner-element">
                              <button className="pop-up-child-btn">
                                Microphone
                              </button>
                              <img src={rightArrow} />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                }
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 15px',
                }}
              >
                {selectedCamera && (
                  <p>
                    Camera: <strong>{selectedCamera.label}</strong>
                  </p>
                )}
                {selectedMicrophone && (
                  <p>
                    Microphone: <strong>{selectedMicrophone.label}</strong>
                  </p>
                )}
              </div>
              {currentState === states[2] && (
                <button
                  className="footer-btn"
                  onClick={() => {
                    onVideoUpload(
                      {
                        id: CreateUUIDWithoutDash(),
                        file: videoFile
                      },
                      refId,
                      parentMsgId,
                      selectedMentions,
                      "",
                      CreateUUIDWithoutDash(),
                      onVideoSelection,
                    );
                    closeModal();
                    setUrl('');
                  }}
                >
                  <img src={sendVideoIcon} alt="send video" />
                </button>
              )}
            </div>
          </AudioRecordStyle>
        }
      />
    </>
  );
};

export default VideoRecord;
