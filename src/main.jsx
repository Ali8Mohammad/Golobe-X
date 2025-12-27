import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation
} from 'react-router-dom';
import './index.css';
import './Components/Nav/Nav.css';
import App from './App.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import FlightFlow from './Pages/Flight Flow/FlightFlow.jsx';
import HotelFlow from './Pages/Hotel Flow/HotelFlow.jsx';
import FlightsSearch from './Pages/Flight Flow/FlightsSearch/FlightsSearch.jsx';
import FlightListing from './Pages/Flight Flow/FlightListing/FlightListing.jsx';
import FlightDetail from './Pages/Flight Flow/FlightDetail/FlightDetail.jsx';
import FlightBooking from './Pages/Flight Flow/FlightBooking/FlightBooking.jsx';
import HotelSearch from './Pages/Hotel Flow/HotelSearch/HotelSearch.jsx';
import HotelListing from './Pages/Hotel Flow/HotelListing/HotelListing.jsx';
import HotelDetail from './Pages/Hotel Flow/HotelDetail/HotelDetail.jsx';
import HotelBooking from './Pages/Hotel Flow/HotelBooking/HotelBooking.jsx';
import Favorites from './Pages/Hotel Flow/Favorites/Favorites.jsx';
import AccountFlow from './Pages/Account Flow/AccountFlow.jsx';
import MyAccount from './Pages/Account Flow/MyAccount/MyAccount.jsx';
import FlightBooking2 from './Pages/Flight Flow/FlightBooking2/FlightBooking2.jsx';
import FlightBooking3 from './Pages/Flight Flow/FlightBooking3/FlightBooking3.jsx';
import HotelBookingpage4 from './Pages/Hotel Flow/Hotel-Booking-page4/HotelBookingpage4.jsx';
import Authenticate from './Pages/Auth/Authenticate.jsx';
import Login from './Pages/Auth/Login.jsx';
import SignUp from './Pages/Auth/SignUp.jsx';
import NewPassword from './Pages/Auth/NewPassword.jsx';
import ForgetPassword from './Pages/Auth/ForgetPassword.jsx';
import AddPayment from './Pages/Auth/AddPayment.jsx';
import VerifyCode from './Pages/Auth/VerifyCode.jsx';
import favourite from './assets/images/favourites.svg';
import client from './assets/images/Client-1.png';
import arrow from './assets/images/Arrow_Down.svg';
import HotelBooking2 from './Pages/Hotel Flow/Hotel-Booking-page2/HotelBooking2.jsx';
import profileBlack from './assets/images/profile-black.svg';
import card from './assets/images/card.svg';
import setting from './assets/images/setting.svg';
import support from './assets/images/support.svg';
import logout from './assets/images/logout.svg';
import navLine from './assets/images/navLine.svg'

const title = 'LIVE & TRAVEL';
const para = 'Special offers to suit your plan';
const className = 'NM_Hero';
const head2 = 'Helping Others';

const State = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [currentPage, setCurrentPage] = useState('landingpage');
    const [showDiv, setShowDiv] = useState(false); 
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    // for scroll by Noura
        useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (location.pathname === '/Golobe-X') {
            setCurrentPage('landingpage');
        } else {
            setCurrentPage('otherpage');
        }
    }, [location.pathname]);

    const toggleButtons = () => {
        setIsLoginActive(prevState => !prevState);
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
        setShowDiv(!showDiv);
      };
      const handleNavLinkClick = () => {
        setShowDiv(false);
    };
    
    
    // for scroll and active by Noura
    const NM_Login2 = isLoginActive ? (isScrolled ? 'NM_Login Scrolled' : 'NM_Login') : (isScrolled ? 'NM_Signup Scrolled' : 'NM_Signup');
    const NM_Signup2 = isLoginActive ? (isScrolled ? 'NM_Signup Scrolled' : 'NM_Signup') : (isScrolled ? 'NM_LoginN Scrolled' : 'NM_LoginN');
    const NM_LinkLog = isLoginActive ? (isScrolled ? 'NM_LinkLogin Scrolled' : 'NM_LinkLogin') : (isScrolled ? 'NM_LinkSignup Scrolled' : 'NM_LinkSignup');
    const NM_LinkSign = isLoginActive ? (isScrolled ? 'NM_LinkSignup Scrolled' : 'NM_LinkSignup') : (isScrolled ? 'NM_LinkLogin Scrolled' : 'NM_LinkLogin');

    const Navlinks = ({ type, className, linkTo, linkText, imgSrc, imgAlt, onClick, classNameLink, afterImage, arrowAlt, arrowclass, textClass, imgClass }) => {
        if (type === 'button') {
            return (
                <button className={className} onClick={onClick}>
                    <Link className={classNameLink} to={linkTo} rel="noopener noreferrer">
                        {linkText}
                    </Link>
                </button>
            );
        } else if (type === 'list') {
            return (
                <li className={className}>
                    <Link to={linkTo} onClick={onClick}>
                        {imgSrc && <img className={imgClass} src={imgSrc} alt={imgAlt} />}
                        {linkText && <span className={textClass}>{linkText}</span>}
                        {afterImage && <img className={arrowclass} src={afterImage} alt={arrowAlt} />}
                    </Link>
                </li>
            );
        } else {
            return null;
        }
    };

    const Navbuttons = ({ toggleButtons, favourite, client, showAccountButtons, isLandingPage }) => {
        return (
            <>
                {isLandingPage ? (
                    <>
                        <Navlinks
                            type="button"
                            className={NM_Login2}
                            linkTo="/Golobe-X/auth/login"
                            linkText="Login"
                            onClick={toggleButtons}
                            classNameLink={NM_LinkLog}
                        />
                        <Navlinks
                            type="button"
                            className={NM_Signup2}
                            linkTo="/Golobe-X/auth"
                            linkText="Sign up"
                            onClick={toggleButtons}
                            classNameLink={NM_LinkSign}
                        />
                    </>
                ) : null}
                {showAccountButtons && (
                    <>
                        <Navlinks
                            type="list"
                            className="AM_Link"
                            linkTo="/Golobe-X/hotelflow/favorites"
                            imgSrc={favourite}
                            imgAlt="favourite"
                            linkText="Favourites"
                            textClass="AM_Favourite"
                            imgClass="FavouritesImg"
                        />
                        <span className='AM_dash'>|</span>
                        <Navlinks
                            type="list"
                            className="AM_Link"
                            imgSrc={client}
                            imgAlt="John D."
                            linkText="John D."
                            onClick={handleLinkClick}
                            afterImage={arrow}
                            arrowAlt={"arrow"}
                            arrowclass={'arrowDown'}
                            textClass='AM_Client'
                            imgClass="ClientImg"
                        />
                    </>
                )}
            </>
        );
    };

    const navButtonsForMobile = (
        <>
            <li className={currentPage === 'landingpage' ? "" : 'd-none'}>
                <Link className='NM_Link' to="/Golobe-X/auth/login" rel="noopener noreferrer"> Login
                </Link>
            </li>
            <li className={currentPage === 'landingpage' ? '' : 'd-none'}>
                <Link className='NM_Link' to="/Golobe-X/auth" rel="noopener noreferrer"> Sign Up
                </Link>
            </li>
            <li className={currentPage === 'landingpage' ? 'd-none' : ''}>
                <Link className='AM_Link' to='/Golobe-X/hotelflow/favorites'>
                    <img src={favourite} alt="" />Favourites</Link>
            </li>
            <li className={currentPage === 'landingpage' ? 'd-none' : ''}>
                <Link className='AM_Link'>John D.</Link>
            </li>
            <li onClick={handleLinkClick} className={currentPage === 'landingpage' ? 'd-none' : 'user-profile'}>
                <img src={client} alt="" /></li>
        </>
    );
    const navList = (
        <>
              {showDiv && (
        <div className={currentPage === 'landingpage' ? 'd-none' : 'AM_AccountList'}>
          <div className='AM_Toplist'>
            <img src={client} className='account-client' alt="client" />
            <div className='AM_Toptextlist'>
              <h5 className='username-accountlist'>John Doe.</h5>
              <p className='connect-status'>Online</p>
            </div>
          </div>
          <img className='AM_Navline' src={navLine} alt="" />
          <div className='AM_AccountLinks'>
          <Link className='AM_Link1' to="/Golobe-X/myaccount" onClick={handleNavLinkClick}><img src={profileBlack} alt=""/>My Account</Link>
            <Link className='AM_Link1'><img src={card} alt="" />Payments</Link>
            <Link className='AM_Link1'><img src={setting} alt="" />Setting</Link>
          </div>
          <img className='AM_Navline' src={navLine} alt="" />
          <div className='AM_SupportLinks'>
            <Link className='AM_Link1'><img src={support} alt="" />Support</Link>
            <Link className='AM_Link1'><img src={logout} alt="" />Logout</Link>
          </div>
        </div>
      )}
        </>
    )

    const navButtons = (showAccountButtons, isLandingPage) => (
        <Navbuttons toggleButtons={toggleButtons} favourite={favourite} client={client} showAccountButtons={showAccountButtons} isLandingPage={isLandingPage} />
    );

    return (
        <React.StrictMode>
            <Routes>
                <Route path="/Golobe-X/" element={<App />}>
                    <Route index element={
                        <LandingPage
                            head2={head2}
                            className={className}
                            title={title}
                            para={para}
                            navButtons={navButtons(false, true)}
                            navButtonsForMobile={navButtonsForMobile}
                        />
                    } />
                    <Route path="/Golobe-X/flightflow" element={<FlightFlow />}>
                        <Route index element={
                            <FlightsSearch
                                navButtons={navButtons(true, false)}
                                navButtonsForMobile={navButtonsForMobile}
                                navList={navList}
                                />
                            } />
                        <Route path="listing" element={
                            <FlightListing
                            navButtons={navButtons(true, false)}
                            navButtonsForMobile={navButtonsForMobile}
                            navList={navList}    
                            />
                        } />
                        <Route path="detail" element={
                            <FlightDetail
                            navButtons={navButtons(true, false)}
                            navButtonsForMobile={navButtonsForMobile}
                            navList={navList}    
                            />
                        } />
                        <Route path="booking" element={
                            <FlightBooking
                            navButtons={navButtons(true, false)}
                            navButtonsForMobile={navButtonsForMobile}
                            navList={navList}    
                            />
                        } />
                        <Route path="booking2" element={
                            <FlightBooking3
                            navButtons={navButtons(true, false)}
                            navButtonsForMobile={navButtonsForMobile}
                            navList={navList}    
                            />
                        } />
                        <Route path="booking3" element={
                            <FlightBooking2
                            navButtons={navButtons(true, false)}
                            navButtonsForMobile={navButtonsForMobile}
                            navList={navList}    
                            />
                        } />
                    </Route>
                    <Route path="/Golobe-X/hotelflow" element={<HotelFlow />}>
                        <Route index element={<HotelSearch
                            navButtons={navButtons(true, false)}
                            navButtonsForMobile={navButtonsForMobile}
                            navList={navList}    
                            />
                        } />
                        <Route path="listing" element={<HotelListing
                            navButtons={navButtons(true, false)}
                            navButtonsForMobile={navButtonsForMobile}
                            navList={navList}    
                            />} />
                        <Route path="detail" element={<HotelDetail 
                        navButtons={navButtons(true, false)}
                        navButtonsForMobile={navButtonsForMobile}
                        navList={navList}
                        />} />
                        <Route path="booking" element={<HotelBooking
                         navButtons={navButtons(true, false)}
                         navButtonsForMobile={navButtonsForMobile}
                         navList={navList}
                        />
                    }
                         />
                        <Route path="booking2" element={<HotelBooking2 
                        navButtons={navButtons(true, false)}
                        navButtonsForMobile={navButtonsForMobile}
                        navList={navList}
                        />} />
                        <Route path="booking3" element={<HotelBookingpage4 
                        navButtons={navButtons(true, false)}
                        navButtonsForMobile={navButtonsForMobile}
                        navList={navList}
                        />} />
                        <Route path="favorites" element={<Favorites
                         navButtons={navButtons(true, false)}
                         navButtonsForMobile={navButtonsForMobile}
                         navList={navList}    
                         />} />
                    </Route>
                    <Route path="/Golobe-X/myaccount" element={<AccountFlow />}>
                        <Route index element={<MyAccount
                            navButtons={navButtons(true, false)}
                            navButtonsForMobile={navButtonsForMobile}
                            navList={navList}    
                        />
                        } />
                    </Route>
                    <Route path="/Golobe-X/auth" element={<Authenticate />}>
                        <Route index element={<SignUp />} />
                        <Route path="login" element={<Login />} />
                        <Route path="new_password" element={<NewPassword />} />
                        <Route path="forget_password" element={<ForgetPassword />} />
                        <Route path="add_payment" element={<AddPayment />} />
                        <Route path="verify_code" element={<VerifyCode />} />
                    </Route>
                </Route>
            </Routes>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <State />
    </Router>
);

