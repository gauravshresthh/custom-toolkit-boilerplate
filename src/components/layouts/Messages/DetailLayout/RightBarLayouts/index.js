import React, { useState } from 'react';
import Styled from 'styled-components';
import TopHeading from '../../../../views/Message/DetailView/RightBarView/TopHeading';
import DetailsContent from './DetailsContent';
import { RIGHT_SIDE_CONTENT } from '../../../../../containers/Messages/Details/constants';
import AttachmentTab from '../../../../views/Message/DetailView/RightBarView/Attachment/AttachmentTab';
import ReplyThreadContent from './ReplyThreadContent';
import SearchContent from './SearchContent';
import ScheduleContent from './Schedule';
import PropTypes from 'prop-types';
import Loader from '../../../../elements/Loader';
import Attachment from './Attachment';
import PinnedMessageContent from './PinnedMessageContent';

const StyledRightBarLayout = Styled.div`
   min-width: 315px;
   max-width: 315px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    height: calc(100vh - 52px);
    overflow:hidden;
    .right-bar-content{
       height: calc(100vh - 115px);
        overflow-y:auto;
        overflow-x:hidden;
        position:relative;
    }
`;

const RightbarLayouts = ({
  inboxDetail,
  rightSideDetailType,
  setRightSideDetailType,
  repliesList,
  selectedMessage,
  fetchReplyMessageList,
  onDocUpload,
  refId,
  parseLink,
  onMessageSubmitted,
  muteInbox,
  deleteConversation,
  btnLoading,
  deleteModalVisibility,
  toggleDeleteInboxModalVisibility,
  toggleConvertModalVisibility,
  convertModalVisibility,
  convertToGroup,
  searchMessage,
  editSubject,
  muteSettingModalVisibility,
  toggleMuteSettingModal,
  muteSettingSubmit,
  muteParticipant,
  removeParticipant,

  scheduledMsgList,
  //delete scheduled msg
  toggleDeleteMessageModal,
  deleteMessage,
  openDeleteScheduleMsgModal,
  modalLoader,

  //edit scheduled msg
  onEditScheduledMsg,
  selectedScheduledMsg,
  setSelectedScheduledMsg,

  onFileSelection,
  selectedFileList,
  removeSelectedFile,
  selectedMentions,
  setSelectedMentions,
  updateRtcMsg,
  onEditScheduleMsgState,
  setOnEditScheduleMsgState,

  employeeList,
  toggleForwardMessageModal,

  openScheduleMsgModal,
  toggleScheduleMsgModal,

  toggleAddParticipantsMsgModal,
  sectionId,
  toggleLeaveMsgModal,
  LeaveMsg,
  leaveInboxModal,
  fetchMediaFiles,
  mediaLoader,
  isSearching,
  from,
  setFrom,
  selectedMsg,
  setSelectedMsg,
  deleteAttachment,
  openDeleteAttachmentModal,
  setOpenDeleteAttachmentModal,
  setSelectedAttachmentToDelete,
  rtcMessageIdToDelete,
  setRtcMessageIdToDelete,
  attchmentIdToDelete,
  setAttachmentIdToDelete,
  hasAttachmentBeenDeleted,
  setHasAttachmentBeenDeleted,
  pinMessage,
  pinnedMsgList,
  resendFile,
  setIsEditingMsg,
  isEditingMsg,

  searchedMsgList,
  searchMessageLoader,
  clearSearchedList,
  setIsSearching,
  setSelectedMessageIdToScrollTo,
  getPinMessage,
  nextPinPagination,
}) => {
  const [tabType, setTabType] = useState('MEDIA');

  return (
    <StyledRightBarLayout>
      {rightSideDetailType === RIGHT_SIDE_CONTENT['1'] && (
        <>
          <TopHeading
            headingText="Details"
            closeRightbar={() => setRightSideDetailType(false)}
          />
          <div className="right-bar-content withScrollbar">
            <DetailsContent
              isSelf={inboxDetail && inboxDetail.selfInbox}
              setRightSideDetailType={setRightSideDetailType}
              inboxDetail={inboxDetail}
              muteInbox={muteInbox}
              deleteConversation={deleteConversation}
              btnLoading={btnLoading}
              deleteModalVisibility={deleteModalVisibility}
              toggleDeleteInboxModalVisibility={
                toggleDeleteInboxModalVisibility
              }
              toggleConvertModalVisibility={toggleConvertModalVisibility}
              convertModalVisibility={convertModalVisibility}
              convertToGroup={convertToGroup}
              editSubject={editSubject}
              muteSettingModalVisibility={muteSettingModalVisibility}
              toggleMuteSettingModal={toggleMuteSettingModal}
              muteParticipant={muteParticipant}
              removeParticipant={removeParticipant}
              toggleAddParticipantsMsgModal={toggleAddParticipantsMsgModal}
              sectionId={sectionId}
              toggleLeaveMsgModal={toggleLeaveMsgModal}
              LeaveMsg={LeaveMsg}
              leaveInboxModal={leaveInboxModal}
              fetchMediaFiles={fetchMediaFiles}
              refId={refId}
              employeeList={employeeList}
              toggleForwardMessageModal={toggleForwardMessageModal}
              from={from}
              setFrom={setFrom}
              selectedMsg={selectedMsg}
              setSelectedMsg={setSelectedMsg}
              openDeleteAttachmentModal={openDeleteAttachmentModal}
              setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
              setSelectedAttachmentToDelete={setSelectedAttachmentToDelete}
              rtcMessageIdToDelete={rtcMessageIdToDelete}
              setRtcMessageIdToDelete={setRtcMessageIdToDelete}
              attchmentIdToDelete={attchmentIdToDelete}
              setAttachmentIdToDelete={setAttachmentIdToDelete}
              deleteAttachment={deleteAttachment}
              hasAttachmentBeenDeleted={hasAttachmentBeenDeleted}
              setHasAttachmentBeenDeleted={setHasAttachmentBeenDeleted}
            />
          </div>
        </>
      )}
      {rightSideDetailType === RIGHT_SIDE_CONTENT['2'] && (
        <>
          <AttachmentTab
            refId={refId}
            closeRightbar={() => {
              setRightSideDetailType(RIGHT_SIDE_CONTENT['1']);
              setTabType('MEDIA');
            }}
            setTabType={setTabType}
            tabType={tabType}
            fetchMediaFiles={fetchMediaFiles}
          />
          <div className="right-bar-content withScrollbar">
            {mediaLoader && inboxDetail && !inboxDetail.mediaList ? (
              <Loader width="28px" />
            ) : (
              <Attachment
                tabType={tabType}
                employeeList={employeeList}
                toggleForwardMessageModal={toggleForwardMessageModal}
                inboxDetail={inboxDetail}
                from={from}
                setFrom={setFrom}
                selectedMsg={selectedMsg}
                setSelectedMsg={setSelectedMsg}
                deleteAttachment={deleteAttachment}
                openDeleteAttachmentModal={openDeleteAttachmentModal}
                setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
                rtcMessageIdToDelete={rtcMessageIdToDelete}
                setRtcMessageIdToDelete={setRtcMessageIdToDelete}
                attchmentIdToDelete={attchmentIdToDelete}
                setAttachmentIdToDelete={setAttachmentIdToDelete}
              />
            )}
          </div>
        </>
      )}

      {rightSideDetailType === RIGHT_SIDE_CONTENT['3'] && (
        <>
          <TopHeading
            headingText="Search"
            closeRightbar={() => {
              setRightSideDetailType(false);
              clearSearchedList();
            }}
            hasCloseArrow
          />
          <div className="right-bar-content withScrollbar">
            <SearchContent
              searchMessage={searchMessage}
              searchedMsgList={searchedMsgList}
              searchMessageLoader={searchMessageLoader}
              refId={refId}
              clearSearchedList={clearSearchedList}
              setIsSearching={setIsSearching}
              setSelectedMessageIdToScrollTo={setSelectedMessageIdToScrollTo}
            />
          </div>
        </>
      )}

      {(rightSideDetailType === RIGHT_SIDE_CONTENT['4'] ||
        rightSideDetailType === RIGHT_SIDE_CONTENT['7'] ||
        isSearching) && (
        <>
          <TopHeading
            headingText="Thread"
            closeRightbar={() => setRightSideDetailType(false)}
            hasCloseArrow
          />
          <div className="right-bar-content withScrollbar">
            <ReplyThreadContent
              parseLink={parseLink}
              onDocUpload={onDocUpload}
              refId={refId}
              setRightSideDetailType={setRightSideDetailType}
              repliesList={repliesList}
              selectedMessage={selectedMessage}
              fetchReplyMessageList={fetchReplyMessageList}
              onMessageSubmitted={onMessageSubmitted}
              onFileSelection={onFileSelection}
              inboxDetail={inboxDetail}
              selectedFileList={selectedFileList}
              removeSelectedFile={removeSelectedFile}
              selectedMentions={selectedMentions}
              setSelectedMentions={setSelectedMentions}
              isReplyContent={
                rightSideDetailType === RIGHT_SIDE_CONTENT['4'] ||
                RIGHT_SIDE_CONTENT['6']
              }
              isSearching={isSearching}
              resendFile={resendFile}
              isPrivateReply={rightSideDetailType == 'REPLY' ? false : true}
            />
          </div>
        </>
      )}

      {rightSideDetailType === RIGHT_SIDE_CONTENT['5'] && (
        <>
          <TopHeading
            headingText="Schedule"
            closeRightbar={() => setRightSideDetailType(false)}
            hasCloseArrow
          />
          <div className="right-bar-content withScrollbar">
            <ScheduleContent
              scheduledMsgList={scheduledMsgList}
              refId={refId}
              openDeleteScheduleMsgModal={openDeleteScheduleMsgModal}
              toggleDeleteMessageModal={toggleDeleteMessageModal}
              deleteMessage={deleteMessage}
              modalLoader={modalLoader}
              onEditScheduledMsg={onEditScheduledMsg}
              parseLink={parseLink}
              sendNewMessage={onMessageSubmitted}
              updateRtcMsg={updateRtcMsg}
              selectedScheduledMsg={selectedScheduledMsg}
              setSelectedScheduledMsg={setSelectedScheduledMsg}
              onEditScheduleMsgState={onEditScheduleMsgState}
              setOnEditScheduleMsgState={setOnEditScheduleMsgState}
              toggleScheduleMsgModal={toggleScheduleMsgModal}
              setIsEditingMsg={setIsEditingMsg}
              isEditingMsg={isEditingMsg}
            />
          </div>
        </>
      )}

      {rightSideDetailType === RIGHT_SIDE_CONTENT['6'] && (
        <>
          <TopHeading
            headingText="Pinned Messages"
            closeRightbar={() => setRightSideDetailType(false)}
            hasCloseArrow
          />

          <div className="right-bar-content withScrollbar">
            <PinnedMessageContent
              pinnedMessages={pinnedMsgList}
              pinMessage={pinMessage}
              refId={refId}
              getPinMessage={getPinMessage}
              nextPinPagination={nextPinPagination}
            />
          </div>
        </>
      )}
    </StyledRightBarLayout>
  );
};

RightbarLayouts.propTypes = {
  rightSideDetailType: PropTypes.string,
  setRightSideDetailType: PropTypes.func,
  fetchReplyMessageList: PropTypes.func,
};

export default RightbarLayouts;
