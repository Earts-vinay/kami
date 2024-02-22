import React from 'react';
import { Navbar } from '../components';
import { Box, Container } from '@mui/material';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    with:'100%',
    height: '85vh',
  };

  const center = {
    lat: 37.7749, // Replace with your desired latitude
    lng: -122.4194, // Replace with your desired longitude
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={{ marginTop:"10px"}}>
        <LoadScript
          googleMapsApiKey="AIzaSyB_ay2HsNu0qfGGRMf8QHkloL0zIU_uWmw" // Replace with your Google Maps API key
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&useMapsLibrary=places,geometry" // Include useMapsLibrary query parameter
         
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10} // You can adjust the zoom level as needed
           
          >
            {/* You can add markers, polygons, etc. here */}
          </GoogleMap>
        </LoadScript>
        </Box>
       
      </Container>
    </>
  );
};

export default Map;
