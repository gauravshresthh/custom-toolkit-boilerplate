import React, { useState } from 'react';
import { ButtonWrapper, MapIcon, StyledCreateMeetingForm } from './Style';
import InputWithLabel from '../../../elements/InputWithLabel/InputField';
import SwitchComponent from '../../../elements/Switch';
import Attachment from '../../../views/Meetings/Create/Attachment';
import Repeatation from '../../../views/Meetings/Create/Repeatation';
import NotifyMe from '../../../views/Meetings/Create/NotifyMe';
import SubmitButton from '../../../elements/Button/SubmitButton';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import { MeetingsIcon } from '../../../../assets/images/meetings/Meetings';
import MapLayout from './Map/MapLayout';
import { MapWrapper } from './Map/Style';
import GuestAutocomplete from '../../../views/Meetings/Create/GuestAutocomplete';
import PlaceSuggestion from '../../../views/Meetings/Create/PlaceSuggestion';
import InputWithIcon from '../../../elements/InputWithLabel/InputFieldWithIcon';
import Description from '../../../views/Meetings/Create/Description';
import { Checkbox } from 'antd';
import { MeetingObjDTO } from '../../../../containers/Meetings/CreateMeeting/DTO';
import { GetAddedTimestamp } from '../../../../utils/dateHelper';
import DateComponent from '../../../views/Meetings/Create/Date';

export default function CreateForm({
                                     loading,
                                     meetingObj,
                                     setMeetingObj,
                                     uploadAttachment,
                                     attachmentList,
                                     removeAttachment,
                                     guestList,
                                     setAddedGuests,
                                     addedGuests,
                                     fetchGuests,
                                     searchPlaces,
                                     placesSuggestion,
                                     getPlaceDetail,
                                     selectedPlace,
                                     clearSearchedPlaces,
                                     employeeList,
                                     createMeeting,
                                   }) {
  const [openMap, setOpenMap] = useState(false);
  const [showLocationSuggestion, setShowLocationSuggestion] = useState(false);
  const [startDateValue, setStartDateValue] = useState(new Date().getTime() / 1000);
  const [startTimeValue, setStartTimeValue] = useState(GetAddedTimestamp(1000 * 60 * 30) / 1000);
  const [endDateValue, setEndDateValue] = useState(new Date().getTime() / 1000);
  const [endTimeValue, setEndTimeValue] = useState(GetAddedTimestamp(1000 * 60 * 90) / 1000);
  const [customRepeatValue, setCustomRepeatValue] = useState(false);

  return (
    <StyledCreateMeetingForm>
      <div className='w-80 mb'>
        <InputWithLabel
          label='Title'
          value={meetingObj.title}
          onChange={(e) => setMeetingObj({
            ...meetingObj,
            title: e.target.value,
          })} />
      </div>
      <div className='w-80 mb'>
        <GuestAutocomplete
          guestList={guestList}
          setAddedGuests={setAddedGuests}
          addedGuests={addedGuests}
          fetchGuests={fetchGuests}
          employeeList={employeeList}
        />
      </div>
      <Checkbox
        className='mb'
        checked={meetingObj.validateGuestEmail}
        onClick={(e) => {
          setMeetingObj({
            ...meetingObj,
            validateGuestEmail: e.target.checked,
          });
        }}>Force guests to verify email</Checkbox>
      <DateComponent
        meetingObj={meetingObj}
        setMeetingObj={setMeetingObj}
        endDateValue={endDateValue}
        endTimeValue={endTimeValue}
        setEndDateValue={setEndDateValue}
        setEndTimeValue={setEndTimeValue}
        setStartDateValue={setStartDateValue}
        startDateValue={startDateValue}
        setStartTimeValue={setStartTimeValue}
        startTimeValue={startTimeValue}
      />
      <div className='w-80 mb'>
        <Repeatation
          meetingObj={meetingObj}
          setMeetingObj={setMeetingObj}
          customRepeatValue={customRepeatValue}
          setCustomRepeatValue={setCustomRepeatValue} />
      </div>
      <div className='mb'>
        <SwitchComponent
          label='Physical Location'
          color='#333'
          checked={meetingObj.enablePhysicalLocation}
          onChange={() => {
            setMeetingObj({
              ...meetingObj,
              enablePhysicalLocation: !meetingObj.enablePhysicalLocation,
            });
          }}
        />
      </div>
      {meetingObj.enablePhysicalLocation && <div className='d-flex'>
        <div className='w-80 mb mr'>
          <PlaceSuggestion
            placesSuggestion={placesSuggestion}
            setShowPlaceSuggestion={setShowLocationSuggestion}
            showPlaceSuggestion={showLocationSuggestion}
            getPlaceDetail={getPlaceDetail}
            children={
              <InputWithIcon
                icon={<MeetingsIcon.Location />}
                value={meetingObj.locSearchValue}
                onChange={(e) => {
                  setMeetingObj({
                    ...meetingObj,
                    locSearchValue: e.target.value,
                    physicalLocation: undefined,
                  });
                  searchPlaces(e.target.value);
                }}
                onFocus={() => {
                  clearSearchedPlaces();
                }}
              />
            }
          />
        </div>
        <MapIcon onClick={() => setOpenMap(true)}>
          <CommonIcons.Map />
        </MapIcon>
      </div>}
      <div className='w-80 mb'>
        <Description setMeetingObj={setMeetingObj} meetingObj={meetingObj} />
      </div>
      <div className='w-80 mb'>
        <Attachment
          attachmentList={attachmentList}
          uploadAttachment={uploadAttachment}
          removeAttachment={removeAttachment}
        />
      </div>
      <div className='w-80 mb'>
        <NotifyMe meetingObj={meetingObj} setMeetingObj={setMeetingObj} />
      </div>
      <ButtonWrapper className='w-80 mb'>
        <SubmitButton
          loading={loading}
          disable={!meetingObj.title}
          text='Create'
          style={{ width: '150px', margin: '10px 0' }}
          onClick={() => {
            createMeeting(MeetingObjDTO(meetingObj,
              addedGuests,
              startDateValue,
              startTimeValue,
              endDateValue,
              endTimeValue,
              attachmentList,
              customRepeatValue));
          }}
        />
      </ButtonWrapper>
      {openMap && meetingObj.enablePhysicalLocation &&
      <MapWrapper>
        <MapLayout
          setOpenMap={setOpenMap}
          placesSuggestion={placesSuggestion}
          searchPlaces={searchPlaces}
          getPlaceDetail={getPlaceDetail}
          selectedPlace={selectedPlace}
          clearSearchedPlaces={clearSearchedPlaces}
        />
      </MapWrapper>
      }
    </StyledCreateMeetingForm>
  );
}
