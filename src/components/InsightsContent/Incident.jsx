import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import ApexCharts from 'apexcharts';

const Incident = () => {
  const cardColors = [
    'linear-gradient(296deg, #a486f2, #736fee 2%);',
    'linear-gradient(114deg, #ee746f 3%, #f3b188);',
    'linear-gradient(114deg, #02b2ec 3%, #93d9ff);',
    'linear-gradient(295deg, #6adbe0, #6ea7d2 1%);',
  ];
  const cardsData = [
    { title: ' 12', content: 'Total Alerts Today' },
    { title: ' 245', content: 'Total Alerts Last 7 days' },
  ];

  useEffect(() => {
    // Bar chart options
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

    // Donut chart options
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
      chart: {
        type: 'line',
        height: 350
      },
      stroke: {
        curve: 'stepline',
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Stepline Chart',
        align: 'left'
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    };

    // Render the chart
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); 

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {/* First and Second Cards */}
        <Grid item xs={6} md={3}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: '10px',
                background: cardColors[index % cardColors.length],
                boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                marginBottom: 2,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent>
                <Typography color="white" pt={2}>
                  {card.content}
                </Typography>
                <Typography variant="h3" color="white" pt={2}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: '10px',
              background: 'linear-gradient(114deg, #02b2ec 3%, #93d9ff);',
              boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
              height: '95%',
              width: '70vw',
            }}
          >
            <CardContent>
              <Typography color="white" pt={2}>
                Another Card
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid container spacing={2}>
  {/* Bar Chart */}
  <Grid item xs={12} md={4}>
    <div id="barChart" style={{ background: 'white', padding: '24px', borderRadius: "10px", height: '400px' }}></div>
  </Grid>

  {/* Donut Chart */}
  <Grid item xs={12} md={4}>
    <div id="donutChart" style={{ display: "flex", alignItems: "center", background: 'white', padding: '24px', borderRadius: "10px", height: '400px' }}></div>
  </Grid>

  {/* Stepline Chart */}
  <Grid item xs={12} md={4}>
    <div id="chart" style={{ background: 'white', padding: '24px', borderRadius: "10px", height: '400px' }}></div>
  </Grid>
</Grid>

        
      </Grid>
    </Box>
  );
};

export default Incident;
