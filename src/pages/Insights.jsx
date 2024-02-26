import React, { useState } from 'react';
import { Navbar } from '../components';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  Container,
  Tabs,
  Tab,
} from '@mui/material';
import { LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import SearchIcon from '@mui/icons-material/Search';
import Overview from '../components/InsightsContent/Overview';

const Insights = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const TabPanel = ({ value, index, children }) => (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box
          backgroundColor="#eff2fd"
          sx={{ marginTop: '10px', borderRadius: '10px', padding: '10px' }}
        >
          <Box display="flex" justifyContent="space-between">
            <Tabs value={selectedTab} onChange={handleTabChange} sx={{ backgroundColor: 'white' }}>
              <Tab label="Overview" />
              <Tab label="System Stats" />
              <Tab label="Incident Response" />
              <Tab label="Traffic & Activity" />
            </Tabs>

            <Box mt={2}>
              <TextField
                label="Search"
                variant="outlined"
                style={{ marginBottom: '20px' }}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: 'white', border: 'none', borderRadius: '5px' }}
              />
            </Box>
          </Box>

          <Box mt={2}>
            <TabPanel value={selectedTab} index={0}>
              <Overview/>
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              {/* Content for System Stats tab */}
              {/* You can call your components here */}
              123
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
              {/* Content for Incident Response tab */}
              {/* You can call your components here */}
              1234
            </TabPanel>
            <TabPanel value={selectedTab} index={3}>
              {/* Content for Traffic & Activity tab */}
              {/* You can call your components here */}
              12345
            </TabPanel>
          </Box>

        </Box>
      </Container>
    </>
  );
};

export default Insights;
