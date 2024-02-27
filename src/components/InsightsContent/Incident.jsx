
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
const Incident = () => {
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
    
  return (
    <>
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
    </>
  )
}

export default Incident