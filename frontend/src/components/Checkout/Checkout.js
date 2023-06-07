import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import './Checkout.css'
import cash from '../../images/cash.png'
import user from '../../images/user.png'
import pin from '../../images/pin.png'
import Bag from '../Bag/Bag'


export default function Checkout(props) {
const location = useLocation();
// console.log(location.state.itemQuantities);

const [name, setName] = useState("");
const [email, setEmail] = useState("")
const [contactNo, setContactNo] = useState("");
const [hostel, setHostel] = useState("");
const [roomNo, setRoomNo] = useState("");
const [paymentMethod, setPaymentMethod] = useState("");
// const [orderData, setOrderData] = useState({});

const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleHostelChange = (e) => {
    setHostel(e.target.value);
  };

  const handleRoomNoChange = (e) => {
      setRoomNo(e.target.value);
    };
    
    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
        console.log(paymentMethod);
  };

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
                        <input type="text" placeholder={"Name"} value={name} onChange={handleNameChange}/>
                        </div>
                        <div className="temp1">
                        <input type="text" placeholder={"Email ID"}  value={email} onChange={handleEmailChange}/>
                        </div>
                        <div className="temp1">
                        <input type="text" placeholder={"Contact No."} value={contactNo } onChange={handleContactNoChange}/>
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
                        <input type="text" placeholder={"Hostel"} value={hostel} onChange={handleHostelChange} autoComplete='off'/>
                        </div>
                        <div className="temp1">
                        <input type="text" placeholder={"Room No."} value={roomNo} onChange={handleRoomNoChange}/>
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
                                {/* <input type="radio" onChange={handlePaymentMethodChange}  name="radio"/>  */}
                                <input className="form-check-input" type="radio" onChange={handlePaymentMethodChange} value="Cash" name="flexRadioDefault" id="flexRadioDefault2" />


                            </div>

                            <div className="radio-options">
                                Cash
                            </div>
                        </div>
                        <div className="radio-content">
                            <div className="radio-btn">
                            <input className="form-check-input" type="radio" onChange={handlePaymentMethodChange} value="Upi" name="flexRadioDefault" id="flexRadioDefault2" />
                            </div>

                            <div className="radio-options">
                                Upi
                            </div>
                        </div>
                        <div className="radio-content">
                            <div className="radio-btn">
                            <input className="form-check-input" type="radio" onChange={handlePaymentMethodChange} value="Card" name="flexRadioDefault" id="flexRadioDefault2" />
                            </div>

                            <div className="radio-options">
                                Credit/ Debit Card
                            </div>
                        </div>
                        <div className="radio-content">
                            <div className="radio-btn">
                            <input className="form-check-input" type="radio" onChange={handlePaymentMethodChange} value="Netbanking" name="flexRadioDefault" id="flexRadioDefault2" /> 
                            </div>

                            <div className="radio-options">
                                Netbanking
                            </div>
                        </div> 
                        
                    </div>

                </div>
            </div>
            <div className='sec-2'>
                <Bag 
                subTotal = {location.state.grandTotal} 
                totalQuantity = {location.state.totalQuantity}
                name = {name}
                email = {email}
                contactNo = {contactNo}
                paymentMethod = {paymentMethod}
                hostel = {hostel}
                roomNo = {roomNo}
                orderData = {location.state.itemQuantities}
                />
            </div>
        </div>
    </>
  )
}
