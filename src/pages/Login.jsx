import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const StyledContainer = styled(Container)({
    marginTop: theme => theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});
 
const StyledForm = styled('form')({
    width: '100%',
    marginTop: theme => theme.spacing(1),
});
 
const StyledButton = styled(Button)({
    margin: theme => theme.spacing(3, 0, 2),
});
 
const ForgotPasswordLink = styled(Button)({
    margin: theme => theme.spacing(1, 0),
    textDecoration: 'underline',
    color: theme => theme.palette.text.secondary,
});
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    // Retrieve token from localStorage
    const storedToken = localStorage.getItem('token');
     console.log("storedToken", storedToken);
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxIiwiZXhwIjoxNzExMDI0NjQ0LCJqdGkiOiIxLTE3MTA0MTk4NDQiLCJpYXQiOjE3MTA0MTk4NDQsImlzcyI6Imxpbmtkb21lIiwibmJmIjoxNzEwNDE5ODM0fQ.d_MoNX0auxu1qBZaGu72typIylMQGisIfd1LVkywHIE";    const Authorization = `Bearer ${token}`
 
    const handleLogin = async (e) => {
        e.preventDefault();
    
        const formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('password', password);
    
        try {
            const response = await fetch('http://35.239.192.201:9092/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });
    
            const data = await response.json();
            //console.log("response", data);
    
            // Accessing the token value
            const newToken = data?.data?.token; // Using optional chaining to avoid errors if data or data.token is undefined
            //console.log("token", newToken);

          // Store token in localStorage
          localStorage.setItem('token', newToken);

          // Update token state
          setToken(newToken);
    
            // Handle successful login here, e.g., redirect to another page
            callTokenAPI();
    
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle error, e.g., display error message to the user
        }
    };
   const callTokenAPI = () =>{
    axios.request({
        headers: {
          Authorization: `Bearer ${storedToken}`
        },
        method: "POST",
        url: `http://35.239.192.201:9092/api/auth`
      }).then(response => {
        console.log(response.data);
        navigate('/map');
      });
   }
 
    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };
 
    return (
        <Container maxWidth="xl">
            <Box height="100vh" display="flex" alignItems="center" justifyContent="center"
                sx={{
                    backgroundImage: `url("/assets/icons/bgartwork.svg")`,
                    backgroundSize: "contain",
                    backgroundPosition: "right bottom", // or "100% 100%"
                    backgroundRepeat: "no-repeat",
                }}>
                <Box width="50%" >
                    <Box width="80%" >
                        <img
                            src="/assets/logos/saplogo.svg"
                            alt="Logo"
                            style={{ objectFit: "contain" }}
                        />
                        <Typography variant="h4" mt={4}>Welcome to <br /> The Circle of Security</Typography>
                        <Typography mt={2}>Our AI platform uses computer vision to provide home security, elder care, and commercial applications. It tracks movements of cars, license plates, and people, quickly warning of any questionable activity.</Typography>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: "linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)", boxShadow: "0 0 15px 0 rgba(36, 101, 233, 0.3)",
                    border: "solid 2px #fff", padding: "50px", borderRadius: "10px", marginX: "10px", width:"30%" }}>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <StyledForm onSubmit={handleLogin}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ForgotPasswordLink onClick={handleForgotPassword} sx={{  textTransform: "capitalize", paddingY:"20px"}}>
                            Forgot Password?
                        </ForgotPasswordLink>
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ textTransform: "capitalize", paddingY: "10px" }}
                        >
                            Login
                        </StyledButton>
                    </StyledForm>
                </Box>
            </Box>
        </Container>
    );
}
 
export default Login;