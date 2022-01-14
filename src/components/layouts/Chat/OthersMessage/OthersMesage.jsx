import React, { useState } from 'react';
import Multiple from '../ChatMessage/Image/Multiple';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import Doc from '../ChatMessage/Doc';
import Video from '../ChatMessage/Video/Video';
import RepliedMessageNumber from '../../../elements/RepliedMessageNumber';
import {
  BottomContainer,
  EmojiWrapper,
  MarginLeft,
  ReactionContainer,
  StyledOtherMessage,
} from './style';
import { RIGHT_SIDE_CONTENT } from '../../../../containers/Messages/Details/constants';
import Image from '../../../elements/Image/Image';
import TextMessage from '../ChatMessage/Text';
import LinkMessage from '../ChatMessage/Link';
import { MessageIcon } from '../../../../assets/images/messages/MessageIcon';
import MessageActionIcons from '../../../views/Message/DetailView/ChatView/MessageActionIcons';
import PopoverModal from '../../../elements/PopoverModal';
import ProfileCard from '../../../views/Message/DetailView/ChatView/ProfileCard';
import Calls from '../ChatMessage/Calls/Calls';
import Audio from '../ChatMessage/Audio/Audio';
import { ShowResendIcon } from '../../../../containers/Messages/Details/helper';

import LocalDb from '../../../../localStorage';
import { CreateUUIDWithoutDash } from '../../../../utils/helper';

const OthersMessage = ({
  message,
  setRightSideDetailType,
  setSelectedMessage,
  setSelectedMsg,
  toggleForwardMessageModal,
  isReplyContent,
  isCreatedPage,
  showProfilePicture,
  forwardMessage,
  selectedMsg,
  selectedParticipants,
  from,
  setFrom,
  inboxDetail,
  selectedSuperAdmin,
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
  toggleDeleteMessageModal,
  showMoreOptions,
  setShowMoreOptions,
  showEmojiContainer,
  setShowEmojiContainer,
  setReaction,
  isPrivate,
  sendNewMessage,
  resendFile,
  employeeList,
}) => {
  const [showPopoverAction, setShowPopoverAction] = useState(false);
  if (!message) {
    return null;
  }

  function filterAndGetEmployeeObject(employeeId, accountId1) {
    return (
      employeeId &&
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

  const clickContent = (
    <ProfileCard
      isReplyContent={isReplyContent}
      image={
        message &&
        message.senderAccountObj &&
        message.senderAccountObj.profilePic
      }
      name={
        message && message.senderAccountObj && message.senderAccountObj.fullName
      }
      email={
        message && message.senderAccountObj && message.senderAccountObj.email
      }
      phone={
        message && message.senderAccountObj && message.senderAccountObj.phone
      }
      onCallClick={() => {}}
      onChatClick={() => {}}
    />
  );

  return (
    <StyledOtherMessage isReplyContent={isReplyContent}>
      {showProfilePicture || isReplyContent ? (
        <PopoverModal
          contentWidth={isReplyContent ? '180px' : '246px'}
          contentTopMargin="50px"
          trigger="click"
          placement="right"
          maxHeight="auto"
          popoverContent={clickContent}
          // eslint-disable-next-line
          children={
            <Image
              src={
                message &&
                message.senderAccountObj &&
                message.senderAccountObj.profilePic
              }
              width="32px"
              height="32px"
              isActive={
                message &&
                message.senderAccountObj &&
                message.senderAccountObj.isActive
              }
              showStatus={true}
            />
          }
        />
      ) : (
        <div style={{ minWidth: '32px' ,maxWidth: '32px' }} />
      )}
      <div style={{ overflow: isReplyContent ? 'hidden' : '' }}>
        <div className="d-flex">
          <MarginLeft>
            <div
              className="message-content"
              onMouseEnter={() => {
                setShowPopoverAction(true);
              }}
              onMouseLeave={() => {
                setShowPopoverAction(false);
                setShowMoreOptions(false);
                setShowEmojiContainer(false);
              }}
            >
              <PopoverModal
                contentWidth="246px"
                contentTopMargin="0px"
                trigger="click"
                placement="right"
                maxHeight="auto"
                popoverContent={clickContent}
                children={
                  <div className="name" hidden={!showProfilePicture}>
                    {message &&
                      message.senderAccountObj &&
                      message.senderAccountObj.fullName}
                  </div>
                }
              />
              {showHoverOptions &&
                showPopoverAction &&
                inboxDetail &&
                !inboxDetail.left &&
                message.messageType !== 'CALL' && (
                  <MessageActionIcons
                    isMyMsg={false}
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
                    visible={
                      showPopoverAction && message.messageType !== 'CALL'
                    }
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
                <LinkMessage messageObj={message} />
              )}
              {message.messageType === 'IMAGE' && (
                <Multiple
                  caption={message.image.caption}
                  img={message.image.imagesList}
                  messageObj={message}
                  isReplyContent={isReplyContent}
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
                />
              )}
              {message.messageType === 'FILE' && (
                <Doc
                  messageObj={message}
                  isUploading={message.attachment.uploadStatus === 'UPLOADING'}
                  isMyMsg={false}
                  format={message.attachment.format}
                  title={message.attachment.title}
                  size={message.attachment.size}
                  url={message.attachment.url}
                  caption={message.attachment.caption}
                />
              )}
              {message.messageType === 'CALL' && (
                <Calls
                  messageDetail={message}
                  inboxParticipants={
                    inboxDetail && inboxDetail.participantsList
                  }
                  inboxId={inboxDetail && inboxDetail.inboxId}
                  selectedSuperAdmin={selectedSuperAdmin}
                />
              )}

              {message.messageType === 'VIDEO' && (
                <Video messageObj={message} />
              )}
              {message.messageType === 'AUDIO' && (
                <Audio
                  messageObj={message}
                  audio={message.audio}
                  isMyMsg={false}
                />
              )}

              {isPrivate ? (
                <BottomContainer>
                  <div className="onlyYou">Only you can view</div>
                  <div className="time" hidden={message.messageType === 'CALL'}>
                    {message.sentAt}
                  </div>
                </BottomContainer>
              ) : (
                <div
                  className="time d-flex"
                  hidden={message.messageType === 'CALL'}
                  style={{
                    justifyContent: 'flex-end',
                    gap: '6px',
                    alignItems: 'center',
                  }}
                >
                  {message.pinned && <MessageIcon.FilledPin />}
                  {message.edited && <div>Edited</div>}
                  <div>{message.sentAt}</div>
                </div>
              )}
            </div>
            {message.numberOfReplies > 0 && !isReplyContent && (
              <RepliedMessageNumber
                repliedNumber={message.numberOfReplies}
                setRightSideDetailType={() => {
                  setRightSideDetailType(false);
                  setRightSideDetailType(RIGHT_SIDE_CONTENT['4']);
                  setSelectedMessage(message);
                }}
              />
            )}
            {message && message.reactionList && !isReplyContent && (
              <ReactionContainer visible={message.reactionList}>
                {keys &&
                  keys.map((single, idx) => {
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
                          lineHeight: '14px',
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
                                data.account.accountid ==
                                  LocalDb.getUserAccountId(),
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
          </MarginLeft>

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
        </div>
        {ShowResendIcon(message) && (
          <div className="not-delivered">
            <MessageIcon.NotDeliveredIcon /> Not Delivered
          </div>
        )}
      </div>
    </StyledOtherMessage>
  );
};

OthersMessage.propTypes = {
  message: PropTypes.object,
};

export default OthersMessage;
