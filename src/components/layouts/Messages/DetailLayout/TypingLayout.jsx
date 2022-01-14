import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { parseMessageType } from '../../../views/Message/DetailView/Typing/helper';
import ScheduledMsgPreview from '../ScheduleLayout/ScheduledMsgPreview';
import TextEditorTest from '../../../views/Message/DetailView/Typing/TextEditorTest';
import { CreateUUIDWithoutDash } from '../../../../utils/helper';

const TypingLayout = React.memo(
  ({
    left,
    refId,
    imageId,
    selectedFileList,
    onFileSelection,
    resendFile,
    removeSelectedFile,
    handleChangeInMentionArrayInInbox,
    onMessageSubmitted,
    attachmentId,
    disableFileUploadBtn,
    disableSendBtn,
    setRightSideDetailType,
    selectedMentions,
    setSelectedMentions,
    inboxDetail,
    openScheduleMsgModal,
    toggleScheduleMsgModal,
    scheduledMsgList,
    selectedScheduledMsg,
    setSelectedScheduledMsg,
    onEditScheduleMsgState,
    setOnEditScheduleMsgState,
    updateScheduledMsg,
    isEditingScheduledMsg,
    setIsEditingScheduledMsg,
    setSelectedDocList,
    isFromSchedule,
    openScreenRecordModal,
    openRecordModal,
    closeScreenRecordModal,
    editorPlaceholder,
    setIsSearching,
    isEditingMsg,
    forwhom,
    fetchScheduledMessageList,
  }) => {
    const [filteredScheduledList, setFilteredScheduledList] = useState(
      undefined,
    );
    const [clientIdForAttachment, setClientIdForAttachment] = useState({
      image: CreateUUIDWithoutDash(),
      file: CreateUUIDWithoutDash(),
      audio: CreateUUIDWithoutDash(),
      video: CreateUUIDWithoutDash(),
    });

    useEffect(() => {
      if (scheduledMsgList) {
        setFilteredScheduledList(
          scheduledMsgList.filter(singleReply => singleReply.refId === refId),
        );
      }
    }, [scheduledMsgList, refId]);

    return (
      <div
        id="typing-section-id"
        style={{
          margin: '10px 20px',
          position: 'relative',
          display: left ? 'none' : 'block',
        }}
      >
        {filteredScheduledList && filteredScheduledList.length > 0 && (
          <ScheduledMsgPreview
            refId={refId}
            scheduledMsgCount={
              filteredScheduledList && filteredScheduledList.length
            }
            scheduledMsgList={filteredScheduledList}
            setRightSideDetailType={setRightSideDetailType}
            fetchScheduledMessageList={fetchScheduledMessageList}
          />
        )}
        <TextEditorTest
          forwhom={forwhom}
          refId={refId}
          disableSendBtn={disableSendBtn}
          disableFileUploadBtn={disableFileUploadBtn}
          imageId={imageId}
          attachmentId={attachmentId}
          removeSelectedFile={removeSelectedFile}
          selectedFileList={selectedFileList}
          onFileSelection={onFileSelection}
          resendFile={resendFile}
          handleChangeInMentionArrayInInbox={handleChangeInMentionArrayInInbox}
          onMessageSubmitted={(text, scheduledDate) => {
            console.log('text scheduledDate', text, scheduledDate);
            parseMessageType(
              text,
              selectedFileList,
              clientIdForAttachment,
              onMessageSubmitted,
              refId,
              '',
              selectedMentions,
              scheduledDate,
              false,
            );
            setIsSearching(false);
          }}
          selectedMentions={selectedMentions}
          setSelectedMentions={setSelectedMentions}
          inboxDetail={inboxDetail}
          openScheduleMsgModal={openScheduleMsgModal}
          toggleScheduleMsgModal={toggleScheduleMsgModal}
          selectedScheduledMsg={selectedScheduledMsg}
          setSelectedScheduledMsg={setSelectedScheduledMsg}
          onEditScheduleMsgState={onEditScheduleMsgState}
          setOnEditScheduleMsgState={setOnEditScheduleMsgState}
          updateScheduledMsg={updateScheduledMsg}
          isEditingScheduledMsg={isEditingScheduledMsg}
          setIsEditingScheduledMsg={setIsEditingScheduledMsg}
          setSelectedDocList={setSelectedDocList}
          isFromSchedule={isFromSchedule}
          openScreenRecordModal={openScreenRecordModal}
          openRecordModal={openRecordModal}
          closeScreenRecordModal={closeScreenRecordModal}
          editorPlaceholder={editorPlaceholder}
          clientIdForAttachment={clientIdForAttachment}
          setClientIdForAttachment={setClientIdForAttachment}
          isEditingMsg={isEditingMsg}
        />
      </div>
    );
  },
);

TypingLayout.propTypes = {
  onFileSelection: PropTypes.func,
  onMessageSubmitted: PropTypes.func,
  selectedFileList: PropTypes.bool,
  handleChangeInMentionArrayInInbox: PropTypes.func,
  removeSelectedFile: PropTypes.func,
  imageId: PropTypes.string,
  attachmentId: PropTypes.string,
  editorPlaceholder: PropTypes.string,
  refId: PropTypes.string,
  onDocUpload: PropTypes.func,
  parseLink: PropTypes.func,
  disableFileUploadBtn: PropTypes.func,
  disableSendBtn: PropTypes.any,
};

export default TypingLayout;
