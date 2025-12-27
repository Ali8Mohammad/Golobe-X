import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import img from './../../assets/images/Visa.svg'
import img1 from './../../assets/images/trailingicon.svg'
import './popup.css'



export default function Popup({link}) {
    const [showPopup, setshowPopup] = useState(false)
    const handleClick = () => {
        if(!showPopup) {
            setshowPopup(true)
            setShowNewCard(false)
        }
        else{
            setshowPopup(false)
        }
    }
    return (
        <section className='MH-popup-container' style={{display : showPopup === true ?  "none" : ""}}>
            <div className="MH-overlay"></div>
            <div className="MH-popup">
                <div className="MH-icon">
                    <FontAwesomeIcon icon={faXmark} onClick={handleClick} />
                </div>
                <div className="MH-form">
                    <h2 className='MH-title'>Add a new Card</h2>
                </div>
                <div className="MH-inputs">
                   <form action="">
                    <div className="MH-input1">
                    <label >Card Number</label>
                    <input type="text" placeholder='4321 4321 4321 4321'/>
                    <img src={img} alt='vias img'/>
                    </div>
                    <div className="MH-input2">
                        <label className='MH-label1' >Exp Data</label>
                        <input type="text" placeholder='02/27'  />
                        <label className='MH-label2' >CVC</label>
                        <input type="text" placeholder='123'  />  
                    </div>
                    <div className="MH-input1">
                    <label >Name on Card</label>
                    <input type="text" placeholder='John Doe'/>
                    </div>
                    <div className="MH-input1">
                    <label className='MH-label3'>Country or Region</label>
                    <input type="text" placeholder='United States'/>
                    <img src={img1} alt='icon' className='MH-icon1'/>
                    </div>
                    <div className="MH-cheakbox">
                    <input type="checkbox"  />
                    <p>Securely save my information for 1-click checkout</p>
                    </div>
                    <Link className='MH-addbtn ' to={"/Golobe-X/flightflow/booking3"}>
                    <div className="MH-btn">
                        Add Card
                    </div>
                    </Link>
                   </form>
                   <p className='MH-paragraph' >By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p> 
                </div>
            </div>
        </section>
    )
}