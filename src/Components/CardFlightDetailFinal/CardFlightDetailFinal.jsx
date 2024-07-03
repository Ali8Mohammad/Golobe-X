// import { Row, Col } from 'react-bootstrap' 
import './CardFlightDetailFinal.css'
import Card from 'react-bootstrap/Card';
import './../../../src/index.css'
const CardFlightDetailFinal = () => {
    return (
    <section className='Aya_Flight_Details_Final'>
    <Card className='cards'>
        <Card.Body>
        <div className='part1 d-flex justify-content-between'>
            <Card.Title className='title'>Emirates A380 Airbus</Card.Title>
            <span className='span'>240 $</span>
        </div>
        <div className='part2 d-flex justify-content-between'>
            <Card.Title className='title'>{data.return}</Card.Title>
            <span className='span'>{data.hour}</span>
        </div>
        <div className='part3 d-flex '>
            <div className="part3-1 d-flex">
                <Card.Img className='image' src={Emirates_line} />
                <p className='p'>
                    <span className='span1'>{data.subtitle1}</span>
                    <span className='span2'> {data.subtitle2}</span>
                </p>
            </div>
            <div className="part3-2">
                {data.imgPart3.map((img,index) => (
                    <Card.Img key={index} src={img} className={`img${index+1}`} alt={`img${index+1}`} />   
                ))}
            </div>
        </div>
        <div className="part4">
            <div className="part4-1">
                <Card.Title className='span1'>{data.hour2}</Card.Title>
                <Card.Title className='span2'>{data.location}</Card.Title>
            </div>
            <div className="part4-2">
            {data.imgPart4.map((img,index) => (
                    <Card.Img key={index} src={img} className={`img${index+1}`} alt={`img${index+1}`} />   
                ))}
            </div> 
            <div className="part4-3">
                <Card.Title className='span3'>{data.hour2}</Card.Title>
                <Card.Title className='span4'>{data.location}</Card.Title>
            </div>
        </div>
        </Card.Body>
    </Card>
    </section>
    )
}

export default CardFlightDetailFinal