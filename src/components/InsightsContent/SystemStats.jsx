import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, Typography } from '@mui/material';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

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

  const lineChartData2 = [
    { timestamp: '8:00', value1: 2, value2: 4 },
    { timestamp: '9:00', value1: 5.5, value2: 7.5 },
    { timestamp: '10:00', value1: 2, value2: 3 },
    { timestamp: '11:00', value1: 8.5, value2: 6.5 },
    { timestamp: '12:00', value1: 1.5, value2: 2.5 },
    { timestamp: '13:00', value1: 5, value2: 8 },
   
  ];

  // Dummy data for table
  const tableData = [
    { camera: 'Camera 1', lastOfflineTime: '2022-02-27 10:30:00', offlineTime: 120 },
    { camera: 'Camera 2', lastOfflineTime: '2022-02-27 12:45:00', offlineTime: 60 },
   
  ];

  return (
    <>
      <Box display="flex" gap={2}>
        <Box width="30%" height="30%" sx={{backgroundColor:"white",borderRadius:"5px",padding:"15px"}}>
            <Typography pb={2}>  Paired Camera Status :</Typography>
          <PieChart width={200} height={200}>
            <Pie dataKey="value" isAnimationActive={false} data={pieChartData} cx="50%" cy="50%" outerRadius={80}>
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#82ca9d' : '#8884d8'} />
              ))}
            </Pie>
          </PieChart>
        </Box>
        <Box width="30%" height="30%" sx={{backgroundColor:"white",borderRadius:"5px", padding:"15px"}}>
            <Typography pb={2}>  Total Paired Camera Status :</Typography>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineChartData1}>
              <XAxis dataKey="timestamp" axisLine={false} />
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
        <Box width="60%" height="30%" sx={{backgroundColor:"white",borderRadius:"5px",padding:"15px"}}>
            <Typography pb={2}>  Devices Online</Typography>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineChartData2}>
              <XAxis dataKey="timestamp" axisLine={false} />
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
      </Box>
      <Box mt={2}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Camera</TableCell>
                <TableCell>Last Offline Time</TableCell>
                <TableCell>Offline Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.camera}</TableCell>
                  <TableCell>{row.lastOfflineTime}</TableCell>
                  <TableCell>{row.offlineTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default SystemStats;
