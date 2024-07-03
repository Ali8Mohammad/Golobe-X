import './CardHotelDetailFinal.css'
import Card from 'react-bootstrap/Card';
import imgLocation from './../../assets/images/Location.png'
import cardHotel from './../../assets/images/cardHotel.svg'
import img1 from './../../assets/images/Line5.svg'
import img2 from './../../assets/images/VectorHotel.svg'
import img3 from './../../assets/images/Line6.svg'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const CardHotelDetailFinal = () => {
    const data = {
        title : "Superior room - 1 double bed or 2 twin beds" ,
        price : "240 $" ,
        night : "/night" ,
        name : "CVK Park Bosphorus Hotel Istanbul" ,
        location : "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437" ,
        entry_day : "Thursday, Dec 8" ,
        coming_out_day : "Friday, Dec 9" , 
        check_in : "Check-In" ,
        check_out : "Check-Out" ,
        imgPart3 : [img1 , img2 , img3 ]
    }
    useEffect (() => {
        Aos.init({duration : 2000})
    }, [])
    return (
        <section className='Aya_Hotel_Details_Final' data-aos='fade-right'>
        <Card className='cards'>
            <Card.Body>
            <div className='part1 d-flex justify-content-between'>
                <Card.Title className='title'>{data.title}</Card.Title>
                <span className='span1'>{data.price}<span className='span2'>{data.night}</span></span> 
            </div>
            <div className='part2 '>
                <div className="part2-1 d-flex">
                    <Card.Img className='image' src={cardHotel} />
                    <p className='part2-2 p'>
                        <p className='span1'>{data.name}</p>
                        <p className='span2'><img src={imgLocation} alt="Location" /> {data.location}</p>
                    </p>
                </div>
            </div>
            <div className="part3">
                <div className="part3-1">
                    <Card.Title className='span1'>{data.entry_day}</Card.Title>
                    <Card.Title className='span2'>{data.check_in}</Card.Title>
                </div>
                <div className="part3-2">
                    {data.imgPart3.map((img,index) => (
                        <Card.Img key={index} src={img} className={`img${index+1}`} alt={`img${index+1}`} />   
                    ))}
                </div> 
                <div className="part3-3">
                    <Card.Title className='span3'>{data.coming_out_day}</Card.Title>
                    <Card.Title className='span4'>{data.check_out}</Card.Title>
                </div>
            </div>
            </Card.Body>
        </Card>
        </section>
    )
}

export default CardHotelDetailFinal