import React, { useState } from 'react';
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, InputAdornment, Typography, Pagination, IconButton, Grid } from '@mui/material';
import ApexCharts from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment';

const SystemStats = () => {
  const pieChartData = [
    { name: 'Online', value: 50 },
    { name: 'Offline', value: 20 },
    { name: 'Offline', value: 30 },
  ];

  const lineChartData1 = [
    { timestamp: '8:00', value1: 2, value2: 4 },
    { timestamp: '9:00', value1: 5.5, value2: 7.5 },
    { timestamp: '10:00', value1: 2, value2: 3 },
  ];

  const tableData = [
    { camera: 'Camera 1', lastOfflineTime: '2022-02-27 10:30:00', offlineTime: 120 },
    { camera: 'Camera 2', lastOfflineTime: '2022-02-27 12:45:00', offlineTime: 60 },
  ];

  const pieChartOptions = {
    series: [84, 35, 33],
    chart: {
      width: 380,
      type: 'pie',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
        },
        autoSelected: 'zoom'
      }
    },
    labels: ['No. Offline', 'No. Online', 'No. not paired'],
    colors: ['#7771EF', '#EE7570', '#716F96'],
    title: {
      text: 'Camera Paired',
      style: {
        color: '#003A6F', 
        fontWeight: 'normal' 
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      offsetY: 5,
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const lineChartOptions1 = {
    series: [{
      name: "Value 1",
      data: lineChartData1.map(entry => entry.value1)
    }],
    chart: {
      type: 'line',
      width: 300,
      height: 300, 
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
        },
        autoSelected: 'zoom'
      }
    },
    stroke: {
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Line Chart 1',
      style: {
        color: '#003A6F', 
        fontWeight: 'normal' 
      }
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

  const lineChartOptions = {
    series: [{
      name: "Desktops",
      data: [0, 2, 2, 6],
      color: "#BBA1F7"
    }],
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
        },
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight', 
      width: 5,
      lineCap: 'butt' 
    },
    title: {
      text: 'Paired Camera Status (all)',
      style: {
        color: '#003A6F', 
        fontWeight: 'normal' 
      } 
       },
    markers: {
      show: false, 
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], 
        opacity: 0.5
      },
      column: {
        colors: ['transparent', 'transparent'] 
      }
    },
    xaxis: {
      categories: ['08:00 AM', '12:00 PM', '04:00 PM', '08:00 PM'], 
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 400,
          colors: '#666'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 400,
          colors: '#666'
        },
        formatter: function (value) {
          return value.toString(); 
        }
      }
    },
    annotations: {
      xaxis: [{
        x: '100%',
        y: '100%',
        borderColor: '#ccc',
        offsetY: -40,
        text: 'Days | Weeks | Months | Years',
        textAnchor: 'start',
        borderWidth: 1,
        borderRadius: 5,
      }]
    }
};

  const lineChartOptions2 = {
    series: [
      {
        name: "Desktops",
        data: [5, 300, 400, 400, 400, 300, 0],
        color: "#BBA1F7" 
      },
      {
        name: "Laptops",
        data: [10, 200, 300, 350, 400, 390, 270],
        color: "#1BBAFD" 
      },
    ],
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
        },
        autoSelected: 'zoom'
      },
      animations: {
        enabled: true, 
        easing: 'easeinout', 
        speed: 800, 
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth', 
      width: 3, 
      lineCap: 'round' 
    },
    title: {
      text: 'Alerts Raised',
      style: {
        color: '#003A6F', 
        fontWeight: 'normal',
        fontSize: "15px",
      }
    },
    markers: {
      size: 5, 
      colors: ['#BBA1F7', '#1BBAFD', '#FF5733'], 
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7,
      }
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], 
        opacity: 0.5
      },
      column: {
        colors: ['transparent', 'transparent'] 
      }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          fontSize: '14px', 
          fontWeight: 400,
          colors: '#666' 
        },
        rotate: -45, 
        offsetY: 0, 
        offsetX: 0 
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px', 
          fontWeight: 400,
          colors: '#666' 
        }
      }
    },
    annotations: {
      xaxis: [
        {
          x: '100%',
          y: '100%',
          borderColor: '#ccc',
          offsetY: -40,
          text: 'D|M|Y',
          textAnchor: 'end',
          borderWidth: 1,
          borderRadius: 5,
        }
      ]
    }
  };

  const navigate = useNavigate();

  const handleTableRowClick = (row) => {
    navigate(`/camera`);
  };

  const pageSizeOptions = [4, 8, 20];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageSizeOptions[0]);

  const alertsData = [
    { id: 1, image: 'assets/images/car1.png', camera: 'Gate 1 cam Entry', zone: 'P01', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM', eventDate: "2024-02-24", status: 'Online' },
    { id: 2, image: 'assets/images/car1.png', camera: 'Gate 1 cam Entry', zone: 'P01', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24", status: 'Offline' },
    { id: 3, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'P01', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24", status: 'Online' },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'P01', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24", status: 'Offline' },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'P01', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24", status: 'Online' },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'P01', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24", status: 'Offline' },
    { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'P01', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24", status: 'Online' },
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



  return (
    <Container maxWidth="xxl" style={{ padding: "0px !important", marginTop: "10px" }} disableGutters>
      <Box display="flex" justifyContent="end" alignItems="center" style={{ padding: "0px !important" }}>
        <Typography variant="body-2">Last Updated {moment().format('HH:mm')}</Typography>
        <IconButton color="primary" >
          <RefreshIcon />
        </IconButton>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', width: '100%' }} mt={1} gap={2}>
        <Grid container spacing={2.5}>
         
          <Grid item xs={12} md={4}> 
            <Box style={{ backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
              {/* ApexCharts Chart 3 */}
              <ApexCharts options={lineChartOptions2} series={lineChartOptions2.series} type="line" height={350} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}> 
            <Box style={{ backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
              {/* ApexCharts Chart 2 */}
              <ApexCharts options={pieChartOptions} series={pieChartOptions.series} type="pie" height={395} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}> 
            <Box style={{ backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
              {/* ApexCharts Chart 1 */}
              <ApexCharts options={lineChartOptions} series={lineChartOptions.series} type="line" height={350} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <div style={{ marginTop: "20px" }}>
  <div maxWidth="4xl" sx={{ height: "55vh" }}>
    <Box sx={{ backgroundColor: "#FFFFFF", width: "100%", marginTop: "10px", borderRadius: "10px" }}>
      <Typography variant="h6" align="left" sx={{ paddingTop: '10px', paddingLeft: "10px", color: '#003A6F' }}>Unhealthy Cameras</Typography>
      <TableContainer sx={{ backgroundColor: "transparent",height:"40vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Device Name</TableCell>
              <TableCell>Pole</TableCell>
              <TableCell>Last Online</TableCell>
              <TableCell>Offline Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alertsData.map((row, index) => (
              <TableRow key={row.id} sx={{ cursor: 'pointer' }}>
                <TableCell width="20%" onClick={() => handleTableRowClick(row)}>
                  <img src={row.image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto', maxWidth: '150px', borderRadius: "5px" }} />
                </TableCell>
                <TableCell onClick={() => handleTableRowClick(row)}>{row.camera}</TableCell>
                <TableCell onClick={() => handleTableRowClick(row)}>{row.zone}</TableCell>
                <TableCell onClick={() => handleTableRowClick(row)}>{row.eventType}</TableCell>
                <TableCell onClick={() => handleTableRowClick(row)}>{row.eventTime} <br />{row.eventDate}</TableCell>
                <TableCell onClick={() => handleTableRowClick(row)} sx={{ color: row.status === 'Offline' ? 'red' : 'inherit' }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      
    </Box>
  </div>
</div>

    </Container>
  );
};

export default SystemStats;
