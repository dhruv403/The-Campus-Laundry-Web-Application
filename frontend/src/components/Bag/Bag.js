import React, {useState} from 'react'
import './Bag.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import paytmSound from './order_placed2.mp3';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

export default function Bag(props) {
  // console.log(props);

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
    }
  
    const [redirect, setRedirect] = useState(false);
  
    const handleRedirect = () => {
      setShowPopup(false);
      setRedirect(true);
    };

    const handleSubmit = async (e) => {
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
        hashMap: props.orderData
      }
      
      for (let key in orderSummary.hashMap) {
        // Check if the value is 0
        if (orderSummary.hashMap[key] === 0) {
          // Delete the key-value pair
          delete orderSummary.hashMap[key];
        }
      }

      try {
        const response = await axios.post('http://localhost:5000/api/order/orders', orderSummary);
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
                        ₹10.60
                    </div>
                </div>
                <div className="bag-flex">
                    <div className="flex-title-bag">
                        Grand Total
                    </div>
                    <div className="flex-amount-bag">
                        ₹{subTotal + 10.60}
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
