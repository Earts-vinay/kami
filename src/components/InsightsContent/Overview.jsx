import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
} from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import { LineChart, XAxis, YAxis, Line, ResponsiveContainer } from 'recharts';
import moment from "moment";
import RefreshIcon from '@mui/icons-material/Refresh';


const Overview = () => {
  const cardColors = [
    'linear-gradient(296deg, #a486f2, #736fee 2%);',
    'linear-gradient(114deg, #ee746f 3%, #f3b188);',
    'linear-gradient(114deg, #02b2ec 3%, #93d9ff);',
    'linear-gradient(295deg, #6adbe0, #6ea7d2 1%);',
  ];

  const cardsData = [
    { title: ' 12', content: 'Total Alerts Today' },
    { title: ' 245', content: ' Total Alerts Last 7 days' },
    { title: ' 3452', content: 'Avg Daily People Entered Last 7 days' },
    { title: ' 324', content: ' Total Alerts Last 7 days' },
  ];

  const lineChartData = [
    { day: 'Mon', value1: 2, value2: 4 },
    { day: 'Tue', value1: 5.5, value2: 7.5 },
    { day: 'Wed', value1: 2, value2: 3 },
    { day: 'Thu', value1: 8.5, value2: 6.5 },
    { day: 'Fri', value1: 1.5, value2: 2.5 },
    { day: 'Sat', value1: 5, value2: 8 },
  ];

  const pieChartData = [
    { name: 'Category A', value: 300 },
    { name: 'Category B', value: 200 },
    { name: 'Category C', value: 100 },
    { name: 'Category D', value: 400 },
  ];



  return (
    <>
      <Box display="flex" justifyContent="end" alignItems="center">
        <Typography variant="h6">Last Updated {moment().format('HH:mm')}</Typography>
        <IconButton color="primary" >
          <RefreshIcon />
        </IconButton>
      </Box>
      <Box mt={2}>
        <Grid container spacing={2}>
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
                  <Typography color="white" pt={2}>
                    {card.content}
                  </Typography>
                  <Typography variant="h3" color="white" pt={2}>
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box style={{ display: 'flex', flexDirection: 'row', width: '100%' }} my={5} gap={2}>
        <Box style={{ width: '50%', backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
          {/* MUI Two Line Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <XAxis dataKey="day" axisLine={false} />
              <YAxis axisLine={false} />
              {/* Background horizontal lines */}
              <Line y={10} stroke="lightgrey" strokeDasharray="6 3" />
              <Line y={20} stroke="lightgrey" strokeDasharray="3 3" />
              <Line y={30} stroke="lightgrey" strokeDasharray="3 3" />
              <Line type="monotone" dataKey="value1" stroke="#8884d8" />
              <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Box>


        <Box style={{ width: '50%', backgroundColor: "white", borderRadius: "5px", padding: "15px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}>
          {/* Pie Chart */}
          <PieChart width={400} height={300}>
            <Pie
              data={pieChartData}
              dataKey="value"
              cx={200}
              cy={150}
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {/* Customize Pie Chart Colors */}
              <Cell fill="#0088FE" />
              <Cell fill="#00C49F" />
              <Cell fill="#FFBB28" />
              <Cell fill="#FF8042" />
            </Pie>
          </PieChart>
        </Box>
      </Box>
    </>
  )
}

export default Overview