import React from 'react'
import './FlightDetailsHero.css'

import airplane from '../../assets/images/airplane.png';
import anch from '../../assets/images/chevron_forward.png';
import loc from '../../assets/images/Location.png';
import heart from '../../assets/images/heart.png';
import sharing from '../../assets/images/sharing.png';
import booking  from '../../assets/images/book.png';





export default function FlightDetailsHero() {
  return (
    <section className='RH_Hero'>
      <div className='RH_bread' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <span className='RH_TU'>Turkey</span>
        <img src={anch} alt="plane" className='RH_anch' />
        <span className='RH_TU'>Istanbul</span>
        <img src={anch} alt="plane" className='RH_anch' />
        <span className='RH_IS'>CVK Park Bosphorus Hotel Istanbul</span>
      </div>

      <div className='RH_Price_cont'>
        <div className='RH_Pice'>
          <p className='RH_ti' data-aos="zoom-in">Emirates A380 Airbus</p>
          <p className='RH_Pr'>240 $</p>
        </div>





      </div>

<div className='RH_but'>
      <div className='RH_Price_cont'>
        <div className=''>
          <img src={loc} alt="plane" className='RH_map' />
          <span className='RH_IS'>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
        </div>

        <div className='RH_4'data-aos="fade-right">
          <button className='RH_4btn' >4.2</button>
          <span className='RH_rev'><strong className='RH_strong'>Very Good </strong> <span className='RH_54rev'>54 reviews</span></span>
        </div>
        </div>
<div>
<img src={heart} alt="plane" className='RH_Heart' data-aos="fade-left" />
<img src={sharing} alt="plane" className='RH_sharing' data-aos="fade-left" />
<button className='RH_book' data-aos="fade-left"><a href='http://localhost:5173/flightflow/booking'>Book now</a></button>

</div>




      </div>




      <div className='RH_imgplane' data-aos="zoom-in">
        <img src={airplane} alt="plane" />
      </div>
    </section>
  )
}
