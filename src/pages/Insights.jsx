import React, { useState } from "react";
import { Navbar } from "../components";
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
} from "@mui/material";
import { LineChart, Line, PieChart, Pie, Cell } from "recharts";
import SearchIcon from "@mui/icons-material/Search";
import Overview from "../components/InsightsContent/Overview";
import SystemStats from "../components/InsightsContent/SystemStats";
import Incident from "../components/InsightsContent/Incident";

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
      <Container maxWidth="xxl" sx={{padding:"0px !important"}}>
        <Box
          backgroundColor="linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)"
          sx={{ margin: "10px", borderRadius: "10px", padding: "10px",height:"79vh",overflow:"auto",  boxShadow: " 0 0 5px 0 #2465e9",
          backdropFilter: "blur(15px)"}}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              sx={{
                borderBottom: "none",
                ".css-heg063-MuiTabs-flexContainer": {
                  backgroundColor: "white",
                  height: "80%",
                  borderRadius: "5px",
                  boxShadow:"0 3px 6px 0 rgba(0, 0, 0, 0.16)"
                },
              }}
              TabIndicatorProps={{ style: { display: "none" } }}
            >
              {[
                "Overview",
                "System Stats",
                "Incident Response",
                "Traffic & Activity",
              ].map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: selectedTab === index && "#84bef1",
                    color: selectedTab === index && " black !important",
                    minHeight: "30px !important",
                    margin: "5px",
                    borderRadius: "5px",
                  }}
                />
              ))}
            </Tabs>

            <Box mt={1}>
              <TextField
                label="Search"
                variant="outlined"
                style={{ marginBottom: "20px" }}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: "whitelinear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)",   backdropFilter: "blur(15px)",
                boxShadow: " 0 0 5px 0 #2465e9",
              borderRadius: "5px", }}
              />
            </Box>
          </Box>

          <Box mt={1} style={{padding:"0px !important"}}>
            <TabPanel value={selectedTab} index={0} sx={{padding:"0px !important"}}>
              <Overview />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
             
             <SystemStats/>
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
              {/* Content for Incident Response tab */}
              {/* You can call your components here */}
              <Incident/>
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
