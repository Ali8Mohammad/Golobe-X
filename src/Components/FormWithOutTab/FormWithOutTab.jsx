import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import "./../../index.css";
import './FormWithOutTab.css';
import arrowdown from "./../../assets/images/Vector (7).svg";
import twoArrow from "./../../assets/images/Vector (5).svg"
import search from '../../assets/images/search.png'
import car from "./../../assets/images/Vector (9).svg";
import plus from "./../../assets/images/Vector (10).svg";
import building from "./../../assets/images/building.svg";
import user from "./../../assets/images/User.svg";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';

const FormWithOutTab = ({ page }) => {
  let index = 1;

  const [destination, setDestination] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Istanbul, Turkey');
  const [room, setRoom] = useState(false);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [add, setAdd] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const toggleHandler = () => {
    setDestination(!destination);
  };

  const RoomHandler = () => {
    setRoom(!room);
  };

  const click = (city) => {
    setSelectedCity(city);
  };

  const changeRoom = () => {
    setAdd(add);
  };

  let Count = count + count1;
  let Room = index;

  const OSdataDes = [
    { des1: 'Makkah, Saudi Arabia', des2: 'Dubai, United Arab Emirates', des3: 'Al Madinah, Saudi Arabia', des4: 'Cairo, Egypt' },
    { des1: 'Hurghada, Egypt', des2: 'Sharm El Sheikh, Egypt', des3: 'Alexandria, Egypt', des4: 'Istanbul, Turkey' },
    { des1: 'Abu Dhabi, United Arab Emirates', des2: 'Sharjah, United Arab Emirates', des3: 'Riyadh, Saudi Arabia', des4: 'Jeddah, Saudi Arabia' },
    { des1: 'Ain Sokhna, Egypt', des2: 'Beirut, Lebanon', des3: 'Dahab, Egypt', des4: 'Doha, Qatar' },
    { des1: 'Aswan, Egypt', des2: 'Kuwait', des3: 'Ajman, United Arab Emirates', des4: 'Amman, Jordan' },
  ];

  const OSdataRoom = [
    {
      Title: "Adults",
      year: ">17 years",
      btn1contact: "-",
      btn2contact: "+",
      class: "OS-Ti-Flex",
      id: "1"
    },
    {
      Title: "Children",
      year: "<17 years",
      btn1contact: "-",
      btn2contact: "+",
      class: "OS-Ti-Flex OS-Ti-Padding1",
      id: "2"
    },
  ];

  const handleShowStays = () => {
    if (token) {
      navigate('/Golobe-X/hotelflow/listing');
    } else {
      navigate('/Golobe-X/auth/login');
    }
  };

  const OSRoom = [{ Title: `Room ${index}` }];

  return (
    <>
      {page === 'hotelListing' && (
         <section className='AM_form'>
        <div className="AM-textfields">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={car} alt="icon" className="MS-field-icon" />
                </InputAdornment>
              ),
            }}
            label="Enter Destination"
            id="outlined-size-small"
            value={selectedCity}
            size="large"
            className="MS-text-field1"
            onClick={toggleHandler}
          />
          <div className={destination ? "OS-Destination" : "OS-DestinationDisplay"}>
            <h1 className='OS-Destination-h1'>Popular Cities</h1>
            <div>
              {OSdataDes.map((item, index) => (
                <div key={index} className='OS-DestinationFlex'>
                  <div className='OS-Destination-Par' onClick={() => click(item.des1)}>{item.des1}</div>
                  <p className='OS-Destination-Par' onClick={() => click(item.des2)}>{item.des2}</p>
                  <p className='OS-Destination-Par' onClick={() => click(item.des3)}>{item.des3}</p>
                  <p className='OS-Destination-Par' onClick={() => click(item.des4)}>{item.des4}</p>
                </div>
              ))}
            </div>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className='MS-text-field'>
              <DatePicker
                id="outlined-size-small"
                label="Check In"
                defaultValue={dayjs('2022-02-12')}
                size="large"
                format="ddd/MM/YY"
                className="MS-text-field"
              />
            </div>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="MS-text-field">
              <DatePicker
                id="outlined-size-small"
                label="Check Out"
                defaultValue={dayjs('2022-02-12')}
                size="large"
                format="ddd/MM/YY"
                className="MS-text-field"
              />
            </div>
          </LocalizationProvider>
          <TextField
            label="Rooms & Guests"
            id="outlined-size-small"
            defaultValue="1 room, 2 guests"
            value={`${Room} Room, ${Count} guests`}
            size="large"
           className="MS-text-field"
            onClick={RoomHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <img src={user} alt="icon" className="MS-field-icon" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <img src={arrowdown} alt="icon" className="MS-field-icon" />
                </InputAdornment>
              ),
            }}
          />
          <div className={room ? "OS-Room" : "OS-DestinationDisplay"}>
            {OSRoom.map((item) => (
              <>
                <h1 className='OS-Destination-h1 OS-Room-h1'>{item.Title}</h1>
                <div className='OS-Ti-Flex OS-All-Padding'>
                  {OSdataRoom.map((item, index) => (
                    <div key={index} className={item.class}>
                      <img src={user} alt="icon" className="MS-field-icon" />
                      <div className='OS-DivT-Room'>
                        <h6 className='OS-h6-Room'>{item.Title}</h6>
                        <p className='OS-p-Room'>{item.year}</p>
                      </div>
                      <div className='OS-Ti-Flex'>
                        <button className='OS-btn-Room' id={item.id} onClick={() => {
                          if (item.id === "1") {
                            setCount(count > 0 ? count - 1 : 0);
                          } else {
                            setCount1(count1 > 0 ? count1 - 1 : 0);
                          }
                        }}>{item.btn1contact}</button>
                        <p className='OS-pp-Room'>{item.id === "1" ? count : count1}</p>
                        <button className='OS-btn-Room' id={item.id} onClick={() => {
                          if (item.id === "1") {
                            setCount(count + 1);
                          } else {
                            setCount1(count1 + 1);
                          }
                        }}>{item.btn2contact}</button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
            <div className='OS-Ti-FlexStyle'>
              <div className='OS-Ti-Flex OS-Ti-Style' onClick={changeRoom}>
                <div className='OS-Plus-Style'>+</div>
                <h6 className='OS-AddRoom-Style'>Add Room</h6>
              </div>
              <div className='OS-applyDiv-Style' onClick={RoomHandler}><p className='OS-apply-Style'>Apply</p></div>
            </div>
          </div>
          <button className='AM_searchButton MS-SButton'><img src={search} alt="search" /></button>
        </div>
        </section>
      )}
      {page === 'flightListing' && (
        <section className='AM_form'>
          <div className="AM-textfields">
            <TextField
              label="From - To"
              id="outlined-size-small"
              defaultValue="Lahore - Karachi"
              size="large"
              className="AM-field"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={twoArrow} alt="icon" className="AM-field-icon" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Trip"
              id="outlined-size-small"
              defaultValue="Return"
              size="large"
              className="AM-Returnfield"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={arrowdown} alt="icon" className="AM-field-icon" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Depart - Return"
              id="outlined-size-small"
              defaultValue="07 Nov 22 - 13 Nov 22"
              size="large"
              className="AM-field"
            />
            <TextField
              label="Passenger - Class"
              id="outlined-size-small"
              defaultValue="1 Passenger, Economy"
              size="large"
              className="AM-field AM-lastfield"
            />
            <button className='AM_searchButton'><img src={search} alt="search" /></button>
          </div>
        </section>
      )}
    </>
  );
}

export default FormWithOutTab;
