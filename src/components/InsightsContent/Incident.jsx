import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import ApexCharts from 'apexcharts';


const commonStyles = {
  fontFamily: "montserrat-regular"
};
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
        name: 'Metric1',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric9',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      }
    ],
    chart: {
      height: 240,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    title: {
      text: 'HeatMap Chart (Single color)'
    },
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
    <Box mt={2}>
      <Grid container spacing={2}>
        {/* First and Second Cards */}
        <Grid container spacing={2}>
          {/* First and Second Cards */}
          <Grid item xs={12} md={4}>
            <Grid container  direction="column" justifyContent="space-between" >
              {cardsData.map((card, index) => (
                <Grid item key={index}>
                  <Card
                    sx={{
                      borderRadius: '10px',
                      background: cardColors[index % cardColors.length],
                      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                      marginBottom: 2,
                      // width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      // height: '100%', // Ensure the card takes the full height
                    }}
                  >
                    <CardContent style={{ flexGrow: 1 }}> {/* Allow content to expand */}
                      <Typography color="white" pt={2} sx={commonStyles}>
                        {card.content}
                      </Typography>
                      <Typography variant="h3" color="white" pt={2} sx={commonStyles}>
                        {card.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Third Card */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                borderRadius: '10px',
                // margibBottom: "5px",
                // background: 'linear-gradient(114deg, #02b2ec 3%, #93d9ff);',
                // boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                // height: '100%',
              }}
            >
              <CardContent>
                <Typography color="white" sx={commonStyles}>
                  Heatmap Chart
                </Typography>
                <div id="heatmapChart"></div>
              </CardContent>
            </Card>
          </Grid>
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
