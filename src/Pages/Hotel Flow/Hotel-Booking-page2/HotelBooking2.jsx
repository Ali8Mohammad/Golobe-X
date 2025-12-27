import './HotelBooking2.css'
import CardHotelDetailFinal from "./../../../Components/CardHotelDetailFinal/CardHotelDetailFinal";
import FlightAccordion from "./../../../Components/FlightAccordion/FlightAccordion";
import Path from "./../../../Components/Path/Path";
import Addcard from "./../../../Components/AddCard/Addcard";
import FlightCard from "./../../../Components/FlightCard/FlightCard";
import imgHotelCard from './../../../assets/images/Booking detail (2).png'
import Footer from './../../../Components/Footer/Footer';
import Navigation from './../../../Components/Nav/Nav';
import Newsletter from "../../../Components/Newsletter/Newsletter";
import { Link } from 'react-router-dom';

export default function HotelBooking2 ({  navButtons,
  navButtonsForMobile,
  navList,}) {
    const linkto = [
        <Link className='MH-addbtn ' to={"/Golobe-X/hotelflow/booking3"}>Add Card</Link>
    ]
    return (
        <section className="MH-Hotelbooking2">
         <Navigation
          buttons={navButtons}
          navMobile={navButtonsForMobile}
          isLandingPage={false}
          navList={navList}
        />
            <div className="MH-Hotel-main">
            <Path country={'Turkey'} city={'Istanbul'} hotel_name={'CVK Park Bosphorus Hotel Istanbul'}/>
              <div className="MH-booking-content">
                <div className="MH-content1">
                <CardHotelDetailFinal/>
          <FlightAccordion Header_Title={'Pay in full'} Header_Body={'Pay the total and you are all set'}
          Header_Title2={'Pay part now, part later'} Header_Body2={'Pay 207.43 $ now, and the rest (207.43 $) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.'}
          Header_More={'More info'}/>
                 <Addcard linkto={linkto}/>
                </div>
                <div className="MH-content2">
                <FlightCard page={'HotelBooking'} imgFlightCard={imgHotelCard} title={'CVK Park Bosphorus...'} subtitle={<p className="subtitle" style={{marginBottom: '16px'}}>Superior room - 1 double bed or 2 twin beds</p>} button={'4.2'}
                 price_Base_Fare={'240 $'} price_Discount={'0 $'} price_taxes={'20 $'} price_Service_Fee={'5 $'} price_total={'265 $'} />
                </div>
              </div>
            </div>
            <Newsletter/>
              <Footer/>
        </section>
    )
}