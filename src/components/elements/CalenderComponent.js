import React from 'react';
import { Calendar } from 'antd';
import CommonIcons from '../../assets/images/common/CommonIcons';
import moment from 'moment';

function onPanelChange(value, mode) {
  console.log('panel',value, mode);
}

function onDateChange(value,setSelectedValue,setSelectedDate) {
  setSelectedValue(moment(`${value.year()}-${value.month()}-${value.date()}`));
  setSelectedDate(moment(value).format());
}

export default function CalenderComponent({ selectedValue, setSelectedValue, setSelectedDate }) {
  return (
    <Calendar
      fullscreen={false}
      value={selectedValue}
      onChange={(value) => {
        console.log('%cSELECTED DATE','font-size:20px', { value });
        onDateChange(value,setSelectedValue,setSelectedDate)
      }}
      headerRender={({ value, type, onChange, onTypeChange }) => {
        return (
          <div style={{ padding: 8, justifyContent: 'space-between' }} className='d-flex'>
            <div
              className='prev-icon'
              onClick={() => {
                const newValue = value.clone();
                newValue.month(parseInt((value.month() - 1).toString(), 10));
                onChange(newValue);
              }}>
              <CommonIcons.ArrowLeft />
            </div>
            {selectedValue && selectedValue.format('MMMM YYYY')}
            <div
              className='next-icon'
              onClick={() => {
                const newValue = value.clone();
                newValue.month(parseInt((value.month() + 1).toString()));
                onChange(newValue);
              }}>
              <CommonIcons.ArrowRight />
            </div>
          </div>
        );
      }}
      onPanelChange={onPanelChange}
    />
  );
}
