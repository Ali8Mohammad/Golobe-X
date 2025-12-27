import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../SignUpForm/SignUpForm.css';
import '../AuthPage/AuthPage.css'
import './LoginForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';


export default function LoginForm({ facebook, google, apple }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // for local storage
  const handleSubmitLogin = (event) => {
    event.preventDefault();
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);
  
    if (!user) {
      setError('Email is not registered.');
      return;
    }
  
    const hashedPassword = CryptoJS.SHA256(password).toString();
    
    if (user.password !== hashedPassword) {
      setError('Incorrect password.');
      return;
    }
  
    // Generate token
    const token = CryptoJS.SHA256(email + Date.now().toString()).toString();
    localStorage.setItem('authToken', token);
    console.log('Login successful');
  
    setEmail('');
    setPassword('');
    setError('');
    navigate('/Golobe-X', { state: { token } });
  };
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
              color: '#FF8500',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#FF8500',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#FF8500',
              },
            },
          },
        },
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='NM_SignUpF'>
        <h2>Login</h2>
        <p className='NM_ParaLog'>Login to access your Golobe account</p>
        <form onSubmit={handleSubmitLogin}>
          <div className='NM_FormLogin'>
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                label="Email"
                // defaultValue="john.doe@gmail.com"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type='email'
              />
            </Box>
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                type={showPassword ? 'text' : 'password'}
                label="Confirm Password"
                // defaultValue="64bgffhdhfhhfdfdf"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className='NM_AllCheckbox'>
            <FormGroup className='NM_Checkbox'>
              <FormControlLabel
                control={<Checkbox
                  sx={{ '&.Mui-checked': { color: '#FF8500;' }, }} />}
                label={
                  <>
                    <p className='NM_LabelP'>
                      Remember me
                    </p>
                  </>
                }
                sx={{
                  margin: 0,
                }}
              />
            </FormGroup>
            <Link className="NM_ForgetPassword" to={"/Golobe-X/auth/forget_password"} rel="noopener noreferrer">
              Forgot Password
            </Link>
          </div>
          <input type="submit" value="Login" className='NM_Submit' />
        </form>
        <div className='NM_LoginLink'>
          <p>
            Don’t have an account?
            <Link to={"/Golobe-X/auth"} rel="noopener noreferrer">  Sign up
            </Link>
          </p>
        </div>
        <div className="NM_Row">
          <span></span>
          <p>Or login with</p>
          <span></span>
        </div>
        <div className="NM_Account">
          <div className="NM_Facebook">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="face book" />
            </a>
          </div>
          <div className="NM_Google">
            <a href="https://www.google.com/" target="_blank">
              <img src={google} alt="google" />
            </a>
          </div>
          <div className="NM_Apple">
            <a href="https://appleid.apple.com/account" target="_blank">
              <img src={apple} alt="apple" />
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}