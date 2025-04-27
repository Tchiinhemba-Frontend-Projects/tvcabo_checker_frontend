import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -23.5505, // Latitude de São Paulo por exemplo
  lng: -46.6333  // Longitude de São Paulo
};


function GoogleMapS() {
    const key ="AIzaSyDMxlW1LZ-j2xxhNLPCCffGli9M3LA3y9c"
    
  return(
    <LoadScript googleMapsApiKey={key}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/** Aqui você pode adicionar markers depois! */}
    </GoogleMap>
  </LoadScript>

  )

}

export {GoogleMapS}