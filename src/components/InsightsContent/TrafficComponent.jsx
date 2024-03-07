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

const commonStyles = {
    fontFamily: "montserrat-regular"
  };

const TrafficComponent = () => {
  const cardColors = [
    'linear-gradient(296deg, #a486f2, #736fee 2%);',
    'linear-gradient(114deg, #ee746f 3%, #f3b188);',
    'linear-gradient(114deg, #02b2ec 3%, #93d9ff);',
    'linear-gradient(295deg, #6adbe0, #6ea7d2 1%);',
  ];

  const cardsData = [
    { title: ' 12', content: 'Event Count' },
    { title: ' 245', content: ' Occupancy' },
    { title: ' 3452', content: 'Event Count' },
    { title: ' 324', content: ' Occupancy' },
  ];

  const lineChartOptions = {
    series: [
      {
        name: "Desktops",
        data: [5, 20, 45, 80, 120, 165, 200, 250, 200],
        color: "#BBA1F7" // Sky blue color for Desktops
      },
      {
        name: "Laptops",
        data: [10, 30, 60, 100, 150, 200, 240, 220, 200],
        color: "#2ABEFD" // Beige color for Laptops
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  const lineChartOptions1 = {
    series: [
      {
        name: "Desktops",
        data: [5, 100, 205, 330, 400, 565, 670, 450, 600],
        color: "#BBA1F7" // Sky blue color for Desktops
      },
      {
        name: "Laptops",
        data: [15, 250, 255, 430, 500, 665, 770, 750, 900],
        color: "#2ABEFD" // Beige color for Laptops
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };
  
  const barChartOptions = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
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
    }
  };

  const donutChartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
      height: 350 // Set the same height as the bar chart
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

  return (
    <Box style={{ padding: "0px !important" }}>
      <Box display="flex" justifyContent="end" alignItems="center" style={{ padding: "0px !important" }}>
        <Typography variant="body-2" sx={commonStyles}>Last Updated {moment().format('HH:mm')}</Typography>
        <IconButton color="primary" >
          <RefreshIcon />
        </IconButton>
      </Box>
      <Box mt={2} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Grid container spacing={3}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: '10px',
                  background: cardColors[index % cardColors.length],
                  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)"
                }}
              >
                <CardContent>
                  <Typography color="white" pt={2}  sx={commonStyles}>
                    {card.content}
                  </Typography>
                  <Typography variant="h3" color="white" pt={2}  sx={commonStyles}>
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: '10px',
                  background: cardColors[index % cardColors.length],
                  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)"
                }}
              >
                <CardContent>
                  <Typography color="white" pt={2}  sx={commonStyles}>
                    {card.content}
                  </Typography>
                  <Typography variant="h3" color="white" pt={2}  sx={commonStyles}>
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box style={{ display: 'flex', flexDirection: 'row', width: '100%' }} mt={3} gap={2}>
        <Box style={{ width: '48%', backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
          {/* ApexCharts Line Chart */}
          <ApexCharts options={lineChartOptions} series={lineChartOptions.series} type="line" height={350} />
        </Box>

        <Box style={{ width: '48%', backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
          {/* ApexCharts Line Chart */}
          <ApexCharts options={lineChartOptions1} series={lineChartOptions1.series} type="line" height={350} />
        </Box>

      </Box>

      <Box style={{ display: 'flex', flexDirection: 'row', width: '100%' }} mt={3} gap={2}>
      <Box style={{ width: '100%', backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }} mt={3}>
        <ApexCharts options={donutChartOptions} series={donutChartOptions.series} type="donut" height={350} />
      </Box>


        <Box style={{ width: '100%', backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }} mt={3}>
          {/* ApexCharts Bar Chart */}
          <ApexCharts options={barChartOptions} series={barChartOptions.series} type="bar" height={350} />
        </Box>
      </Box>

    </Box>
  )
}

export default TrafficComponent;
