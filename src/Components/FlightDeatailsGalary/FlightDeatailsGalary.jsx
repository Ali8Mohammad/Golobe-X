import React, { useState } from 'react';
import './FlightDeatailsGalary.css';
import img1 from '../../assets/images/Feature-1.png';
import img2 from '../../assets/images/Feature-2.png';
import img3 from '../../assets/images/Feature-3.png';
import img4 from '../../assets/images/Feature-4.png';
import img5 from '../../assets/images/Feature-3.png';
import img6 from '../../assets/images/Feature-4.png';
import img7 from '../../assets/images/Feature-4.png';
import img8 from '../../assets/images/Feature-6.png';
import img9 from '../../assets/images/Feature-7.png';



export default function FlightDeatailsGalary() {
    const FlightDeatailsGalary = [
        {
         image:img1,
        },
        {
         image:img2,
        },
        {
            image:img3,
           },
           ,
        {
            image:img4,
           }
           ,
        {
            image:img5,
           }
           ,
        {
            image:img6,
           }
           ,
        {
            image:img7,
           }
           ,
        {
            image:img8,
           }
           ,
        {
            image:img9,
           }
      ];

  const [selectedCategory, setSelectedCategory] = useState('Economy');
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className='RH_Galary'>
      <div className='RH_title_container'>
        <p className='RH_title_Galary' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Basic Economy Features</p>
        <div className='RH_Container_check' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">

        <label class="RH_lable_check  .RH_lable_check1">

        <input 
              type="checkbox" 
              value="Economy" 
              checked={selectedCategory === 'Economy' } 
              onChange={handleChange} 
              className='RH_check1 ' 
            />
             Economy
              <span class="RH_checkmark"></span>
</label>


    
          <label className='RH_lable_check  .RH_lable_check2'>
            <input 
              type="checkbox" 
              value="First Class" 
              checked={selectedCategory === 'First Class'} 
              onChange={handleChange} 
            />
              <span class="RH_checkmark"></span>

            First Class
          </label>
          <label className='RH_lable_check  .RH_lable_check3'>
            <input 
              type="checkbox" 
              value="Business Class" 
              checked={selectedCategory === 'Business Class'} 
              onChange={handleChange} 
            />
              <span class="RH_checkmark"></span>

            Business Class
          </label>
        </div>
      </div>
      <div className='RH_C '>
      {FlightDeatailsGalary.map((feature, index) => {
                return (
                    <div className="RH_G_array" key={index}>
                    <img src={feature.image}  className="RH_G_image" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>  
                    </div>
                );
            })}
        
        </div>
    </section>
  );
}

