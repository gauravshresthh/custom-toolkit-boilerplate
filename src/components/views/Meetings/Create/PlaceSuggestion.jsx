import React from 'react';
import { MeetingsIcon } from '../../../../assets/images/meetings/Meetings';
import CustomPopover from '../../../elements/CustomPopover/CustomPopover';
import { PlaceSuggestionStyle } from '../../../layouts/Meetings/CreateMeeting/Map/Style';


export default function PlaceSuggestion({
                                          placesSuggestion,
                                          children,
                                          showPlaceSuggestion,
                                          setShowPlaceSuggestion,
                                          getPlaceDetail,
                                          setOpenSearchField,
                                        }) {
  return (
    <CustomPopover
      showPopover={showPlaceSuggestion}
      setShowPopover={setShowPlaceSuggestion}
      popoverContent={placesSuggestion
      && placesSuggestion.map(single =>
        <PlaceSuggestionStyle
          className='popover-content'
          onClick={() => {
            getPlaceDetail(single.place_id);
            setShowPlaceSuggestion(false);
            setOpenSearchField(false);
          }}>
          <MeetingsIcon.Location />
          <div className='place-detail-wrapper'>
            <div className='main-text'>
              {single.structured_formatting && single.structured_formatting.main_text}
            </div>
            <div className='secondary-text'>
              {single.structured_formatting && single.structured_formatting.secondary_text}
            </div>
          </div>
        </PlaceSuggestionStyle>)}
      children={children} />
  );
}
