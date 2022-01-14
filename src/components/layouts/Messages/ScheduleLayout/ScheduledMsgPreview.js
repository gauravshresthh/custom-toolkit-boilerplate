import React from 'react';
import styled from 'styled-components';
import { RIGHT_SIDE_CONTENT } from '../../../../containers/Messages/Details/constants';
import { DayDateFormatting, GetMinuteValue } from '../../../../utils/dateHelper';

const StyledSchedulePreview = styled.div`
  width: fit-content;
  cursor: pointer;
  color: #666;
  display: flex;
  padding-bottom: 4px;

  .view-btn {
    color: #376af5;
    margin-left: 6px;
  }
`;

const ScheduleLayout = ({ scheduledMsgCount, scheduledMsgList, setRightSideDetailType,fetchScheduledMessageList,refId }) => {
  if (!scheduledMsgList || !scheduledMsgList[0]) {
    return null;
  }
  return (
    <StyledSchedulePreview onClick={() => {
      // fetchScheduledMessageList(refId);
      setRightSideDetailType(RIGHT_SIDE_CONTENT['5']);
    }}>
      {scheduledMsgCount === 1 ? `Message scheduled for ${DayDateFormatting(scheduledMsgList[0].scheduledAt / 1000)} at ${GetMinuteValue(scheduledMsgList[0].scheduledAt / 1000)}.` : `${scheduledMsgCount} messages are scheduled.`}
      <div className='view-btn'>View</div>
    </StyledSchedulePreview>
  );
};

export default ScheduleLayout;
