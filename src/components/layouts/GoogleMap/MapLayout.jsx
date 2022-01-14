// MyGoogleMaps.js

import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';
import { GOOGLE_API } from '../../../globalConstants';
import AutoComplete from '../../views/Meetings/Create/SearchBox';
import { MeetingsIcon } from '../../../assets/images/meetings/Meetings';
import { MapMarker } from './Style';

const Wrapper = styled.main`
  width: 100%;
  height: 70vh;
`;

const AnyReactComponent = () => {
  return <MapMarker><MeetingsIcon.Pin /></MapMarker>;
};

class MyGoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      center: [],
      zoom: 5,
      draggable: true,
      lat: null,
      lng: null,

    };

  }

  componentDidMount() {
    const lat = 27.7172;
    const lng = 85.3240;
    this.setNewCurrentLocation(lat, lng);
    // this.setCurrentLocation();
  }

  _onChange = ({ center, zoom }) => {
    console.log("on change");
    this.setState({
      center,
      zoom,
    });

  };

  _onClick = value => {
    console.log({ value });
    this.setState({
      lat: value.lat,
      lng: value.lng,
    });
  };

  apiHasLoaded = (map, maps) => {
    console.log({ map }, { maps });
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
    this._generateAddress();
  };

  addPlace = place => {
    this.setState({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    this._generateAddress();
  };

  _generateAddress() {
    const { mapApi } = this.state;
    const geocoder = new mapApi.Geocoder();
    geocoder.geocode(
      { location: { lat: this.state.lat, lng: this.state.lng } },
      (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            console.log({ results });
            this.zoom = 12;
          } else {
            console.log('No results found');
            window.alert('No results found');
          }
        } else {
          console.log(`Geocoder failed due to: ${status}`);
        }
      },
    );
  }

  // Get Current Location Coordinates
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          center: [position.coords.latitude, position.coords.longitude],
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }

  setNewCurrentLocation(lat, lng) {
    this.setState({
      center: [lat, lng],
      lat,
      lng,
    });
  }

  render() {
    const { mapApiLoaded, mapInstance, mapApi } = this.state;
    return (
      <Wrapper>
        {mapApiLoaded && (
          <div>
            <AutoComplete
              map={mapInstance}
              mapApi={mapApi}
              addplace={this.addPlace}
              onChange={this.props.onChangeSearchTerm}
            />
          </div>
        )}

        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          draggable={this.state.draggable}
          onChange={this._onChange}
          onClick={this._onClick}
          bootstrapURLKeys={{
            key: GOOGLE_API,
            libraries: ['places', 'geometry', 'drawing', 'visualization'],
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
          />
        </GoogleMapReact>

      </Wrapper>

    );

  }

}

export default MyGoogleMap;
