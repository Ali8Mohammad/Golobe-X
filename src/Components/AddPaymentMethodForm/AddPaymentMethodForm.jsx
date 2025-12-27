import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '.././SignUpForm/SignUpForm.css';
import '../AuthPage/AuthPage.css'
import './AddPaymentMethodForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup, Select, FormControl, InputLabel, MenuItem, InputAdornment, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import cardIcon from '../../assets/images/NMvisa.svg';

export default function AddPaymentMethodForm({Back}) {
  const [country, setCountry] = useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setCountry(event.target.value);
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
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FF8500',
            }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-focused': {
              color: '#FF8500',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FF8500',
            },
          },
        },
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Golobe-X');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='NM_SignUpF'>
        <Link className="NM_Back" to={"/Golobe-X/auth"} rel="noopener noreferrer">
          <img src={Back} alt="<" />
          <p>Back</p>
        </Link>
        <h2>Add a payment method</h2>
        <p className='NM_ParaLog'>Let’s get you all set up so you can access your personal account.</p>
        <form>
          <div className='NM_FormLogin'>
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                label="Card Number"
                defaultValue="4321 4321 4321 4321"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <img src={cardIcon} alt="card icon" style={{ width: '24px', height: '15.7px' }}/>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <div className='NM_Line'>
              <Box sx={{ width: '100%', height: '56px' }}>
                <TextField
                  id="outlined-required"
                  label="Exp. Date"
                  defaultValue="02/27"
                  fullWidth
                />
              </Box>
              <Box sx={{ width: '100%', height: '56px' }}>
                <TextField
                  id="outlined-required"
                  label="CVC"
                  defaultValue="123"
                  fullWidth
                />
              </Box>
            </div>
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                label="Name on Card"
                defaultValue="John Doe"
                fullWidth
              />
            </Box>
            <Box sx={{ width: '100%', height: '56px' }}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country or Region</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  value={country}
                  label="Country or Region"
                  onChange={handleChange}
                >
                  <MenuItem value="US">United States</MenuItem>
                  <MenuItem value="CA">Canada</MenuItem>
                  <MenuItem value="UK">United Kingdom</MenuItem>
                  <MenuItem value="IN">India</MenuItem>
                  <MenuItem value="AU">Australia</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <FormGroup className='NM_Checkbox'>
            <FormControlLabel
              control={<Checkbox
                sx={{ '&.Mui-checked': { color: '#112211;' }, }} />}
              label={
                <>
                  <p className='NM_LabelP'>
                    Securely save my information for 1-click checkout
                  </p>
                </>
              }
              sx={{
                margin: 0, 
              }}
            />
          </FormGroup>
          <input onClick={handleSubmit} type="submit" value="Add payment method" className='NM_Submit' />
        </form>
        <p className='NM_Text'>
          By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
        </p>
      </div>
    </ThemeProvider>
  );
}
