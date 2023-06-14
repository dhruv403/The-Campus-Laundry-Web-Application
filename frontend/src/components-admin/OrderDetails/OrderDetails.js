import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './OrderDetails.css'
import axios from 'axios'

export default function OrderDetails(props) {

  // console.log(props.orderList);
  const ref = useRef();
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    if(!status)
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

    const updateStatus = async(newStatus) => {
      try {
        const data = {
          _id: props.uniqueKeyword,
          orderId: props.id,
          newStatus: newStatus,
          contactNo: props.contact
        };
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const config = {
          headers: {
            'auth-token' : token,
            'email' : user.userEmail
          }
        };
        console.log(data);
  
        const response = await axios.put('http://localhost:5000/api/order/changeStatus', data, config);
        console.log(response.data.status);
        setStatus(response.data.status);
        if(response.data.status) {
          alert("The order marked completed!!!")
        }
        else {
          alert("The order is not completed yet...")
        }

      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
        <div className="od-cont-admin">
            <div className="od-sec-1-admin">
                <div className="od-sec-1-p1-admin"><h2>Order Details #{props.id}</h2> </div>
                <div className="od-sec-1-p2-admin" ref = {ref}><h4> Status: {(status) ? "Completed" : "In-Process"}</h4> </div>
                <div className="od-sec-1-p1-admin"><h4>Hostel: {props.roomNo}, {props.hostel} </h4> </div>
                <div className="od-sec-1-p3-admin">
                   <button onClick={() => updateStatus(false)}> In-Progress </button> 
                </div>
            </div>
            <div className="od-sec-1-admin">
                <div className="od-sec-1-p1-admin"><h2>Name: {props.name}</h2> </div>
                <div className="od-sec-1-p2-admin" ><h4>Roll No: {props.rollno} </h4> </div>
                <div className="od-sec-1-p2-admin" ><h4>+91 {props.contact} </h4> </div>
                <div className="od-sec-1-p3-admin">
                   <button onClick={() => updateStatus(true)}> Completed </button> 
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
            <div style={{'margin':'1rem'}}>
            <h3> Service No: {props.serviceNo} </h3>
              {Object.entries(props.orderList).map((key, value) => (
                
                <h5> {key[0]}: {key[1]}</h5>
              ))}
            </div>
            {status && <h5>Order Collected Successfully!</h5>}
            {!status && <h5>Order in Progress!</h5>}
          </div>
        </div>
      )} 
    </>
  )
}
