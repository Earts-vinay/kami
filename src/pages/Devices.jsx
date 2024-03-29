import React, { useState } from 'react';
import { Navbar } from '../components';
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, Container, InputAdornment, Typography, Popover } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import Pagination from '@mui/material/Pagination';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NavbarLoader from "./NavbarLoader";

const commonStyles = {
  fontFamily: "montserrat-regular"
};


const Devices = () => {
  const pageSizeOptions = [4, 8, 20];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageSizeOptions[0]);
  const [anchorEl, setAnchorEl] = useState(null); 
  const [selectedDate, setSelectedDate] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);

  };


  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setAnchorEl(null); 
  };

  const alertsData = [
    { id: 1, image: 'assets/images/car1.png', camera: 'Gate 1 Cam Entry', zone: 'Zone A', pole: 'Pole 1', eventType: 'Linkdome Bullet', status: "Offline", },
    { id: 2, image: 'assets/images/car.jpg', camera: 'Gate 1 Cam Entry', zone: 'Zone B', pole: 'Pole 1', eventType: 'Linkdome Bullet', status: "Offline", },
    { id: 3, image: 'assets/images/car.jpg', camera: 'Gate 1 Cam Entry', zone: 'Zone C', pole: 'Pole 1', eventType: 'Linkdome Bullet', status: "Online", },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 Cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: 'Linkdome Bullet', status: "Online", },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 Cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: 'Linkdome Bullet', status: "Online", },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 Cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: 'Linkdome Bullet', status: "Offline", },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 Cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: 'Linkdome Bullet', status: "Offline", },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [addInfoDropdown, setAddInfoDropdown] = useState('');

  const handleAddInfoChange = (event) => {
    setAddInfoDropdown(event.target.value);
  };

  const filteredData = alertsData.filter(alert =>
    alert.camera.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.pole.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.eventType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <div>
      <NavbarLoader role="propertyView" />
      <Container maxWidth="xxl" sx={{  }}>
        <Box sx={{
          backgroundColor: "linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)", backdropFilter: "blur(15px)",
          boxShadow: " 0 0 5px 0 #2465e9",
          width: "100%",height:"80vh", borderRadius: "10px",overFlow:"auto",marginTop:"10px"
        }}>
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", pt: 2, gap: "25px", px: 2 }}>
          <Box display="flex" alignItems="center" gap={2}>
              <CalendarMonthIcon onClick={handleClick} fontSize="large" color="primary" /> 
              <Box >
                <Box >
                  <Typography sx={{ color: "#2465e9", ...commonStyles,fontSize:"12px"  }}>
                    {selectedDate ? selectedDate.format('MMM DD YYYY') : moment().format('MMM DD YYYY')}
                  </Typography>
                  <Typography sx={{ color: "#2465e9", ...commonStyles }}>
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
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: '20px' }}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "whitelinear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)", backdropFilter: "blur(15px)",
                boxShadow: "0 0 5px 0 rgba(0, 58, 111, 0.5)",
                border: "solid 2px #2465e9",
                border: "none", borderRadius: "5px",
                ...commonStyles
              }}
            />
          </Box>

          <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{fontWeight:"bold",paddingY:"12px",...commonStyles}}>Device Name</TableCell>
                  <TableCell sx={{fontWeight:"bold",paddingY:"12px",...commonStyles}}>Device ID</TableCell>
                  <TableCell sx={{fontWeight:"bold",paddingY:"12px",...commonStyles}}>Pole</TableCell>
                  <TableCell sx={{fontWeight:"bold",paddingY:"12px",...commonStyles}}>Camera Model</TableCell>
                  <TableCell sx={{fontWeight:"bold",paddingY:"12px",...commonStyles}}>Status</TableCell>
                  {/* <TableCell> Controls </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow key={row.id}>
                     <TableCell width="20%" sx={{paddingY:"12px"}}>
                      <img src={row.image} alt={`Image ${index + 1}`} style={{ width: '150px', height: '80px', borderRadius: "5px",paddingLeft:"50px" }} />
                    </TableCell>
                    <TableCell sx={{fontSize:"16px",fontWeight:"bold",paddingY:"12px",...commonStyles}}>{row.camera}</TableCell>
                    <TableCell sx={{fontSize:"16px",fontWeight:"bold",paddingY:"12px",...commonStyles}}>{row.zone}</TableCell>
                    <TableCell sx={{fontSize:"16px",fontWeight:"bold",paddingY:"12px",...commonStyles}}>{row.pole}</TableCell>
                    <TableCell sx={{fontSize:"16px",fontWeight:"bold",paddingY:"12px",...commonStyles}}>{row.eventType}</TableCell>
                    <TableCell sx={{fontSize: "16px", fontWeight: "bold",paddingY:"12px",...commonStyles,color: row.status === 'Offline' ? 'red' : 'green'}}> {row.status}</TableCell>
                    {/* <TableCell>
                      <Switch />
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '5px' }}>
            <Pagination
              count={Math.ceil(filteredData.length / rowsPerPage)}
              color="primary"
              page={page + 1}
              onChange={(event, value) => handleChangePage(event, value - 1)}
              sx={commonStyles}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Devices;
