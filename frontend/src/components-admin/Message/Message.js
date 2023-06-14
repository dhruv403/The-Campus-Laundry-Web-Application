import React, {useState, useEffect} from 'react'
import './Message.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios'


export default function Message(props) {
  // console.log(props)
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
                <div className="od-sec-1-p1-admin"><h2>Name: {props.name} </h2> </div>
                <div className="od-sec-1-p2-admin" ><h4>Email: {props.email} </h4> </div>
                <div className="od-sec-1-p3-admin"> <h4>Contact No: +91 {props.contact} </h4> </div>
            </div>
            <div className="od-sec-2-admin">
                <div className="od-sec-2-p1-admin"> <h3>{props.date}</h3> </div>
                <div className="od-sec-2-p2-admin"><button onClick={show}> View Message </button> </div>
            </div>
        </div>

        
        {showPopup && ( 
        <div className="popup-bag-admin" onClick={hide}>
          <div className="popup-bag-content-admin" onClick={(e) => e.stopPropagation()}>
            <button className="bag-close-btn-admin" onClick={hide}>
              <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            </button>
            <div style={{'margin':'1rem'}}>
            <h3> Message: {props.mess} </h3>
            </div>
          </div>
        </div>
      )} 
    </>
  )
}
