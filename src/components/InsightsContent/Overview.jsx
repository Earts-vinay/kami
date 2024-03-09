import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
} from '@mui/material';
import moment from "moment";
import RefreshIcon from '@mui/icons-material/Refresh';
import ApexCharts from 'react-apexcharts';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Overview = () => {
  const cardColors = [
    'linear-gradient(296deg, #7771EF, #736fee 2%);',
    'linear-gradient(114deg, #ee746f 3%, #f3b188);',
    'linear-gradient(114deg, #02b2ec 3%, #93d9ff);',
    'linear-gradient(295deg, #6adbe0, #6ea7d2 1%);',
  ];

  const cardsData = [
    {
      entryLabel: 'Entry Count',
      entryCount: 543,
      daysAgo: 7,
      difference: -15,
      differenceLabel: 'Difference',
      content: 'Event Count',
      aboveNumber: 756,
      icon: <DirectionsRunIcon style={{ color: 'white', fontSize: '38px' }} />
    },
    {
      entryLabel: 'Occupancy',
      entryCount: 245,
      daysAgo: 3,
      difference: -15,
      differenceLabel: 'Difference',
      content: 'Occupancy',
      aboveNumber: 756,
      icon: <DirectionsRunIcon style={{ color: 'white', fontSize: '38px' }} />
    },
    {
      entryLabel: 'Entry Count',
      entryCount: 3452,
      daysAgo: 1,
      difference: -15,
      differenceLabel: 'Difference',
      content: 'Event Count',
      aboveNumber: 756,
      icon: <DirectionsCarIcon style={{ color: 'white', fontSize: '38px' }} />
    },
    {
      entryLabel: 'Occupancy',
      entryCount: 324,
      daysAgo: 5,
      difference: -15,
      differenceLabel: 'Difference',
      content: 'Occupancy',
      aboveNumber: 756,
      icon: <DirectionsCarIcon style={{ color: 'white', fontSize: '38px' }} />
    },
    {
      entryLabel: 'Total Alerts',
      entryCount: 324,
      daysAgo: 2,
      difference: -15,
      differenceLabel: 'Difference',
      content: 'Occupancy',
      aboveNumber: 756,
      icon: <NotificationsIcon style={{ color: 'white', fontSize: '38px' }} />
    }
  ];


  const lineChartOptions = {
    series: [{
      name: "Desktops",
      data: [5, 300, 400, 400, 400, 300, 200]
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
      },
      animations: {
        enabled: true, // Enable animations
        easing: 'easeinout', // Use easing function
        speed: 800, // Set animation speed
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
      curve: 'smooth', // Make the line curve smooth
      width: 3, // Set the width of the line
      lineCap: 'round' // Make line caps round
    },
    colors: ['#BBA1F7'], // Set the color of the line
    title: {
      text: 'Alerts Raised',
      style: {
        color: '#003A6F', // Set the color of the title
        fontWeight: 'normal',
      }
    },
    markers: {
      size: 5, // Set the size of markers
      colors: ['#BBA1F7'], // Set marker color
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7,
      }
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // Make horizontal lines transparent
        opacity: 0.5
      },
      column: {
        colors: ['transparent', 'transparent'] // Make vertical lines transparent
      }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          fontSize: '14px', // Set label font size
          fontWeight: 400,
          colors: '#666' // Set label color
        },
        rotate: -45, // Rotate labels for better adjustment
        offsetY: 0, // Offset to adjust label position
        offsetX: 0 // Offset to adjust label position
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px', // Set label font size
          fontWeight: 400,
          colors: '#666' // Set label color
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
      },
    },
    labels: ['No. Offline', 'No. Online', 'No. not paired'],
    colors: ['#7771EF', '#EE7570', '#716F96'],
    title: {
      text: 'Camera Paired',
      style: {
        color: '#003A6F', // Set the color of the title
        fontWeight: 'normal',
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

  const lineChartOptions2 = {
    series: [
      {
        name: "Online",
        data: [5, 300, 400, 400, 400, 300, 200],
        color: "#BBA1F7" // Color for the first line
      },
      {
        name: "Offline",
        data: [10, 200, 300, 350, 400, 390, 270, 120, 0],
        color: "#1BBAFD" // Color for the second line
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
        enabled: true, // Enable animations
        easing: 'easeinout', // Use easing function
        speed: 800, // Set animation speed
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
      curve: 'smooth', // Make the line curve smooth
      width: 3, // Set the width of the line
      lineCap: 'round' // Make line caps round
    },
    title: {
      text: 'Camera Status',
      style: {
        color: '#003A6F', // Set the color of the title
        fontWeight: 'normal',
      }
    },
    markers: {
      size: 5, // Set the size of markers
      colors: ['#BBA1F7', '#1BBAFD', '#FF5733'], // Set marker color
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7,
      }
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // Make horizontal lines transparent
        opacity: 0.5
      },
      column: {
        colors: ['transparent', 'transparent'] // Make vertical lines transparent
      }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          fontSize: '14px', // Set label font size
          fontWeight: 400,
          colors: '#666' // Set label color
        },
        rotate: -45, // Rotate labels for better adjustment
        offsetY: 0, // Offset to adjust label position
        offsetX: 0 // Offset to adjust label position
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px', // Set label font size
          fontWeight: 400,
          colors: '#666' // Set label color
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



  return (
    <Box style={{ padding: "0px !important", marginTop: "10px" }} >
      <Box display="flex" justifyContent="end" alignItems="center" style={{ padding: "0px !important" }}>
        <Typography variant="body-2">Last Updated {moment().format('HH:mm')}</Typography>
        <IconButton color="primary" >
          <RefreshIcon />
        </IconButton>
      </Box>
      <Box mt={1} >
        <Grid container spacing={1.5}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Card
                sx={{
                  borderRadius: '10px',
                  background: cardColors[index % cardColors.length],
                  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                  backdropFilter: "blur(20px)",
                  opacity: "0.9",
                  border: '1px solid white',
                  height: '160px', // Adjust height as needed
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <Typography variant="subtitle2" color="white" sx={{ fontSize: '14px' }}>
                        {card.entryLabel}
                      </Typography>
                      <Typography variant="h1" color="white" style={{ fontSize: '30px', fontWeight: "bold" }}>
                        {card.entryCount}
                      </Typography>
                    </div>
                    <div>
                      {card.icon}
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <Typography variant="h3" color="white" style={{ fontSize: '20px' }}>
                        {card.aboveNumber}
                      </Typography>
                      <Typography variant="subtitle2" color="white">
                        {card.daysAgo} days ago
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle2" color="white" style={{ textAlign: "right", }}>
                        {card.difference}
                      </Typography>
                      <Typography variant="subtitle2" color="white">
                        Difference
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box style={{ display: 'flex', flexDirection: 'row', width: '100%' }} mt={2.5} gap={2}>
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={4}> {/* Adjust the sizes here */}
            <Box style={{ backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
              {/* ApexCharts Chart 1 */}
              <ApexCharts options={lineChartOptions} series={lineChartOptions.series} type="line" height={350} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}> {/* Adjust the sizes here */}
            <Box style={{ backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
              {/* ApexCharts Chart 2 */}
              <ApexCharts options={pieChartOptions} series={pieChartOptions.series} type="pie" height={395} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}> {/* Adjust the sizes here */}
            <Box style={{ backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
              {/* ApexCharts Chart 3 */}
              <ApexCharts options={lineChartOptions2} series={lineChartOptions2.series} type="line" height={350} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Overview;
