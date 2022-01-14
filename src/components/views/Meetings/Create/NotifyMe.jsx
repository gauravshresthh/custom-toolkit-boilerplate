import React from 'react';
import { StyledNotifyMe, Wrapper } from './Style';
import { Select } from 'antd';

const { Option } = Select;

export default function NotifyMe({ meetingObj, setMeetingObj }) {
  return (
    <StyledNotifyMe>
      <div className='title'>Notify Me</div>
      <Wrapper className='d-flex'>
        <input
          type='number'
          value={meetingObj.notify.count}
          onChange={(e) =>
            setMeetingObj({ ...meetingObj, notify: { ...meetingObj.notify, count: e.target.value } })
          }
        />
        <Select
          value={meetingObj.notify.timePeriod}
          size='large'
          style={{ width: '150px' }}
          onChange={(e) => {
            setMeetingObj({ ...meetingObj, notify: { ...meetingObj.notify, timePeriod: e } });
          }}
        >
          <Option value='MINUTES'>minutes</Option>
          <Option value='HOURS'>hours</Option>
          <Option value='DAYS'>days</Option>
          <Option value='WEEKS'>weeks</Option>
        </Select>
        <div className='ml'>
          before
        </div>
      </Wrapper>

    </StyledNotifyMe>
  );
}
