import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker ,DirectionsService, DirectionsRenderer} from '@react-google-maps/api';
import API_KEY from '../API_KEY.config';


const containerStyle = {
  width: "100%",
  height: '400px'
};

const location = {
  lat: 23.373144,
  lng :89.867897
};
// const onLoad = marker => {
//     console.log('marker: ', marker)
//   }

function Direction( origin, destination) {
    console.log(origin, destination);
    const [directionRespone, setDerectoinResponse] = useState(null)
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
      >
          {
              origin !== ''&& destination !== '' && <DirectionsService
              options={{
                destination: destination,
                origin: origin,
                travelMode: "WALKING"
              }}
              callback={res =>{
                if (res !==null) {
                    setDerectoinResponse(res)
                }
              }}
            />
          }
                 {
                     directionRespone && <DirectionsRenderer
                     options={{ 
                       directions: directionRespone
                     }}
                   />
                 }
        {/* <Marker
      onLoad={onLoad}
      position={location}
    /> */}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)