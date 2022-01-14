import React from 'react';
import { MeetingsIcon } from '../../../../../assets/images/meetings/Meetings';
import TextEditorIcon from '../../../../../assets/images/TextEditorIcon';
import { StyleModalEventDetail } from './Calender/Style';
import ProfileIconWithName from '../../../../elements/ProfileIconWithName';

export default function EventDetailModal({ setOpenEventDetail, setOpenMeetingDetail }) {
  return (
    <StyleModalEventDetail>

      <div className='event-title'>
        <MeetingsIcon.UpcomingMeeting width='50px' height='50px' />
        Staff Meeting
      </div>

      <div className='d-flex event-wrapper'>
        <div className='event-div'>
          <div className='detail-wrapper'>
            <div className='data-wrapper'>
              <div className='icon'>
                <MeetingsIcon.MeetingTitle />
              </div>
              <div className='label'>
                Wednesday 12 Sep, 2021 (3:00A.M - 3:30A.M)
              </div>
            </div>
            <div className='data-wrapper'>
              <div className='icon'>
                <MeetingsIcon.Description />
              </div>
              <div className='label'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </div>
            </div>
            {/*<div className='data-wrapper'>*/}
            {/*  <div className='icon'>*/}
            {/*    <TextEditorIcon.Attachment width='14px' height='16'/>*/}
            {/*  </div>*/}
            {/*  <div className='doc-wrapper'>*/}
            {/*    files*/}
            {/*  </div>*/}
            {/*</div> */}
            <div className='data-wrapper'>
              <div className='icon'>
                <MeetingsIcon.Link />
              </div>
              <div className='meeting-link'>
                invite.anydone.com/qmg-mxmq-ckg
              </div>
            </div>
            <div className='data-wrapper'>
              <div className='icon'>
                <MeetingsIcon.User />
              </div>
              <div className='label'>
                James Corner
              </div>
            </div>
            <div className='data-wrapper'>
              <div className='icon'>
                <MeetingsIcon.Notification />
              </div>
              <div className='label'>
                20 minutes before
              </div>
            </div>
            <div className='data-wrapper'>
              <div className='icon'>
                <MeetingsIcon.Location />
              </div>
              <div className='label'>
                Treeleaf Technologies Pvt Ltd.
              </div>
            </div>
            <div className='join-btn-wrapper'>
              Join Now
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
        </div>
        <div className='event-div guest-wrapper'>
          <div className='guest-title'>
            <div>
              Guests (12)
            </div>
            <div className='data-wrapper'>
              4 Yes, 2 No, 2 Maybe
            </div>
          </div>
          <div className='guest-list withScrollbar'>
            <div className='pt'>
              <ProfileIconWithName label='Sujata Dongol' width='30px' height='30px'/>
            </div>
            <div className='pt'>
            <ProfileIconWithName label='Sujata Dongol'  width='30px' height='30px'/>
            </div>
            <div className='pt'>
            <ProfileIconWithName label='Sujata Dongol'  width='30px' height='30px'/>
            </div>
            <div className='pt'>
              <ProfileIconWithName label='Sujata Dongol' width='30px' height='30px'/>
            </div>
            <div className='pt'>
            <ProfileIconWithName label='Sujata Dongol'  width='30px' height='30px'/>
            </div>
            <div className='pt'>
            <ProfileIconWithName label='Sujata Dongol'  width='30px' height='30px'/>
            </div>
          </div>
        </div>
      </div>

    </StyleModalEventDetail>
  );
}
