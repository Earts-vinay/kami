import React from 'react';
import Navbar from '../Navbar';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';

const MyProfile = () => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor:
              'linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)',
            height: '75vh',
            mt: 1,
            borderRadius: '10px',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 0 5px 0 rgba(0, 58, 111, 0.5)',
            border: 'solid .5px #2465e9',
            padding:"25px"
          }}
        >
          <Box padding="15px">
            <Typography variant="h5">My Profile</Typography>
            <Typography variant="body2">Update yoour Account</Typography>
          </Box>
          <Box width="50%" padding="15px">
            <Typography variant='h6'>Personal Information</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                     size="small"
                   
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    margin="normal"
                     size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Office Phone"
                    variant="outlined"
                    margin="normal"
                     size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    margin="normal"
                     size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                     size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="password"
                    label="New Password"
                    variant="outlined"
                    margin="normal"
                     size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                    margin="normal"
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
