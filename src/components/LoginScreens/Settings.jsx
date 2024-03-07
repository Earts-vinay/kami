import React from 'react';
import Navbar from '../Navbar';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';

const commonStyles = {
    fontFamily: "montserrat-regular"
  };
const Settings = () => {
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
          <Box padding="15px">
            <Typography variant="h5" sx={{fontWeight:"bold", ...commonStyles}}>Account</Typography>
            <Typography variant="body2" sx={commonStyles}>Update your account </Typography>
          </Box>
          <Box width="50%" padding="15px">
            <Typography variant='h6' sx={{fontWeight:"bold", ...commonStyles}}>Change Password</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="password"
                    label="New Password"
                    variant="outlined"
                    margin="normal"
                     size="small"
                     sx={commonStyles}
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
                     sx={commonStyles}
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

export default Settings;
