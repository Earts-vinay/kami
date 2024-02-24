// Navbar.jsx
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink, useLocation } from "react-router-dom";
import moment from "moment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ArrowDropDown } from "@mui/icons-material";
import Button from "@mui/material/Button";

const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const linkStyles = {
    color: isActive ? "purple" : "black",
    textDecoration: "none",
    fontFamily: "adobe-clean, sans-serif",
    margin: "0 10px",
    transition: "border-color 0.3s ease-in-out",
    ...(isActive && {
      borderColor: "red",
      marginBottom: "5px",
    }),
  };

  return (
    <RouterLink to={to} component={Typography} variant="h6" style={linkStyles}>
      {label}
    </RouterLink>
  );
};

function Navbar() {
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

  return (
    <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
      <Toolbar
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* Font Size Dropdown */}
        <Box
          sx={{
            background:
              "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.4))",
            width: "20%",
            height: 90,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <img
            src="/assets/logos/logo.png"
            alt="Logo"
            style={{ width: "85%", height: "100%", objectFit: "contain" }}
          />
          <Button
            onClick={handleOpenFontSizeMenu}
            sx={{ border: "1px", color: "black" }}
          >
            North Campus <ArrowDropDown />
          </Button>
          <Menu
            anchorEl={fontSizeMenuAnchor}
            open={Boolean(fontSizeMenuAnchor)}
            onClose={handleCloseFontSizeMenu}
          >
            <MenuItem onClick={handleDecreaseFontSize}>Smaller</MenuItem>
            <MenuItem onClick={handleIncreaseFontSize}>Larger</MenuItem>
          </Menu>
        </Box>

        <Box
          sx={{
            background:
              "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.4))",
            width: "80%",
            height: 90,
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            paddingX: "15px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box sx={{ backgroundColor: "transparent" }}>
              {[
                { to: "/", label: "Map" },
                { to: "/controlcenter", label: "Control Center" },
                { to: "/alerts", label: "Alerts" },
                { to: "/devices", label: "Devices" },
                { to: "/insights", label: "Insights" },
              ].map((item) => (
                <React.Fragment key={item.to}>
                  <NavLink to={item.to} label={item.label} />
                  {item.label.toLowerCase() === "alerts" && (
                    <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                      <span
                        className=""
                        style={{ backgroundColor: "red", width: 2, height: 2 }}
                      ></span>
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Box>

          {/* User Settings */}
          <Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open settings">
    <Box
      sx={{ display: "flex", gap: 2, alignItems: "center" }}
      onClick={(e) => setAnchorElUser(e.currentTarget)} // Update anchorElUser on click
    >
      <Box>
        <Typography variant="h6" color="black">
          {" "}
          Welcome Back James
        </Typography>
        <Typography variant="body2" color="textSecondary" textAlign="end">
          {moment().format("DD-MM-YYYY | HH:mm")}
        </Typography>
      </Box>
    </Box>
  </Tooltip>
  <Menu
    sx={{ mt: '55px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
  >
     <MenuItem onClick={handleCloseUserMenu}>
     <AccountCircleIcon style={{ marginRight: '8px', color: 'black' }} />
      <NavLink to="/profile" label="My Profile"/>
    </MenuItem>
    <MenuItem onClick={handleCloseUserMenu}>
    <SettingsIcon style={{ marginRight: '8px' }} />
      <NavLink to="/account" label="Settings"/>
    </MenuItem>
    <MenuItem onClick={handleCloseUserMenu}>
    <HelpIcon style={{ marginRight: '8px',color:"black" }} />
      <NavLink to="/dashboard" label="Help"/> 
    </MenuItem>
    <MenuItem onClick={handleCloseUserMenu}>
    <ExitToAppIcon style={{ marginRight: '8px' }} />
      <NavLink to="/logout" label="Logout"/>
    </MenuItem>
  </Menu>
</Box>

        </Box>
      </Toolbar>
    </Container>
  );
}

export default Navbar;
