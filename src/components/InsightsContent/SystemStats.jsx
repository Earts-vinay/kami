import React, { useState } from 'react';
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, Container, InputAdornment, Typography, Pagination } from '@mui/material';
import ApexCharts from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';


const commonStyles = {
  fontFamily: "montserrat-regular"
};
const SystemStats = () => {
  // Dummy data for charts
  const pieChartData = [
    { name: 'Online', value: 70 },
    { name: 'Offline', value: 30 },
  ];

  const lineChartData1 = [
    { timestamp: '8:00', value1: 2, value2: 4 },
    { timestamp: '9:00', value1: 5.5, value2: 7.5 },
    { timestamp: '10:00', value1: 2, value2: 3 },
  ];

  // Dummy data for table
  const tableData = [
    { camera: 'Camera 1', lastOfflineTime: '2022-02-27 10:30:00', offlineTime: 120 },
    { camera: 'Camera 2', lastOfflineTime: '2022-02-27 12:45:00', offlineTime: 60 },
  ];

  const pieChartOptions = {
    series: pieChartData.map(data => data.value),
    chart: {
      width: 300,
      type: 'pie',
    },
    labels: pieChartData.map(data => data.name),
    legend: {
      show: true,
      position: 'bottom',
      offsetY: 5,
      formatter: function(val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3
      }
    }
  };

  const lineChartOptions1 = {
    series: [{
      name: "Value 1",
      data: lineChartData1.map(entry => entry.value1)
    }],
    chart: {
      type: 'line',
      height: '100%' // Set the height to 100%
    },
    stroke: {
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Line Chart 1',
      align: 'left'
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    },
    xaxis: {
      categories: lineChartData1.map(entry => entry.timestamp),
    }
  };

  const lineChartOptions2 = {
    series: [{
      name: "Value 2",
      data: lineChartData1.map(entry => entry.value2)
    }],
    chart: {
      type: 'line',
      height: '100%' // Set the height to 100%
    },
    stroke: {
      curve: 'stepline'
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Line Chart 2',
      align: 'left'
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    },
    xaxis: {
      categories: lineChartData1.map(entry => entry.timestamp),
    }
  };

  const navigate = useNavigate();

  const handleTableRowClick = (row) => {
    // Assuming you have a route for the camera screen with the camera ID as a parameter
    navigate(`/camera`);
  };

  const pageSizeOptions = [4, 8, 20];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageSizeOptions[0]);

  const alertsData = [
    { id: 1, image: 'assets/images/car1.png', camera:'Gate 1 cam Entry', zone: 'Zone A', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM', eventDate: "2024-02-24" },
    { id: 2, image: 'assets/images/car1.png', camera: 'Gate 1 cam Entry', zone: 'Zone B', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 3, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone C', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
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
    <Container maxWidth="xxl" sx={{ height: "100%" }}>
      <Box display="flex" gap={2}>
  <Box width="33%" sx={{ backgroundColor: "white", borderRadius: "5px", padding: "15px" }}>
    <Typography pb={2} sx={commonStyles}>Line Chart 1</Typography>
    <ApexCharts options={lineChartOptions1} series={lineChartOptions1.series} type="line" height={200} />
  </Box>

  <Box width="33%" sx={{ backgroundColor: "white", borderRadius: "5px", padding: "15px" }}>
    <Typography pb={2} sx={commonStyles}>Pie Chart</Typography>
    <ApexCharts options={pieChartOptions} series={pieChartOptions.series} type="pie" height={200} />
  </Box>

  <Box width="33%" sx={{ backgroundColor: "white", borderRadius: "5px", padding: "15px" }}>
    <Typography pb={2} sx={commonStyles}>Line Chart 2</Typography>
    <ApexCharts options={lineChartOptions2} series={lineChartOptions2.series} type="line" height={200} />
  </Box>
</Box>

      <div>
        <div maxWidth="4xl" sx={{ height: "55vh" }}>
          <Box sx={{
            backgroundColor: "#FFFFFF",
            width: "100%", marginTop: "10px", borderRadius: "10px"
          }}>

            <TableContainer  sx={{ backgroundColor: "transparent" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell sx={commonStyles}>Camera</TableCell>
                    <TableCell sx={commonStyles}>Zone</TableCell>
                    <TableCell sx={commonStyles}>Event Type</TableCell>
                    <TableCell sx={commonStyles}>Event Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((row, index) => (
                    <TableRow key={row.id} sx={{ cursor: 'pointer' }}>
                      <TableCell width="20%" onClick={() => handleTableRowClick(row)}>
                        <img src={row.image} alt={`Image ${index + 1}`} style={{ width: '150px', height: '80px', borderRadius: "5px" }} />
                      </TableCell>
                      <TableCell onClick={() => handleTableRowClick(row)}>{row.camera}</TableCell>
                      <TableCell onClick={() => handleTableRowClick(row)}>{row.zone}</TableCell>
                      <TableCell onClick={() => handleTableRowClick(row)}>{row.eventType}</TableCell>
                      <TableCell onClick={() => handleTableRowClick(row)}>{row.eventTime} <br />{row.eventDate}</TableCell>
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
        </div>
      </div>
    </Container>
  );
};

export default SystemStats;
