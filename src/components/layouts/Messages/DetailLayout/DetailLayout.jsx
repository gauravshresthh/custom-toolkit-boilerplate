import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChatLayout from './ChatLayout';
import RightbarLayouts from './RightBarLayouts';
import TypingLayout from './TypingLayout';
import MessageIndividualTopBar from '../../../views/Message/DetailView/ChatView/MessageIndividualTopBar';
import { Inbox } from '../../../../containers/Messages/model/InboxModel';
import Loader from '../../../elements/Loader';

import PopupModal from '../../../../components/elements/PopupModal';
import Forward from '../../../../components/views/Message/Forward';
import { CheckIfInboxParticipantExists } from '../../../../containers/Messages/CreateMessage/helper';

import SubmitButton from '../../../elements/Button/SubmitButton';
import { IsLastMessage } from '../../../../containers/Messages/List/helper';

const StyledDetailsLayout = styled.div`
  display: flex;

  .middle-section {
    width: 100%;
    height: calc(100vh - 52px);
  }

  .loader-wrapper {
    height: calc(100vh - 152px);
    position: relative;
  }
`;

const JoinButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 70px;
  padding: 0 20px;
  flex: 1;
  display: flex;
  align-items: center;
`;

const DetailLayout = ({
  inboxId,
  inboxDetail,
  selectedSuperAdmin,
  sendNewMessage,
  parseLink,
  onFileSelection,
  selectedReplyFileList,
  removeSelectedFile,
  resendFile,
  selectedFileList,
  uploadDoc,
  handleChangeInMentionArrayInInbox,
  repliesList,
  modalLoader,
  openDeleteMsgModal,
  toggleDeleteMessageModal,
  deleteMessage,
  openForwardMsgModal,
  toggleForwardMessageModal,
  forwardMessage,
  fetchReplyMessageList,
  fetchPaginatedList,
  match,
  isPaginationLoader,
  isPaginationSuccess,
  setIsPaginationSuccess,
  muteInbox,
  deleteConversation,
  btnLoading,
  toggleConvertModalVisibility,
  deleteModalVisibility,
  toggleDeleteInboxModalVisibility,
  convertModalVisibility,
  convertToGroup,
  searchMessage,
  editSubject,
  selectedMentions,
  setSelectedMentions,
  muteSettingModalVisibility,
  toggleMuteSettingModal,
  muteSettingSubmit,
  muteParticipant,
  removeParticipant,
  openDeleteScheduleMsgModal,
  openScheduleMsgModal,
  toggleScheduleMsgModal,
  scheduledMsgList,
  messageLoader,
  updateRtcMsg,
  setSelectedDocList,
  isEditingScheduledMsg,
  setIsEditingScheduledMsg,
  selectedScheduledMsg,
  setSelectedScheduledMsg,
  onEditScheduleMsgState,
  setOnEditScheduleMsgState,
  isFromSchedule,

  employeeList,

  openScreenRecordModal,
  openRecordModal,
  closeScreenRecordModal,

  toggleAddParticipantsMsgModal,
  openAddParticipantsMsgModal,
  addParticipants,
  sectionId,

  toggleLeaveMsgModal,
  LeaveMsg,
  leaveInboxModal,

  scrollIntoViewRefId,
  fetchMessageListInActivity,
  selectedMessageRTCObj,
  fetchMediaFiles,
  mediaLoader,
  isSearching,
  searchedMessageList,
  showMsgLoader,
  joinGroup,
  deleteAttachment,
  hasAttachmentBeenDeleted,
  setHasAttachmentBeenDeleted,
  pinMessage,
  pinnedMsgList,
  pinnedMsgCount,
  setReaction,
  searchThreads,
  threadSuggestion,
  setIsSearching,

  searchedMsgList,
  searchMessageLoader,
  clearSearchedList,
  setSelectedMessageIdToScrollTo,
  mqttStatus,
  fetchScheduledMessageList,
  getPinMessage,
  nextPinPagination,
}) => {
  const [rightSideDetailType, setRightSideDetailType] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState({});
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [selecteInboxList, setSelecteInboxList] = useState([]);
  const [addParticipantListOfUsers, setAddParticipantListOfUsers] = useState();
  const [from, setFrom] = useState(0);
  // used for image  lighthouse carasouel to select the image url and then forward it
  const [selectedMsg, setSelectedMsg] = useState('');
  const [openDeleteAttachmentModal, setOpenDeleteAttachmentModal] = useState(
    false,
  );
  const [selectedAttachmentToDelete, setSelectedAttachmentToDelete] = useState(
    undefined,
  );
  const [rtcMessageIdToDelete, setRtcMessageIdToDelete] = useState(undefined);
  const [attchmentIdToDelete, setAttachmentIdToDelete] = useState(undefined);
  const [join, setJoin] = useState(false);
  const [forwardSuggestion, setForwardSuggestion] = useState(undefined);
  const [isEditingMsg, setIsEditingMsg] = useState('RTC_MESSAGE');

  function findReplies(selectedMessageRTCObj, isSearching) {
    const isItReply =
      selectedMessageRTCObj && selectedMessageRTCObj.parentMessageId;
    if (isItReply && isSearching && searchedMessageList) {
      // setRightSideDetailType(RIGHT_SIDE_CONTENT['4']);
      const message =
        searchedMessageList &&
        searchedMessageList.filter(data => data.rtcMessageId === isSearching) &&
        searchedMessageList.filter(
          data => data.rtcMessageId === isSearching,
        )[0];
      setSelectedMessage(message);
    } else {
      setSelectedMessage(undefined);
      setRightSideDetailType(false);
    }
  }

  useEffect(() => {
    if (selectedMessageRTCObj && isSearching) {
      findReplies(selectedMessageRTCObj, isSearching);
    } else {
      setRightSideDetailType(false);
    }
  }, [inboxId, isSearching]);

  useEffect(() => {
    let filteredList = [];
    employeeList &&
      employeeList.map(
        single =>
          !CheckIfInboxParticipantExists(
            inboxDetail && inboxDetail.participantsList,
            single.accountId,
          ) && filteredList.push(single),
      );
    setAddParticipantListOfUsers(filteredList);
    setForwardSuggestion(threadSuggestion);
  }, [employeeList, inboxDetail, openAddParticipantsMsgModal]);

  const mentionPopoverContent = emp => `
  <div class="customInfoPopover" customInfoPopover='customInfoPopover' >
  <div class="customInfoImgContainer">
    <img class="customInfoImage" src=${emp.profilePic} />
    <span class="customInfoGreenDot" />
  </div>

  <div class="customInfoDetailsContainer">
    <div class="customInfoDetailsName">${emp.fullName}</div>
    <div class="customInfoDetailsEmail">${emp.email}</div>
    <div class="customInfoDetailsPhone">${emp.phone}</div>
  </div>

  <div class="customInfoDetailsActionsContainer">
    <div class="customInfoDetailsMessage" ></div>
    <div class="customInfoDetailsCallIcon"></div>
  </div>

</div>
</div>
`;

  window.onclick = e => {
    if (e.target.getAttribute('inbox-mention-id')) {
      let mentionElem = document.getElementById(e.target.id);
      let mentionPopover = document.getElementById('mention-popover');
      if (mentionPopover) {
        mentionPopover.remove();
      }
      let newDiv = document.createElement('div');
      newDiv.id = `mention-popover`;
      newDiv.style.position = 'absolute';
      newDiv.style.bottom = '20px';
      newDiv.style.left =
        e.target.getAttribute('isMyMsg') === 'true' ? '0' : '';
      newDiv.style.right =
        e.target.getAttribute('isMyMsg') === 'false' ? '-100px' : '';
      newDiv.style.background = '#fff';

      let selectedEmp =
        employeeList &&
        employeeList.filter(
          single => single.accountId === e.target.getAttribute('mention-id'),
        )[0];
      newDiv.innerHTML = mentionPopoverContent(selectedEmp);
      mentionElem.appendChild(newDiv);
    } else {
      let mentionPopover = document.getElementById('mention-popover');
      if (mentionPopover.contains(e.target)) {
      } else {
        mentionPopover && mentionPopover.remove();
      }
    }
  };

  return (
    <>
      <StyledDetailsLayout>
        <div className="middle-section">
          <MessageIndividualTopBar
            pinnedMsgList={pinnedMsgList}
            inboxDetail={inboxDetail}
            isSelf={inboxDetail && inboxDetail.selfInbox}
            selectedSuperAdmin={selectedSuperAdmin}
            refId={inboxId}
            name={
              inboxDetail &&
              (inboxDetail.subject ||
                Inbox.GetParticipantsName(inboxDetail.participantsList))
            }
            isMuted={
              (inboxDetail && inboxDetail.notificationType === 1) ||
              (inboxDetail && inboxDetail.notificationType === 3)
            }
            rightSideDetailType={rightSideDetailType}
            setRightSideDetailType={setRightSideDetailType}
            pinnedMsgCount={pinnedMsgCount}
            setIsSearching={setIsSearching}
            editSubject={editSubject}
            mqttStatus={mqttStatus}
            getPinMessage={getPinMessage}
          />
          {(messageLoader &&
            showMsgLoader &&
            !(inboxDetail && inboxDetail.messageList)) ||
          showMsgLoader ? (
            <div className="loader-wrapper">
              <Loader width="40px" />
            </div>
          ) : (
            <>
              <ChatLayout
                isLastMsg={IsLastMessage(
                  searchedMessageList,
                  inboxDetail && inboxDetail.messageList,
                )}
                selectedFileList={selectedFileList}
                isCreatedPage={
                  inboxDetail && inboxDetail.left && inboxDetail.inboxType === 3
                    ? 'private join'
                    : 'public join'
                }
                showHoverOptions={true}
                selectedSuperAdmin={selectedSuperAdmin}
                inboxDetail={inboxDetail}
                messageList={
                  isSearching
                    ? searchedMessageList
                    : inboxDetail && inboxDetail.messageList
                }
                setRightSideDetailType={setRightSideDetailType}
                toggleDeleteMessageModal={toggleDeleteMessageModal}
                deleteMessage={deleteMessage}
                openDeleteMsgModal={openDeleteMsgModal}
                modalLoader={modalLoader}
                toggleForwardMessageModal={toggleForwardMessageModal}
                openForwardMsgModal={openForwardMsgModal}
                forwardMessage={forwardMessage}
                setSelectedMessage={setSelectedMessage}
                fetchPaginatedList={fetchPaginatedList}
                match={match}
                isPaginationLoader={isPaginationLoader}
                isPaginationSuccess={isPaginationSuccess}
                setIsPaginationSuccess={setIsPaginationSuccess}
                sendNewMessage={sendNewMessage}
                parseLink={parseLink}
                uploadDoc={uploadDoc}
                employeeList={employeeList}
                selectedParticipants={selectedParticipants}
                setSelectedParticipants={setSelectedParticipants}
                selecteInboxList={selecteInboxList}
                setSelecteInboxList={setSelecteInboxList}
                scrollIntoViewRefId={scrollIntoViewRefId}
                fetchMessageListInActivity={fetchMessageListInActivity}
                selectedMessageRTCObj={selectedMessageRTCObj}
                isSearching={isSearching}
                from={from}
                setFrom={setFrom}
                selectedMsg={selectedMsg}
                setSelectedMsg={setSelectedMsg}
                openDeleteAttachmentModal={openDeleteAttachmentModal}
                setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
                deleteAttachment={deleteAttachment}
                rtcMessageIdToDelete={rtcMessageIdToDelete}
                setRtcMessageIdToDelete={setRtcMessageIdToDelete}
                attchmentIdToDelete={attchmentIdToDelete}
                setAttachmentIdToDelete={setAttachmentIdToDelete}
                pinMessage={pinMessage}
                setReaction={setReaction}
                setSelectedScheduledMsg={setSelectedScheduledMsg}
                setOnEditScheduleMsgState={setOnEditScheduleMsgState}
                join={join}
                resendFile={resendFile}
                threadSuggestion={threadSuggestion}
                searchThreads={searchThreads}
                setIsSearching={setIsSearching}
                setIsEditingMsg={setIsEditingMsg}
                showMsgLoader={showMsgLoader}
                messageLoader={messageLoader}
              />

              {inboxDetail &&
              (inboxDetail.left && inboxDetail.inboxType === 3) ? (
                <JoinButtonWrapper id="join-btn">
                  <SubmitButton
                    text="Join Group"
                    // loading={joinLoader}
                    onClick={() => {
                      setJoin(true);
                      joinGroup(inboxId);
                    }}
                  />
                </JoinButtonWrapper>
              ) : (
                <TypingLayout
                  disableSendBtn={true}
                  left={inboxDetail && inboxDetail.left}
                  refId={inboxId}
                  imageId="message-detail-image"
                  attachmentId="message-detail-attachment"
                  removeSelectedFile={removeSelectedFile}
                  onFileSelection={onFileSelection}
                  resendFile={resendFile}
                  selectedFileList={selectedFileList}
                  onMessageSubmitted={sendNewMessage}
                  handleChangeInMentionArrayInInbox={
                    handleChangeInMentionArrayInInbox
                  }
                  parseLink={parseLink}
                  setRightSideDetailType={setRightSideDetailType}
                  selectedMentions={selectedMentions}
                  setSelectedMentions={setSelectedMentions}
                  inboxDetail={inboxDetail}
                  openScheduleMsgModal={openScheduleMsgModal}
                  toggleScheduleMsgModal={toggleScheduleMsgModal}
                  scheduledMsgList={scheduledMsgList}
                  selectedScheduledMsg={selectedScheduledMsg}
                  setSelectedScheduledMsg={setSelectedScheduledMsg}
                  onEditScheduleMsgState={onEditScheduleMsgState}
                  setOnEditScheduleMsgState={setOnEditScheduleMsgState}
                  updateScheduledMsg={updateRtcMsg}
                  isEditingScheduledMsg={isEditingScheduledMsg}
                  setIsEditingScheduledMsg={setIsEditingScheduledMsg}
                  setSelectedDocList={setSelectedDocList}
                  isFromSchedule={isFromSchedule}
                  openRecordModal={openRecordModal}
                  openScreenRecordModal={openScreenRecordModal}
                  closeScreenRecordModal={closeScreenRecordModal}
                  setIsSearching={setIsSearching}
                  fetchScheduledMessageList={fetchScheduledMessageList}
                />
              )}
            </>
          )}
        </div>
        {rightSideDetailType && (
          <RightbarLayouts
            inboxDetail={inboxDetail}
            rightSideDetailType={rightSideDetailType}
            setRightSideDetailType={setRightSideDetailType}
            repliesList={repliesList}
            selectedMessage={selectedMessage}
            fetchReplyMessageList={fetchReplyMessageList}
            refId={inboxId}
            parseLink={parseLink}
            onDocUpload={uploadDoc}
            onMessageSubmitted={sendNewMessage}
            muteInbox={muteInbox}
            deleteConversation={deleteConversation}
            btnLoading={btnLoading}
            deleteModalVisibility={deleteModalVisibility}
            toggleDeleteInboxModalVisibility={toggleDeleteInboxModalVisibility}
            toggleConvertModalVisibility={toggleConvertModalVisibility}
            convertModalVisibility={convertModalVisibility}
            convertToGroup={convertToGroup}
            searchMessage={searchMessage}
            editSubject={editSubject}
            muteSettingModalVisibility={muteSettingModalVisibility}
            toggleMuteSettingModal={toggleMuteSettingModal}
            muteSettingSubmit={muteSettingSubmit}
            muteParticipant={muteParticipant}
            removeParticipant={removeParticipant}
            scheduledMsgList={scheduledMsgList}
            setSelectedScheduledMsg={setSelectedScheduledMsg}
            selectedScheduledMsg={selectedScheduledMsg}
            //delete schedule message
            toggleDeleteMessageModal={toggleDeleteMessageModal}
            deleteMessage={deleteMessage}
            openDeleteScheduleMsgModal={openDeleteScheduleMsgModal}
            modalLoader={modalLoader}
            // my changes
            selectedMentions={selectedMentions}
            setSelectedMentions={setSelectedMentions}
            updateRtcMsg={updateRtcMsg}
            onEditScheduleMsgState={onEditScheduleMsgState}
            setOnEditScheduleMsgState={setOnEditScheduleMsgState}
            employeeList={employeeList}
            toggleForwardMessageModal={toggleForwardMessageModal}
            toggleAddParticipantsMsgModal={toggleAddParticipantsMsgModal}
            sectionId={sectionId}
            toggleLeaveMsgModal={toggleLeaveMsgModal}
            LeaveMsg={LeaveMsg}
            leaveInboxModal={leaveInboxModal}
            fetchMediaFiles={fetchMediaFiles}
            mediaLoader={mediaLoader}
            isSearching={isSearching}
            from={from}
            setFrom={setFrom}
            selectedMsg={selectedMsg}
            setSelectedMsg={setSelectedMsg}
            deleteAttachment={deleteAttachment}
            openDeleteAttachmentModal={openDeleteAttachmentModal}
            setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
            setSelectedAttachmentToDelete={setSelectedAttachmentToDelete}
            rtcMessageIdToDelete={rtcMessageIdToDelete}
            setRtcMessageIdToDelete={setRtcMessageIdToDelete}
            attchmentIdToDelete={attchmentIdToDelete}
            setAttachmentIdToDelete={setAttachmentIdToDelete}
            hasAttachmentBeenDeleted={hasAttachmentBeenDeleted}
            setHasAttachmentBeenDeleted={setHasAttachmentBeenDeleted}
            pinMessage={pinMessage}
            pinnedMsgList={pinnedMsgList}
            onFileSelection={onFileSelection}
            removeSelectedFile={removeSelectedFile}
            selectedFileList={selectedReplyFileList}
            resendFile={resendFile}
            toggleScheduleMsgModal={toggleScheduleMsgModal}
            setIsEditingMsg={setIsEditingMsg}
            isEditingMsg={isEditingMsg}
            searchedMsgList={searchedMsgList}
            searchMessageLoader={searchMessageLoader}
            clearSearchedList={clearSearchedList}
            setIsSearching={setIsSearching}
            setSelectedMessageIdToScrollTo={setSelectedMessageIdToScrollTo}
            getPinMessage={getPinMessage}
            nextPinPagination={nextPinPagination}
          />
        )}
      </StyledDetailsLayout>
      <PopupModal
        width="420px"
        modalVisible={openAddParticipantsMsgModal}
        modalTitle={'Add Participants'}
        contentStyle={{ padding: '0' }}
        children={
          <Forward
            loading={modalLoader}
            openAddParticipantsMsgModal={openAddParticipantsMsgModal}
            employeeList={addParticipantListOfUsers}
            selectedParticipants={selectedParticipants}
            setSelectedParticipants={setSelectedParticipants}
            buttonText="Add"
            buttonOnClick={() => {
              addParticipants(
                inboxDetail.participantsList,
                selectedParticipants,
                inboxDetail.subject,
                inboxDetail.inboxType,
                inboxDetail.inboxId,
              );
            }}
            searchThreads={searchThreads && searchThreads}
          />
        }
        onCancel={() => toggleAddParticipantsMsgModal(false)}
        showCloseIcon={true}
      />
    </>
  );
};

DetailLayout.propTypes = {
  sendNewMessage: PropTypes.func,
  toggleDeleteMessageModal: PropTypes.func,
  handleChangeInMentionArrayInInbox: PropTypes.func,
  toggleForwardMessageModal: PropTypes.func,
  removeSelectedImage: PropTypes.func,
  onFileSelection: PropTypes.func,
  forwardMessage: PropTypes.func,
  deleteMessage: PropTypes.func,
  selectedImageList: PropTypes.any,
  inboxId: PropTypes.string,
  parseLink: PropTypes.func,
  modalLoader: PropTypes.bool,
  openDeleteMsgModal: PropTypes.bool,
  openForwardMsgModal: PropTypes.bool,
};

export default DetailLayout;
