// // Navbar.jsx
// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Container from "@mui/material/Container";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import moment from "moment";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SettingsIcon from "@mui/icons-material/Settings";
// import HelpIcon from "@mui/icons-material/Help";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { ArrowDropDown } from "@mui/icons-material";
// import Button from "@mui/material/Button";

// const NavLink = ({ to, label }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   const linkStyles = {
//     color: isActive ? "#2465e9" : "#001426",
//     textDecoration: "none",
//     fontFamily: "Montserrat, sans-serif",
//     fontWeight: "bold",
//     margin: "0 10px",
//     transition: "border-color 0.3s ease-in-out",
//     ...(isActive && {
//       borderColor: "red",
//       marginBottom: "5px",
//     }),
//   };

//   return (
//     <RouterLink to={to} component={Typography} variant="h6" style={linkStyles}>
//       {label}
//     </RouterLink>
//   );
// };

// function Navbar() {
//   const [fontSizeMenuAnchor, setFontSizeMenuAnchor] = React.useState(null);

//   const [anchorElUser, setAnchorElUser] = useState();
// const handleCloseUserMenu = () => {
//   setAnchorElUser(null);
// };
  
//   const handleOpenFontSizeMenu = (event) => {
//     setFontSizeMenuAnchor(event.currentTarget);
//   };

//   const handleCloseFontSizeMenu = () => {
//     setFontSizeMenuAnchor(null);
//   };

//   const handleDecreaseFontSize = () => {
//     // Implement logic to decrease font size
//   };

//   const handleIncreaseFontSize = () => {
//     // Implement logic to increase font size
//   };

//   return (
//     <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
//       <Toolbar
//         sx={{
//           display: "flex",
//           gap: 2,
//           alignItems: "center",
//           marginTop: "20px",
//         }}
//       >
//         {/* Font Size Dropdown */}
//         <Box
//           sx={{
//             background:
//               "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.4))",
//             width: "20%",
//             height: 90,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: "5px",
//           }}
//         >
//           <img
//             src="/assets/logos/logo.png"
//             alt="Logo"
//             style={{ width: "85%", height: "100%", objectFit: "contain" }}
//           />
//           <Button
//             onClick={handleOpenFontSizeMenu}
//             sx={{ border: "1px", color: "black" }}
//           >
//             North Campus <ArrowDropDown />
//           </Button>
//           <Menu
//             anchorEl={fontSizeMenuAnchor}
//             open={Boolean(fontSizeMenuAnchor)}
//             onClose={handleCloseFontSizeMenu}
//           >
//             <MenuItem onClick={handleDecreaseFontSize}>Smaller</MenuItem>
//             <MenuItem onClick={handleIncreaseFontSize}>Larger</MenuItem>
//           </Menu>
//         </Box>

//         <Box
//           sx={{
//             background:
//               "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.4))",
//             width: "80%",
//             height: 90,
//             display: "flex",
//             alignItems: "center",
//             borderRadius: "5px",
//             paddingX: "15px",
//           }}
//         >
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//             }}
//           >
//             <Box sx={{ backgroundColor: "transparent" }}>
//               {[
//                 { to: "/", label: "Map" },
//                 { to: "/controlcenter", label: "Control Center" },
//                 { to: "/alerts", label: "Alerts" },
//                 { to: "/devices", label: "Devices" },
//                 { to: "/insights", label: "Insights" },
//               ].map((item) => (
//                 <React.Fragment key={item.to}>
//                   <NavLink to={item.to} label={item.label} />
//                   {item.label.toLowerCase() === "alerts" && (
//                     <Box sx={{ position: "absolute", top: 0, right: 0 }}>
//                       <span
//                         className=""
//                         style={{ backgroundColor: "red", width: 2, height: 2 }}
//                       ></span>
//                     </Box>
//                   )}
//                 </React.Fragment>
//               ))}
//             </Box>
//           </Box>

//           {/* User Settings */}
//           <Box sx={{ flexGrow: 0 }}>
//   <Tooltip title="Open settings">
//     <Box
//       sx={{ display: "flex", gap: 2, alignItems: "center" }}
//       onClick={(e) => setAnchorElUser(e.currentTarget)} // Update anchorElUser on click
//     >
//       <Box>
//         <Typography variant="h6" color="black">
//           {" "}
//           Welcome Back James
//         </Typography>
//         <Typography variant="body2" color="textSecondary" textAlign="end">
//           {moment().format("DD-MM-YYYY | HH:mm")}
//         </Typography>
//       </Box>
//     </Box>
//   </Tooltip>
//   <Menu
//     sx={{ mt: '55px' }}
//     id="menu-appbar"
//     anchorEl={anchorElUser}
//     anchorOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     keepMounted
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     open={Boolean(anchorElUser)}
//     onClose={handleCloseUserMenu}
//   >
//      <MenuItem onClick={handleCloseUserMenu}>
//      <AccountCircleIcon style={{ marginRight: '8px', color: 'black' }} />
//       <NavLink to="/myprofile" label="My Profile"/>
//     </MenuItem>
//     <MenuItem onClick={handleCloseUserMenu}>
//     <SettingsIcon style={{ marginRight: '8px' }} />
//       <NavLink to="/account" label="Settings"/>
//     </MenuItem>
//     <MenuItem onClick={handleCloseUserMenu}>
//     <HelpIcon style={{ marginRight: '8px',color:"black" }} />
//       <NavLink to="/dashboard" label="Help"/> 
//     </MenuItem>
//     <MenuItem onClick={handleCloseUserMenu}>
//     <ExitToAppIcon style={{ marginRight: '8px' }} />
//       <NavLink to="/logout" label="Logout"/>
//     </MenuItem>
//   </Menu>
// </Box>

//         </Box>
//       </Toolbar>
//     </Container>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import moment from "moment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ArrowDropDown } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, NativeSelect, Select } from "@mui/material";
const commonStyles = {
  fontFamily: "montserrat-regular"
};
// Styled components for styling
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
const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};
  
  const handleOpenFontSizeMenu = (event) => {
    setFontSizeMenuAnchor(event.currentTarget);
  };

  const handleCloseFontSizeMenu = () => {
    setFontSizeMenuAnchor(null);
  };

  const handleDecreaseFontSize = () => {
    // Implement logic to decrease font size
  };

  const handleIncreaseFontSize = () => {
    // Implement logic to increase font size
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
      {/* Your avbar form or content goes here */}
    </Container>

    <Box sx={{ flexGrow: 0 }}>
   <Tooltip title="Open settings">
     <Box
      
      onClick={(e) => setAnchorElUser(e.currentTarget)} // Update anchorElUser on click
    >
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Typography variant="body-2" fontSize="16px" color="#2465e9" textAlign="center" fontFamily="montserrat-regular">
          {" "}
         <Box display="flex" alignItems="center"> Welcome Back James <ArrowDropDown/></Box>
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

<MenuItem onClick={handleCloseUserMenu} style={{ color: '#2465e9', fontFamily: "montserrat-regular" }}>
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


