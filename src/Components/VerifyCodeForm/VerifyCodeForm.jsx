import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../SignUpForm/SignUpForm.css';
import '../AuthPage/AuthPage.css'
import './VerifyCodeForm.css'
import '../ForgotPasswordForm/ForgotPasswordForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';

export default function VerifyCodeForm({ Back }) {
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [resendMessage, setResendMessage] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedCode = localStorage.getItem('verificationCode');

    if (code === storedCode) {
      navigate('/Golobe-X/auth/new_password');
    } else {
      setError('The code is incorrect.');
    }
  };

  const handleResend = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('verificationCode', newCode);
    setResendMessage('A new verification code has been sent to your local storage.');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='NM_SignUpF'>
        <Link className="NM_Back" to={"/Golobe-X/auth/login"} rel="noopener noreferrer">
          <img src={Back} alt="<" />
          <p>Back to login</p>
        </Link>
        <h2>Verify code</h2>
        <p className='NM_ParaLog'>
          An authentication code has been sent to your email.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='NM_FormLogin'>
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                type={showPassword ? 'text' : 'password'}
                label="Enter Code"
                fullWidth
                value={code}
                onChange={(e) => setCode(e.target.value)}
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
          <div className='NM_LoginLink ForCode'>
            <p>
              Didn’t receive a code?
              <a href="#" onClick={handleResend}>Resend</a>
            </p>
          </div>
          {resendMessage && <p style={{ color: 'green' }}>{resendMessage}</p>}
          <input type="submit" value="Verify" className='NM_Submit ForCode' />
        </form>
      </div>
    </ThemeProvider>
  );
}