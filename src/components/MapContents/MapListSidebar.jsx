import React, { useState } from 'react';
import styled from '@mui/system/styled';  // Add this line
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import moment from "moment";
import SearchIcon from '@mui/icons-material/Search';
import { Container, Box, Tabs, Tab, TextField, IconButton, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, InputAdornment, Typography, Card, CardMedia, CardContent, Button, Popover } from '@mui/material';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'; // Import StaticDateTimePicker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // Import LocalizationProvider
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const commonStyles = {
  fontFamily: "montserrat-regular"
};
const YourComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [alignment, setAlignment] = useState('map');
  const [selectedDate, setSelectedDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // For Popover positioning
  const handleDateSelect = (date) => {
      setSelectedDate(date);

  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

  const handleListClick = () => {
    setSidebarOpen(true);
    setAlignment('list');
  };

  const handleMapClick = () => {
    setSidebarOpen(false);
    setAlignment('map');
  };


  // Example data array (replace it with your actual data)
  const dataArray = [
    { image: 'assets/images/car.jpg', zone: 'Camera 1', pole: 'Pole 1', camera: 'Online' },
    { image: 'assets/images/car.jpg', zone: 'Camera 2', pole: 'Pole 2', camera: 'Online' },
    { image: 'assets/images/car.jpg', zone: 'Camera 3', pole: 'Pole 2', camera: 'Online' },
    { image: 'assets/images/car.jpg', zone: 'Camera 4', pole: 'Pole 2', camera: 'Online' },
    { image: 'assets/images/car.jpg', zone: 'Camera 5', pole: 'Pole 2', camera: 'Online' },
    { image: 'assets/images/car.jpg', zone: 'Camera 6', pole: 'Pole 2', camera: 'Online' },
    { image: 'assets/images/car.jpg', zone: 'Camera 7', pole: 'Pole 2', camera: 'Online' },
    { image: 'assets/images/car.jpg', zone: 'Camera 8', pole: 'Pole 2', camera: 'Online' },
    // Add more data as needed
  ];

  return (
    <div>
      <Box width="100%" >
        <ToggleButtonGroup
          fullWidth
          value={alignment}
          exclusive
          onChange={(event, newAlignment) => setAlignment(newAlignment)}
          aria-label="Platform"
          sx={{ backgroundColor: 'black', color: 'white', width: "15%" }}
        >
          <ToggleButton
            value="list"
            onClick={handleListClick}
            size='small'
            sx={{
              backgroundColor: "white",
              textTransform: "capitalize",
              fontFamily: "montserrat-regular",
              fontWeight: "bold",
              '&.Mui-selected': {
                backgroundColor: '#2465e9',
                color: "white",
                backdropFilter: "blur(15px)",
            boxShadow: "0 0 5px 0 rgba(25, 96, 159, 0.1)",
            border: "solid 1px #fff",
              },
            }}
          >
            List View
          </ToggleButton>
          <ToggleButton
            value="map"
            onClick={handleMapClick}
            size='small'
            sx={{
              backgroundColor: 'white',
              fontFamily: "montserrat-regular",
              fontWeight: "bold",
              textTransform: "capitalize",
              '&.Mui-selected': {
                backgroundColor: '#2465e9',
                color: "white",
                backdropFilter: "blur(15px)",
            boxShadow: "0 0 5px 0 rgba(25, 96, 159, 0.1)",
            border: "solid 1px #fff",
              },
            }}
         
          >
            Map View
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>


      {sidebarOpen && (
        <Paper
          style={{
            width: 480,
            transition: 'width 0.3s, left 0.3s',
            overflow: 'auto',
            position: 'absolute',
            top: '0',
            right: '0',
            height: "100%",
            zIndex: 1000,
            background:"linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)"
          }}
          sx={{  backdropFilter: "blur(15px)",
  boxShadow: "0 0 5px 0 rgba(25, 96, 159, 0.1)",
  border: "solid 1px #fff",borderRadius:"10px"}}
        >
          {/* Search Bar */}
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "25px", p: 1, backdropFilter: " blur(5px)", boxShadow: "-1px 6px 31px 0 rgba(25, 96, 159, 0.1)", backgroundColor: '#2465e9' }}>
                            <Box display="flex" alignItems="center" gap={2}>
                                <CalendarMonthIcon onClick={handleClick} fontSize="large" sx={{ color: "white", cursor: "pointer" }} /> {/* Toggle the visibility of DateTimePicker */}
                                <Box >
                                    <Box >
                                        <Typography sx={{ color: "white", ...commonStyles,fontSize:"12px" }}>
                                            {selectedDate ? selectedDate.format('MMM DD YYYY') : moment().format('MMM DD YYYY')}
                                        </Typography>
                                        <Typography sx={{ color: "white", ...commonStyles }}>
                                            {selectedDate ? selectedDate.format('hh:mm A') : moment().format('hh:mm A')}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Popover
                                open={Boolean(anchorEl)}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                            >

                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                    <StaticDateTimePicker
                                        label="Event Date and Time"
                                        value={selectedDate}

                                        onChange={handleDateSelect}

                                        sx={{
                                            '& .MuiPickersLayout-toolbar': {
                                                display: 'none',
                                            },

                                        }}
                                        onClose={handleClose}
                                    />
                                </LocalizationProvider>
                            </Popover>
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
                                sx={{ backgroundColor: "white", border: "none", borderRadius: "5px" }}
                            />
                        </Box>

          <Box height="90%" overflow="auto">
            {/* MUI Table */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Camera </TableCell>
                  <TableCell>Event Type </TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {dataArray.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>
                    <img src={data.image} alt={`Image ${index + 1}`} style={{ width: '150px', height: '80px', borderRadius: "5px", paddingLeft: "5px" }} />
                    </TableCell>
                    <TableCell>{data.zone}</TableCell>
                    <TableCell>{data.pole}</TableCell>
                    <TableCell>{data.camera}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

        </Paper>
      )}
    </div>
  );
};

export default YourComponent;
