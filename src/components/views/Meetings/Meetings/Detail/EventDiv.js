import React from 'react';
import { MeetingsIcon } from '../../../../../assets/images/meetings/Meetings';
import AvatarGroup from '../../../../elements/Image/AvatarGroup';
import { getElemWidth } from '../../../../../utils/helper';
import { Meeting } from '../../../../../containers/Meetings/model';

export default function EventDiv({ event }) {
  if (!event) {
    return null;
  }
  return (
    <div className='event-wrapper'>{
      getElemWidth(`${event.id}event-wrapper`) < 60 ?
        <div className='event-content'> {event.title}</div>
        :
        <>
          <div className='event-content'><MeetingsIcon.MeetingTitle /> {event.title}</div>
          {event.location && event.location.city &&
          <div className='event-content'>
            <div>
              <MeetingsIcon.Location />
            </div>
            {event.location.city}</div>}
          <div className='event-content'><MeetingsIcon.Time />In-progress : 00:05:32</div>
          <div className='join-now-btn'>Join Now</div>
          <AvatarGroup profilePicList={Meeting.GetGuestProfilePic(event.guestList)} />
        </>
    }
    </div>
  );
}
