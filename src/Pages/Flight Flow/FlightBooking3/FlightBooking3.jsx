import Addcard from "../../../Components/AddCard/Addcard";
import CardFlightDetailFinal from "../../../Components/CardFlightDetailFinal/CardFlightDetailFinal";
import FlightAccordion from "../../../Components/FlightAccordion/FlightAccordion";
import FlightCard from "../../../Components/FlightCard/FlightCard";
import FlightForm from "../../../Components/FlightForm/FlightForm";
import Navigation from "../../../Components/Nav/Nav";
import Path from "../../../Components/Path/Path";
import  Footer from "../../../Components/Footer/Footer";
import imgFlightCard from './../../../assets/images/Booking detail.png'
import './FlightBooking3.css'
import { Link } from "react-router-dom";
import Newsletter from "../../../Components/Newsletter/Newsletter";

export default function FlightBooking3({  navButtons,
    navButtonsForMobile,
    navList,}) {
    const linkto = [
        // eslint-disable-next-line react/jsx-key
        <Link className='MH-addbtn ' to={"/Golobe-X/flightflow/booking3"}>Add Card</Link>
    ]
    return (
        <section className="MH-FlightBooking">
                           <Navigation
          buttons={navButtons}
          navMobile={navButtonsForMobile}
          isLandingPage={false}
          navList={navList}
        />
            
            <div className="MH-FlightBooking3">
            <Path country={'Turkey'} city={'Istanbul'} hotel_name={'CVK Park Bosphorus Hotel Istanbul'} />
           <div className="MH-flight-content">
          
           <div className="MH-content1">
          
               <CardFlightDetailFinal/>
               <FlightAccordion Header_Title={'Pay in full'} Header_Body={'Pay the total and you are all set'}
          Header_Title2={'Pay part now, part later'} Header_Body2={'Pay 207.43 $ now, and the rest (207.43 $) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.'}
          Header_More={'More info'}/>
               <Addcard linkto={linkto}/>
            </div> 
            <div className="MH-content2">
            <FlightCard page={'FlightBooking'} imgFlightCard={imgFlightCard} title={'Economy'} subtitle={<p className="subtitle" style={{marginBottom: '20px'}}>Emirates A380 Airbus</p>} button={'4.2'}
            price_Base_Fare={'400 $'} price_Discount={'400 $'} price_taxes={'400 $'} price_Service_Fee={'400 $'} price_total={'400 $'}/>
            </div>    
            </div>  
        </div>
        <Newsletter/>
        <Footer/>
        </section>
    )
}