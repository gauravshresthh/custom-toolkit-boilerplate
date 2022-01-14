import React, { Component } from 'react';

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    // this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  componentDidMount({ map, mapApi } = this.props) {
    const options = {
      types: ['address'],
    };

    this.autoComplete = new mapApi.places.Autocomplete(
      this.searchInput,
      options,
    );
    console.log({options},this.autoComplete);
    this.autoComplete.addListener('place_changed', this.onPlaceChanged);
    this.autoComplete.bindTo('bounds', map);

  }

  componentWillUnmount({ mapApi } = this.props) {

    mapApi.event.clearInstanceListeners(this.searchInput);

  }

  onPlaceChanged = ({ map, addplace } = this.props) => {

    const place = this.autoComplete.getPlace();

    if (!place.geometry) return;

    if (place.geometry.viewport) {

      map.fitBounds(place.geometry.viewport);

    } else {

      map.setCenter(place.geometry.location);

      // map.setZoom(17);
    }
    console.log({map},{place});
    addplace(place);

    this.searchInput.blur();

  };

  clearSearchBox() {
    this.searchInput.value = '';
  }

  render() {

    return (

      <>

        <div style={{ textAlign: 'left' }} className='label'>

          Location

        </div>

        <input
          id='language'
          style={{ width: '100%', marginTop: '4px', paddingLeft: '8px' }}
          className='inputField'
          ref={ref => {
            this.searchInput = ref;
          }}
          onChange={e => this.props.onChange(e.target.value)}
          type='text'
          onFocus={this.clearSearchBox}
          placeholder='Enter a location'
        />

      </>

    );

  }

}

export default AutoComplete;
