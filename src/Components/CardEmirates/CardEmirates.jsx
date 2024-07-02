// import { Row, Col } from 'react-bootstrap' 
import './CardEmirates.css'
import Card from 'react-bootstrap/Card';
import './../../../src/index.css'
const CardEmirates = () => {
    return (
    <section className='RH_Flight_Details_Final' data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"  style={{ display: 'flex', justifyContent: 'center',margin:'40px auto',width:'100%'}}>
         <Card style={{ width: '1232px',height:'287px' }} className='cards'>
      <Card.Body>
        <div className='part1 d-flex justify-content-between'>
        </div>
        <div className='part2 d-flex justify-content-between'>
            <Card.Title className='title'>Return Wed, Dec 8</Card.Title>
            <span className='span'>2h 28m</span>
        </div>
        <div className='part3 d-flex ' style={{  width: 'auto'}}>
            <div className="part3-1 d-flex">
                <Card.Img className='image' src="./../src/assets/images/Emirates-line.png" />
                <p className='p'>
                    <span className='span1'>Emirates</span>
                    <span className='span2'>Airbus A320</span>
                </p>
            </div>
            <div className="part3-2" style={{  marginRight:'-24px'  }}>
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
        <div className="part4" style={{  display: 'flex',  margin: '40px auto',paddingBottom:'32px'}}>
        <Card.Title className='span1'>12:00 pm</Card.Title>
        <Card.Title className='span2'>Newark(EWR)</Card.Title>
        <div className="RH_plane-mobile" style={{margin:'0 80px'}}>
        <Card.Img className='image-line5' src="./../src/assets/images/Line5.svg" />   
        <Card.Img className='image-vector' src="./../src/assets/images/Vector1.svg" />   
        <Card.Img className='image-line6' src="./../src/assets/images/Line6.svg" /> 
        </div>
        <Card.Title className='span3'>12:00 pm</Card.Title>
        <Card.Title className='span4'>Newark(EWR)</Card.Title>
        </div>
      </Card.Body>
    </Card>
    </section>
    )
}

export default CardEmirates