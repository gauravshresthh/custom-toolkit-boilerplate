import React from 'react';
import { StyledCalenderLayout } from './Style';
import Calender from '../../../views/Meetings/Meetings/Detail/Calender/Calender';

export default function CalenderLayout({ props, superAdminList }) {
  return (
    <StyledCalenderLayout>
      <Calender
        meetingsList={props.meetingsList}
        spIdList={props.spIdList}
        superAdminList={superAdminList}
      />
    </StyledCalenderLayout>
  );
}
