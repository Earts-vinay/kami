import React, { useState } from "react";
import { Navbar } from "../components";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapSidebar1 from "../components/MapContents/MapSidebar1";
import MapListSidebar from "../components/MapContents/MapListSidebar";

const Map = () => {
 

  const mapContainerStyle = {
    width: "100%",
    height: "80vh",
    borderRadius: "5px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={{ marginTop: "20px", borderRadius: "5px" }}>
          <LoadScript
            googleMapsApiKey="AIzaSyB_ay2HsNu0qfGGRMf8QHkloL0zIU_uWmw"
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&useMapsLibrary=places,geometry"
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
              label={false}
            >
              
            <Box sx={{paddingTop:"20px",paddingX:"20px"}}>
            <MapListSidebar/>
            </Box>
             <MapSidebar1/>

            </GoogleMap>
          </LoadScript>
        </Box>
      </Container>
    </>
  );
};

export default Map;
