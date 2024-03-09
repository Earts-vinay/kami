import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
} from '@mui/material';
import ApexCharts from 'apexcharts';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import moment from 'moment';
import RefreshIcon from '@mui/icons-material/Refresh';


const Incident = () => {
  const cardColors = [
    'linear-gradient(296deg, #a486f2, #736fee 2%);',
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
    }
  ];

  useEffect(() => {
    // Bar chart options
    const barChartOptions = {
      series: [
        {
          name: 'Alerts',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Online Camera',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'Offline Camera',
          data: [35, 42, 42, 40, 50, 45, 55, 52, 58]
        }
      ],
      colors: ['#9D74FC', '#1BBAFD', '#4472D9'],
      chart: {
        type: 'bar',
        height: "90%",
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '70%', // Adjust the width of the bars here
          horizontal: false,
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      },
      legend: {
        position: 'bottom',
        offsetY: 2,
        markers: {
          width: 12,
          height: 12,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0
        },
        offsetY: 2, // Adding additional offset from the top
      },
      title: {
        text: 'Camera Status Overview',
        style: {
          color: '#003A6F', // Set the color of the title
          fontWeight: 'normal' // Set the font weight to normal
        }
      }
    };



    // Donut chart options
    const donutChartOptions = {
      series: [44, 55, 41],
      chart: {
        type: 'donut',
        height: "85%",

        toolbar: {
          show: true // Enable toolbar
        },

      },
      colors: ['#9442C8', '#E169F6', '#4472D9'], // Define three colors for each zone
      labels: ['Zone 1', 'Zone 2', 'Zone 3'], // Label each zone
      title: {
        text: 'Alerts by Zone',
        style: {
          color: '#003A6F', // Set the color of the title
          fontWeight: 'normal' // Set the font weight to normal
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '90%' // Adjust the width of the zones here
          }
        }
      },
      legend: {
        position: 'bottom', // Position legends below the chart
        offsetY: 20, // Adjust this value to move the legend further down
        floating: true,
        zIndex: 1001,
        itemMargin: {
          horizontal: 10,
          vertical: 10 // Adjust the vertical gap between legend items
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          }
        }
      }]
    };

    // Render the bar chart
    const barChart = new ApexCharts(document.querySelector("#barChart"), barChartOptions);
    barChart.render();

    // Render the donut chart
    const donutChart = new ApexCharts(document.querySelector("#donutChart"), donutChartOptions);
    donutChart.render();

    // Cleanup function
    return () => {
      barChart.destroy();
      donutChart.destroy();
    };
  }, []);

  useEffect(() => {
    // Define chart options and data
    const options = {
      series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
      }],
      colors: ["#E169F6"],
      chart: {
        type: 'line',
        height: "90%",
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
        curve: 'stepline',
        width: 2 
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Stepline Chart',
        style: {
          color: '#003A6F', // Set the color of the title
          fontWeight: 'normal' // Set the font weight to normal
        }
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      },
    };
    
    // Render the chart
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
}, []);


  // Function to generate random data
  const generateData = (count, yrange) => {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = 'w' + (i + 1).toString();
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x,
        y
      });
      i++;
    }
    return series;
  };


  const heatmapChartOptions = {
    series: [
      {
        name: 'Mon',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Tue',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Wed',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Thu',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Fri',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Sat',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Sun',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
    ],
    chart: {
      height: "100%", // Enclose "100%" in quotes
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    title: {
      text: 'HeatMap Chart',
      style: {
        color: '#003A6F', // Set the color of the title
        fontWeight: 'normal' // Set the font weight to normal
      }
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
    },
    yaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      reversed: true
    }
  };



  useEffect(() => {
    // Render the heatmap chart
    const chart = new ApexCharts(document.querySelector("#heatmapChart"), heatmapChartOptions);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []);


  return (
    <Box sx={{ padding: 0, marginTop: "10px" }}>

      <Box display="flex" justifyContent="end" alignItems="center" style={{ padding: "0px !important" }}>
        <Typography variant="body-2">Last Updated {moment().format('HH:mm')}</Typography>
        <IconButton color="primary" >
          <RefreshIcon />
        </IconButton>
      </Box>


      <Grid container spacing={0} mt={1}>

        <Grid container spacing={2}>

          {/* First and Second Cards */}
          <Grid item xs={4}>
            <Box sx={{ padding: 0 }}>
              <Grid container spacing={2}>
                {cardsData.map((card, index) => (
                  <Grid item xs={12} key={index}>
                    <Card
                      sx={{
                        borderRadius: '10px',
                        background: cardColors[index % cardColors.length],
                        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                        backdropFilter: "blur(20px)",
                        opacity: "0.9",
                        border: '1px solid white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%', // Ensure cards take full height of the container
                      }}
                    >
                      <CardContent sx={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                      <CardContent sx={{ height: '50%', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
          </Grid>

          {/* Third Cards */}
          <Grid item xs={8}>
            <Card sx={{ borderRadius: '10px', height: '100%' }}>
              <CardContent style={{ height: 'calc(100% - 50px)', padding: 20 }}>
                <div id="heatmapChart" style={{ height: '100%' }}></div>
              </CardContent>
            </Card>
          </Grid>


        </Grid>
        {/* Bar Chart, Donut Chart, and Stepline Chart */}
        <Grid container spacing={2} justifyContent="center" mt={1}>
          <Grid item xs={12} md={4}>
            <div id="barChart" style={{ background: 'white', padding: '24px', borderRadius: "10px", height: '400px' }}></div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div id="donutChart" style={{ background: 'white', padding: '24px', borderRadius: "10px", height: '400px' }}></div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div id="chart" style={{ background: 'white', padding: '24px', borderRadius: "10px", height: '400px' }}></div>
          </Grid>
        </Grid>

      </Grid>
    </Box>

  )
};

export default Incident;
