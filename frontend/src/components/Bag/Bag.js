import React, {useState} from 'react'
import './Bag.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import paytmSound from './order_placed2.mp3';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Bag(props) {
  // console.log(props);
  const navigate = useNavigate();

  const { subTotal } = props;

    const [showPopup, setShowPopup] = useState(false);

    function show() {
      const audio = new Audio(paytmSound);
      audio.currentTime = 0.5;
  
      audio.play();
      setShowPopup(true);
    }
  
    function hide() {
      setShowPopup(false);
      navigate('/dashboard')
    }

  // eslint-disable-next-line no-unused-vars
    const [redirect, setRedirect] = useState(false);
  
    const handleRedirect = () => {
      setShowPopup(false);
      setRedirect(true);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!props.name || !props.email || !props.contactNo || !props.hostel || !props.roomNo || !props.paymentMethod) {
        // Display an error message or handle validation errors
        alert("Please enter all the details for further transaction to proceed")
        return;
      }
      const orderSummary = {
        name: props.name,
        email: props.email,
        contactNo: props.contactNo,
        hostel: props.hostel,
        roomNo: props.roomNo,
        paymentMethod: props.paymentMethod,
        hashMap: props.orderData,
        totalPrice: props.subTotal,
        serviceNo: props.serviceNo
      }

      console.log(orderSummary);
      
      for (let key in orderSummary.hashMap) {
        // Check if the value is 0
        if (orderSummary.hashMap[key] === 0) {
          // Delete the key-value pair
          delete orderSummary.hashMap[key];
        }
      }


      if(props.subscription) {
        try {
          const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
            // eslint-disable-next-line no-unused-vars
          const response = await axios.post(`${REACT_APP_BASE_URL}/api/order/orders`, orderSummary);
          // console.log(response.data);
          show();
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            if (error.response.status === 400) {
              alert('Please enter valid details.');
            } else if (error.response.status === 500) {
              alert('Server has some issues. Please try again later.');
            }
            else {
              alert('Something wierd happened. Check if you have entered valid details otherwise server has some issues today!!!');
            }
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            alert('No response received from the server. Please try again later.');
          } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error', error.message);
            alert('An error occurred. Please try again later.');
          }
        }
      }
      else {
          try {
            const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
              // eslint-disable-next-line no-unused-vars
            const response = await axios.post(`${REACT_APP_BASE_URL}/api/order/checkout`, orderSummary);
            const {data:{key}}=await axios.get(`${REACT_APP_BASE_URL}/api/order/getkey`)
            console.log(response.data);
            const options = {
              "key": key, // Enter the Key ID generated from the Dashboard
              "amount": response.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              "currency": "INR",
              "name": orderSummary.name,
              "description": "Test Transaction",
              "image": "https://example.com/your_logo",
              "order_id": response.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              "handler": async function (response){
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                const finalPayment = {
                  name: orderSummary.name,
                  email: orderSummary.email,
                  contactNo: orderSummary.contactNo,
                  hostel: orderSummary.hostel,
                  roomNo: orderSummary.roomNo,
                  paymentMethod: orderSummary.paymentMethod,
                  hashMap: orderSummary.hashMap,
                  totalPrice: orderSummary.totalPrice,
                  serviceNo: orderSummary.serviceNo,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature
                }
                await axios.post(`${REACT_APP_BASE_URL}/api/order/paymentverification`, finalPayment);
                // show();
                navigate('/dashboard');
                console.log(response);
    
              },
              "prefill": {
                  "name": "Dhruv Sharma",
                  "email": "sharmadhruv272@gmail.com",
                  "contact": "9000090000"
              },
              "notes": {
                  "address": "Razorpay Corporate Office"
              },
              "theme": {
                  "color": "#3399cc"
              }
          };
          console.log('Hello')
          console.log(options);
            const razor = await new window.Razorpay(options);
            razor.open();
            // show();
          } catch (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              if (error.response.status === 400) {
                alert('Please enter valid details.');
              } else if (error.response.status === 500) {
                alert('Server has some issues. Please try again later.');
              }
              else {
                alert('Something wierd happened. Check if you have entered valid details otherwise server has some issues today!!!');
              }
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
              alert('No response received from the server. Please try again later.');
            } else {
              // Something happened in setting up the request that triggered an error
              console.log('Error', error.message);
              alert('An error occurred. Please try again later.');
            }
          }
        
      }


      // console.log(orderSummary);


    }

    return (
    <>
        <div className="bag-cont">
            <h1>Your Bag</h1>
            <h3>Total Items: {props.totalQuantity}</h3>
            <div class="dashed-line"> </div>
            <div className="bag-big-flex">

                <div className="bag-flex">
                    <div className="flex-title-bag">
                        Sub Total
                    </div>
                    <div className="flex-amount-bag">
                    {subTotal}
                    </div>
                </div>
                <div className="bag-flex">
                    <div className="flex-title-bag">
                        Delivery Charges
                    </div>
                    <div className="flex-amount-bag">
                        ₹0
                    </div>
                </div>
                <div className="bag-flex">
                    <div className="flex-title-bag">
                        Grand Total
                    </div>
                    <div className="flex-amount-bag">
                        ₹{subTotal }
                    </div>
                </div>
            </div>

            <div className='bag-btn-div'>
                <button className='bag-order-btn' onClick={handleSubmit}>Order</button>
            </div>
        </div>
        {showPopup && ( 
        <div className="popup-bag" onClick={hide}>
          <div className="popup-bag-content" onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon icon={faCheckCircle} size="3x" className="success-icon" />
            <h2>Order Placed Successfully!</h2>
            <button className="bag-close-btn" onClick={hide}>
              <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            </button>
            <Link to="/dashboard">
                <button className="popup-bag-button order-bag-btn" onClick={handleRedirect}>
                    Dashboard
                </button>
            </Link>
          </div>
        </div>
      )} 
        
    </>
  )
}
