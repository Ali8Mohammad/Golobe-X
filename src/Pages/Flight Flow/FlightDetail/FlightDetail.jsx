import React from 'react'
import './FlightDetail.css';
//import FlightDetailsHero from '../../Components/FlightDetailsHero/FlightDetailsHero';
import FlightDetailsHero from '../../../Components/FlightDetailsHero/FlightDetailsHero';
import EmiratesAirlinesPolicies from '../../../Components/EmiratesAirlinesPolicies/EmiratesAirlinesPolicies';
import FlightDeatailsGalary from '../../../Components/FlightDeatailsGalary/FlightDeatailsGalary';
import Newsletter from '../../../Components/Newsletter/Newsletter';
import Footer from '../../../Components/Footer/Footer';
import CardFlightDetailFinal from '../../../Components/CardFlightDetailFinal/CardFlightDetailFinal';
import PaymentMethods from '../../../Components/PaymentMethods/PaymentMethods'

export default function FlightDetail() {
  return (
    <section className='RH_FlightDetail'>

      <FlightDetailsHero />
      <FlightDeatailsGalary />
      <EmiratesAirlinesPolicies />
      <CardFlightDetailFinal />
      <PaymentMethods/>
      <Newsletter />
      <Footer />




    </section>
  )
}
