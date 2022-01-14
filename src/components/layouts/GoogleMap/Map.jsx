import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API } from '../../../globalConstants';
import { MeetingsIcon } from '../../../assets/images/meetings/Meetings';
import { FullScreenBtn, MapMarker } from './Style';

const AnyReactComponent = () => {
  return <MapMarker><MeetingsIcon.Pin /></MapMarker>;
};

const defaultMapOptions = {
  fullscreenControl: false,
};

export function MapContainer({ setIsFullScreen, isFullScreen, selectedPlace }) {
  const [marker, setMarker] = useState({ lat: 27.7172, lng: 85.3240 });

  useEffect(() => {
    selectedPlace &&
    selectedPlace.geometry &&
    selectedPlace.geometry.location &&
    setMarker({ lat: selectedPlace.geometry.location.lat, lng: selectedPlace.geometry.location.lng });
  }, [selectedPlace]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <FullScreenBtn onClick={() => setIsFullScreen(!isFullScreen)}><MeetingsIcon.FullScreen /></FullScreenBtn>
      <GoogleMapReact
        options={defaultMapOptions}
        bootstrapURLKeys={{ key: GOOGLE_API, libraries: ['places', 'geometry'] }}
        center={[marker.lat, marker.lng]}
        zoom={11}
        yesIWantToUseGoogleMapApiInternals
        onClick={({ x, y, lat, lng, event }) => {
          console.log(x, y, lat, lng, event);
          setMarker({ lat: lat, lng: lng });
        }}
      >
        <AnyReactComponent
          lat={marker.lat}
          lng={marker.lng}
        />
      </GoogleMapReact>
    </div>
  );
}
