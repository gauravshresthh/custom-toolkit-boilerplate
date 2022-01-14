import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextEditorIcon from '../../../../../assets/images/TextEditorIcon';
import {
  DateTimeFormat,
  GetAddedTimestamp,
  GetStringForTimestamp,
  TimeConverterFunc,
} from '../../../../../utils/dateHelper';

const StyledSchedule = styled.div`
  background: #fff;
  width: 300px;

  .top-wrapper {
    padding: 10px;

    .time-wrapper {
      display: flex;
      color: #666;
      cursor: pointer;
      padding-bottom: 2px;
      :hover{
        background: #f0f0f0;
      }
    }
  }

  .bottom-wrapper {
    padding: 10px;
    display: flex;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    color: #666;
    cursor: pointer;
  }

  .d-flex {
    display: flex;
  }

  .pl {
    padding-left: 6px;
  }

  .pb {
    padding-bottom: 10px;
  }

  .ml-auto {
    margin-left: auto;
  }

  .btn-wrapper {
    display: flex;
    width: 200px;
    margin-left: auto;
    margin-top: 20px;
  }
`;

const SchedulePopoverContent = ({ setOpenMoreOption, setOpenDatePicker, onMessageSubmitted }) => {
  return (
    <StyledSchedule>
      <div className='top-wrapper'>
        <div className='d-flex pb'>
          <TextEditorIcon.Schedule />
          <div className='pl'>Schedule Message</div>
        </div>
        <div>
          <div className='time-wrapper' onClick={() => {
            setOpenMoreOption(false);
            onMessageSubmitted(GetAddedTimestamp(1000 * 60 * 60 * 6));
          }}>
            <div>{GetStringForTimestamp(GetAddedTimestamp(1000 * 60 * 60 * 6))}</div>
            <div className='ml-auto'>{DateTimeFormat(GetAddedTimestamp(1000 * 60 * 60 * 6))}</div>
          </div>
          <div className='time-wrapper' onClick={() => {
            setOpenMoreOption(false);
            onMessageSubmitted(GetAddedTimestamp(1000 * 60 * 60 * 12));
          }}>
            <div>{GetStringForTimestamp(GetAddedTimestamp(1000 * 60 * 60 * 12))}</div>
            <div className='ml-auto'>{DateTimeFormat(GetAddedTimestamp(1000 * 60 * 60 * 12))}</div>
          </div>
        </div>
      </div>
      <div
        className='bottom-wrapper'
        onClick={() => {
          setOpenDatePicker(true);
          setOpenMoreOption(false);
        }}
      >
        <TextEditorIcon.Calender />
        <div className='pl'>Pick Date & Time</div>
      </div>
    </StyledSchedule>
  );
};

SchedulePopoverContent.propTypes = {
  setOpenMoreOption: PropTypes.func,
};

export default SchedulePopoverContent;
