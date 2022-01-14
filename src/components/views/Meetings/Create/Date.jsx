import React from 'react';
import { DateSwitch, StyledDate } from './Style';
import { DatePicker, TimePicker } from 'antd';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import {
  DisabledDateTillToday,
  GetDateForDatePicker,
  GetDisabledHours,
  GetDisabledMinutes,
  GetTimeForRangePicker,
} from '../../../../utils/dateHelper';
import moment from 'moment';
import SwitchComponent from '../../../elements/Switch';

export default function DateComponent({
                                        meetingObj,
                                        setMeetingObj,
                                        startDateValue,
                                        setStartDateValue,
                                        startTimeValue,
                                        setStartTimeValue,
                                        endDateValue,
                                        setEndDateValue,
                                        endTimeValue,
                                        setEndTimeValue,
                                      }) {
  const dateFormat = 'DD MMM YYYY';
  const customDateFormat = value => {
    if (value.format(dateFormat) === GetDateForDatePicker(new Date().getTime() / 1000)) {
      return `Today`;
    } else {
      return `${value.format(dateFormat)}`;
    }
  };
  const timeFormat = 'h:mm a';

  return (
    <StyledDate className='d-flex mb'>
      <div className='w-100'>
        <div className='title'>{meetingObj.allDay ? 'Start Date' : 'Meeting Date'}</div>
        <DatePicker
          suffixIcon={<></>}
          allowClear={false}
          getPopupContainer={trigger => trigger.parentNode}
          format={customDateFormat}
          style={{ width: '100%', height: '36px' }}
          popupStyle={{ width: '310px' }}
          value={startDateValue ? moment(GetDateForDatePicker(startDateValue), dateFormat) : null}
          onChange={e => {
            setStartDateValue(e.unix());
          }}
          disabledDate={DisabledDateTillToday}
        />
      </div>
      <div className='w-100'>
        <TimePicker
          suffixIcon={<CommonIcons.BottomArrow />}
          use12Hours
          allowClear={false}
          format={timeFormat}
          getPopupContainer={trigger => trigger.parentNode}
          type='time'
          value={
            startTimeValue
              ? moment(GetTimeForRangePicker(startTimeValue), timeFormat)
              : null
          }
          onChange={value => {
            setStartTimeValue(value.unix());
          }}
          popupStyle={{ width: '170px' }}
          style={{ width: '100%', height: '36px' }}
          disabledHours={() => GetDisabledHours(startTimeValue)}
          disabledMinutes={() => GetDisabledMinutes(startTimeValue)}
        />
      </div>

      <div className='to-div mb'>to</div>
      {meetingObj.allDay &&
      <div className='w-100'>
        <div className='title' hidden={!meetingObj.allDay}>End Date</div>
        <DatePicker
          suffixIcon={<></>}
          allowClear={false}
          getPopupContainer={trigger => trigger.parentNode}
          format={customDateFormat}
          style={{ width: '100%', height: '36px' }}
          popupStyle={{ width: '310px' }}
          value={endDateValue ? moment(GetDateForDatePicker(endDateValue), dateFormat) : null}
          onChange={e => {
            setEndDateValue(e.unix());
          }}
          disabledDate={DisabledDateTillToday}
        />
      </div>
      }
      <div className='w-100'>
        <TimePicker
          suffixIcon={<CommonIcons.BottomArrow />}
          use12Hours
          allowClear={false}
          format={timeFormat}
          getPopupContainer={trigger => trigger.parentNode}
          type='time'
          value={
            endTimeValue
              ? moment(GetTimeForRangePicker(endTimeValue), timeFormat)
              : null
          }
          onChange={value => {
            setEndTimeValue(value.unix());
          }}
          popupStyle={{ width: '170px' }}
          style={{ width: '100%', height: '36px' }}
          disabledHours={() => GetDisabledHours(endTimeValue)}
          disabledMinutes={() => GetDisabledMinutes(endTimeValue)}
        />
      </div>

      <DateSwitch className={meetingObj.allDay ? 'w-100 mb':'w-70 mb'}>
        <SwitchComponent
          label='All day'
          color='#333'
          checked={meetingObj.allDay}
          onChange={() => {
            setMeetingObj({
              ...meetingObj,
              allDay: !meetingObj.allDay,
            });
          }} />
      </DateSwitch>
    </StyledDate>

  );
}
