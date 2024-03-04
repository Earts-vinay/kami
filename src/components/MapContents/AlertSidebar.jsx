import React, { useState, useRef } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Paper, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';

const AlertSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [style, setStyle] = useState({
    width: 330,
    transition: 'width 0.3s, left 0.3s',
    overflow: 'auto',
    zIndex: 1000,
    borderRadius: '5px',
    position: 'fixed',
  });

  const nodeRef = useRef(null);
  const cameraData = [
    { id: 1, name: "Camera 1", area: "Parking", view: "South", image: "assets/images/car.jpg" },
    { id: 2, name: "Camera 2", area: "Parking", view: "South", image: "assets/images/car.jpg" },
    { id: 3, name: "Camera 3", area: "Parking", view: "South", image: "assets/images/car.jpg" },
    { id: 3, name: "Camera 3", area: "Parking", view: "South", image: "assets/images/car.jpg" },


    // Add more camera objects as needed
];

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box display="flex" justifyContent="center">
      <IconButton onClick={handleSidebarToggle}>
        <BounceLoader color="red" size={30} />
      </IconButton>

      {isSidebarOpen && (
        <Draggable>
          <Paper style={{
    width: 330,
    transition: 'width 0.3s, left 0.3s',
    overflow: 'auto',
    zIndex: 1000,
    borderRadius: '5px',
    position: 'absolute',
    transform: 'translate(0, 0)', // Add this line
  }}>
            <Box ref={nodeRef}>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: '#2465e9',
                  textAlign: 'start',
                  paddingY: '10px',
                  paddingX: '10px',
                  color: 'white',
                }}
              >
                Pole - 104, 4 Cameras
              </Typography>
              <CloseIcon
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  color: 'white',
                  cursor: 'pointer',
                  paddingY: '6px',
                  paddingX: '10px',
                }}
                onClick={handleSidebarToggle}
              />

              <Box display="flex" sx={{ height: '25%' }}>
                <Box height="60%" overflow="auto">
                  {cameraData.map((camera) => (
                    <Link to={`/camera`} key={camera.id} style={{ textDecoration: 'none' }}>
                      <Card
                        sx={{
                          display: 'flex',
                          marginX: '10px',
                          marginY: '10px',
                          alignItems: 'center',
                          border: '0px',
                          height: 100,
                          cursor: 'pointer',
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: 151, height: 90 }}
                          image={camera.image}
                          borderRadius="10px"
                          alt="Camera Image"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography>{camera.name}</Typography>
                            <Typography>Area: {camera.area}</Typography>
                            <Typography>View: {camera.view}</Typography>
                          </CardContent>
                        </Box>
                      </Card>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        </Draggable>
      )}
    </Box>
  );
};

export default AlertSidebar;
