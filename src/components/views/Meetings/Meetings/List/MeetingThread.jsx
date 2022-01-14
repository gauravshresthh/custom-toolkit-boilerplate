import React from 'react';
import styled from 'styled-components';
import { MeetingsIcon } from '../../../../../assets/images/meetings/Meetings';
import AvatarGroup from '../../../../elements/Image/AvatarGroup';
import { Meeting } from '../../../../../containers/Meetings/model';

const StyledMeetingThread = styled.div`
  display: flex;
  padding: 6px 20px;
  cursor: pointer;

  :hover {
    background: #f0f0f0;
  }

  .icon {
    width: 36px;
  }

  .meeting-content {
    padding-left: 6px;
    color: #666666;
    font-size: 16px;
  }

  .ml-auto {
    margin-left: auto;
  }
`;

export default function MeetingsThread({ meetingObj }) {
  if (!meetingObj) {
    return null;
  }
  return (
    <StyledMeetingThread>
      <div className='icon'>
        <MeetingsIcon.UpcomingMeeting />
      </div>
      <div className='meeting-content text-truncate'>
        {meetingObj.title}
      </div>
      <div className='ml-auto'>
        <AvatarGroup profilePicList={Meeting.GetGuestProfilePic(meetingObj.guestList)} />
      </div>
    </StyledMeetingThread>
  );
}
