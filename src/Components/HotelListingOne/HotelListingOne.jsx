import { useEffect } from 'react'
import './HotelListingOne.css'
import OsLocation from './../../assets/images/Location.png'
import OsHotelListing1 from './../../assets/images/Hotel-listing-1.svg'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { Link } from 'react-router-dom'
import chevronForward from '../../assets/images/chevron_forward.svg'
import star from '../../assets/images/Star.svg'
import heart from '../../assets/images/heart.svg'
import share from '../../assets/images/Share.svg'
import room1 from '../../assets/images/Room-1.png'
import room2 from '../../assets/images/Room-2.png'
import room3 from '../../assets/images/Room-3.png'
import room4 from '../../assets/images/Room-4.png'

export default function HotelListingOne() {
  const OSdata2 = [
    {
      paragraf: 'Turkey',
      img: chevronForward,
      class: "OsColor Os-Size-p"
    },
    {
      paragraf: 'Istanbul',
      img: chevronForward,
      class: "OsColor Os-Size-p"
    },
  ]
  const OSImg = [
    { img: star },
    { img: star },
    { img: star },
    { img: star },
    { img: star }
  ]
  const OSbutton = [
    {
      content: heart,
      class: 'OS-btn-icon OS-Btn-Heart'
    },
    {
      content: share,
      class: 'OS-btn-icon OS-Btn-Share'
    },
  ]
  const OSImgHotel1 = [
    { img: room1 },
    { img: room2 }
  ]
  const OSImgHotel2 = [

    {
      img: room3,
      class: 'OS-Room-Img'
    },
    {
      img: room4,
      class: 'OS-Room-Img OS-room-img'
    }
  ];
  useEffect(() => { Aos.init(); }, [])

  return (
    <>
      <section className='OS-Listing_section' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <div className='OS-Listing-one OS-Listing-onne'>
          {OSdata2.map((item, index) => {
            return <div key={index} className='OS-Listing-one'>
              <p className={item.class}>{item.paragraf}</p>
              <img className='Os-img-chevron' src={item.img} alt="travel" />
            </div>
          })}
          <p className='Os-Size-p'>CVK Park Bosphorus Hotel Istanbul</p>
        </div>
        <div className='OS-Div-One'>
          <div>
            <div className='OS-Listing-Two'>
              <p className='Os-Size-pp'>CVK Park Bosphorus Hotel Istanbul</p>
              <ul className='OS-Star-List'>
                <li className='OS-Star-Item'>
                  {OSImg.map((item, index) => {
                    return <img key={index} className='OS-Star-img' src={item.img} alt="travel" />
                  })}
                </li>
              </ul>
              <p className='Os-Size-ppp'>5 Star Hotel</p>
            </div>
            <div className='OS-Listing-one'>
              <img className='OS-Location-img' src={OsLocation} alt="location" />
              <p className='Os-Size-p OS-Size-Co'>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            </div>
            <div className='OS-Listing-Two OS-Listing-size '>
              <button className='OS-btn-Listing'>4.2</button>
              <p className='OS-Paragraf-p OS-Paragraf-W'> <span className='OS-Paragraf-p OS-Paragraf-Span'>Very Good</span> 371 reviews</p>
            </div>
          </div>
          <div className='OS-Div_Right'>
            <div className='OS-Text-div'> <h6 className='OS-Text-style'>240$ <span className='OS-TextSpan-style'>/night</span></h6></div>
            <div className='OS_div-btn'>
              {OSbutton.map((item, index) => {
                return <button key={index} className={item.class}><img src={item.content} alt="" /></button>
              })}
              <Link className='OS-link-Book' to='/Golobe-X/hotelflow/booking'><button className='OS-Btn-Book OS-btn-icon'>Book now</button></Link>
            </div>
          </div>
        </div>
        <div className='OS-Hotel_one'>
        <img className='OS-Hotel_img1' src={OsHotelListing1} alt="" />
          <div className='OS-Div-Room'>
            <div className='OS-Div-Room1'>
              {OSImgHotel1.map((item, index) => {
                return <img key={index} className='OS-Room-Img' src={item.img} alt="Room" />
              })}
            </div>
            <div className=' OS-Div-Room1  OS_div_Room1'>
              {OSImgHotel2.map((item, index) => {
                return <img key={index} className={item.class} src={item.img} alt="Room" />
              })}
              <button className='OS-Btn-Book OS-Btn-Photo'> View all photos</button>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}


