import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const CameraMap = () => {
  const locations = [
    { lat: 17.385044, lng: 78.486671 },
    { lat: 17.395044, lng: 78.496671 },
  ];

  const defaultCenter = locations && locations.length > 0 ? locations[0] : { lat: 17.385044, lng: 78.486671 };

  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC-5nyue-_mpTnrAgQ1LfunsNnLlIumhZI">
      <GoogleMap center={defaultCenter} zoom={10} mapContainerStyle={mapContainerStyle}>
        {locations &&
          locations.map((point, index) => (
            <Marker key={index} position={point} />
          ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default CameraMap;
