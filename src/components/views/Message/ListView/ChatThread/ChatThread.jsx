import React, { useState } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';
import PopoverModal from '../../../../elements/PopoverModal';
import ChatThreadPopoverContent from './ChatThreadPopoverContent';
import { showDateAccordingly } from '../../../../../utils/dateHelper';
import { Inbox } from '../../../../../containers/Messages/model/InboxModel';
import history from '../../../../../utils/history';
import { CheckIfLastMsgIsUnread } from '../../../../../containers/Messages/List/helper';

import {
  formattedData,
  funcToMapMentionIdToName,
} from '../../../../views/Message/DetailView/Typing/helper';

const EditIcon = Styled.div`
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    display:${({ visible }) => (visible ? 'flex' : 'none')};

    &:hover{
        background: #d7d7d7;
      }
`;

const StyledChatThread = Styled.div`
display: flex;
justify-content:space-between;
    padding: 6px 22px;
    cursor:pointer;
    background:${props =>
      props.isActive
        ? 'rgb(227, 242, 255) none repeat scroll 0% 0%'
        : 'inherit'};

:only-child{
margin:0px 0;
}

:nth-child(n+2){
  margin-top:8px;
}

&:hover{
      background: ${props =>
        props.isActive
          ? 'rgb(227, 242, 255) none repeat scroll 0% 0%'
          : '#F0F0F0'};

  ${EditIcon}{
    display:flex;
  }
  }

    .content{
        display: flex;
        align-items: ${props => (props.isYou ? 'center' : null)}
    }
    .details{
    margin-left:10px;
    }

    .image{
        position: relative;
        .count{
          position: absolute;
          right: -2px;
          bottom: 0px;
          background: #ffffff;
          font-size: 10px;
          width: 16px;
          height: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          color: #376AF5;
        }
    }
    .name{
        display: flex;
        margin-bottom: ${props => (!props.isYou ? '2px' : '0px')};
        font-size: 16px;
        line-height: 18.75px;
        color:${props => (props.unreadMsg ? '#333' : '#666666')};
        font-weight: ${props => (props.unreadMsg ? '500' : '400')};
        .name-text{
          gap:4px;
          display: flex;
            .user-name{
              max-width: 110px;
            }
        }
        .mute-icon{
          margin-left: 4px;
        }
        .unread-msg-count{
        width:16px;
        height:16px;
        font-size:9px;
        background:#376af5;
        color:#fff;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        /* border:2px solid green; */
        }
    }
    .message{
        font-size: 12px;
        line-height: 14.6px;
        color: ${props => (props.unreadMsg ? '#333' : '#666666')};
        font-weight: ${props => (props.unreadMsg ? '500' : '400')};
        display: flex;
        .sender{
          margin-right: 2px;
          max-width: 40px;
        }
        .msg-text{
          max-width: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-left:2px;
          max-height: 15px;
          html,body{
          background: inherit !important;
          color:inherit !important;
          font-size: inherit !important;
          }
        }
    }
    .actions{
        display:flex;
        align-items:flex-end;
        flex-direction: column;
        justify-content: inherit;
    }
    }
    .time{
        color:${props => (props.unreadMsg ? '#333' : '#666666')};
        font-size: 10.9px;
        line-height: 11.74px;
    }
`;

const ChatThread = React.memo(
  ({
    match,
    handleChangeInActiveInboxId,
    sectionId,
    msg,
    sectionsList,
    activeInboxId,
    id,
    convertToGroup,
    moveMessage,
    muteInbox,
    deleteConversation,
    btnLoading,
    convertModalVisibility,
    toggleConvertModalVisibility,
    deleteModalVisibility,
    toggleDeleteInboxModalVisibility,
    createSection,
    publishSeenRequest,
    setIsSearching,
    LeaveMsg,
    toggleLeaveMsgModal,
    leaveInboxModal,
    setIsFromSchedule,
  }) => {
    const isMuted =
      (msg && msg.notificationType === 1) || (msg && msg.notificationType === 3)
        ? true
        : false;

    const [actionPopoverVisibility, setActionPopoverVisibility] = useState(
      false,
    );
    const [selectedSectionId, setSelectedSectionId] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [visible, setVisible] = useState(false);

    return (
      <StyledChatThread
        onMouseEnter={() => {
          const getId = document.getElementsByClassName('action-contents');
          if (getId) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }}
        onMouseLeave={() => setVisible(false)}
        key={id}
        unreadMsg={CheckIfLastMsgIsUnread(msg) && activeInboxId !== msg.inboxId}
        isActive={activeInboxId === msg.inboxId}
        isYou={msg.selfInbox}
        onClick={() => {
          console.log({msg});
          handleChangeInActiveInboxId(msg.inboxId);
          msg.lastMessage &&
            msg.unreadMsgCount > 0 &&
            publishSeenRequest(
              msg.lastMessage.clientId || msg.lastMessage.clientid,
              msg.lastMessage.rtcMessageId || msg.lastMessage.rtcmessageid,
              msg.inboxId,
              msg.unreadMsgCount,
            );
          // set isSearching to false here
          setIsSearching(false);
          setIsFromSchedule(false);
          history.push(`/messages/${sectionId}/${msg.inboxId}`);
        }}
      >
        <div>
          <div className="content">
            {msg && Inbox.GetInboxProfilePic(msg, '34px', '34px')}
            <div className="details">
              {/* name */}
              <div className="name">
                <div className="name-text">
                  <span className="user-name text-truncate">
                    {msg.subject ||
                      Inbox.GetParticipantsName(msg.participantsList)}
                  </span>
                  {msg.selfInbox ? ' (you)' : null}
                  {msg.unreadMsgCount > 0 &&
                    CheckIfLastMsgIsUnread(msg) &&
                    msg.inboxId !== activeInboxId && (
                      <div className="unread-msg-count">
                        {msg.unreadMsgCount > 9 ? '9+' : msg.unreadMsgCount}
                      </div>
                    )}
                </div>
                {!msg.selfInbox && isMuted ? (
                  <span className="mute-icon">
                    <CommonIcons.MuteIcon />
                  </span>
                ) : null}
              </div>

              {msg && msg.lastMessage && (
                <p className="message">
                  <p className="sender text-truncate">
                    {msg && msg.lastMessage && msg.lastMessage.isIncoming
                      ? msg &&
                        msg.lastMessage &&
                        msg.lastMessage.senderAccountObj &&
                        msg.lastMessage.senderAccountObj.fullName
                      : 'You '}
                  </p>
                  {msg &&
                  msg.lastMessage &&
                  (msg.lastMessage.clientid || msg.lastMessage.clientId)
                    ? ':'
                    : null}
                  <p className="msg-text text-truncate">
                    {msg &&
                    msg.lastMessage &&
                    msg.lastMessage.messageType &&
                    msg.lastMessage.messageType.includes('TEXT')
                      ? msg.lastMessage.text &&
                        msg.lastMessage.text.message &&
                        funcToMapMentionIdToName(
                          formattedData(msg.lastMessage),
                          msg.lastMessage.text.message,
                          msg.lastMessage.hasMentions,
                        )
                      : msg &&
                        msg.lastMessage &&
                        msg.lastMessage.messageType &&
                        msg.lastMessage.messageType.includes('LINK')
                      ? 'Sent a link'
                      : msg &&
                        msg.lastMessage &&
                        msg.lastMessage.messageType &&
                        msg.lastMessage.messageType.includes('IMAGE')
                      ? 'Sent an image'
                      : msg &&
                        msg.lastMessage &&
                        msg.lastMessage.messageType &&
                        (msg.lastMessage.messageType.includes('DOC') ||
                          msg.lastMessage.messageType.includes('FILE'))
                      ? 'Sent an attachment'
                      : msg &&
                        msg.lastMessage &&
                        msg.lastMessage.messageType &&
                        msg.lastMessage.messageType.includes('AUDIO')
                      ? 'Sent an audio'
                      : msg &&
                        msg.lastMessage &&
                        msg.lastMessage.messageType &&
                        msg.lastMessage.messageType.includes('VIDEO')
                      ? 'Sent a video'
                      : msg &&
                        msg.lastMessage &&
                        msg.lastMessage.messageType &&
                        msg.lastMessage.messageType.includes('CALL')
                      ? 'Made a call'
                      : null}
                  </p>
                </p>
              )}
            </div>
          </div>
        </div>

        {msg && !msg.selfInbox ? (
          <div
            className="actions"
            onClick={e => {
              e.stopPropagation();
              setSelectedSectionId(msg.sectionId);
              setGroupName(msg.subject);
            }}
          >
            <PopoverModal
              visible={actionPopoverVisibility}
              onVisibleChange={visibility =>
                setActionPopoverVisibility(visibility)
              }
              contentTopMargin="-10px"
              contentWidth="132px"
              trigger="click"
              placement="bottom"
              popoverContent={
                <ChatThreadPopoverContent
                  match={match}
                  msg={msg}
                  sectionsList={sectionsList}
                  isMuted={isMuted}
                  convertToGroup={convertToGroup}
                  moveMessage={moveMessage}
                  muteInbox={muteInbox}
                  deleteConversation={deleteConversation}
                  btnLoading={btnLoading}
                  convertModalVisibility={convertModalVisibility}
                  toggleConvertModalVisibility={toggleConvertModalVisibility}
                  deleteModalVisibility={deleteModalVisibility}
                  toggleDeleteInboxModalVisibility={
                    toggleDeleteInboxModalVisibility
                  }
                  createSection={createSection}
                  setActionPopoverVisibility={setActionPopoverVisibility}
                  sectionId={selectedSectionId}
                  setGroupName={setGroupName}
                  groupName={groupName}
                  LeaveMsg={LeaveMsg}
                  toggleLeaveMsgModal={toggleLeaveMsgModal}
                  leaveInboxModal={leaveInboxModal}
                />
              }
              children={
                <div style={{ height: '10px' }}>
                  <EditIcon visible={visible} onClick={() => setVisible(true)}>
                    <CommonIcons.MoreIcon width="16px" />
                  </EditIcon>
                </div>
              }
            />
            <p className="time">
              {msg &&
                showDateAccordingly(
                  msg.lastMessage && msg.lastMessage
                    ? msg.lastMessage.sentAtTimestamp
                    : msg.createdAt,
                )}
            </p>
          </div>
        ) : null}
      </StyledChatThread>
    );
  },
);

StyledChatThread.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
};

export default ChatThread;
