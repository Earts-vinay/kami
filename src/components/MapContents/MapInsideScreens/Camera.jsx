import React, { useState } from 'react';
import { Container, Box, Tabs, Tab, TextField, IconButton, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, InputAdornment, Typography, Card, CardMedia, CardContent, Button, Popover } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import moment from "moment";
import { useNavigate } from 'react-router-dom';
import CameraVideo from './CameraContents/CameraVideo';
import CameraMap from './CameraContents/CameraMap';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const commonStyles = {
    fontFamily: "montserrat-regular"
};
const Camera = () => {
    const [value, setValue] = React.useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null); 
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateSelect = (date) => {
        setSelectedDate(date);

    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleArrowClick = () => {
        navigate('/map');
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const TabPanel = ({ value, index, children }) => (
        <div hidden={value !== index}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );


    const dataArray = [
        { id: 1, image: 'assets/images/car1.png', camera: 'Gate 1 cam Entry', zone: 'Zone A', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM', eventDate: "2024-02-24" },
        { id: 2, image: 'assets/images/car1.png', camera: 'Gate 1 cam Entry', zone: 'Zone B', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
        { id: 3, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone C', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
        { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
        { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
        { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
        { id: 4, image: 'assets/images/car.jpg', camera: 'Gate 1 cam Entry', zone: 'Zone D', pole: 'Pole 1', eventType: '6TRJ244', eventStatus: "still on property", eventTime: ' 10:30 AM ', eventDate: "2024-02-24" },
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
    ];
    return (

        <Container maxWidth="xxl" paddingLeft="0px !important" paddingRight="0px !important" sx={{ padding: "0px !important" }}>
            <Box display="flex" height="100vh">
                <Box width="60%" height="">
                    <Box sx={{ borderRadius: "10px", padding: "10px" }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" >
                            <IconButton onClick={handleArrowClick}>
                                <ArrowBackIosNewIcon />
                                <Typography px={1} sx={commonStyles}>  Zone:A, Pole 1, Camera name1</Typography>
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
                                        boxShadow: "0 0 5px 0 rgba(36, 101, 233, 0.5)",
                                        marginX: "10px",
                                        fontWeight: "bold",
                                        ...commonStyles
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
                            <TabPanel value={selectedTab} index={0} sx={{}}>
                                <CameraVideo />
                            </TabPanel>
                            <TabPanel value={selectedTab} index={1}>

                                <CameraVideo />
                            </TabPanel>
                            <TabPanel value={selectedTab} index={2}>
                                <CameraMap />
                            </TabPanel>

                        </Box>
                    </Box>

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

                <Box width="40%" backgroundColor="linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)" sx={{ backdropFilter: "blur(5px)", boxShadow: "0 0 5px 0 rgba(25, 96, 159, 0.1)", border: "solid 2px #fff", borderRadius: "10px" }}>
                    <Box sx={{ backgroundColor: "#2465e9", padding: "10px", borderRadius: "10px 10px 0px 0px", display: "flex", justifyContent: "flex-end", position: "sticky", top: 0, zIndex: 1, }}>
                        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "25px", px: 2, backdropFilter: " blur(5px)", boxShadow: "-1px 6px 31px 0 rgba(25, 96, 159, 0.1)", backgroundColor: '#2465e9' }}>
                            <Box display="flex" alignItems="center" gap={2}>
                                <CalendarMonthIcon onClick={handleClick} fontSize="large" sx={{ color: "white", cursor: "pointer" }} />
                                <Box >
                                    <Box >
                                        <Typography sx={{ color: "white", ...commonStyles,fontSize:"12px"  }}>
                                            {selectedDate ? selectedDate.format('MMM DD YYYY') : moment().format('MMM DD YYYY')}
                                        </Typography>
                                        <Typography sx={{ color: "white", ...commonStyles }}>
                                            {selectedDate ? selectedDate.format('hh:mm A') : moment().format('hh:mm A')}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Popover
                                open={Boolean(anchorEl)}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                            >

                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                    <StaticDateTimePicker
                                        label="Event Date and Time"
                                        value={selectedDate}

                                        onChange={handleDateSelect}

                                        sx={{
                                            '& .MuiPickersLayout-toolbar': {
                                                display: 'none',
                                            },

                                        }}
                                        onClose={handleClose}
                                    />
                                </LocalizationProvider>
                            </Popover>
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
                    </Box>
                    {/* MUI Table */}
                    <Box height="90%" overflow="auto">
                        {/* MUI Table */}
                        <Table style={{ background: "linear-gradient(332deg, rgba(255, 255, 255, 0.75) 99%, rgba(255, 255, 255, 0.4) 15%)", borderRadius: "5px", }}>
                            <TableHead >
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell sx={{ fontWeight: "bold", ...commonStyles }}>Camera</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", ...commonStyles }}>Event Type</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", ...commonStyles }}>Date & Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dataArray.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell width="20%">
                                            <img src={data.image} alt={`Image ${index + 1}`} style={{ width: '150px', height: '80px', borderRadius: "5px", paddingLeft: "5px" }} />
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: "bold", ...commonStyles }}>{data.zone}</TableCell>
                                        <TableCell>
                                            <Box display="flex" gap={2}>
                                                <img src='assets/images/carx.svg' />
                                                <Box display="flex" flexDirection="column" p={0}>
                                                    {data.eventType}
                                                    <Typography variant='body-2' sx={{ color: "red", textAlign: "start", py: "0px", ...commonStyles }}>{data.eventStatus}</Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={commonStyles}>{data.eventTime} <br />{data.eventDate}</TableCell>
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
