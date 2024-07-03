import './FlightCard.css'
import Card from 'react-bootstrap/Card';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const data = {
    part2_Span1 : "Your booking is protected by" ,
    part2_Span2 : "golobe" ,
    reviews_p : "54 reviews" ,
    reviews_span : "Very Good" ,
    title_part3 : "Price Details" ,
    list1_item1 : "Base Fare" ,
    list1_item2 : "Discount" ,
    list1_item3 : "Taxes" ,
    list1_item4 : "Service Fee" ,
}
const FlightCard = ({page , imgFlightCard ,title , subtitle ,button ,price_Base_Fare , price_Discount ,price_taxes ,price_Service_Fee,price_total}) => {
    useEffect (() => {
        Aos.init({duration : 2000})
    }, [])
    return (
    <section className='Aya-Flight_Card' data-aos='fade-left'>
        <Card className={page==='FlightBooking' ? 'flightCards' : 'hoteltCards'}>
        <Card.Body>
        <div className='part1 d-flex '>
            <Card.Img className='image' src={imgFlightCard} />
            <div className="part1-content">
                <p className={page==='FlightBooking' ? 'flightTitle' : 'hotelTitle'} >{title}</p>
                <p className='subtitle mb-0'>{subtitle}</p>
                <div className='d-flex align-items-center'>
                    <button className='button'>{button}</button>
                    <p className='reviews mb-0'><span className='fw-bold'>{data.reviews_span}</span> {data.reviews_p}</p>
                </div>
            </div>
        </div>
        <div className="Line1"></div>
        <p className='part2'>{data.part2_Span1} <span className='part2-span'>{data.part2_Span2}</span></p>
        <div className="Line1"></div>
        <div className="part3">
            <p className='title'>{data.title_part3}</p>
            <div className="list-price ">
                <div className="lists d-flex justify-content-between">
                <ul className='list1'>
                    <li className='item'>{data.list1_item1}</li>
                    <li className='item'>{data.list1_item2}</li>
                    <li className='item'>{data.list1_item3}</li>
                    <li className='item'>{data.list1_item4}</li>
                </ul>
                <ul className='list2'>
                    <li className='item'>{price_Base_Fare}</li>
                    <li className='item'>{price_Discount}</li>
                    <li className='item'>{price_taxes}</li>
                    <li className='item'>{price_Service_Fee}</li>
                </ul>
                </div>
                <div className="Line2"></div>
                <ul className="list3 d-flex justify-content-between align-items-center">
                    <li>Total </li>
                    <li className='Price'>{price_total}</li>
                </ul>
            </div>
        </div>
        </Card.Body>
        </Card>
    </section>
    )
}

export default FlightCard