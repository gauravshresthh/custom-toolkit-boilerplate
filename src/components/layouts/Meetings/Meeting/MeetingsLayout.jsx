import React, { useState } from 'react';
import CollapseContent from '../../../elements/CollpaseContent';
import MeetingsThread from '../../../views/Meetings/Meetings/List/MeetingThread';
import { StyledMeetingsLayout } from './Style';
import ProjectsSwitch from '../../../views/Meetings/Meetings/List/ProjectsSwitch';
import { Meeting } from '../../../../containers/Meetings/model';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import PopoverModal from '../../../elements/PopoverModal';

export default function MeetingsLayout({ props, superAdminList }) {
  const [openCalenderPopover, setOpenCalenderPopover] = useState(false);
  return (
    <StyledMeetingsLayout>
      <div className='title'>Meetings</div>
      <div className='meeting-wrapper'>
        <CollapseContent
          defaultActiveKey='1'
          key='1'
          margin='20px 0'
          label='Upcoming meetings'>
          {props.meetingsList && props.meetingsList.map(single => <MeetingsThread meetingObj={single} />)}
        </CollapseContent>
        <CollapseContent
          key='1'
          margin='20px 0'
          label='Upcoming events'>
          Events
        </CollapseContent>
        <CollapseContent
          key='1'
          margin='20px 0'
          label={<div className='d-flex w-100'>
            <div className='sub-title'>
              Calender
            </div>
            <PopoverModal
              trigger='click'
              onVisibleChange={setOpenCalenderPopover}
              visible={openCalenderPopover}
              popoverContent={
                <div className='popover-item' onClick={(e) => e.stopPropagation()}>
                <div>Import Calender</div>
                <div>Export Calender</div>
              </div>}
              children={
                <div className='action'><CommonIcons.MoreIcon /></div>
              }
            />
          </div>}>
          {props.spIdList &&
          props.spIdList.map(singleSp =>
            Meeting.GetSpObj(superAdminList, singleSp) &&
            <ProjectsSwitch
              name={Meeting.GetSpObj(superAdminList, singleSp).serviceprovider.fullname}
              isEnable={true}
              color={Meeting.GetSpObj(superAdminList, singleSp).color}
            />)}
        </CollapseContent>

      </div>
    </StyledMeetingsLayout>
  );
}
