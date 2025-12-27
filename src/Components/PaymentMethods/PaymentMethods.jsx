import { useState } from 'react';
import plus from '../../assets/images/Vector.png';
import bin from '../../assets/images/Bin.png';
import visa from '../../assets/images/visacard2.png';
import Popup from '../Booking-Popup/Popup';
import './PaymentMethods.css';
import { Link } from 'react-router-dom';

export default function PaymentMethods() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [showNewCard, setShowNewCard] = useState(false);

  const handleClickPopup = () => {
    if (!isClicked1) {
      setIsClicked1(true);
      setShowNewCard(true);
    } else {
      setIsClicked1(false);
      setShowNewCard(false);
    }
  };

  const linkto = [
    <Link className='MH-addbtn ' to={"/Golobe-X/hotelflow/booking3"}>Add Card</Link>
  ]
  return (
    <section className='RH_PaymentMethods'>
      <div className='RH_paymenttitlte'>Payment methods</div>

      <div className='RH_groupcard'>
        <div className='RH_card1' data-aos="fade-up">
          <div className='RH_1row'>
            <div className='RH_pass'>
              <span>**** **** **** </span>
              <p>4321</p>
            </div>
            <div className='RH_trash'><img src={bin} alt="bin" className='RH_bin' /></div>
          </div>
          <div className='RH_2row'>
            <div className='RH_pass2'>
              <span>Valid Thru</span>
              <p>02/27</p>
            </div>
            <div className='RH_trash'><img src={visa} alt="visa" className='RH_visa' /></div>
          </div>
        </div>

        <div className='RH_card2' data-aos="fade-up">
          <div className="RH_circle">
            <button onClick={handleClickPopup}>
              <img src={plus} alt="plus" className='RH_plus' />
            </button>
          </div>
          <p>Add a new card</p>
        </div>
      </div>

      {showNewCard && <Popup link={linkto}/>}
    </section>
  );
}
