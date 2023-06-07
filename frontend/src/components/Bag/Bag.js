import React, {useState} from 'react'
import './Bag.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import paytmSound from './order_placed2.mp3';
import { useNavigate, Link } from 'react-router-dom'
export default function Bag(props) {
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
                <button className='bag-order-btn' onClick={show}>Order</button>
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
