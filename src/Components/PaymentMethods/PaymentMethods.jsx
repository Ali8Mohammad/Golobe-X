import './PaymentMethods.css'
import plus from '../../assets/images/Vector.png'
import bin from '../../assets/images/Bin.png'
import visa from '../../assets/images/visacard2.png'




export default function PaymentMethods() {
  return (
    <section className='RH_PaymentMethods'>
      <div className='RH_paymenttitlte'>Payment methods</div>

      <div className='RH_groupcard'>
        <div className='RH_card1'>
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
        <div className='RH_card2'>

          <div className="RH_circle">
            <button >  <img src={plus} alt="plus" className='RH_plus' /></button>
          </div>
          <p>Add a new card</p>

        </div>

      </div>
    </section>
  )
}