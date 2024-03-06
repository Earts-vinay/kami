

// import React, { useState } from 'react';
// import { Navbar } from '../components';
// import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, Container, InputAdornment, TablePagination } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import Switch from '@mui/material/Switch';

// const Devices = () => {
//   const pageSizeOptions = [4, 8, 20];

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(pageSizeOptions[0]);

//   const alertsData = [
//     { id: 1, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone A', pole: 'Pole 1', eventType: '6TRJ244', status:"Offline",  },
//     { id: 2, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone B', pole: 'Pole 1', eventType: '6TRJ244', status:"Offline" ,  },
//     { id: 3, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone C', pole: 'Pole 1', eventType: '6TRJ244', status:"Offline",  },
//     { id: 4, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', status:"Offline" ,  },
//     { id: 4, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', status:"Offline" ,  },
//     { id: 4, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', status:"Offline" ,  },
//     { id: 4, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', status:"Offline" ,  },
//     // Add more data as needed
//   ];

//   const [searchTerm, setSearchTerm] = useState('');
//   const [addInfoDropdown, setAddInfoDropdown] = useState('');

//   const handleAddInfoChange = (event) => {
//     setAddInfoDropdown(event.target.value);
//   };

//   const filteredData = alertsData.filter(alert =>
//     alert.camera.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     alert.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     alert.pole.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     alert.eventType.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedData = filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

//   return (
//     <div>
//       <Navbar />
//       <Container maxWidth="xl" sx={{height:"55vh"}}>
//         <Box sx={{ backgroundColor: "#eff2fd", width: "100%", marginTop: "10px", borderRadius: "10px" }}>
//           <Box sx={{ pt: 2, textAlign: "end", px: 2 }}>
//             <TextField
//               label="Search"
//               variant="outlined"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{ marginBottom: '20px' }}
//               size="small"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <SearchIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{ backgroundColor: "white", border: "none", borderRadius: "5px", }}
//             />
//           </Box>

//           <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell></TableCell>
//                   <TableCell>Device Name</TableCell>
//                   <TableCell>Device ID</TableCell>
//                   <TableCell>Pole</TableCell>
//                   <TableCell>Camera Model</TableCell>
//                   <TableCell>Status</TableCell>
//                   <TableCell> Controls </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {paginatedData.map((row, index) => (
//                   <TableRow key={row.id}>
//                     <TableCell>
//                       <img src={row.image} alt={`Image ${index + 1}`} style={{ width: '100px', height: '80px', borderRadius: "5px" }} />
//                     </TableCell>
//                     <TableCell>{row.camera}</TableCell>
//                     <TableCell>{row.zone}</TableCell>
//                     <TableCell>{row.pole}</TableCell>
//                     <TableCell>{row.eventType}</TableCell>
//                     <TableCell>{row.status} </TableCell>
//                     <TableCell>
//                     <Switch />
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//        <Box sx={{textAlign:"center"}}>
//        <TablePagination
//             rowsPerPageOptions={pageSizeOptions}
//             component="div"
//             count={filteredData.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//             sx={{ backgroundColor: "transparent", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px",textAlign:"center" }}
//           />
//        </Box>
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default Devices;


import React, { useState } from 'react';
import { Navbar } from '../components';
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, Container, InputAdornment, Typography, Popover } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import Pagination from '@mui/material/Pagination';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'; // Import StaticDateTimePicker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // Import LocalizationProvider
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Devices = () => {
  const pageSizeOptions = [4, 8, 20];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageSizeOptions[0]);
  const [anchorEl, setAnchorEl] = useState(null); // For Popover positioning
  const [selectedDate, setSelectedDate] =useState(new Date());
  const [selectedTime, setSelectedTime] =useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setAnchorEl(null); // Close the Popover after selecting a date
    // You can use the selected date as needed in your application
  };

  const alertsData = [
    { id: 1, image: 'assets/images/car1.png', camera: 'Camera 1', zone: 'Zone A', pole: 'Pole 1', eventType: '6TRJ244', status: "Offline", },
    { id: 2, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone B', pole: 'Pole 1', eventType: '6TRJ244', status: "Offline", },
    { id: 3, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone C', pole: 'Pole 1', eventType: '6TRJ244', status: "Offline", },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', status: "Offline", },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', status: "Offline", },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', status: "Offline", },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', status: "Offline", },
    // Add more data as needed
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
      <Container maxWidth="xxl" sx={{ height: "70vh" }}>
        <Box sx={{
          backgroundColor: "linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)", backdropFilter: "blur(15px)",
          boxShadow: " 0 0 5px 0 #2465e9",
          width: "100%",height:"80vh", marginTop: "10px", borderRadius: "10px"
        }}>
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", pt: 2, gap: "25px", px: 2 }}>
            <Box display="flex" alignItems="center">
              <CalendarMonthIcon onClick={handleClick} fontSize="large" color="primary" /> {/* Toggle the visibility of DateTimePicker */}
              <Box >
                <Typography variant="body2" sx={{ marginLeft: 1, color: "#2465e9" }}>{dayjs(selectedDate).format('MMM DD YYYY ')} </Typography>
                <Typography sx={{ marginLeft: 1, color: "#2465e9" }}> {dayjs(selectedDate).format(' hh:mm a ')}</Typography>
              </Box>
            </Box>
            <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateTimePicker
            label="Event Date and Time"
            value={selectedDate}
            onChange={handleDateSelect}
            onTimeChange={handleTimeSelect}
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
                border: "none", borderRadius: "5px", marginTop: "10px"
              }}
            />
          </Box>

          <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Device Name</TableCell>
                  <TableCell>Device ID</TableCell>
                  <TableCell>Pole</TableCell>
                  <TableCell>Camera Model</TableCell>
                  <TableCell>Status</TableCell>
                  {/* <TableCell> Controls </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow key={row.id}>
                     <TableCell width="20%" >
                      <img src={row.image} alt={`Image ${index + 1}`} style={{ width: '150px', height: '80px', borderRadius: "5px",paddingLeft:"50px" }} />
                    </TableCell>
                    <TableCell>{row.camera}</TableCell>
                    <TableCell>{row.zone}</TableCell>
                    <TableCell>{row.pole}</TableCell>
                    <TableCell>{row.eventType}</TableCell>
                    <TableCell>{row.status} </TableCell>
                    {/* <TableCell>
                      <Switch />
                    </TableCell> */}
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

            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Devices;
