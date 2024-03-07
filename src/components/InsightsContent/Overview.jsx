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

const Overview = () => {
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
    { title: ' 324', content: ' Occupancy' },
  ];

  const lineChartOptions = {
    series: [{
      name: "Desktops",
      data: [5, 45, 60, 85, 90, 115, 130, 145, 166] // Quadratic curve: y = x^2
    }],
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
      curve: 'smooth' // Use a smooth curve for better visualization
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };
  
  

  const pieChartOptions = {
    series: [44, 55, 13],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C'],
    legend: {
      show: true,
      position: 'bottom', // Adjust legend position as per your preference
      offsetY: 5,
      formatter: function(val, opts) {
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
  

  return (
    <Box style={{padding:"0px !important"}}>
      <Box display="flex" justifyContent="end" alignItems="center" style={{padding:"0px !important"}}>
        <Typography variant="body-2" sx={commonStyles}>Last Updated {moment().format('HH:mm')}</Typography>
        <IconButton color="primary" >
          <RefreshIcon />
        </IconButton>
      </Box>
      <Box mt={2}>
        <Grid container spacing={3}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Card
                sx={{
                  borderRadius: '10px',
                  background: cardColors[index % cardColors.length],
                  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)"
                }}
              >
                <CardContent>
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
      </Box>

      <Box style={{ display: 'flex', flexDirection: 'row', width: '100%' }} mt={3} gap={2}>
        <Box style={{ width: '50%', backgroundColor: "white", borderRadius: "5px", padding:"15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
          {/* ApexCharts Line Chart */}
          <ApexCharts options={lineChartOptions} series={lineChartOptions.series} type="line" height={350} />
        </Box>


        <Box style={{ 
  width: '50%', 
  backgroundColor: "white", 
  borderRadius: "5px", 
  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  {/* ApexCharts Pie Chart */}
  <ApexCharts options={pieChartOptions} series={pieChartOptions.series} type="pie" width={380} />
</Box>

      </Box>
    </Box>
  )
}

export default Overview;
