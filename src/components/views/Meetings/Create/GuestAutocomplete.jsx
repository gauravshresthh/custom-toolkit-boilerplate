import React, { useState } from 'react';
import Autocomplete from '../../../elements/Autocomplete/Autocomplete';
import { CheckIfGuestExists } from '../../../../containers/Meetings/CreateMeeting/helper';
import { AllUser, AutoCompleteSuggestion, NewUser } from '../../../layouts/Meetings/CreateMeeting/Style';
import ProfileIconWithName from '../../../elements/ProfileIconWithName';
import CommonIcons from '../../../../assets/images/common/CommonIcons';
import { isEmailValid } from '../../../../utils/helper';
import team_icon from '../../../../assets/images/common/team.svg';

export default function GuestAutocomplete({
                                            guestList,
                                            addedGuests,
                                            setAddedGuests,
                                            fetchGuests,
                                            employeeList,
                                          }) {
  const [inputValue, setInputValue] = useState('');
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <Autocomplete
      title='Guests'
      placeholder='Enter the name of participants or email'
      setOpenPopover={setOpenPopover}
      openPopover={openPopover}
      inputValue={inputValue}
      onInputChange={(e) => {
        setInputValue(e.target.value);
        fetchGuests(e.target.value);
        setOpenPopover(true);
      }}
      suggestionContent={
        <>
          <AllUser
            onClick={() => {
              let mappedList = [];
              employeeList &&
              employeeList.map(single =>
                !CheckIfGuestExists(addedGuests, single.accountId) &&
                mappedList.push({
                  refid: single.accountId,
                  name: single.fullName,
                  email: single.email,
                  image: single.profilePic,
                  type: 1,
                }));
              setAddedGuests(mappedList);
              setInputValue('');
              fetchGuests('');
            }}>
            <div>
              <CommonIcons.User />
            </div>
            <div>All</div>
          </AllUser>

          {guestList && guestList.map(single => !CheckIfGuestExists(addedGuests, single.refid) &&
            <AutoCompleteSuggestion key={single.refid}
              onClick={() => {
                let list = addedGuests ? [...addedGuests] : [];
                //if team is selected, filter employees that is in selected team
                if (single.type === 4) {
                  employeeList && employeeList.map(singleEmp => singleEmp &&
                    singleEmp.teamIdList &&
                    singleEmp.teamIdList.includes(single.refid) &&
                    !CheckIfGuestExists(addedGuests, singleEmp.accountId) &&
                    list.push({
                      refid: singleEmp.accountId,
                      name: singleEmp.fullName,
                      email: singleEmp.email,
                      image: singleEmp.profilePic,
                      type: 1,
                    }));
                } else {
                  !CheckIfGuestExists(addedGuests,single.refid) && list.push(single);
                }
                setAddedGuests(list);
                setInputValue('');
                fetchGuests('');
              }}>
              <ProfileIconWithName
                label={single.name}
                src={single.type === 4 ? team_icon : single.image}
                email={single.email}
                gap='6px'
                width='30px'
                textSize='14px'
                height='30px'
                emailSize='13px' />
            </AutoCompleteSuggestion>)}

          {(!guestList || guestList.length === 0) &&
          inputValue && isEmailValid(inputValue) &&
          <NewUser
            onClick={(e) => {
              e.stopPropagation();
              let initialList = [...addedGuests];
              initialList.push({ email: inputValue,type:3 });
              setAddedGuests(initialList);
              setInputValue('');
              fetchGuests('');
            }}>
            <ProfileIconWithName
              label={inputValue}
              gap='6px'
              width='30px'
              textSize='14px'
              height='30px'
              emailSize='13px'
            />
            <div className='add-btn'>Add</div>
          </NewUser>}
        </>
      }
    />
  );
}
