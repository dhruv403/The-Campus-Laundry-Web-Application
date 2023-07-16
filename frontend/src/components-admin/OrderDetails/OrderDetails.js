import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './OrderDetails.css'
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import axios from 'axios'

export default function OrderDetails(props) {
  const [cross, setcross] = useState(false)
  const changecross = () => {
    setcross(!cross)
  }
  // console.log(props.orderList);
  const ref = useRef();
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    if (!status)
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

  const updateStatus = async (newStatus) => {
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
          'auth-token': token,
          'email': user.userEmail
        }
      };
      // console.log(data);

      const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
      const response = await axios.put(`${REACT_APP_BASE_URL}/api/order/changeStatus`, data, config);
      // console.log(response.data.status);
      setStatus(response.data.status);
      if (response.data.status) {
        alert("The order marked completed!!!")
      }
      else {
        alert("The order is not completed yet...")
      }
      window.location.reload();

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="od-cont-admin1">
        <div className="od-sec-1-admin1">
          <div className="od-sec-1-p1-admin1"><h2>Order Details #{props.id}</h2> </div>
          <div className="od-sec-1-p2-admin1" ref={ref}><h4><span className='statusclass'> Status:</span> {(status) ? "Completed" : "In-Process"}</h4> </div>
          <div className="od-sec-1-p1-admin1"><p className='nameclass'>Name: {props.name}</p> </div>
          <div className="od-sec-2-amount-admin1"> <h3><b> Amount: </b>  ₹ {props.amount} </h3> </div>
          {!cross ? <div className="burger" ><p onClick={changecross}> <HiMiniBars3 /> </p></div>
            : <div className="burger" > <p onClick={changecross}><RxCross1 /></p> </div>}
          <div className={`expand-details ${!cross ? "hide" : ""}`}>

            <div className="expandcontent" >Roll No: {props.rollno}  </div>
            <div className="expandcontent" >+91 {props.contact}  </div>
            <div className="expandcontent"> {props.date} </div>
            <div className="expandcontent">Hostel: {props.roomNo}, {props.hostel}  </div>

          </div>
        </div>
        <div className="od-sec-2-admin1">
          <div className="od-sec-1-p3-admin1">
            <button className='completeb' onClick={() => updateStatus(true)}> Completed </button>
          </div>
          <div className="od-sec-1-p3-admin1">
            <button className='progressb' onClick={() => updateStatus(false)}> In-Progress </button>
          </div>

          <div className="od-sec-1-p3-admin1"><button className='detailsb' onClick={show}> View Details </button> </div>
        </div>

      </div>


      {showPopup && (
        <div className="popup-bag-admin" onClick={hide}>
          <div className="popup-bag-content-admin" onClick={(e) => e.stopPropagation()}>
            <button className="bag-close-btn-admin" onClick={hide}>
              <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            </button>
            <div style={{ 'margin': '1rem' }}>
              <h3> Service No: {props.serviceNo} </h3>
              {Object.entries(props.orderList).map((key, value) => (

                <h5> {key[0]}: {key[1]}</h5>
              ))}
            </div>
            {status && <h5>Order Collected Successfully!</h5>}
            {!status && <h5>Order in Progress!!!</h5>}
          </div>
        </div>
      )}
    </>
  )
}
