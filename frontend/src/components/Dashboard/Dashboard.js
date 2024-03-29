import React from 'react'
import './Dashboard.css'
import OrderDetails from '../OrderDetails/OrderDetails'
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

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
        const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
        const response = await axios.post(`${REACT_APP_BASE_URL}/api/order/getOrder`, {}, config);
        setOrders(response.data.orders);
        // console.log(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  // useEffect(() => {
  //   // This effect will be triggered whenever `orders` state changes
  //   console.log("Orders updated:", orders);
  // }, [orders]);
  return (
    <>
      <div className="dashboard-cont">
        <div className="dash-head">
          <h1>Dashboard</h1>
        </div>
        {orders.map((order) => (
          <div className="dash-order-1" key={order._id}>
            <OrderDetails
              id={order.orderId}
              status={order.status}
              date={order.orderDate}
              orderList={order.hashMap}
              serviceNo={order.serviceNo}
            />
          </div>
        ))}
      </div>
    </>
  )
}
