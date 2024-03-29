import React, {useState}from 'react';
import { Box, Button, Container, CssBaseline, TextField, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPasswordResetApiResponse } from '../../redux/apiResponse/passwordResetApiSlice';


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

const ForgetPass = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [showRecoveryresetpassword , setShowRecoveryresetpassword] = useState(true);
    const dispatch = useDispatch();
   

    const handleForgotPassword = () => {
        navigate('/');
    };
    const openRecoverypasswordscreen = () =>{
        setShowRecoveryresetpassword(false);
    }
    const handlereconverypasswordAPICall =  async () =>{
      
        const formData = new URLSearchParams();
        formData.append('email', email);
    
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await fetch(`${apiUrl}/api/resetpass/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });
            const data = await response.json();
            dispatch(setPasswordResetApiResponse(data));
            navigate('/');
            
        } catch (error) {
            console.error('Error logging in:', error);
           // toast.error('An error occurred while logging in');
        }

    }



    return (
        <Container maxWidth="xl">
            <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
                <Box width="50%" >
                    <Box width="80%" >
                <img
                        src="/assets/logos/saplogo.svg"
                        alt="Logo"
                        style={{ objectFit: "contain" }}
                    />
                    <Typography variant="h3" mt={2}>Welcome to <br/> The Spear of Security</Typography>
                    <Typography mt={2}>Our AI platform uses computer vision to provide home security, elder care, and commercial applications. It tracks movements of cars, license plates, and people, quickly warning of any questionable activity.</Typography>
                </Box>
                </Box>
                <Box>
                {showRecoveryresetpassword ? (
                <Box sx={{ backgroundColor: "linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)", boxShadow: "0 0 15px 0 rgba(36, 101, 233, 0.3)",
                    border: "solid 2px #fff", padding: "50px", borderRadius: "10px", marginX: "10px", width:"50%" }}>
                    <Typography component="h1" variant="h5">
                        Forgot Password?
                    </Typography>
                    <Typography> No worriest! Just enter your email and we’ll send you a reset password link.</Typography>
                    <StyledForm    onSubmit={openRecoverypasswordscreen}  >
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
                        <Box display="flex" alignItems="center">

                       
                     <Typography>  Just remember? </Typography>
                             <ForgotPasswordLink onClick={handleForgotPassword} sx={{  textTransform: "capitalize",}}>
                           Login
                        </ForgotPasswordLink>
                        </Box>
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ textTransform: "capitalize", paddingY: "10px" }}
                          >
                           Send Recovery Email
                        </StyledButton>
                   
                    </StyledForm>
                </Box>
                ):(
                <Box sx={{ backgroundColor: "linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)", boxShadow: "0 0 15px 0 rgba(36, 101, 233, 0.3)",
                    border: "solid 2px #fff", padding: "50px", borderRadius: "10px", marginX: "10px", width:"50%" }}>
                    <Typography style={{textAlign:"center"}}>
                        Check your email. we've send you  reset password Link</Typography>
                    <StyledForm  >
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
                        <Box display="flex" alignItems="center">

                       
                     <Typography>  Resend in </Typography>
                             <ForgotPasswordLink onClick={handleForgotPassword} sx={{  textTransform: "capitalize",}}>
                           00:20
                        </ForgotPasswordLink>
                        </Box>
                        <StyledButton
                            
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ textTransform: "capitalize", paddingY: "10px" }}
                            onClick={handlereconverypasswordAPICall}>
                           Send Recovery Email
                        </StyledButton>
                   
                    </StyledForm>
                </Box>
                  )}  </Box>
            </Box>
        </Container>
    );
}

export default ForgetPass;
