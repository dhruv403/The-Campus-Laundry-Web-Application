import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import './Checkout.css'
import cash from '../../images/cash.png'
import user from '../../images/user.png'
import pin from '../../images/pin.png'
import Bag from '../Bag/Bag'
import axios from 'axios';

export default function Checkout(props) {
const location = useLocation();
// console.log(location.state.serviceNo);
const [curruser, setCurruser] = useState({name: '', email: ''});
const [contactNo, setContactNo] = useState("");
const [hostel, setHostel] = useState("");
const [roomNo, setRoomNo] = useState("");
const [paymentMethod, setPaymentMethod] = useState("");

useEffect(() => {
    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('currentUser'));
            const config = {
                headers: {
                    'auth-token': token,
                    'email': user.userEmail
                }
            };
            const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
            const response = await axios.post(`${REACT_APP_BASE_URL}/api/auth/getuser`, {}, config);
            console.log(response.data);
            setCurruser(response.data);
            console.log(curruser);
          } catch (error) {
            console.error(error);
          }
    }
    fetchUser();
    // eslint-disable-next-line
}, []);




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
                        <input type="text" placeholder={"Name"} value={curruser.name} />
                        </div>
                        <div className="temp1">
                        <input type="text" placeholder={"Email ID"}  value={curruser.email} />
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
                name = {curruser.name}
                email = {curruser.email}
                contactNo = {contactNo}
                paymentMethod = {paymentMethod}
                hostel = {hostel}
                roomNo = {roomNo}
                orderData = {location.state.itemQuantities}
                serviceNo = {location.state.serviceNo}
                />
            </div>
        </div>
    </>
  )
}
