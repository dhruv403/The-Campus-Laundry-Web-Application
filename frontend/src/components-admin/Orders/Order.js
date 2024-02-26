import React, { useState, useEffect } from 'react'
import './Order.css'
import OrderDetails from '../OrderDetails/OrderDetails'
import axios from 'axios'

export default function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const config = {
          headers: {
            'auth-token': token,
            'email': user.userEmail
          }
        };
        // console.log(config);
        const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
        const response = await axios.post(`${REACT_APP_BASE_URL}/api/order/getOrderAdmin`, {}, config);
        setOrders(response.data.orders);
        console.log(response.data.orders)
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <div className="dashboard-cont-admin">

        <div className="dash-head-admin">
          <div className='order-head'><h1 className='hello-dash-admin'>Orders</h1></div></div>

        <div className='griddiv'>
          {orders.map((order) => (
            <div className="dash-order-1-admin">
              <OrderDetails id={order.orderId}
                name={order.name}
                rollno={((order.email).split("@")[0]).toUpperCase()}
                contact={order.contactNo}
                hostel={order.hostel.toUpperCase()}
                roomNo={order.roomNo.toUpperCase()}
                payementMethod={order.payementMethod}
                orderList={order.hashMap}
                status={order.status}
                date={order.orderDate}
                amount={order.totalPrice}
                serviceNo={order.serviceNo}
                uniqueKeyword={order._id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
