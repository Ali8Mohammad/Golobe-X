import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './SignUpForm.css';
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

export default function SignUpForm({ facebook, google, apple }) {
  const [showPassword, setShowPassword] = useState(false);
  // for SignUp in local storage
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = {
      firstName,
      lastName,
      email,
      phone,
      password: CryptoJS.SHA256(password).toString(),
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Generate token
    const token = CryptoJS.SHA256(email + Date.now().toString()).toString();
    localStorage.setItem('authToken', token);
    console.log('Account created successfully');

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    navigate('/Golobe-X/auth/add_payment');
  }
  
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
        <h2>Sign up</h2>
        <p className='NM_ParaLog'>
          Let’s get you all set up so you can access your personal account.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='NM_FormLogin'>
            <div className='NM_Line'>
              <Box sx={{ width: '100%', height: '56px' }}>
                <TextField
                  id="outlined-required"
                  label="First Name"
                  // defaultValue="john.doe@gmail.com"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  type='name'
                />
              </Box>
              <Box sx={{ width: '100%', height: '56px' }}>
                <TextField
                  id="outlined-required"
                  label="Last Name"
                  // defaultValue="john.doe@gmail.com"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  type='name'
                />
              </Box>
            </div>
            <div className='NM_Line'>
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
                  label="Phone Number"
                  // defaultValue="john.doe@gmail.com"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  type='number'
                />
              </Box>
            </div>
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                type={showPassword ? 'text' : 'password'}
                label="Password"
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
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                type={showPassword ? 'text' : 'password'}
                label="Confirm Password"
                // defaultValue="64bgffhdhfhhfdfdf"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          <FormGroup className='NM_Checkbox'>
            <FormControlLabel
              control={<Checkbox
                sx={{ '&.Mui-checked': { color: '#FF8500;' }, }} />}
              label={
                <>
                  <p className='NM_LabelP'>
                    I agree to all the <a href="#"> Terms</a> and
                    <a href="#"> Privacy Policies</a>
                  </p>
                </>
              }
              sx={{
                margin: 0,
              }}
            />
          </FormGroup>
          <input type="submit" value="Create account" className='NM_Submit' />
        </form>
        <div className='NM_LoginLink'>
          <p>
            Already have an account?
            <Link to={"/Golobe-X/auth/login"} rel="noopener noreferrer"> Login
            </Link>
          </p>
        </div>
        <div className="NM_Row">
          <span></span>
          <p>Or Sign up with</p>
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


