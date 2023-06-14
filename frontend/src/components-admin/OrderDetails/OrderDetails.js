import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './OrderDetails.css'

export default function OrderDetails(props) {

  // console.log(props.orderList);
  const ref = useRef();
  useEffect(() => {
    if(!props.status)
      ref.current.style.color = "red";
    else 
      ref.current.style.color = "green"
  });

  const [showPopup, setShowPopup] = useState(false);

    function show() {
      setShowPopup(true);
    }
    function hide() {
      setShowPopup(false)
    }


  return (
    <>
        <div className="od-cont-admin">
            <div className="od-sec-1-admin">
                <div className="od-sec-1-p1-admin"><h2>Order Details #{props.id}</h2> </div>
                <div className="od-sec-1-p2-admin" ref = {ref}><h4> Status: {(props.status) ? "Completed" : "In-Process"}</h4> </div>
                <div className="od-sec-1-p1-admin"><h4>Hostel: {props.roomNo}, {props.hostel} </h4> </div>
                <div className="od-sec-1-p3-admin">
                   <button> In-Progress </button> 
                </div>
            </div>
            <div className="od-sec-1-admin">
                <div className="od-sec-1-p1-admin"><h2>Name: {props.name}</h2> </div>
                <div className="od-sec-1-p2-admin" ><h4>Roll No: {props.rollno} </h4> </div>
                <div className="od-sec-1-p2-admin" ><h4>+91 {props.contact} </h4> </div>
                <div className="od-sec-1-p3-admin">
                   <button> Completed </button> 
                </div>
            </div>
            <div className="od-sec-2-admin">
                <div className="od-sec-2-p1-admin"> <h3>{props.date}</h3> </div>
                <div className="od-sec-2-amount-admin"> <h3>Amount: ₹{props.amount} </h3> </div>
                <div className="od-sec-2-p2-admin"><button onClick={show}> View Details </button> </div>
            </div>
        </div>


        {showPopup && ( 
        <div className="popup-bag-admin" onClick={hide}>
          <div className="popup-bag-content-admin" onClick={(e) => e.stopPropagation()}>
            <button className="bag-close-btn-admin" onClick={hide}>
              <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            </button>
            {/* <div> */}
              {Object.entries(props.orderList).map((key, value) => (
                
                <h5> {key[0]}: {key[1]}</h5>
              ))}
            {/* </div> */}
            {props.status && <h5>Order Collected Successfully!</h5>}
            {!props.status && <h5>Order in Progress!</h5>}
          </div>
        </div>
      )} 
    </>
  )
}
