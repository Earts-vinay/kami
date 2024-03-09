import React, { useState, useRef } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';

const commonStyles = {
  fontFamily: "montserrat-regular"
};

const AlertSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cameraData = [
    { id: 1, name: 'Camera 1', area: 'Parking', view: 'South', image: 'assets/images/car.jpg' },
    { id: 2, name: 'Camera 2', area: 'Parking', view: 'South', image: 'assets/images/car.jpg' },
    { id: 3, name: 'Camera 3', area: 'Parking', view: 'South', image: 'assets/images/car.jpg' },
    { id: 4, name: 'Camera 4', area: 'Parking', view: 'South', image: 'assets/images/car.jpg' },
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
          <Paper
            style={{
              width: 330,
              transition: 'width 0.3s, left 0.3s',
              overflow: 'auto',
              zIndex: 1000,
              borderRadius: '5px',
              position: 'absolute',
              transform: 'translate(0, 0)', // Add this line
              background:
                'linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)',
            }}
            sx={{
              backdropFilter: 'blur(15px)',
              boxShadow: '0 0 5px 0 rgba(25, 96, 159, 0.1)',
              border: 'solid 1px #fff',
              borderRadius: '10px',
            }}
          >
            <Box>
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

              <TableContainer sx={{ maxHeight: 300 }}>
                <Table>
                 
                  <TableBody>
                    {cameraData.map((camera) => (
                      <TableRow key={camera.id} component={Link} to={`/camera`} style={{ textDecoration: 'none' }}>
                         <TableCell width="20%" sx={{paddingY:"12px", ...commonStyles}}>
                      <img src={camera.image} style={{ width: '150px', height: '80px', borderRadius: "5px" }} />
                    </TableCell>
                        <TableCell>{camera.name}<br/> Area: {camera.area} <br/> View: {camera.view}</TableCell>
                       
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Draggable>
      )}
    </Box>
  );
};

export default AlertSidebar;
