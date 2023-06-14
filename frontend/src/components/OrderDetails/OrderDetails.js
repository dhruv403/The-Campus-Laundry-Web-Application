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
        <div className="od-cont">
            <div className="od-sec-1">
                <div className="od-sec-1-p1"><h2>Order Details #{props.id}</h2> </div>
                <div className="od-sec-1-p2" ref = {ref}><h4> Status: {(props.status) ? "Completed" : "In-Process"}</h4> </div>
                <div className="od-sec-1-p3"> <button> Feedback </button> </div>
            </div>
            <div className="od-sec-2">
                <div className="od-sec-2-p1"> <h3>{props.date}</h3> </div>
                <div className="od-sec-2-p2"><button onClick={show}> View Details </button> </div>
            </div>
        </div>
        {showPopup && ( 
        <div className="popup-bag" onClick={hide}>
          <div className="popup-bag-content" onClick={(e) => e.stopPropagation()}>
            <button className="bag-close-btn" onClick={hide}>
              <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            </button >
            <div style={{'margin': '1rem'}}>
              <h3> Service No: {props.serviceNo} </h3>
              {
                Object.entries(props.orderList).map((key, value) => (
                  
                  <h5> {key[0]}: {key[1]}</h5>
                ))
              }
            </div>
            {props.status && <h5>Order Collected Successfully!</h5>}
            {!props.status && <h5>Order in Progress!</h5>}
          </div>
        </div>
      )} 
    </>
  )
}
