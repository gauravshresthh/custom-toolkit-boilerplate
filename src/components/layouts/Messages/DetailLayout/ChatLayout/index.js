import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';

import MyMessage from '../../../Chat/MyMessage/MyMesage';
import OthersMessage from '../../../Chat/OthersMessage/OthersMesage';
import ConfirmationModal from '../../../../elements/ConfirmationModal';
import Forward from '../../../../views/Message/Forward';
import PopupModal from '../../../../elements/PopupModal';
import {
  DateFormatter,
  DayDateFormatting,
} from '../../../../../utils/dateHelper';

import OutlinedSpinner from '../../../../elements/Spinner/index.jsx';

const StyledChatLayout = styled.div`
  .chat-wrapper {
    height: ${props => {
      switch (props.isCreatedPage) {
        case 'compose':
          return '100% !important';
        case 'public join':
          return `calc(100vh - ${props.chatSectionHeight}px) !important`;
        case 'private join':
          return `calc(100vh - ${props.chatSectionHeight}px) !important`;

        default:
          return `calc(100vh - ${props.chatSectionHeight}px) !important`;
      }
    }};

    max-height: ${props => {
      switch (props.isCreatedPage) {
        case 'compose':
          return '100% !important';
        case 'public join':
          return '100% !important';
        case 'private join':
          return '100% !important';
        default:
          return 'calc(100vh - 234px) !important';
      }
    }};
    padding: 10px 20px 0 20px;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .date-section {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #666;
    font-size: 13px;
    padding: 4px 0;
  }
`;

const ChatLayout = React.memo(
  ({
    messageLoader,
    isCreatedPage,
    inboxDetail,
    messageList,
    setRightSideDetailType,
    openDeleteMsgModal,
    toggleDeleteMessageModal,
    deleteMessage,
    modalLoader,
    openForwardMsgModal,
    toggleForwardMessageModal,
    forwardMessage,
    setSelectedMessage,
    fetchPaginatedList,
    match,
    isPaginationLoader,
    isPaginationSuccess,
    setIsPaginationSuccess,
    uploadDoc,
    parseLink,
    sendNewMessage,
    selectedFileList,
    employeeList,
    selectedParticipants,
    setSelectedParticipants,
    selecteInboxList,
    setSelecteInboxList,
    scrollIntoViewRefId,
    fetchMessageListInActivity,
    selectedMessageRTCId,
    isSearching,
    selectedSuperAdmin,
    showHoverOptions,
    from,
    setFrom,
    selectedMsg,
    setSelectedMsg,
    deleteAttachment,
    openDeleteAttachmentModal,
    setOpenDeleteAttachmentModal,
    rtcMessageIdToDelete,
    setRtcMessageIdToDelete,
    attchmentIdToDelete,
    setAttachmentIdToDelete,
    pinMessage,
    setReaction,
    setSelectedScheduledMsg,
    setOnEditScheduleMsgState,
    join,
    resendFile,
    threadSuggestion,
    searchThreads,
    setIsSearching,
    setIsEditingMsg,
    isLastMsg,
    showMsgLoader,
  }) => {
    const [render, setRender] = useState(false);
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const [showEmojiContainer, setShowEmojiContainer] = useState(false);
    const [captureScrollToId, setCaptureScrollToId] = useState('');
    const [chatSectionHeight, setChatSectionHeight] = useState(280);
    const scrollBottomRef = useRef(null);
    const [checkedItems, setCheckedItems] = useState({});
    const [imgToDownloadURL, setImgToDownloadURL] = useState(undefined);
    const [isImgLoading, setIsImgLoading] = useState(false);

    const { id, section: sectionId } = match.params;

    const typingEl = document.getElementById('typing-section-id');
    const topBarEl = document.getElementById('top-bar-id');
    const joinBtnEl = document.getElementById('join-btn');

    const messageLength = (messageList && messageList.length) || 0;

    useEffect(() => {
      if (joinBtnEl && topBarEl) {
        setChatSectionHeight(
          topBarEl.clientHeight + joinBtnEl.clientHeight + 75,
        );
      }
      if (typingEl && topBarEl) {
        setChatSectionHeight(
          topBarEl.clientHeight + typingEl.clientHeight + 75,
        );
      }
    }, [
      topBarEl && topBarEl.clientHeight,
      typingEl && typingEl.clientHeight,
      joinBtnEl && joinBtnEl.clientHeight,
      messageLength,
      join,
    ]);

    useEffect(() => {
      if (messageLength > 0 && !isSearching) {
        scrollBottomRef &&
          scrollBottomRef.current &&
          scrollBottomRef.current.scrollIntoView({
            block: 'end',
            inline: 'end',
            behavior: 'auto',
          });
      }
      if (isPaginationSuccess) {
        const idget = document.getElementById(captureScrollToId);
        idget && idget.scrollIntoView();
        setIsPaginationSuccess(false);
      }
      if (typingEl && topBarEl) {
        setChatSectionHeight(
          typingEl.clientHeight + topBarEl.clientHeight + 75,
        );
      }
    }, [messageLength, messageList, isImgLoading, selectedFileList]);

    useEffect(() => {
      if (messageLength > 0 && isSearching) {
        const idToScrollTo = document.getElementById(isSearching);
        idToScrollTo && idToScrollTo.classList.remove('highlightMessaage');
        idToScrollTo && idToScrollTo.classList.add('highlightMessaage');
        idToScrollTo &&
          idToScrollTo.scrollIntoView({
            block: 'end',
            inline: 'end',
            behavior: 'auto',
          });
      }
      if (isSearching && isPaginationSuccess) {
        const idget = document.getElementById(captureScrollToId);
        idget && idget.scrollIntoView();
        setIsPaginationSuccess(false);
      }
    }, [isSearching, messageLength]);

    const group =
      messageList &&
      messageList.reduce((r, a) => {
        r[DayDateFormatting(a.sentAtTimestamp / 1000)] = [
          ...(r[DayDateFormatting(a.sentAtTimestamp / 1000)] || []),
          a,
        ];
        return r;
      }, {});

    const keys =
      group && Object.keys(group).sort((a, b) => new Date(a) - new Date(b));

    const incrementDelta = useCallback(() => setRender(true), [render]);

    return (
      <StyledChatLayout
        chatSectionHeight={chatSectionHeight}
        isCreatedPage={isCreatedPage}
      >
        <div
          style={{ paddingBottom: '10px' }}
          className="chat-wrapper withScrollbar"
          onScroll={() => incrementDelta()}
        >
          {messageList === undefined && messageLoader && (
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <OutlinedSpinner
                width="34px"
                spinnerStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px 0',
                }}
                color="#376af5"
              />
            </div>
          )}
          {messageList &&
            inboxDetail &&
            messageList.length < inboxDetail.messageListCount && (
              <Waypoint
                topOffset="0"
                onEnter={() => {
                  if (render) {
                    console.log(
                      'pagination',
                      messageList[messageList.length - 1],
                    );
                    messageList !== undefined &&
                      fetchPaginatedList(
                        id,
                        sectionId,
                        true,
                        messageList[messageList.length - 1].sentAtTimestamp - 1,
                        isSearching,
                        false,
                      );
                    setCaptureScrollToId(
                      messageList[messageList.length - 1].rtcMessageId,
                    );
                  }
                }}
              >
                {isPaginationLoader && (
                  <OutlinedSpinner
                    width="28px"
                    spinnerStyle={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '20px 0',
                    }}
                  />
                )}
              </Waypoint>
            )}

          {keys &&
            keys.map((singleLastMessage, idx) => {
              const singleData =
                group[singleLastMessage] &&
                group[singleLastMessage].sort(function(a, b) {
                  const dateA = a.sentAtTimestamp;
                  const dateB = b.sentAtTimestamp;
                  return dateA - dateB;
                });
              return (
                <>
                  {singleData &&
                    singleData.map((singleChatMsg, index) => {
                      const presentIndex =
                        group[singleLastMessage][index].senderAccountObj
                          .accountId;
                      const indexBefore = group[singleLastMessage][index - 1]
                        ? group[singleLastMessage][index - 1].senderAccountObj
                            .accountId
                        : undefined;

                      const showProfilePicture =
                        presentIndex === undefined && indexBefore === undefined
                          ? true
                          : presentIndex !== indexBefore;
                      return (
                        <>
                          {singleData[0].clientId ===
                            singleChatMsg.clientId && (
                            <div className="date-section">
                              {singleChatMsg.sentAtTimestamp &&
                                DateFormatter(singleChatMsg.sentAtTimestamp)}
                            </div>
                          )}

                          <div id={singleChatMsg.rtcMessageId} key={idx}>
                            {singleChatMsg.isIncoming ? (
                              <OthersMessage
                                inboxDetail={inboxDetail}
                                showProfilePicture={showProfilePicture}
                                isCreatedPage={isCreatedPage}
                                message={singleChatMsg}
                                setRightSideDetailType={setRightSideDetailType}
                                setSelectedMessage={setSelectedMessage}
                                toggleForwardMessageModal={
                                  toggleForwardMessageModal
                                }
                                setSelectedMsg={setSelectedMsg}
                                employeeList={employeeList}
                                forwardMessage={forwardMessage}
                                selectedMsg={selectedMsg}
                                selectedParticipants={selectedParticipants}
                                from={from}
                                setFrom={setFrom}
                                selectedSuperAdmin={selectedSuperAdmin}
                                showHoverOptions={showHoverOptions}
                                imgToDownloadURL={imgToDownloadURL}
                                setImgToDownloadURL={setImgToDownloadURL}
                                deleteAttachment={deleteAttachment}
                                setRtcMessageIdToDelete={
                                  setRtcMessageIdToDelete
                                }
                                rtcMessageIdToDelete={rtcMessageIdToDelete}
                                setAttachmentIdToDelete={
                                  setAttachmentIdToDelete
                                }
                                attchmentIdToDelete={attchmentIdToDelete}
                                openDeleteAttachmentModal={
                                  openDeleteAttachmentModal
                                }
                                setOpenDeleteAttachmentModal={
                                  setOpenDeleteAttachmentModal
                                }
                                whereIsTheDeleteFrom={'chat'}
                                pinMessage={pinMessage}
                                toggleDeleteMessageModal={
                                  toggleDeleteMessageModal
                                }
                                showMoreOptions={showMoreOptions}
                                setShowMoreOptions={setShowMoreOptions}
                                showEmojiContainer={showEmojiContainer}
                                setShowEmojiContainer={setShowEmojiContainer}
                                setReaction={setReaction}
                                resendFile={resendFile}
                                sendNewMessage={sendNewMessage}
                              />
                            ) : (
                              <MyMessage
                                setIsImgLoading={setIsImgLoading}
                                inboxDetail={inboxDetail}
                                isCreatedPage={isCreatedPage}
                                message={singleChatMsg}
                                messageList={messageList}
                                setRightSideDetailType={setRightSideDetailType}
                                setSelectedMsg={setSelectedMsg}
                                setSelectedMessage={setSelectedMessage}
                                toggleDeleteMessageModal={
                                  toggleDeleteMessageModal
                                }
                                toggleForwardMessageModal={
                                  toggleForwardMessageModal
                                }
                                parseLink={parseLink}
                                sendNewMessage={sendNewMessage}
                                uploadDoc={uploadDoc}
                                employeeList={employeeList}
                                forwardMessage={forwardMessage}
                                selectedMsg={selectedMsg}
                                selectedParticipants={selectedParticipants}
                                from={from}
                                setFrom={setFrom}
                                showHoverOptions={showHoverOptions}
                                imgToDownloadURL={imgToDownloadURL}
                                setImgToDownloadURL={setImgToDownloadURL}
                                deleteAttachment={deleteAttachment}
                                setRtcMessageIdToDelete={
                                  setRtcMessageIdToDelete
                                }
                                rtcMessageIdToDelete={rtcMessageIdToDelete}
                                setAttachmentIdToDelete={
                                  setAttachmentIdToDelete
                                }
                                attchmentIdToDelete={attchmentIdToDelete}
                                openDeleteAttachmentModal={
                                  openDeleteAttachmentModal
                                }
                                setOpenDeleteAttachmentModal={
                                  setOpenDeleteAttachmentModal
                                }
                                whereIsTheDeleteFrom={'chat'}
                                pinMessage={pinMessage}
                                setSelectedScheduledMsg={
                                  setSelectedScheduledMsg
                                }
                                setOnEditScheduleMsgState={
                                  setOnEditScheduleMsgState
                                }
                                showMoreOptions={showMoreOptions}
                                setShowMoreOptions={setShowMoreOptions}
                                showEmojiContainer={showEmojiContainer}
                                setShowEmojiContainer={setShowEmojiContainer}
                                setReaction={setReaction}
                                resendFile={resendFile}
                                setIsEditingMsg={setIsEditingMsg}
                              />
                            )}
                          </div>
                        </>
                      );
                    })}
                </>
              );
            })}

          {!isLastMsg && (
            <Waypoint
              topOffset="0"
              onEnter={() => {
                if (render && isSearching) {
                  messageList !== undefined &&
                    fetchPaginatedList(
                      id,
                      sectionId,
                      true,
                      messageList[0].sentAtTimestamp + 1,
                      isSearching,
                      true,
                    );
                  setCaptureScrollToId(messageList[0].rtcMessageId);
                }
              }}
            >
              {isPaginationLoader && (
                <OutlinedSpinner
                  width="24px"
                  spinnerStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px 0',
                  }}
                  color="#376af5"
                />
              )}
            </Waypoint>
          )}
          <div style={{ minHeight: '10px' }} ref={scrollBottomRef} />
        </div>

        <ConfirmationModal
          loading={modalLoader}
          width="410px"
          visibility={openDeleteMsgModal}
          title="Confirmation"
          cancelLabel="Cancel"
          actionLabel="Delete"
          content="Are you sure you want to delete this message ?"
          onClick={() =>
            deleteMessage(
              selectedMsg.refId,
              selectedMsg.clientId,
              selectedMsg.rtcMessageId,
              '',
            )
          }
          closeModal={() => toggleDeleteMessageModal(false)}
        />

        <PopupModal
          contentStyle={{ padding: 0 }}
          modalVisible={openForwardMsgModal}
          width="420px"
          onCancel={() => {
            toggleForwardMessageModal(false);
            setCheckedItems({});
            setSelectedParticipants([]);
          }}
          modalTitle="Forward To"
          children={
            <Forward
              threadSuggestion={threadSuggestion}
              loading={modalLoader}
              employeeList={employeeList}
              selectedParticipants={selectedParticipants}
              setSelectedParticipants={setSelectedParticipants}
              selecteInboxList={selecteInboxList}
              setSelecteInboxList={setSelecteInboxList}
              buttonText="Forward"
              buttonOnClick={() => {
                forwardMessage(
                  selectedParticipants,
                  selecteInboxList,
                  selectedMsg,
                );
              }}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              isFrom={'forward'}
              searchThreads={searchThreads}
            />
          }
        />
      </StyledChatLayout>
    );
  },
);

ChatLayout.propTypes = {
  selectedFileList: PropTypes.any,
  messageList: PropTypes.array,
  setRightSideDetailType: PropTypes.func,
  toggleDeleteMessageModal: PropTypes.func,
  deleteMessage: PropTypes.func,
  openDeleteMsgModal: PropTypes.bool,
  modalLoader: PropTypes.bool,
  openForwardMsgModal: PropTypes.bool,
  toggleForwardMessageModal: PropTypes.func,
  forwardMessage: PropTypes.func,
  setSelectedMessage: PropTypes.func,
  uploadDoc: PropTypes.func,
  sendNewMessage: PropTypes.func,
  parseLink: PropTypes.func,
};

export default ChatLayout;
