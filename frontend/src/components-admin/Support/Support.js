import React, { useState, useEffect } from 'react'
import './Support.css'
import Message from '../Message/Message'
import axios from 'axios'

export default function Support() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contact/getMessage');
        console.log(response.data);
        setMessages(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="dashboard-cont-admin-support">

        <div className="dash-head-admin-support"> <h1 className='inner'>Support</h1></div>
        {messages.map((message) => (
          <div className="dash-order-1-admin-support">
            <Message
              name={message.name}
              email={message.email}
              contact={message.contactNo}
              mess={message.message}
              date={message.messageDate}
            /> </div>
        ))}
        {/* <div className="dash-order-1-admin-support"> <Message id={500} status={true} date={"Sat,1st April,2023"}/> </div>
        <div className="dash-order-1-admin-support"> <Message id={521} status={true} date={"Wed,21st March,2023"}/> </div>
        <div className="dash-order-1-admin-support"> <Message id={690} status={true} date={"Tues,1st March,2023"}/> </div>
        <div className="dash-order-1-admin-support"> <Message id={700} status={true} date={"Tues,1st March,2023"}/> </div> */}
      </div>
    </>
  )
}
