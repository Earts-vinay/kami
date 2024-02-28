import React from 'react';
import { Box, Button, Container, CssBaseline, TextField, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

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

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (e) => {
        e.preventDefault();

        // Your login logic here

        // Assuming login is successful, navigate to the map page
        navigate('/');
    };

    return (
        <Container maxWidth="xl" >
            <Box width="100%" height="100vh" display="flex" alignItems="center">
                <Box width="50%" paddingX={4}>
                    <img
                        src="/assets/logos/kamilogo.png"
                        alt="Logo"
                        style={{ objectFit: "contain" }}
                    />
                    <Typography variant="h3" mt={2}>Welcome to Kami</Typography>
                    <Typography mt={2}>Our AI platform uses computer vision to provide home security, elder care, and commercial applications. It tracks movements of cars, license plates, and people, quickly warning of any questionable activity.</Typography>
                </Box>
                <Box sx={{ backgroundColor: "white", padding: "50px", borderRadius: "10px", marginX: "30px" }}>
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
                            label="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                        />
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ textTransform: "capitalize",paddingY:"10px" }}
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
