import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import TextMessage from '../ChatMessage/Text';
import LinkMessage from '../ChatMessage/Link';
import Doc from '../ChatMessage/Doc';
import Multiple from '../ChatMessage/Image/Multiple';
import Video from '../ChatMessage/Video/Video';
import RepliedMessageNumber from '../../../elements/RepliedMessageNumber';
import {
  EmojiWrapper,
  MessageWrapper,
  ReactionContainer,
  StyledMyMessage,
} from './style';
import MessageActionIcons from '../../../views/Message/DetailView/ChatView/MessageActionIcons';
import { RIGHT_SIDE_CONTENT } from '../../../../containers/Messages/Details/constants';
import {
  ResendMessage,
  ShowResendIcon,
  ShowSentStatus,
} from '../../../../containers/Messages/Details/helper';
import Calls from '../ChatMessage/Calls/Calls';
import { MessageIcon } from '../../../../assets/images/messages/MessageIcon';
import Audio from '../ChatMessage/Audio/Audio';

import LocalDb from '../../../../localStorage';

import { CreateUUIDWithoutDash } from '../../../../utils/helper';

const MyMessage = ({
  setIsImgLoading,
  messageList,
  message,
  setRightSideDetailType,
  setSelectedMsg,
  setSelectedMessage,
  toggleDeleteMessageModal,
  toggleForwardMessageModal,
  uploadDoc,
  parseLink,
  sendNewMessage,
  isCreatedPage,
  forwardMessage,
  selectedMsg,
  selectedParticipants,
  from,
  setFrom,
  inboxDetail,
  showHoverOptions,
  imgToDownloadURL,
  setImgToDownloadURL,
  deleteAttachment,
  setRtcMessageIdToDelete,
  rtcMessageIdToDelete,
  setAttachmentIdToDelete,
  attchmentIdToDelete,
  openDeleteAttachmentModal,
  setOpenDeleteAttachmentModal,
  whereIsTheDeleteFrom,
  pinMessage,
  showMoreOptions,
  setShowMoreOptions,
  showEmojiContainer,
  setShowEmojiContainer,
  setReaction,
  setSelectedScheduledMsg,
  setOnEditScheduleMsgState,
  resendFile,
  setIsEditingMsg,
  employeeList,
}) => {
  const [showPopoverAction, setShowPopoverAction] = useState(false);

  function filterAndGetEmployeeObject(employeeId, accountId1) {
    return (
      employeeId &&
      accountId1 &&
      employeeId.filter(a => a.accountId == accountId1.account.accountid)[0]
    );
  }

  const group =
    message &&
    message.reactionList &&
    message.reactionList.reduce((r, a) => {
      r[a.reaction] = [...(r[a.reaction] || []), a];
      return r;
    }, {});
  const keys = group && Object.keys(group);

  return (
    <StyledMyMessage>
      <MessageWrapper className="d-flex">
        {ShowResendIcon(message) && (
          <div
            className="resend-icon"
            onClick={() => {
              ResendMessage(message, sendNewMessage, resendFile);
            }}
          >
            <MessageIcon.ResendIcon />
          </div>
        )}
        <div
          className="message-content"
          onMouseEnter={() => {
            message.delivered !== 'IS_NOT_DELIVERED' &&
              setShowPopoverAction(true);
          }}
          onMouseLeave={() => {
            setShowPopoverAction(false);
            setShowMoreOptions(false);
            setShowEmojiContainer(false);
          }}
        >
          {inboxDetail && !inboxDetail.left && (
            <MessageActionIcons
              isMyMsg={true}
              onClickReply={() => {
                setRightSideDetailType(RIGHT_SIDE_CONTENT['4']);
                setSelectedMessage(message);
                setShowPopoverAction(false);
                setShowMoreOptions(false);
                setShowEmojiContainer(false);
              }}
              onClickPrivateReply={() => {
                setRightSideDetailType(RIGHT_SIDE_CONTENT['7']);
                setSelectedMessage(message);
                setShowPopoverAction(false);
                setShowMoreOptions(false);
                setShowEmojiContainer(false);
              }}
              onPinClick={() => {
                pinMessage(message.rtcMessageId, !message.pinned);
                setShowPopoverAction(false);
                setShowMoreOptions(false);
                setShowEmojiContainer(false);
              }}
              message={message}
              onClickDelete={() => {
                setSelectedMsg(message);
                toggleDeleteMessageModal(true);
                setShowPopoverAction(false);
                setShowMoreOptions(false);
                setShowEmojiContainer(false);
              }}
              onClickForward={() => {
                setSelectedMsg(message);
                toggleForwardMessageModal(true);
                setShowPopoverAction(false);
                setShowMoreOptions(false);
                setShowEmojiContainer(false);
              }}
              onEditClick={() => {
                setSelectedScheduledMsg(message);
                setOnEditScheduleMsgState(true);
                setIsEditingMsg('RTC_MESSAGE');
                setShowPopoverAction(false);
                setShowMoreOptions(false);
                setShowEmojiContainer(false);
              }}
              visible={showPopoverAction && message.messageType !== 'CALL'}
              showMoreOptions={showMoreOptions}
              setShowMoreOptions={setShowMoreOptions}
              showEmojiContainer={showEmojiContainer}
              setShowEmojiContainer={setShowEmojiContainer}
              setReaction={setReaction}
              inboxType={inboxDetail && inboxDetail.inboxType}
            />
          )}

          {message.messageType === 'TEXT' && (
            <TextMessage messageObj={message} />
          )}
          {message.messageType === 'LINK' && (
            <LinkMessage
              setIsImgLoading={setIsImgLoading}
              messageObj={message}
            />
          )}
          {message.messageType === 'IMAGE' && (
            <Multiple
              caption={message.image.caption}
              img={message.image.imagesList}
              messageObj={message}
              toggleForwardMessageModal={toggleForwardMessageModal}
              forwardMessage={forwardMessage}
              selectedMsg={selectedMsg}
              setSelectedMsg={setSelectedMsg}
              selectedParticipants={selectedParticipants}
              from={from}
              setFrom={setFrom}
              imgToDownloadURL={imgToDownloadURL}
              setImgToDownloadURL={setImgToDownloadURL}
              deleteAttachment={deleteAttachment}
              setRtcMessageIdToDelete={setRtcMessageIdToDelete}
              rtcMessageIdToDelete={rtcMessageIdToDelete}
              setAttachmentIdToDelete={setAttachmentIdToDelete}
              attchmentIdToDelete={attchmentIdToDelete}
              openDeleteAttachmentModal={openDeleteAttachmentModal}
              setOpenDeleteAttachmentModal={setOpenDeleteAttachmentModal}
              whereIsTheDeleteFrom={whereIsTheDeleteFrom}
              setIsImgLoading={setIsImgLoading}
            />
          )}
          {message.messageType === 'FILE' && (
            <Doc
              isUploading={
                message.attachment.uploadStatus === 'UPLOADING' ||
                message.delivered === 'PENDING'
              }
              isMyMsg={true}
              format={message.attachment.format}
              title={message.attachment.title}
              size={message.attachment.size}
              url={message.attachment.url}
              caption={message.attachment.caption}
              messageObj={message}
            />
          )}
          {message.messageType === 'CALL' && (
            <Calls
              isMyMsg={true}
              messageDetail={message}
              inboxParticipants={inboxDetail && inboxDetail.participantsList}
              inboxId={inboxDetail && inboxDetail.inboxId}
              // selectedSuperAdmin={selectedSuperAdmin}
            />
          )}
          {message.messageType === 'VIDEO' && <Video messageObj={message} />}
          {message.messageType === 'AUDIO' && (
            <Audio messageObj={message} audio={message.audio} isMyMsg />
          )}
          <div className="time" hidden={message.messageType === 'CALL'}>
            {message.pinned && <MessageIcon.FilledPin color="#fff" />}
            <div>{message.sentAt}</div>
            {message.edited && <div>Edited</div>}
          </div>
        </div>
      </MessageWrapper>

      {ShowResendIcon(message) && (
        <div className="not-delivered">
          <MessageIcon.NotDeliveredIcon /> Not Delivered
        </div>
      )}

      {message.numberOfReplies > 0 && (
        <RepliedMessageNumber
          repliedNumber={message.numberOfReplies}
          setRightSideDetailType={() => {
            setRightSideDetailType(false);
            setRightSideDetailType(RIGHT_SIDE_CONTENT['4']);
            setSelectedMessage(message);
          }}
        />
      )}
      {message && message.reactionList && (
        <ReactionContainer visible={message.reactionList}>
          {keys &&
            keys.sort((a,b)=>a-b).map((single, idx) => {
              return (
                <Tooltip
                  title={
                    <div>
                      {group[single] &&
                        group[single].map(singleData => (
                          <div>
                            {filterAndGetEmployeeObject(
                              employeeList,
                              singleData,
                            ) &&
                              filterAndGetEmployeeObject(
                                employeeList,
                                singleData,
                              ).fullName}
                          </div>
                        ))}
                    </div>
                  }
                  overlayStyle={{
                    maxWidth: '100px',
                    fontSize: '11px',
                  }}
                  placement="top"
                >
                  <EmojiWrapper
                    onClick={() => {
                      if (
                        group[single] &&
                        group[single].some(
                          data =>
                            data.account &&
                            data.account.accountid ==
                              LocalDb.getUserAccountId(),
                        )
                      ) {
                        setReaction(
                          'REMOVE_REACTION_MESSAGE',
                          single,
                          CreateUUIDWithoutDash(),
                          message.refId,
                          '',
                          message.rtcMessageId,
                          '',
                          '',
                        );
                      } else {
                        setReaction(
                          'SET_REACTION_MESSAGE',
                          single,
                          CreateUUIDWithoutDash(),
                          message.refId,
                          '',
                          message.rtcMessageId,
                          '',
                          '',
                        );
                      }
                    }}
                    isMyReaction={
                      group[single] &&
                      group[single].some(
                        data =>
                          data.account &&
                          data.account.accountid == LocalDb.getUserAccountId(),
                      )
                    }
                  >
                    <span className="icon">{single}</span>
                    <span className="count">{group[single].length}</span>
                  </EmojiWrapper>
                </Tooltip>
              );
            })}
        </ReactionContainer>
      )}
      {ShowSentStatus(messageList, message.clientId) && (
        <p className="sent-status">Sent</p>
      )}
    </StyledMyMessage>
  );
};

MyMessage.propTypes = {
  message: PropTypes.object,
  setRightSideDetailType: PropTypes.func,
  setSelectedMsg: PropTypes.func,
  toggleDeleteMessageModal: PropTypes.func,
  toggleForwardMessageModal: PropTypes.func,
};

export default MyMessage;
