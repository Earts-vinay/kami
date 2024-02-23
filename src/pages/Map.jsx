import React, { useState } from "react";
import { Navbar } from "../components";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import moment from "moment"; // Make sure to install moment library

const Map = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const mapContainerStyle = {
    width: "100%",
    height: "85vh",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginTop: "20px",
                }}
              >
                {/* Sidebar */}
                <Paper
                  elevation={3}
                  style={{
                    width: isSidebarOpen ? 250 : 0,
                    transition: "width 0.3s",
                    overflow: "auto",
                    position: "relative",
                    top: "0px",
                    right: "0",
                    height: "250px",
                  }}
                >
                  <div style={{ padding: "0px" }}>
                    {/* Implement date and time using moment */}
                    {isSidebarOpen && (
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "#91B1F4",
                          textAlign: "center",
                          paddingY: "5px",
                          color: "white",
                        }}
                      >
                        {moment().format("DD-MM-YYYY | HH:mm")}
                      </Typography>
                    )}
                    {isSidebarOpen && (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            paddingX: "20px",
                            paddingY:"15px"
                          }}
                        >
                          <SnowshoeingIcon />
                          <Typography variant="body2">Pedestrian</Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingX: "20px",
                          
                          }}
                        >
                          <Typography variant="body2">Entered Today</Typography>
                          <Typography variant="body2" >200</Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingX: "20px",
                            paddingBottom:"15px"
                          }}
                        >
                          <Typography variant="body2">
                            Total occupancy
                          </Typography>
                          <Typography variant="body2">200</Typography>
                        </Box>
                        <Box sx={{ border: "solid 0.1px #c3cfdc;", marginX:"20px" }}></Box>
                        <Box sx={{ paddingY: "px" }}>
                          <Box
                            sx={{
                              display: "flex",
                              gap: 2,
                              alignItems: "center",
                              paddingX: "20px",
                              paddingY:"10px",
                              paddingTop:"20px"
                            }}
                          >
                            <DirectionsCarIcon />
                            <Typography variant="body-2">Vehicle</Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingX: "20px",
                            }}
                          >
                            <Typography variant="body2">
                              Entered Today
                            </Typography>
                            <Typography variant="body2">200</Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingX: "20px",
                            }}
                          >
                            <Typography variant="body2">
                              Total occupancy
                            </Typography>
                            <Typography variant="body2">200</Typography>
                          </Box>
                        </Box>
                      </>
                    )}
                  </div>
                </Paper>

                {/* Sidebar Button */}
                <IconButton
                  onClick={toggleSidebar}
                  sx={{
                    paddingX: "0.5px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <ArrowBackIosNewIcon
                    sx={{
                      backgroundColor: "white",
                      paddingY: "20px",
                      paddingX: "3px",
                      borderRadius: "15px 0px 0px 15px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  />
                </IconButton>

                {/* Main Content */}
                <div style={{ flex: 1, padding: "20px" }}>
                  <h1>Main Content</h1>
                  {/* Add your main content here */}
                </div>
              </div>
            </GoogleMap>
          </LoadScript>
        </Box>
      </Container>
    </>
  );
};

export default Map;
