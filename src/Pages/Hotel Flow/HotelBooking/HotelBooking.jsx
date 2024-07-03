import FlightAccordion from "../../../Components/FlightAccordion/FlightAccordion";
import Path from "../../../Components/Path/Path";
import FlightCard from "../../../Components/FlightCard/FlightCard";
import imgHotelCard from './../../../assets/images/Booking detail (2).png'
import './HotelBooking.css'
import FlightForm from "../../../Components/FlightForm/FlightForm";
import CardHotelDetailFinal from "../../../Components/CardHotelDetailFinal/CardHotelDetailFinal";
import Newsletter from "../../../Components/Newsletter/Newsletter";
import Footer from "../../../Components/Footer/Footer";
import Navigation from "../../../Components/Nav/Nav";
export default function HotelBooking(navButtons ,navButtonsForMobile ) {
  return (
    <section className="FlightBooking">
      <Navigation navButtons={navButtons} navButtonsForMobile={navButtonsForMobile}/>
      <Path country={'Turkey'} city={'Istanbul'} hotel_name={'CVK Park Bosphorus Hotel Istanbul'}/>
      <div className='FlightBookingRow'>
      <div className="FlightContainer" >
          <CardHotelDetailFinal/>
          <FlightAccordion Header_Title={'Pay in full'} Header_Body={'Pay the total and you are all set'}
          Header_Title2={'Pay part now, part later'} Header_Body2={'Pay 207.43 $ now, and the rest (207.43 $) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.'}
          Header_More={'More info'}/>
          <FlightForm/>
      </div>
      <FlightCard page={'HotelBooking'} imgFlightCard={imgHotelCard} title={'CVK Park Bosphorus...'} subtitle={<p className="subtitle" style={{marginBottom: '16px'}}>Superior room - 1 double bed or 2 twin beds</p>} button={'4.2'}
      price_Base_Fare={'240 $'} price_Discount={'0 $'} price_taxes={'20 $'} price_Service_Fee={'5 $'} price_total={'265 $'} />
    </div>
    <Newsletter/>
    <Footer/>
    </section>
  )
}