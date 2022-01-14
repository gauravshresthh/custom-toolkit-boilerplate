import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../elements/PopupModal/index';
import SearchRecords from './SearchRecords';
import ShareRecordsStyle from './Style';
import ScreenRecords from './ScreenRecords';

function ShareExistingRecord({
  openShareRecordModal,
  closeShareRecordModal,
  getExistingRecords,
  screenRecordings,
  onVideoSubmitted,  
  employeeList,
  deleteScreenRecordVideo,
  screenRecordingLoader,
  renameScreenRecordVideo,
}) {
  useEffect(() => {
    getExistingRecords();
  }, []);

  return (
    <>
      <Modal
        modalVisible={openShareRecordModal}
        onCancel={() => closeShareRecordModal()}
        modalTitle="Screen Recordings"
        width="55%"    
      >
        <ShareRecordsStyle>
          <SearchRecords getExistingRecords={getExistingRecords} />
          <ScreenRecords
            loader={screenRecordingLoader}
            screenRecordings={screenRecordings}
            onVideoSubmitted={onVideoSubmitted}
            employeeList={employeeList}
            closeShareRecordModal={closeShareRecordModal}
            deleteScreenRecordVideo={deleteScreenRecordVideo}
            renameScreenRecordVideo={renameScreenRecordVideo}
          />
        </ShareRecordsStyle>
      </Modal>
    </>
  );
}

export default ShareExistingRecord;
