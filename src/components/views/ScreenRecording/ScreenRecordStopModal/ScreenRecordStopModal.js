import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../elements/PopupModal/index';
import ScreenRecordStopStyle from './Style';
import CustomButton from '../../../elements/Button/SubmitButton';

const ScreenRecordStopModal = ({
  visible,
  url,
  screenRecordBlob,
  setScreenRecordPreview,
  onRecordStop,
  isScreenRecording,
  setScreenRecordAudio,
  setScreenRecordVideo,
  setScreenRecordTitle,
}) => {
  const closeModal = () => {
    setScreenRecordPreview(false);
    isScreenRecording(false);
    setScreenRecordAudio(false);
    setScreenRecordTitle('');
    setScreenRecordVideo(false);
  };

  return (
    <>
      <Modal
        modalVisible={visible}
        onCancel={() => closeModal()}
        modalTitle="Preview"
        width="600px"
      >
        <ScreenRecordStopStyle>
          <div className="video-modal">
            <video key={url} width="540" id="myVideo" height="300" controls>
              <source src={url} />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="screen-record-btn">
            <CustomButton
              style={{
                width: '80px',
                border: '1px solid #376AF5',
                color: '#376AF5',
                background: '#fff',
                marginRight: '10px',
                height: '36px',
              }}
              onClick={() => closeModal()}
              text="Discard"
            />
            <CustomButton
              primary
              style={{ width: '70px', height: '36px' }}
              onClick={e => {
                e.preventDefault();
                onRecordStop();                
                closeModal();
              }}
              text="Send"
            />              
          </div>
        </ScreenRecordStopStyle>
      </Modal>
    </>
  );
};

ScreenRecordStopModal.propTypes = {
  visible: PropTypes.bool,
  url: PropTypes.string,
  onRecordStop: PropTypes.func,
  setScreenRecordPreview: PropTypes.func,
};

export default ScreenRecordStopModal;
