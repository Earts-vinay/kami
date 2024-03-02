import React, { useState } from 'react';
import { Container, Box, Tabs, Tab, TextField, IconButton, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, InputAdornment, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import moment from "moment";
import { useNavigate } from 'react-router-dom';
import CameraVideo from './CameraContents/CameraVideo';
import CameraMap from './CameraContents/CameraMap';

const Camera = () => {
    const [value, setValue] = React.useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();

    const handleArrowClick = () => {
        // Navigate to the map screen
        navigate('/');
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const TabPanel = ({ value, index, children }) => (
        <div hidden={value !== index}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dataArray = [
        { image: 'assets/images/car.jpg', zone: 'Zone A', pole: 'Pole 1', camera: 'Camera 1' },
        { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
        { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
        { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
        { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
        { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
        { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
        { image: 'assets/images/car.jpg', zone: 'Zone B', pole: 'Pole 2', camera: 'Camera 3' },
        // Add more data as needed
    ];

    const buttonInformationArray = [
        { label: 'Camera Z45', onClick: () => console.log('Button 1 clicked') },
        { label: 'Camera Z46', onClick: () => console.log('Button 2 clicked') },
        { label: 'Camera Z45', onClick: () => console.log('Button 1 clicked') },
        { label: 'Camera Z46', onClick: () => console.log('Button 2 clicked') },
        { label: 'Camera Z45', onClick: () => console.log('Button 1 clicked') },
        { label: 'Camera Z46', onClick: () => console.log('Button 2 clicked') },
        { label: 'Camera Z45', onClick: () => console.log('Button 1 clicked') },
        { label: 'Camera Z46', onClick: () => console.log('Button 2 clicked') },
        // Add more buttons as needed
      ];
    return (
     
           <Container maxWidth="xxl" paddingLeft="0px !important" paddingRight="0px !important" sx={{ padding: "0px !important" }}>
                <Box display="flex" height="100vh">
                    <Box width="65%" height="">
                        {/* Header with tabs and back button */}
                        <Box

                            sx={{ borderRadius: "10px", padding: "10px" }}
                        >
                            <Box display="flex" justifyContent="space-between" alignItems="center" >
                                <IconButton onClick={handleArrowClick}>
                                    <ArrowBackIosNewIcon />
                                    <Typography px={1}>  Zone:A, Pole 1, Camera name1</Typography>
                                </IconButton>

                                <Tabs
                                    value={selectedTab}
                                    onChange={handleTabChange}
                                    sx={{
                                        borderBottom: "none",
                                        ".css-heg063-MuiTabs-flexContainer": {
                                            backgroundColor: "white",
                                            height: "80%",
                                            borderRadius: "5px",
                                            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                                            marginX:"10px"
                                        },
                                    }}
                                    TabIndicatorProps={{ style: { display: "none" } }}
                                    size="small"
                                >
                                    {[
                                        " Event Video",
                                        " Live Streaming",
                                        " Gen AI View",

                                    ].map((label, index) => (
                                        <Tab
                                            key={index}
                                            label={label}
                                            sx={{
                                                textTransform: "capitalize",
                                                backgroundColor: selectedTab === index && "#BCD0F8",
                                                color: selectedTab === index && " black !important",
                                                minHeight: "30px !important",
                                                margin: "5px",
                                                borderRadius: "5px",

                                            }}
                                        />
                                    ))}
                                </Tabs>


                            </Box>

                            <Box mt={0}>
                                <TabPanel value={selectedTab} index={0} sx={{  }}>
                                    <CameraVideo />
                                </TabPanel>
                                <TabPanel value={selectedTab} index={1}>

                                    <CameraVideo />
                                </TabPanel>
                                <TabPanel value={selectedTab} index={2}>
                                    {/* Content for Incident Response tab */}
                                    {/* You can call your components here */}
                                    <CameraMap />
                                </TabPanel>

                            </Box>
                        </Box>



                        {/* Left image and right information card */}
                        <Box display="flex" backgroundColor="white" borderRadius={1} marginX={2}  >
                            <Box width="60%">
                                <Card sx={{ display: 'flex', marginY: "10px", alignItems: "center", border: "0px", cursor: "pointer", mx: "5px" }} >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 251, height: 180, px: "5px" }}
                                        image={"assets/images/car.jpg"}
                                        borderRadius="10px"
                                        alt="Camera Image"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto', fontSize: "10px" }}>
                                            <Typography color="black" sx={{ fontSize: "14px" }}>
                                                Blacklisted Vehicle  Detected
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                License Plate: AK04920
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                Type of Vehicle :
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                Color: blue
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                make :
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                Event Captured : 18-02-2024 | 15:08
                                            </Typography>

                                        </CardContent>
                                    </Box>
                                </Card>
                            </Box>
                            <Box width="40%" p={2} height="160px" overflow="auto">
      <Typography>Triggered on :</Typography>
      {buttonInformationArray.map((buttonInfo, index) => (
        <Button
          key={index}
          variant="outlined"
          onClick={buttonInfo.onClick}
          style={{ margin: '8px' }}
        >
          {buttonInfo.label}
        </Button>
      ))}
    </Box>
                        </Box>
                    </Box>

                    <Box width="35%" backgroundColor="white">
                        {/* Header with search bar */}
                        <Box sx={{ backgroundColor: "#2465e9", padding: "10px", display: "flex", justifyContent: "flex-end", position: "sticky", top: 0, zIndex: 1 }}>
                            <TextField
                                id="search"
                                type="search"
                                label="Search"
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ backgroundColor: "white", border: "none", borderRadius: "5px" }}
                            />
                        </Box>
                        {/* MUI Table */}
                        <Box height="90%" overflow="auto">
                            {/* MUI Table */}
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Zone </TableCell>
                                        <TableCell>Pole </TableCell>
                                        <TableCell>Camera</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {dataArray.map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <img src={data.image} alt={`Image ${index + 1}`} style={{ width: '100px', height: '80px', borderRadius: "5px" }} />
                                            </TableCell>
                                            <TableCell>{data.zone}</TableCell>
                                            <TableCell>{data.pole}</TableCell>
                                            <TableCell>{data.camera}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </Box>
            </Container>
      
    );
};

export default Camera;
