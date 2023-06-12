import React, { useEffect, useRef } from 'react'
import './OrderDetails.css'

export default function OrderDetails(props) {
  console.log(props);
  const ref = useRef();
  useEffect(() => {
    if(!props.status)
      ref.current.style.color = "red";
    else 
      ref.current.style.color = "green"
  });
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
                <div className="od-sec-2-p2"><button> View Details </button> </div>
            </div>
        </div>
    </>
  )
}
