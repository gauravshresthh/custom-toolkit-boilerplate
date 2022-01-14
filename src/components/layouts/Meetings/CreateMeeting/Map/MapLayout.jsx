import React, { useState } from 'react';
import { MapContainer } from '../../../GoogleMap/Map';
import { DetailWrapper, LocationListStyle, MapStyle } from './Style';
import CommonIcons from '../../../../../assets/images/common/CommonIcons';
import PopupModal from '../../../../elements/PopupModal';
import PlaceSuggestion from '../../../../views/Meetings/Create/PlaceSuggestion';
import Image from '../../../../elements/Image/Image';
import APIEndPoints, { GOOGLE_API } from '../../../../../globalConstants';

export default function MapLayout({
                                    setOpenMap,
                                    placesSuggestion,
                                    searchPlaces,
                                    getPlaceDetail,
                                    selectedPlace,
                                    clearSearchedPlaces,
                                  }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [openSearchField, setOpenSearchField] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showPlaceSuggestion, setShowPlaceSuggestion] = useState(false);

  return (
    <DetailWrapper>
      {openSearchField ?
        <PlaceSuggestion
          placesSuggestion={placesSuggestion}
          setShowPlaceSuggestion={setShowPlaceSuggestion}
          showPlaceSuggestion={showPlaceSuggestion}
          getPlaceDetail={getPlaceDetail}
          setOpenSearchField={setOpenSearchField}
          children={
            <div className='search-wrapper'>
              <CommonIcons.SearchIcon />
              <input
                value={searchValue}
                placeholder='Search...'
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  searchPlaces(e.target.value);
                }}
                onFocus={() => {
                  setSearchValue('');
                  clearSearchedPlaces();
                }}
              />
              <div
                className='d-flex'
                onClick={() => {
                  setOpenSearchField(false);
                }}><CommonIcons.CloseIconWithBackground />
              </div>
            </div>} />
        : <div className='action-wrapper'>
          <div onClick={() => {
            setOpenSearchField(true);
          }}><CommonIcons.SearchIcon />
          </div>
          <div onClick={() => {
            setOpenMap(false);
          }}>
            <CommonIcons.CrossIcon />
          </div>
        </div>}
      <MapStyle isFullScreen={isFullScreen}>
        <MapContainer
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
          selectedPlace={selectedPlace}
        />
      </MapStyle>
      {selectedPlace && <LocationListStyle>
        <div className='mr-auto'>
          <div className='title'>
            {selectedPlace.name}
          </div>
          {/*<div className='use-this-btn'>*/}
          {/*  Use this location*/}
          {/*</div>*/}
          <div className='secondary-title'>{selectedPlace.formatted_address}</div>
          {/*{selectedPlace.geometry && selectedPlace.geometry.location &&*/}
          {/*<div className='lat-lng'>*/}
          {/*  <div className='d-flex'>Latitude: <div className='value'>*/}
          {/*    {selectedPlace.geometry.location.lat.toFixed(4)}*/}
          {/*  </div>,*/}
          {/*  </div>*/}
          {/*  <div className='d-flex'>Longitude: <div*/}
          {/*    className='value'>{selectedPlace.geometry.location.lng.toFixed(4)}</div></div>*/}
          {/*</div>}*/}
        </div>
        {selectedPlace && selectedPlace.photos && selectedPlace.photos[0] && selectedPlace.photos[0].photo_reference &&
        <Image
          width='75px'
          height='55px'
          borderRadius='8px'
          src={`${APIEndPoints.GOOGLE_GET_PHOTO_OF_PLACE_BY_API}${selectedPlace.photos[0].photo_reference}&key=${GOOGLE_API}`} />
        }
      </LocationListStyle>}
      <PopupModal
        modalVisible={isFullScreen}
        width='80%'
        showCloseIcon={false}
        contentStyle={{ padding: 0 }}
        children={
          <MapStyle isFullScreen={isFullScreen}>
            <MapContainer isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
          </MapStyle>}
      />
    </DetailWrapper>
  );
}
