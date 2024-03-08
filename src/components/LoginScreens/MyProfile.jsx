import React from 'react';
import Navbar from '../Navbar';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';

const commonStyles = {
  fontFamily: "montserrat-regular"
};

const MyProfile = () => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Container maxWidth="xxl">
        <Box
          sx={{
            backgroundColor: 'linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)',
            height: '75vh',
            padding: '20px',
            mt: 1,
            borderRadius: '10px',
            backdropFilter: 'blur(15px)',
            boxShadow: " 0 0 5px 0 #2465e9",
          }}
        >
          <Box padding="15px" >
            <Box display="flex" gap={1}>
              <Typography variant="h5" sx={{fontWeight:"bold", ...commonStyles}}>My Profile</Typography>
              <img src="assets/icons/update.svg" alt="" />
            </Box>
            <Typography variant="body2" sx={commonStyles}>Update your Account</Typography>
          </Box>
          <Box width="50%" padding="15px">
            <Typography variant='h6' sx={{fontWeight:"bold",paddingBottom:"15px", ...commonStyles}}>Personal Information</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={commonStyles}>First Name</Typography>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    margin="dense"
                    size="small"
                    
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={commonStyles}>Last Name</Typography>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                     margin="dense"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={commonStyles}>Office Phone</Typography>
                  <TextField
                    fullWidth
                    label="Office Phone"
                    variant="outlined"
                     margin="dense"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={commonStyles}>Mobile Number</Typography>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                     margin="dense"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={commonStyles}>Email</Typography>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                     margin="dense"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={commonStyles}>New Password</Typography>
                  <TextField
                    fullWidth
                    type="password"
                    label="New Password"
                    variant="outlined"
                     margin="dense"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={commonStyles}>Confirm Password</Typography>
                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                     margin="dense"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} gap={3 } display="flex" justifyContent="end">
                  <Button variant="contained" disabled>
                    Cancel
                  </Button>
                  <Button variant="contained" color="primary">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default MyProfile;
