import React, { useState } from 'react';
import styled from '@mui/system/styled';  // Add this line
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, InputAdornment } from '@mui/material';  // Add these lines


const YourComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [alignment, setAlignment] = useState('web');
  const [searchTerm, setSearchTerm] = useState('');

 
  const handleListClick = () => {
    setSidebarOpen(true);
    setAlignment('web');
  };

  const handleMapClick = () => {
    setSidebarOpen(false);
    setAlignment('android');
  };

 
  // Example data array (replace it with your actual data)
  const dataArray = [
    { image: 'assets/images/car.jpg', zone: 'Zone A', pole: 'Pole 1', camera: 'Camera 1' },
    { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
    { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
    { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
    { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
    { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
    { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
    { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
    // Add more data as needed
  ];

  return (
    <div>
      <ToggleButtonGroup
      fullWidth
        value={alignment}
        exclusive
        onChange={(event, newAlignment) => setAlignment(newAlignment)}
        aria-label="Platform"
        sx={{ backgroundColor: 'primary', color: 'white', width:"15%" }}
      >
        <ToggleButton
          value="web"
          onClick={handleListClick}
          sx={{
            backgroundColor:"white",
           
            '&.Mui-selected': {
              backgroundColor: '#91B1F4',
            },
          }}
        >
          List
        </ToggleButton>
        <ToggleButton
          value="android"
          onClick={handleMapClick}
          sx={{
            backgroundColor: 'white',
            '&.Mui-selected': {
              backgroundColor: '#91B1F4',
            },
          }}
        >
          Map
        </ToggleButton>
      </ToggleButtonGroup>

      {sidebarOpen && (
        <Paper
          style={{
            width: 480,
            transition: 'width 0.3s, left 0.3s',
            overflow: 'auto',
            position: 'absolute',
            top: '0',
            right: '0',
            height: '100%',
            zIndex: 1000,
          }}
        >
          {/* Search Bar */}
          <Box sx={{ backgroundColor: "#91B1F4", padding:"10px",display:"flex",justifyContent:"end"}}>
          {/* <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
           
            <InputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              width={200}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ marginLeft: '8px',backgroundColor:"blue" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
           
          </div> */}
             <TextField
        id="search"
        type="search"
        label="Search"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{backgroundColor:"white",border:"none",borderRadius:"5px"}}
      />
          </Box>


          {/* MUI Table */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Zone </TableCell>
                <TableCell>Pole </TableCell>
                <TableCell>Camera</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataArray.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={data.image} alt={`Image ${index + 1}`} style={{ width: '100px', height: '80px',borderRadius:"5px" }} />
                  </TableCell>
                  <TableCell>{data.zone}</TableCell>
                  <TableCell>{data.pole}</TableCell>
                  <TableCell>{data.camera}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

export default YourComponent;
