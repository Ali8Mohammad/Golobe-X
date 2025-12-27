import React, { useState } from 'react';
import "../ShowPlaces/ShowPlaces.css";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import car from "./../../assets/images/Vector (9).svg";
import plus from "./../../assets/images/Vector (10).svg";
import arrowdown from "./../../assets/images/Vector (7).svg";
import building from "./../../assets/images/building.svg";
import user from "./../../assets/images/User.svg";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';

const ShowPlacesMain = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const [destinationOpen, setDestinationOpen] = useState(false);
  const [roomOpen, setRoomOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Istanbul, Turkey');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const totalGuests = adults + children;
  const roomsCount = 1;

  const cities = [
    ['Makkah, Saudi Arabia', 'Dubai, United Arab Emirates', 'Al Madinah, Saudi Arabia', 'Cairo, Egypt'],
    ['Hurghada, Egypt', 'Sharm El Sheikh, Egypt', 'Alexandria, Egypt', 'Istanbul, Turkey'],
    ['Abu Dhabi, United Arab Emirates', 'Sharjah, United Arab Emirates', 'Riyadh, Saudi Arabia', 'Jeddah, Saudi Arabia'],
    ['Ain Sokhna, Egypt', 'Beirut, Lebanon', 'Dahab, Egypt', 'Doha, Qatar'],
    ['Aswan, Egypt', 'Kuwait', 'Ajman, United Arab Emirates', 'Amman, Jordan'],
  ];

  const guestsConfig = [
    {
      id: 'adults',
      title: 'Adults',
      subtitle: '>17 years',
      count: adults,
      setCount: setAdults,
    },
    {
      id: 'children',
      title: 'Children',
      subtitle: '<17 years',
      count: children,
      setCount: setChildren,
    },
  ];

  const handleShowStays = () => {
    navigate(
      token
        ? '/Golobe-X/hotelflow/listing'
        : '/Golobe-X/auth/login'
    );
  };

  return (
    <>
      <div className="NM_TextField">
        <TextField
          label="Enter Destination"
          value={selectedCity}
          size="large"
          className="MS-firstfield OS-firstfiled"
          onClick={() => setDestinationOpen(!destinationOpen)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={car} alt="icon" className="MS-field-icon" />
              </InputAdornment>
            ),
          }}
        />

        <div className={destinationOpen ? "OS-Destination" : "OS-DestinationDisplay"}>
          <h1 className="OS-Destination-h1">popular cities</h1>

          {cities.map((group, groupIndex) => (
            <div key={groupIndex} className="OS-DestinationFlex">
              {group.map(city => (
                <p
                  key={city}
                  className="OS-Destination-Par"
                  onClick={() => {
                    setSelectedCity(city);
                    setDestinationOpen(false);
                  }}
                >
                  {city}
                </p>
              ))}
            </div>
          ))}
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check In"
            defaultValue={dayjs()}
            format="ddd/MM/YY"
            className="MS-width"
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check Out"
            defaultValue={dayjs().add(1, 'day')}
            format="ddd/MM/YY"
            className="MS-width"
          />
        </LocalizationProvider>

        <TextField
          label="Rooms & Guests"
          value={`${roomsCount} Room, ${totalGuests} Guests`}
          size="large"
          className="MS-field1 OS-firstfiled1"
          onClick={() => setRoomOpen(!roomOpen)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
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

        <div className={roomOpen ? "OS-Room" : "OS-DestinationDisplay"}>
          <h1 className="OS-Destination-h1 OS-Room-h1">Room 1</h1>

          <div className="OS-Ti-Flex OS-All-Padding">
            {guestsConfig.map(({ id, title, subtitle, count, setCount }) => (
              <div key={id} className="OS-Ti-Flex OS-Ti-Padding1">
                <img src={user} alt="icon" className="MS-field-icon" />

                <div className="OS-DivT-Room">
                  <h6 className="OS-h6-Room">{title}</h6>
                  <p className="OS-p-Room">{subtitle}</p>
                </div>

                <div className="OS-Ti-Flex">
                  <button
                    className="OS-btn-Room"
                    onClick={() => setCount(Math.max(0, count - 1))}
                  >
                    -
                  </button>

                  <p className="OS-pp-Room">{count}</p>

                  <button
                    className="OS-btn-Room"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="OS-Ti-FlexStyle">
            <div className="OS-applyDiv-Style" onClick={() => setRoomOpen(false)}>
              <p className="OS-apply-Style">Apply</p>
            </div>
          </div>
        </div>
      </div>

      <div className="MS-right">
        <a>
          <img src={plus} alt="plus" className="MS-plus" />
          Add Promo Code
        </a>

        <button onClick={handleShowStays} className="MS-btnFlight">
          <img src={building} alt="arrow" />
          Show Places
        </button>
      </div>
    </>
  );
};

export default ShowPlacesMain;
