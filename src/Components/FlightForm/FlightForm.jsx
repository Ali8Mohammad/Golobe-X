import './FlightForm.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import facebook from './../../assets/images/Facebook.png'
import google from './../../assets/images/google.png'
import apple from './../../assets/images/apple.png'
import email from './../../assets/images/email.png'
import { useEffect } from "react";
const FlightForm = () => {
    useEffect (() => {
        Aos.init({duration : 2000})
    }, [])
    const data = {
        Login_Or_Signup : "Login or Sign up to book" ,
        text_part1 : "We’ll call or text you to confirm your number. Standard message and data rates apply. " ,
        text_part1_span : "Privacy Policy" ,
        button_continue : "Continue" ,
        button_Continue_with_email : "Continue with email" ,
        imgPart3 : [facebook , google , apple]
    }
    return (
    <section className='Aya-Flight-Form' data-aos='fade-right'>
    <div className="Form-Part1">
        <p className='Login-Or-Signup'>{data.Login_Or_Signup}</p>
        <input className='PhoneNumber' type="number" placeholder='Phone Number' />
        <p className='Text'>{data.text_part1}<span>{data.text_part1_span}</span></p>
        <button className='Continue'><span>{data.button_continue}</span></button>
    </div>
    <div className="Form-Part2">
        <p className='Line1'></p>
        <p className='or'>Or</p>
        <p className='Line2'></p>
    </div>
    <div className="Form-Part3">
    {data.imgPart3.map((img,index) => (
        <button key={index} className={`img${index+1}`} >
            <img src={img} alt={`img${index+1}`} />
        </button>
    ))}
    </div>
    <div className="Form-Part4">
        <button className='Continue-with-email'>
            <img src={email} alt="email" />
            <span>{data.button_Continue_with_email}</span>
        </button>
    </div>
    </section>
    )
}

export default FlightForm