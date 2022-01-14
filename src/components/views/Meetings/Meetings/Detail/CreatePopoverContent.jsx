import React from 'react';
import styled from 'styled-components';
import { MeetingsIcon } from '../../../../../assets/images/meetings/Meetings';
import history from '../../../../../utils/history';

export function CreatePopoverContent() {
  const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

    .options-wrapper {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      align-items: center;
      margin: 10px 42px 2px 0;

      .option-icon {
        background: #fff;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(51, 51, 51, 0.2);
        border-radius: 50px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `;

  const options = [
    { id: '4', title: 'Broadcast', icon: <MeetingsIcon.Broadcast width='30px' /> },
    { id: '3', title: 'Reminder', icon: <MeetingsIcon.Reminder width='30px' /> },
    { id: '2', title: 'Events', icon: <MeetingsIcon.Events width='16px' /> },
    { id: '1', title: 'Meetings', icon: <MeetingsIcon.Meetings width='18px' />, path: '/meetings/create' },
  ];
  return (
    <StyledContent>
      {options && options.map(single =>
        <div key={single.id} className='options-wrapper' onClick={() => history.push(single.path)}>
          {single.title}
          <div className='option-icon'>
            {single.icon}
          </div>
        </div>,
      )}
    </StyledContent>
  );
}
