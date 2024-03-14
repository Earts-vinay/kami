import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ArrowDropDown } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, NativeSelect, Select } from "@mui/material";
import axios from 'axios';

const commonStyles = {
  fontFamily: "montserrat-regular"
};

const Hello = (props) => (
  <Box
    {...props}
    sx={{
      backgroundImage: 'url("assets/images/navbar777.png")',
      backgroundSize: 'contain',
      backgroundPosition:"center",

      backgroundRepeat: 'no-repeat',
      width: '100%',
      margin: 'auto',
      height: '100%',
      display: 'flex',
      paddingY: '26px',
 
      justifyContent: 'center',
      alignItems: 'center',
    }}
  />
);


const Nav = (props) => (
  
  <Box
    {...props}
    as="nav"
    sx={{
      backgroundColor: 'transparent',
      padding: '10px',
      borderRadius: '10px',
      fontFamily:"montserrat-regular",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    }}
  />
);



const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const linkStyles = {
    color: isActive ? '#2465e9' : '#001426',
    textDecoration: 'none',
    fontFamily: 'montserrat-regular',
    fontWeight: "bold",
    margin: '0 10px',
    transition: 'border-color 0.3s ease-in-out',
    ...(isActive && {
      borderColor: 'red',
      marginBottom: '5px',
    }),
  };

  return (
    <RouterLink to={to} component={Typography} variant="h6" style={linkStyles}>
      {label}
    </RouterLink>
  );
};

const Navbar = () => {
    const [fontSizeMenuAnchor, setFontSizeMenuAnchor] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = useState();
  const navigate = useNavigate();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxIiwiZXhwIjoxNzExMDIwMzc4LCJqdGkiOiIxLTE3MTA0MTU1NzgiLCJpYXQiOjE3MTA0MTU1NzgsImlzcyI6Imxpbmtkb21lIiwibmJmIjoxNzEwNDE1NTY4fQ.rQy3CbT6YEaCzvffBZ51Mv_jGANiNCCWShbKM29dbvw";
const Authorization = `Bearer ${token}`

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

const handleLogOutUser = () =>{
  axios.request({
    headers: {
      Authorization: `Bearer ${token}`
    },
    method: "POST",
    url: `http://35.239.192.201:9092/api/logout`
  }).then(response => {
    console.log(response.data);
    setAnchorElUser(null);
    
  });
}
  
  const handleOpenFontSizeMenu = (event) => {
    setFontSizeMenuAnchor(event.currentTarget);
  };

  const handleCloseFontSizeMenu = () => {
    setFontSizeMenuAnchor(null);
  };

  const handleDecreaseFontSize = () => {
  };

  const handleIncreaseFontSize = () => {
  };
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
  <>
    <Container maxWidth="xl">
      <Hello>
      
     <Box display="flex"  gap={{ xs: '5rem', md: '20rem' }} justifyContent="center" alignItems="center">
      <div style={{display:"flex", flexDirection:"column",width:"12%"}}>
      <img
          src="/assets/logos/logo.png"
          alt="Logo"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
          <FormControl variant="standard" sx={{ width:"150px",paddingLeft:"25px",paddingTop:"5px" }} size="small" >
       
          <Select
  labelId="demo-simple-select-standard-label"
  id="demo-simple-select-standard"
  value={age}
  defaultValue={10}
  sx={commonStyles}
  onChange={handleChange}
>
  <MenuItem value={10} sx={commonStyles}>Old North Campus</MenuItem>
  <MenuItem value={20} sx={commonStyles}> North Campus</MenuItem>
  <MenuItem value={30} sx={commonStyles}> Campus</MenuItem>
</Select>
      </FormControl>

      </div>
    
      <Nav>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'flex' },
            backgroundColor: 'transparent !important',
          }}
        >
          <Box sx={{ backgroundColor: 'transparent' }}>
            {[
              { to: '/map', label: 'Map' },
              { to: '/controlcenter', label: 'Control Center' },
              { to: '/alerts', label: 'Alerts' },
              { to: '/devices', label: 'Devices' },
              { to: '/insights', label: 'Insights' },
            ].map((item) => (
              <React.Fragment key={item.to}>
                <NavLink to={item.to} label={item.label} />
                {item.label.toLowerCase() === 'alerts' && (
                  <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                    <span
                      className=""
                      style={{ backgroundColor: 'red', width: 2, height: 2 }}
                    ></span>
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Nav>
     </Box>
      </Hello>
    </Container>

    <Box sx={{ flexGrow: 0 }}>
   <Tooltip title="Open settings">
     <Box
      
    >
      <Box display="flex" justifyContent="center" alignItems="center" gap={2} >
        <Typography variant="body-2" fontSize="16px" color="#2465e9" textAlign="center" fontFamily="montserrat-regular">
          {" "}
         <Box display="flex" alignItems="center"onClick={(e) => setAnchorElUser(e.currentTarget)}> Welcome Back James <ArrowDropDown/></Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" >
          {moment().format("DD-MM-YYYY | HH:mm")}
        </Typography>
      </Box>
      
    </Box>
  </Tooltip>
  <Menu
    sx={{ mt: '35px',"& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
      background: 'rgba(255, 255, 255, 0.1)',
      webkitBackdropFilter: "blur(30px)",
  backdropFilter: "blur(50px)",
  border: "solid 2px #fff",
    }}}

    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
  >
 <MenuItem onClick={handleCloseUserMenu} style={{ color: '#2465e9', fontFamily: "montserrat-regular" }}>
  <Link to="/myprofile" style={{ textDecoration: 'none', color: 'inherit',gap:"10px",display:"flex",alignItems:"center" }}>
    <img src="assets/icons/Profile.svg" alt="" />
    My Profile
  </Link>
  
</MenuItem>

<MenuItem onClick={handleCloseUserMenu} style={{ color: '#2465e9', fontFamily: "montserrat-regular" }}>
  <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit',gap:"10px",display:"flex",alignItems:"center" }}>
    <img src="assets/icons/Settings.svg" alt="" />
    Settings
  </Link>
</MenuItem>

<MenuItem onClick={handleLogOutUser} style={{ color: '#2465e9', fontFamily: "montserrat-regular" }}>
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit',gap:"10px",display:"flex",alignItems:"center" }}>
    <img src="assets/icons/logout.svg" alt="" />
    Logout
  </Link>
</MenuItem>

  </Menu>
</Box>
    
  </>
  );
};

export default Navbar;


