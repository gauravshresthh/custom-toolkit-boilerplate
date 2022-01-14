import React from 'react';
import Styled from 'styled-components';
import ScheduleMessage from '../../../../assets/images/messages/schedule-message.svg';
import history from '../../../../utils/history';

const StyledScheduledMessages = Styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 0 20px;
  div{
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    margin-left: 8px;
    cursor:pointer;
  }
  .ml-auto{
  margin-left:auto;
  }
`;

function ScheduledMessage({scheduledMsgCount}) {
  return (
    <StyledScheduledMessages onClick={()=> history.push('/messages/schedule/list')}>
      <img src={ScheduleMessage} alt="" />
      <div>Scheduled Message</div> <div className='ml-auto'>{scheduledMsgCount > 0 && scheduledMsgCount}</div>
    </StyledScheduledMessages>
  );
}

export default ScheduledMessage;
