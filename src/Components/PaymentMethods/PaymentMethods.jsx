import './PaymentMethods.css'
import plus from '../../assets/images/Vector.png'


export default function PaymentMethods() {
  return (
    <section className='RH_PaymentMethods'>
      <div className='RH_paymenttitlte'>Payment methods</div>

      <div className='RH_groupcard'>
        <div className='RH_card1'>
          <div className='RH_1row'>
<div className='RH_pass'>**** **** ****</div>
<div className='RH_trash'><img src={plus} alt="plus" className='RH_plus' /></div>
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