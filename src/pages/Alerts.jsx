
import React, { useState } from 'react';
import { Navbar } from '../components';
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, Container, InputAdornment, Typography, Popover } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';
import { StaticDateTimePicker } from '@mui/x-date-pickers';

const commonStyles = {
  fontFamily: "montserrat-regular"
};


const Alerts = () => {
  const navigate = useNavigate();

  const handleTableRowClick = (row) => {
    navigate(`/camera`);
  };
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

  const alertsData = [
    { id: 1, image: 'assets/images/car1.png', camera: 'Gate 1 cam Entry', zone: 'Zone A', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM', eventDate: "2024-02-24" },
    { id: 2, image: 'assets/images/car1.png', camera: 'Gate 1 cam Entry', zone: 'Zone B', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 3, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone C', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
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
      <Navbar />
      <Container maxWidth="xxl" sx={{ height: "55vh" }}>
        <Box sx={{
          background: "linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)", backdropFilter: "blur(15px)",
          boxShadow: " 0 0 5px 0 #2465e9",
          fontFamily: "montserrat-regular",
          width: "100%", height: "80vh", marginTop: "5px", borderRadius: "10px", overflow: "auto"
        }}>
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", py: 2, gap: "25px", px: 2 }}>
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
                ...commonStyles,
                border: "none", borderRadius: "5px",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              }}
            />
          </Box>

          <TableContainer component={Paper} sx={{ backgroundColor: "transparent", fontFamily: "montserrat-regular" }} >
            <Table>
              <TableHead>
                <TableRow sx={{ fontFamily: "montserrat-regular" }}>
                  <TableCell></TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#657889", paddingY: "12px", ...commonStyles }} >Camera</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#657889", paddingY: "12px", ...commonStyles }}>Zone</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#657889", paddingY: "12px", ...commonStyles }}>Pole</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#657889", paddingY: "12px", ...commonStyles }}>Event Type</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#657889", paddingY: "12px", ...commonStyles }}>Event Time</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#657889", paddingY: "12px", ...commonStyles }}> Add Info </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow key={row.id} sx={{ cursor: 'pointer' }}>
                    <TableCell width="20%" onClick={() => handleTableRowClick(row)} sx={{ paddingY: "10px", ...commonStyles }}>
                      <img src={row.image} alt={`Image ${index + 1}`} style={{ width: '150px', height: '80px', borderRadius: "5px", paddingLeft: "50px" }} />
                    </TableCell>
                    <TableCell onClick={() => handleTableRowClick(row)} sx={{ paddingY: "10px", ...commonStyles }}><Typography variant='h6' sx={{ paddingY: "10px", ...commonStyles }} fontSize="16px" fontWeight="bold">{row.camera}</Typography></TableCell>
                    <TableCell onClick={() => handleTableRowClick(row)} sx={{ paddingY: "10px", ...commonStyles }}><Typography variant='h6' sx={commonStyles} fontSize="16px" fontWeight="bold">{row.zone}</Typography></TableCell>
                    <TableCell onClick={() => handleTableRowClick(row)} sx={{ paddingY: "10px", ...commonStyles }}><Typography variant='h6' sx={commonStyles} fontSize="16px" fontWeight="bold">{row.pole}</Typography></TableCell>
                    <TableCell onClick={() => handleTableRowClick(row)} sx={{ paddingY: "10px", ...commonStyles }} ><Box display="flex" gap={2}><img src='assets/images/carx.svg' /> <Box display="flex" flexDirection="column" p={0} sx={commonStyles} fontSize="16px" fontWeight="bold">{row.eventType}<Typography variant='body-2' sx={{ color: "red", textAlign: "start", py: "0px", ...commonStyles }}  >{row.eventStatus}</Typography></Box></Box> </TableCell>
                    <TableCell onClick={() => handleTableRowClick(row)} sx={{ paddingY: "10px", ...commonStyles }} ><Typography fontWeight="bold" fontSize="16px" sx={commonStyles}>{row.eventTime} <br />{row.eventDate}</Typography></TableCell>
                    <TableCell sx={commonStyles}>
                      <Select
                        value={addInfoDropdown}
                        onChange={handleAddInfoChange}
                        displayEmpty
                        sx={{
                          ...commonStyles,
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                        }}
                        inputProps={{ 'aria-label': 'Add Info' }}
                        size='small'
                      >
                        <MenuItem value="" sx={commonStyles} fontWeight="bold" fontSize="16px">Open</MenuItem>
                        <MenuItem value="" sx={commonStyles} fontWeight="bold" fontSize="16px">Close</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
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

export default Alerts;
