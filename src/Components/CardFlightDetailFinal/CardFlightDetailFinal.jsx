// import { Row, Col } from 'react-bootstrap' 
import './CardFlightDetailFinal.css'
import Card from 'react-bootstrap/Card';
import './../../../src/index.css'
const CardFlightDetailFinal = ({page}) => {
    return (
    <section className={page==='FlightBooking' ? 'Aya_Flight_Details_Final' : 'RH_Flight_Details_Final'}>

    <Card className='cards'>
        <Card.Body>
        <div className='part1 d-flex justify-content-between'>
        <Card.Title className={page === 'FlightBooking' ? 'title' : 'd-none'}>Emirates A380 Airbus</Card.Title> 
        <span className={page === 'FlightBooking' ? 'span' : 'd-none'}>240 $</span>
        </div>
        <div className='part2 d-flex justify-content-between'>
            <Card.Title className='title'>Return Wed, Dec 8</Card.Title>
            <span className='span'>2h 28m</span>
        </div>
        <div className='part3 d-flex flex-wrap'>
            <div className="part3-1 d-flex">
                <Card.Img className='image' src="./../src/assets/images/Emirates-line.png" />
                <p className='p'>
                    <span className='span1'>Emirates</span>
                    <span className='span2'>Airbus A320</span>
                </p>
            </div>
            <div className="part3-2 d-flex flex-wrap ">
                <Card.Img className='image-airplane' src="./../src/assets/images/airplane.svg" />   
                <Card.Img style={{color: "#D7E2EE" , height: "40px"}} className='line2' src="./../src/assets/images/Line2.svg" />   
                <Card.Img className='image-Wifi' src="./../src/assets/images/Wifi.svg" />   
                <Card.Img style={{color: "#D7E2EE" , height: "40px"}} className='line2' src="./../src/assets/images/Line2.svg" />   
                <Card.Img className='image-stopwatch' src="./../src/assets/images/ion_stopwatch.svg" />  
                <Card.Img style={{color: "#D7E2EE" , height: "40px"}} className='line2' src="./../src/assets/images/Line2.svg" />    
                <Card.Img className='image-fast-food' src="./../src/assets/images/ion_fast-food.svg" />   
                <Card.Img style={{color: "#D7E2EE" , height: "40px"}} className='line2' src="./../src/assets/images/Line2.svg" />   
                <Card.Img className='image-round-airline' src="./../src/assets/images/ic_round-airline-seat-recline-normal.svg" />  
            </div>
        </div>
        <div className="part4">
            <div className="part4-1">
                <Card.Title className='span1'>12:00 pm</Card.Title>
                <Card.Title className='span2'>Newark(EWR)</Card.Title>
            </div>
            <div className="part4-2">
                <Card.Img className='image-line5' src="./../src/assets/images/Line5.svg" />   
                <Card.Img className='image-vector' src="./../src/assets/images/Vector1.svg" />   
                <Card.Img className='image-line6' src="./../src/assets/images/Line6.svg" />
            </div> 
            <div className="part4-3">
                <Card.Title className='span3'>12:00 pm</Card.Title>
                <Card.Title className='span4'>Newark(EWR)</Card.Title>
            </div>
        </div>
        </Card.Body>
    </Card>
    </section>
    )
}

export default CardFlightDetailFinal