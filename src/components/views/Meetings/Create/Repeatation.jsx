import React, { useState } from 'react';
import { StyledRepeatation } from './Style';
import PopupModal from '../../../elements/PopupModal';
import CustomRepeatation from './CustomRepeatation';
import CustomPopover from '../../../elements/CustomPopover/CustomPopover';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import { MapRepeatationValue } from '../../../../containers/Meetings/CreateMeeting/helper';

export default function Repeatation({ meetingObj, setMeetingObj,customRepeatValue, setCustomRepeatValue }) {
  const repeatationOptions = [
    { id: 'DO_NOT_REPEAT', value: 'Do not repeat' },
    { id: 'DAY', value: 'Daily' },
    { id: 'WEEK', value: 'Weekly' },
    { id: 'MONTH', value: 'Monthly' },
    { id: 'YEAR', value: 'Yearly' },
    { id: 'CUSTOM', value: 'Custom' },
  ];
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [showRepeatationDropdown, setShowRepeatationDropdown] = useState(false);

  return (
    <StyledRepeatation>
      <div className='title'>Repeatation</div>
      <CustomPopover
        showPopover={showRepeatationDropdown}
        setShowPopover={setShowRepeatationDropdown}
        children={
          <div className='repeation-wrapper'>
            {MapRepeatationValue(repeatationOptions, meetingObj.repeatation, customRepeatValue)}
            <div>
              <CommonIcons.BottomArrow />
            </div>
          </div>
        }
        popoverContent={repeatationOptions.map(single =>
          <div
            className='popover-content'
            key={single.id}
            onClick={() => {
              console.log({single});
              setShowRepeatationDropdown(false);
              if (single.id === 'CUSTOM') {
                setShowCustomModal(true);
              } else {
                setMeetingObj({ ...meetingObj, repeatation: single.id });
              }
            }}>{single.value}</div>)}
      />

      <PopupModal
        modalVisible={showCustomModal}
        onCancel={() => setShowCustomModal(false)}
        modalTitle='Custom'
        children={
          <CustomRepeatation
            setRepeatationValue={setCustomRepeatValue}
            setMeetingObj={setMeetingObj}
            meetingObj={meetingObj}
            setShowCustomModal={setShowCustomModal}
          />}
      />
    </StyledRepeatation>
  );
}
