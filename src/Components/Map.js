import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import API_KEY from './API_KEY.config';

const containerStyle = {
  width: "100%",
  height: '400px'
};

const location = {
  lat: 23.373144,
  lng :89.867897
};
const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
      >
        <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)