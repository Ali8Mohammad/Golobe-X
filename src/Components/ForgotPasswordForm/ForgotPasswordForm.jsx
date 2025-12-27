import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../SignUpForm/SignUpForm.css';
import '../AuthPage/AuthPage.css'
import './ForgotPasswordForm.css'
import '../AddPaymentMethodForm/AddPaymentMethodForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function ForgotPasswordForm({ facebook, google, apple, Back }) {
  const [email, setEmail] =useState('');
  const [error, setError] = useState('');
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

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = users.some(user => user.email === email);

    if (!emailExists) {
      setError('Email is not registered.');
      return;
    }

    const code =Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('resetEmail', email);
    localStorage.setItem('verificationCode', code);

    navigate('/Golobe-X/auth/verify_code');
  };
  return (
    <ThemeProvider theme={theme}>
      <div className='NM_SignUpF'>
        <Link className="NM_Back" to={"/Golobe-X/auth/login"} rel="noopener noreferrer">
          <img src={Back} alt="<" />
          <p>Back to login</p>
        </Link>
        <h2>Forgot your password?</h2>
        <p className='NM_ParaLog ForForgetPassword'>
          Don’t worry, happens to all of us. Enter your email below to recover your password
        </p>
        <form onSubmit={handleSubmit}>
          <div className='NM_FormLogin'>
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                label="Email"
                // defaultValue="john.doe@gmail.com"
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                type='email'
              />
            </Box>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input type="submit" value="Submit" className='NM_Submit ForForgetPassword' />
        </form>
        <div className="NM_Row ForForgetPassword">
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