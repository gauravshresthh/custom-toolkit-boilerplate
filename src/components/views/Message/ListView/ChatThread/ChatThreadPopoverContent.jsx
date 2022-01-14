import React, { useState } from 'react';
import Styled from 'styled-components';
import PopoverModal from '../../../../elements/PopoverModal';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';
import MoveMessagePopoverContent from './MoveMessagePopoverContent';
import ConvertToGroupModal from '../../ConvertToGroupModal';
import ConfirmationModal from '../../../../elements/ConfirmationModal';
import MuteProto from '../../../../../protos/inbox_pb';

const StyledChatThreadPopoverContent = Styled.div`
    .action-contents{
      border-radius: 2px;
      width:170px;

    }
    .chat-actions{
        color: #666666;
        font-size: 14px;
        padding: 6px 14px;
        cursor:pointer;
        &:hover{
            background: #F8F8F8;
        }
        &.with-arrow{
          display: flex;
          justify-content:space-between;
          gap:10px;
        }
    }
`;

const ChatThreadPopoverContent = ({
  setActionPopoverVisibility,
  match,
  msg,
  sectionsList,
  isMuted,
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
  sectionId,
  groupName,
  setGroupName,
  LeaveMsg,
  toggleLeaveMsgModal,
  leaveInboxModal,
}) => {
  // move message popover visibility
  const [movePopoverVisibility, setMovePopoverVisibility] = useState(false);

  // mute thread
  function muteConversationClick() {
    setActionPopoverVisibility(false);
    const muteProtoData = new MuteProto.UpdateInboxNotificationRequest();
    muteProtoData.setInboxid(msg.inboxId);
    muteProtoData.setNotificationtype(isMuted ? 0 : 1);
    muteInbox(muteProtoData);
  }

  // delete thread
  function deleteConversationClick() {
    const deleteId = msg.inboxId;
    deleteConversation(deleteId);
  }

  // leave inbox
  function leaveConversationClick() {
    const leaveId = msg.inboxId;
    LeaveMsg(leaveId);
  }

  return (
    <>
      <StyledChatThreadPopoverContent>
        {/* actions */}
        <div className="action-contents">
          {msg.inboxType === 1 && (
            <p
              className="chat-actions"
              onClick={() => {
                toggleConvertModalVisibility(true);
                setActionPopoverVisibility(false);
              }}
            >
              Convert to group
            </p>
          )}
          <p className="chat-actions" onClick={muteConversationClick}>
            {isMuted ? 'Unmute' : 'Mute'}
          </p>
          {msg.isMember && (msg.inboxType == 2 || msg.inboxType == 3) && (
            <p
              className="chat-actions"
              onClick={() => {
                toggleLeaveMsgModal(true);
                setActionPopoverVisibility(false);
              }}
            >
              Leave
            </p>
          )}

          <p
            className="chat-actions"
            onClick={() => {
              toggleDeleteInboxModalVisibility(true);
              setActionPopoverVisibility(false);
            }}
          >
            {msg.inboxType === 1 ||
            ((msg.inboxType === 2 || msg.inboxType === 3) && msg.left)
              ? 'Delete'
              : 'Leave and Delete'}
          </p>
          {!msg.left && (
            <PopoverModal
              contentHeight="450px"
              visible={movePopoverVisibility}
              onVisibleChange={visibility =>
                setMovePopoverVisibility(visibility)
              }
              contentTopMargin="0px"
              contentWidth="150px"
              trigger="click"
              placement="rightTop"
              popoverContent={
                <MoveMessagePopoverContent
                  inboxDetail={msg}
                  movePopoverVisibility={movePopoverVisibility}
                  setMovePopoverVisibility={setMovePopoverVisibility}
                  setActionPopoverVisibility={setActionPopoverVisibility}
                  moveMessage={moveMessage}
                  sectionsList={sectionsList}
                  inboxId={msg.inboxId}
                  createSection={createSection}
                  btnLoading={btnLoading}
                  sectionId={sectionId}
                />
              }
              children={
                <p className="chat-actions with-arrow">
                  Move message
                  <span>
                    <CommonIcons.ArrowRight />
                  </span>
                </p>
              }
            />
          )}
        </div>
      </StyledChatThreadPopoverContent>
      {/* convert to group modal */}
      <ConvertToGroupModal
        groupName={groupName}
        setGroupName={setGroupName}
        match={match}
        msg={msg}
        modalVisible={convertModalVisibility}
        btnLoading={btnLoading}
        convertToGroup={convertToGroup}
        closeConvertGroupModal={() => {
          toggleConvertModalVisibility(false);
        }}
      />

      {/* delete confirmation modal */}
      <ConfirmationModal
        visibility={deleteModalVisibility}
        title="Delete confirmation"
        cancelLabel="cancel"
        actionLabel="delete"
        content="Are you sure you want to delete?"
        closeModal={() => toggleDeleteInboxModalVisibility(false)}
        onClick={deleteConversationClick}
        loading={btnLoading}
      />

      {/* leave confirmation modal */}
      <ConfirmationModal
        visibility={leaveInboxModal}
        title="Leave confirmation"
        cancelLabel="cancel"
        actionLabel="leave"
        content="Are you sure you want to leave?"
        closeModal={() => toggleLeaveMsgModal(false)}
        onClick={leaveConversationClick}
      />
    </>
  );
};

export default ChatThreadPopoverContent;
