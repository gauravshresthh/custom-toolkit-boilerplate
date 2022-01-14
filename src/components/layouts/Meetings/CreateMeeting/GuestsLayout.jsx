import React from 'react';
import { StyledGuestLayout, StyleGuestWrapper } from './Style';
import ProfileIconWithName from '../../../elements/ProfileIconWithName';
import CommonIcons from '../../../../assets/images/common/CommonIcons';

export default function GuestsLayout({ addedGuests, setAddedGuests }) {
  return (
    <StyledGuestLayout>
      {addedGuests && addedGuests.length > 0 && <div className='title mb'>Guests</div>}
      <StyleGuestWrapper className='withScrollbar'>
        {addedGuests && addedGuests.length > 0 && addedGuests.map(single => <div className='guest'>
          <ProfileIconWithName
            src={single.image}
            label={single.name}
            email={single.email}
            gap='6px'
            width='30px'
            height='30px'
            textSize='14px'
            textColor='#333'
            emailSize='13px'/>
          <div
            className='close-icon'
            onClick={() => {
              let initialList = [...addedGuests];
              let filteredList = initialList && initialList.filter(singleGuest => singleGuest.refid !== single.refid);
              setAddedGuests(filteredList);
            }}>
            <CommonIcons.CrossIcon />
          </div>
        </div>)}
      </StyleGuestWrapper>

    </StyledGuestLayout>
  );
}
