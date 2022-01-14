import React from 'react';
import { MeetingsIcon } from '../../../../../assets/images/meetings/Meetings';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';
import { StylePopoverEventDetail } from './Calender/Style';
import SubmitButton from '../../../../elements/Button/SubmitButton';

export default function EventDetailPopover({setOpenEventDetail,setOpenMeetingDetail}) {
  return (
    <StylePopoverEventDetail>
      <div className='action-wrapper'>
        <div onClick={() => setOpenMeetingDetail(true)}>
          <MeetingsIcon.Expand />
        </div>
        <div>
          <CommonIcons.EditIcon />
        </div>
        <div>
          <CommonIcons.DeleteIcon />
        </div>
        <div onClick={(e)=> {
          e.stopPropagation();
          setOpenEventDetail(false);
        }}>
          <CommonIcons.CrossIcon />
        </div>
      </div>
      <div className='event-wrapper'>
        <div className='event-title'>
          <MeetingsIcon.MeetingTitle width='20px'/>
          Staff Meeting
        </div>
        <div className='event-date'>
          Wednesday 12 Sep, 2021 (3:00A.M - 3:30A.M)
        </div>
        <div className='event-description'>
          A monthy meeting organized for the all the
          member of Treeleaf Technologies.
        </div>
        <div className='data-wrapper'>
          <MeetingsIcon.Link />
          <div className='meeting-link'>
            invite.anydone.com/qmg-mxmq-ckg
          </div>
        </div>
        <div className='data-wrapper'>
          <MeetingsIcon.User />
          <div className='label'>
            Janes Corner
          </div>
        </div>
        <div className='data-wrapper'>
          <MeetingsIcon.Notification />
          <div className='label'>
            20 minutes before
          </div>
        </div>
        <div className='data-wrapper'>
          <MeetingsIcon.Location />
          <div className='label'>
            Treeleaf Technologies Pvt Ltd.
          </div>
        </div>
        <div className='data-wrapper'>
          <MeetingsIcon.Guest />
          <div className='label'>
            Guests (12)
          </div>
        </div>

        <div className='data-wrapper'>
          4 Yes, 2 No, 2 Maybe
        </div>
        <div className='join-btn-wrapper'>
          <SubmitButton text='Join Now' brRadius='2px' />
        </div>
      </div>

      <div className='event-bottom-wrapper'>
        <div>
          Attending?
        </div>
        <div className='button-wrapper'>
          <div>
            Yes
          </div>
          <div>
            May Be
          </div>
          <div>
            No
          </div>
        </div>
      </div>
    </StylePopoverEventDetail>
  );
}
