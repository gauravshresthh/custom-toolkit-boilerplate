import React, { useState } from 'react';
import { StyledCalender, StyleEvents } from './Style';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import CommonIcons from '../../../../../../assets/images/common/CommonIcons';
import DateComponent from '../DateComponent/DateComponent';
import PopoverModal from '../../../../../elements/PopoverModal';
import EventDetailPopover from '../EventDetailPopover';
import PopupModal from '../../../../../elements/PopupModal';
import EventDetailModal from '../EventDetailModal';
import EventDiv from '../EventDiv';
import { HexToHslConverter } from '../../../../../../utils/helper';
import { Meeting } from '../../../../../../containers/Meetings/model';
import { GetMinuteValue } from '../../../../../../utils/dateHelper';

const localizer = momentLocalizer(moment);

const eventPropGetter = (superAdminList, event, selectedView) => {
  return {
    style: {
      border: selectedView === 'month' ? 'none' : `solid 1px ${Meeting.GetSpObj(superAdminList, event.spAccountId) && Meeting.GetSpObj(superAdminList, event.spAccountId).color || '#376af5'}`,
      color: '#333',
      background: selectedView === 'month' ? 'none' : Meeting.GetSpObj(superAdminList, event.spAccountId) && HexToHslConverter(Meeting.GetSpObj(superAdminList, event.spAccountId).color) || '#E4ECFF',
      borderRadius: '0',
      borderLeft: selectedView === 'month' ? 'none' : `solid 5px ${Meeting.GetSpObj(superAdminList, event.spAccountId) && Meeting.GetSpObj(superAdminList, event.spAccountId).color || '#376af5'}`,
      fontWeight: 300,
      minHeight: '32px',
    },
  };
};

const customSlotPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
    };
  else return {};
};

export default function Calender({ meetingsList, superAdminList }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState('day');
  const [openEventDetail, setOpenEventDetail] = useState(false);
  const [openMeetingDetail, setOpenMeetingDetail] = useState(false);

  function Event({ event }) {
    return (
      <StyleEvents
        id={`${event.id}event-wrapper`}
        eventColor={Meeting.GetSpObj(superAdminList, event.spAccountId) && Meeting.GetSpObj(superAdminList, event.spAccountId).color}
        onClick={() => {
          setOpenEventDetail(event.id);
        }}
      >
        <PopoverModal
          visible={event.id === openEventDetail}
          onVisibleChange={(visible) => {
            !visible ? setOpenEventDetail(false) : setOpenEventDetail(visible);
          }}
          trigger='click'
          contentWidth='100px'
          placement='bottomLeft'
          maxHeight='500px'
          popoverContent={
            <EventDetailPopover setOpenEventDetail={setOpenEventDetail} setOpenMeetingDetail={setOpenMeetingDetail} />
          }>
          {
            selectedView === 'month' ? <div className='event-time'>
                <div className='event-color' />
                {GetMinuteValue(event.startTimestamp / 1000)} - {GetMinuteValue(event.endTimestamp /1000)}
              </div>
              :
              <EventDiv event={event} />
          }
        </PopoverModal>
      </StyleEvents>
    );
  }

  return (
    <StyledCalender>
      {meetingsList && <Calendar
        popup
        popupOffset={{ x: 30, y: 20 }}
        views={['month', 'week', 'day']}
        selectable={true}
        events={meetingsList}
        localizer={localizer}
        defaultView={Views.DAY}
        // dayPropGetter={customDayPropGetter}
        eventPropGetter={(event) => eventPropGetter(superAdminList, event, selectedView)}
        slotPropGetter={customSlotPropGetter}
        components={{
          event: Event,
          toolbar: props => (
            <DateComponent
              props={props}
              setSelectedView={setSelectedView}
              selectedView={selectedView}
              setSelectedDate={setSelectedDate}
            />),
        }}
        onShowMore={(events, date) => {
          console.log({ events }, { date });
        }}
        messages={{
          next: <CommonIcons.ArrowRight />,
          previous: <CommonIcons.ArrowLeft />,
          today: 'Today',
          showMore: total => (
            <div
              style={{ cursor: 'pointer' }}
              onMouseOver={e => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >{`+${total} more`}
            </div>
          ),
          // showMore: (target) =>{ console.log({target})}
        }}
        getDrilldownView={(targetDate, currentViewName, configuredViewNames) => {
          console.log({ targetDate }, { currentViewName }, { configuredViewNames });
          if (currentViewName === 'month' && configuredViewNames.includes('week'))
            return 'week';
          return null;
        }}
        onSelectEvent={(a, b) => {
          console.log({ a }, { b }, 'when event is clicked');
        }}
        date={selectedDate}
        onNavigate={date => {
          setSelectedDate(date);
        }}
      />}
      <PopupModal
        width='800px'
        modalVisible={openMeetingDetail}
        onCancel={() => setOpenMeetingDetail(false)}
        showCloseIcon={true}
        contentStyle={{ padding: '0' }}
        children={<EventDetailModal />} />
    </StyledCalender>
  );
}
