

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
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, Container, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import Pagination from '@mui/material/Pagination';

const Devices = () => {
  const pageSizeOptions = [4, 8, 20];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageSizeOptions[0]);

  const alertsData = [
    { id: 1, image: 'assets/images/car.jpg', camera: 'Camera 1', zone: 'Zone A', pole: 'Pole 1', eventType: '6TRJ244', status: "Offline", },
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
          <Box sx={{ pt: 2, textAlign: "end", px: 2 }}>
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
              sx={{ backgroundColor: "whitelinear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)",   backdropFilter: "blur(15px)",
              boxShadow: "0 0 5px 0 rgba(0, 58, 111, 0.5)",
              border: "solid 2px #2465e9",
            border: "none", borderRadius: "5px", }}
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
                    <TableCell>
                      <img src={row.image} alt={`Image ${index + 1}`} style={{ width: '100px', height: '80px', borderRadius: "5px" }} />
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
