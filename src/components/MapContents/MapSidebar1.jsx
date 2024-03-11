import React,{ useState } from 'react'
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import moment from "moment"; 
const MapSidebar1 = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  return (
   <>
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
                    borderRadius:"5px"
                  }}
                  sx={{  backdropFilter: "blur(15px)",
                  boxShadow: "0 0 5px 0 rgba(25, 96, 159, 0.1)",
                  border: "solid 1px #fff",borderRadius:"10px"}}
                >
                  <div style={{ padding: "0px" }}>
                    {isSidebarOpen && (
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "#2465e9",
                          textAlign: "center",
                          paddingY: "5px",
                          borderRadius:"5px 0px 0px 0px",
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
                    paddingX: "0px",
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
                </div>
              </div>
   </>
  )
}

export default MapSidebar1