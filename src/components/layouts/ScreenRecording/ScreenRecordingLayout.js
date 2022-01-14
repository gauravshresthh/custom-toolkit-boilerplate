import React from 'react';
import ScreenRecordModal from '../../views/ScreenRecording/ScreenRecordModal/ScreenRecordModal';
import ShareExistingRecordModal from '../../views/ScreenRecording/ShareExistingRecord/ShareExistingRecordModal';

const ScreenRecordingLayout = ({
  openScreenRecordModal,
  openShareRecordModal,
  closeScreenRecordModal,
  closeShareRecordModal,
  recordTitle,
  recordAudio,
  recordVideo,
  videoStream,
  onStartClicked,
  setScreenRecordTitle,
  setScreenRecordAudio,
  setScreenRecordVideo,
  stopPictureInPicture,
  startVideo,
  stopVideo,
  isPipEnabled,
  setPipEnabled,
  getExistingRecords, 
  screenRecordings,
  employeeList,
  onVideoSubmitted,
  deleteScreenRecordVideo,
  renameScreenRecordVideo,
  mediaDevices,
  setMediaDevices,
  selectedCamera,
  selectedMicrophone,
  setSelectedCamera,
  setSelectedMicrophone,
}) => {
  return (
    <div>     
      <ScreenRecordModal
        openScreenRecordModal={openScreenRecordModal}
        closeScreenRecordModal={closeScreenRecordModal}
        recordTitle={recordTitle}
        recordAudio={recordAudio}
        recordVideo={recordVideo}
        videoStream={videoStream}
        onStartClicked={onStartClicked}
        setScreenRecordTitle={setScreenRecordTitle}
        setScreenRecordAudio={setScreenRecordAudio}
        setScreenRecordVideo={setScreenRecordVideo}
        stopPictureInPicture={stopPictureInPicture}
        startVideo={startVideo}
        stopVideo={stopVideo}
        isPipEnabled={isPipEnabled}
        setPipEnabled={setPipEnabled}
        mediaDevices={mediaDevices}
        setMediaDevices={setMediaDevices}
        selectedCamera={selectedCamera}
        selectedMicrophone={selectedMicrophone}
        setSelectedCamera={setSelectedCamera}
        setSelectedMicrophone={setSelectedMicrophone}
      />
      <ShareExistingRecordModal
        openShareRecordModal={openShareRecordModal}
        closeShareRecordModal={closeShareRecordModal}
        getExistingRecords={getExistingRecords}
        screenRecordings={screenRecordings}
        onVideoSubmitted={onVideoSubmitted}
        employeeList={employeeList}
        deleteScreenRecordVideo={deleteScreenRecordVideo}
        renameScreenRecordVideo={renameScreenRecordVideo}
      />
    </div>
  );
};

export default ScreenRecordingLayout;
