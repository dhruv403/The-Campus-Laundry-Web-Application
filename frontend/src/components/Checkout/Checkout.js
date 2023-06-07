import React from 'react'
import { useLocation } from 'react-router-dom'
import './Checkout.css'
import cash from '../../images/cash.png'
import user from '../../images/user.png'
import pin from '../../images/pin.png'
import Bag from '../Bag/Bag'


export default function Checkout(props) {
const location = useLocation();
console.log(location.state.grandTotal);

  return (
    <>
        <div className="checkout-cont">
            <div className="cout-sec-1">
                <div className="contact-head">
                    <img src={user} alt="" />
                    <h2>Contact </h2>
                </div>
                <form>
                    <div className="temp">
                        <div className="temp1">
                            <input type="text" placeholder={"Name"} />
                        </div>
                        <div className="temp1">
                        <input type="text" placeholder={"Email ID"} />
                        </div>
                        <div className="temp1">
                        <input type="text" placeholder={"Contact No."} />
                        </div>
                    </div>
                </form>

                <div className="contact-head">
                    <img src={pin} alt="" />
                    <h2>Hostel</h2>
                </div>
                <form>
                <div className="temp2">
                        <div className="temp1">
                        <input type="text" placeholder={"Hostel"} autoComplete='off'/>
                        </div>
                        <div className="temp1">
                        <input type="text" placeholder={"Room No."} />
                        </div>
                    </div>
                </form>
                <div className="checkout-payment">
                    
                    <div className="contact-head">
                        <img src={cash} alt="" />
                        <h2>Payment Method</h2>
                    </div>

                    <div className="checkout-radio">

                        <div className="radio-content">
                            <div className="radio-btn">
                                {/* <input type="radio"  name="radio"/>  */}
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />


                            </div>

                            <div className="radio-options">
                                Cash
                            </div>
                        </div>
                        <div className="radio-content">
                            <div className="radio-btn">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            </div>

                            <div className="radio-options">
                                Upi
                            </div>
                        </div>
                        <div className="radio-content">
                            <div className="radio-btn">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            </div>

                            <div className="radio-options">
                                Credit/ Debit Card
                            </div>
                        </div>
                        <div className="radio-content">
                            <div className="radio-btn">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" /> 
                            </div>

                            <div className="radio-options">
                                Netbanking
                            </div>
                        </div> 
                        
                    </div>

                </div>
            </div>
            <div className='sec-2'>
                <Bag subTotal = {location.state.grandTotal} totalQuantity = {location.state.totalQuantity}/>
            </div>
        </div>
    </>
  )
}
