import React, { useEffect, useState } from 'react';
import Modal from '../../../elements/PopupModal/index';
import ScreenRecordStyle from './Style';
import CustomButton from '../../../elements/Button/SubmitButton';
import ToggleSwitch from '../../../elements/ToggleSwitch/index';
import Popover from '../../../elements/PopoverModal/index';
import rightArrow from '../../../../assets/images/common/right_pointer.svg';

const ScreenRecordModal = ({
  recordTitle,
  recordAudio,
  recordVideo,
  videoStream,
  openScreenRecordModal,
  closeScreenRecordModal,
  onStartClicked,
  setScreenRecordTitle,
  setScreenRecordAudio,
  setScreenRecordVideo,
  stopPictureInPicture,
  startVideo,
  stopVideo,
  isPipEnabled,
  setPipEnabled,
  mediaDevices,
  setMediaDevices,
  selectedCamera,
  selectedMicrophone,
  setSelectedCamera,
  setSelectedMicrophone,
}) => {
  const [openPopoverModal, setOpenPopoverModal] = useState(false);

  const gotDevices = deviceInfos => {
    const devices = {
      audio: deviceInfos.filter(device => device.kind === 'audioinput' && device.deviceId),
      video: deviceInfos.filter(device => device.kind === 'videoinput' && device.deviceId),
    };
    setMediaDevices(devices);
  };

  const handleError = error => {
    console.log('Error while getting device info');
  };

  useEffect(() => {
    if (openScreenRecordModal) {
      if(!mediaDevices.audio.length || !mediaDevices.video.length){
        navigator &&
        navigator.mediaDevices &&
        navigator.mediaDevices
          .enumerateDevices()
          .then(gotDevices)
          .catch(handleError);
      }
    }
  }, [openScreenRecordModal]);
  
  const onCancelScreenRecord = () => {
    closeScreenRecordModal();
    setScreenRecordTitle('');
    setScreenRecordAudio(false);
    setScreenRecordVideo(false);
  };

  const startPictureInPicture = dom => {
    if (document.pictureInPictureEnabled) {
      dom && dom.requestPictureInPicture();
    } else {
      setPipEnabled(false);
    }
  };

  useEffect(() => {
    if (recordVideo) {
      startVideo();
    } else {
      stopVideo();
      stopPictureInPicture();
    }
  }, [recordVideo]);

  useEffect(() => {
    if (recordVideo && videoStream) {
      const elem = document.getElementById('localVideo');
      if (elem) {
        elem.srcObject = videoStream;
        elem.onloadedmetadata = () => {
          elem.play();
        };
      }
    }
  }, [videoStream]);

  return (
    <div>
      <Modal
        modalVisible={openScreenRecordModal}
        modalTitle="Start Screen Recording"
        width="466px"
        onCancel={() => onCancelScreenRecord()}
      >
        <ScreenRecordStyle>
          <div className="recordTitle">Title</div>
          <input
            className="screenRecordInput"
            placeholder=""
            value={recordTitle}
            onChange={e => setScreenRecordTitle(e.target.value)}
          />

          <div className="switch">
            <ToggleSwitch
              checked={recordAudio}
              onChange={() => setScreenRecordAudio(!recordAudio)}
            />
            <span>Record voice</span>
            {selectedMicrophone? <span style={{padding: "0 10px", fontWeight: "bold"}}>{selectedMicrophone.label}</span>: ''}
          </div>

          <div className="switch">
            <ToggleSwitch
              checked={recordVideo}
              onChange={() => {
                setScreenRecordVideo(!recordVideo);
              }}
            />
            <span>Record video</span>
            {selectedCamera? <span style={{padding: "0 10px", fontWeight: "bold"}}>{selectedCamera.label}</span>: ''}
          </div>

          {recordVideo && (
            <div
              style={{
                padding: '10px',
                border: '1px solid #376AF5',
                marginTop: '15px',
              }}
            >
              <video id="localVideo" />
            </div>
          )}

          <div className="screen-record-footer">
            <div className="left">
              {
                (mediaDevices.audio.length || mediaDevices.video.length) ? (
                  <Popover
                  trigger="click"
                  children={<button className="setting-btn">Settings</button>}
                  placement="top"
                  visible={openPopoverModal}
                  onVisibleChange={visibility => {
                    setOpenPopoverModal(visibility);
                  }}
                  onClick={()=>setOpenPopoverModal(true)}
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
                                    onClick={()=>{
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
                                      onClick={()=>{
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
                ): ''
              }
              
            </div>
            <div className="right flex-end">
              <CustomButton
                primary
                style={{
                  width: '70px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
                onClick={() => {
                  const elem = document.getElementById('localVideo');
                  startPictureInPicture(elem);
                  onStartClicked();
                }}
                disable={!recordTitle}
                text="Start"
              />
            </div>
          </div>
        </ScreenRecordStyle>
      </Modal>
    </div>
  );
};

export default ScreenRecordModal;
