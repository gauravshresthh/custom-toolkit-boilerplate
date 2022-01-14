import React, { useEffect, useState } from 'react';
import CommonIcons from '../../../../../../assets/images/common/CommonIcons';
import PopoverModal from '../../../../../elements/PopoverModal';
import { StyledDateComponent } from './Style';
import moment from 'moment';
import { DatePicker } from 'antd';
import { GetDateForDatePicker } from '../../../../../../utils/dateHelper';

export default function DateComponent({
                                        props,
                                        setSelectedView,
                                        selectedView,
                                        setSelectedDate,
                                      }) {
  const dateFormat = 'DD MMM YYYY';

  let [selectedValue, setSelectedValue] = useState(new Date().getTime() / 1000);
  const [openTimePopover, setOpenTimePopover] = useState(false);

  useEffect(() => {
    setSelectedView(props.view);
  }, [props]);

  return (
    <StyledDateComponent>
      <div className='prev-icon' onClick={() => props.onNavigate('PREV')}>
        <CommonIcons.ArrowLeft />
      </div>
      <div className='next-icon' onClick={() => props.onNavigate('NEXT')}>
        <CommonIcons.ArrowRight />
      </div>

      <DatePicker
        suffixIcon={<CommonIcons.Calender />}
        allowClear={false}
        getPopupContainer={trigger => trigger.parentNode}
        format={dateFormat}
        style={{ width: '130px', height: '36px', border: 'none' }}
        popupStyle={{ width: '340px' }}
        value={selectedValue ? moment(GetDateForDatePicker(selectedValue), dateFormat) : null}
        onChange={e => {
          setSelectedValue(e.unix());
          // setSelectedDate(e.unix() * 1000);
        }}
      />
      <PopoverModal
        visible={openTimePopover}
        onVisibleChange={(visible) => setOpenTimePopover(visible)}
        trigger='click'
        contentWidth='100px'
        contentTopMargin='-10px'
        popoverContent={<div className='popover-item'>
          <div onClick={() => {
            props.onView('month');
            setOpenTimePopover(false);
          }}>Month
          </div>
          <div onClick={() => {
            props.onView('week');
            setOpenTimePopover(false);
          }}>Week
          </div>
          <div onClick={() => {
            props.onView('day');
            setOpenTimePopover(false);
          }}>Day
          </div>
        </div>}>
        <div className='date-dropdown'>
          {selectedView === 'day' ? 'Day' : selectedView === 'week' ? 'Week' : 'Month'}
          <CommonIcons.BottomArrow />
        </div>
      </PopoverModal>
      <div className='today-btn ml-auto' onClick={() => {
        setSelectedDate(new Date());
        // props.onNavigate('TODAY');
      }}>
        Today
      </div>
    </StyledDateComponent>
  );
}
