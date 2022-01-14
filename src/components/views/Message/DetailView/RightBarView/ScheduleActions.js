import React from 'react';
import Styled from 'styled-components';
import { Tooltip } from 'antd';
import TextEditorIcon from '../../../../../assets/images/TextEditorIcon';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';

const StyledActionPopover = Styled.div`
position:absolute;
display:flex;
top:6px;
right:15px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
padding:4px;
.actions{
cursor:pointer;
width:30px;
height:25px;
display:flex;
align-items:center;
justify-content:center;
:hover{
background:#f0f0f0;
}
}
`;

const ScheduleContent = ({
  scheduledMessage,
  selectedScheduledMsg,
  setSelectedScheduledMsg,
  toggleDeleteMessageModal,
  openRescheduleModal,
  openSendModal,
  onEditScheduledMsg,
  onEditScheduleMsgState,
  setOnEditScheduleMsgState,
  toggleScheduleMsgModal
}) => {
  return (
    <StyledActionPopover>
      <Tooltip
        title="Edit"
        placement="top"
        getPopupContainer={trigger => trigger.parentNode}
      >
        <div hidden={scheduledMessage.messageType !=='TEXT' && scheduledMessage.messageType !=='LINK'}
          className="actions"
          onClick={() => {
            setSelectedScheduledMsg(scheduledMessage);
            setOnEditScheduleMsgState(true);
            onEditScheduledMsg();
          }}
        >
          <CommonIcons.EditIcon />
        </div>
      </Tooltip>
      <Tooltip
        title="Delete"
        placement="top"
        getPopupContainer={trigger => trigger.parentNode}
      >
        <div
          className="actions"
          onClick={() => {
            toggleDeleteMessageModal(true, 'SCHEDULED');
            setSelectedScheduledMsg(scheduledMessage);
          }}
        >
          <CommonIcons.DeleteIcon />
        </div>
      </Tooltip>
      <Tooltip
        title="Send"
        placement="top"
        getPopupContainer={trigger => trigger.parentNode}
      >
        <div
          className="actions"
          onClick={() => {
            openSendModal(true);
            setSelectedScheduledMsg(scheduledMessage);
          }}
        >
          <TextEditorIcon.SendIcon height="15px" color="#376af5" />
        </div>
      </Tooltip>
      <Tooltip
        title="Reschedule"
        placement="top"
        getPopupContainer={trigger => trigger.parentNode}
      >
        <div
          className="actions"
          onClick={() => {
            toggleScheduleMsgModal(true);
            setSelectedScheduledMsg(scheduledMessage);
          }}
        >
          <TextEditorIcon.Schedule width="18px" height="16px" color="#666" />
        </div>
      </Tooltip>
    </StyledActionPopover>
  );
};

export default ScheduleContent;
