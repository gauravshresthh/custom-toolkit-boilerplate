import React, { useEffect, useState } from 'react';
import { StyledCustomRepeatation, WeekRadioBtn } from './Style';
import { DatePicker, Radio, Select } from 'antd';
import SubmitButton from '../../../elements/Button/SubmitButton';
import { DisabledDateTillSpecificDate, GetDateForDatePicker } from '../../../../utils/dateHelper';
import CustomPopover from '../../../elements/CustomPopover/CustomPopover';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import moment from 'moment';
import {
  CheckIfWeekIsActive,
  GetValidStartDate,
  monthOptions,
  weeks,
} from '../../../../containers/Meetings/CreateMeeting/helper';

const { Option } = Select;
const dateFormat = 'DD MMM YYYY';

export default function CustomRepeatation({ setRepeatationValue, setMeetingObj, meetingObj, setShowCustomModal }) {
  const [repeatValue, setRepeatValue] = useState({ count: 1, value: 'DAY' });
  const [changeEndsOnValue, setChangeEndsOnValue] = useState(false);
  const [endsValue, setEndsValue] = useState({
    key: 'ON',
    value: GetValidStartDate(repeatValue.value, repeatValue.count) / 1000,
  });
  const [selectedWeek, setSelectedWeek] = useState([]);
  const [openMonthOption, setOpenMonthOption] = useState(false);
  const [selectedMonthValue, setSelectedMonthValue] = useState('EXACT_DATE');

  useEffect(() => {
    if (changeEndsOnValue) {
      setEndsValue({
        ...endsValue,
        value: GetValidStartDate(repeatValue.value, repeatValue.count) / 1000,
      });
      setChangeEndsOnValue(false);
    }
  }, [changeEndsOnValue]);

  return (
    <StyledCustomRepeatation>
      <div>
        Repeat every
      </div>
      <div className='repeat d-flex '>
        <input
          type='number'
          value={repeatValue.count}
          onChange={(e) => {
            setRepeatValue({ ...repeatValue, count: e.target.value });
          }} />
        <Select
          size='large'
          style={{ width: '100%' }}
          value={repeatValue.value}
          onChange={(e) => {
            setRepeatValue({ ...repeatValue, value: e });
            endsValue.key === 'ON' && setChangeEndsOnValue(true);
          }}>
          <Option value='DAY'>Day</Option>
          <Option value='WEEK'>Week</Option>
          <Option value='MONTH'>Month</Option>
          <Option value='YEAR'>Year</Option>
        </Select>
      </div>


      <div hidden={repeatValue.value !== 'WEEK' && repeatValue.value !== 'MONTH'}>
        Repeats on
      </div>
      {
        repeatValue.value === 'WEEK' && <div className='week-radio-btn-wrapper'>
          {weeks.map(single =>
            <WeekRadioBtn
              key={single.id}
              id={single.id}
              isActive={CheckIfWeekIsActive(selectedWeek, single.id)}
              onClick={() => {
                let initialList = selectedWeek ? [...selectedWeek] : [];
                if (selectedWeek.includes(single.id)) {
                  let filteredList = initialList.filter(singleWeek => singleWeek.id !== single.id);
                  setSelectedWeek(filteredList);
                } else {
                  initialList.push(single);
                  setSelectedWeek(initialList);
                }
              }}>{single.value}</WeekRadioBtn>)}
        </div>
      }
      {
        repeatValue.value === 'MONTH' &&
        <CustomPopover
          showPopover={openMonthOption}
          setShowPopover={setOpenMonthOption}
          popoverContent={
            monthOptions.map(single =>
              <div
                key={single.id}
                className='popover-content'
                onClick={() => {
                  setSelectedMonthValue(single.id);
                  setOpenMonthOption(false);
                }}
              >
                {single.value}
              </div>)
          }
          children={
            <div className='month-wrapper'>
              {monthOptions.filter(singleFilter => singleFilter.id === selectedMonthValue)[0] &&
              monthOptions.filter(singleFilter => singleFilter.id === selectedMonthValue)[0].value}
              <div>
                <CommonIcons.BottomArrow />
              </div>
            </div>
          }
        />
      }

      <div>
        Ends
      </div>
      <div className='radio-btn-wrapper'>
        <div>
          <Radio
            checked={endsValue.key === 'NEVER'}
            onChange={() => setEndsValue({ key: 'NEVER' })} /> Never
        </div>
        <div className='radio-btn'>
          <Radio
            checked={endsValue.key === 'ON'}
            onChange={() => setEndsValue({
              key: 'ON',
              value: GetValidStartDate(repeatValue.value, repeatValue.count) / 1000,
            })} /> On
          {endsValue.key === 'ON' && <div className='radio-btn-field'>
            <DatePicker
              suffixIcon={false}
              allowClear={false}
              getPopupContainer={trigger => trigger.parentNode}
              format={dateFormat}
              style={{ width: '150px', height: '36px', border: 'none' }}
              popupStyle={{ width: '340px' }}
              value={endsValue.value ? moment(GetDateForDatePicker(endsValue.value), dateFormat) : null}
              onChange={e => {
                setEndsValue({ key: 'ON', value: e.unix() });
              }}
              disabledDate={DisabledDateTillSpecificDate(new Date(GetValidStartDate(repeatValue.value, repeatValue.count,1)))}
            />
          </div>}
        </div>
        <div className='radio-btn'>
          <Radio
            checked={endsValue.key === 'AFTER'}
            onChange={() => setEndsValue({ key: 'AFTER', value: 1 })} /> After
          {endsValue.key === 'AFTER' && <div className='radio-btn-field'>
            <input
              type='number'
              value={endsValue.value}
              onChange={(e) =>
                setEndsValue({ ...endsValue, value: parseInt(e.target.value) })}
            /> occurrence
          </div>}
        </div>
      </div>

      <div className='btn-wrapper'>
        <SubmitButton
          text='Save'
          width='100px'
          onClick={() => {
            setRepeatationValue({
              repeatValue, endsValue, selectedWeek, selectedMonthValue,
            });
            setMeetingObj({ ...meetingObj, repeatation: 'CUSTOM' });
            setShowCustomModal(false);
          }} />
      </div>
    </StyledCustomRepeatation>
  );
}
