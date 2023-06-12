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

        const response = await axios.post('http://localhost:5000/api/order/getOrder', {}, config);
        setOrders(response.data.orders);
        // console.log(orders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    // This effect will be triggered whenever `orders` state changes
    console.log("Orders updated:", orders);
  }, [orders]);
  return (
    <>
        <div className="dashboard-cont">
            <div className="dash-head"><h1 className='hello-dash'>Dashboard</h1></div>
            {orders.map((order) => (
            <div className="dash-order-1" key={order._id}>
              <OrderDetails id={order.orderId} status={order.status} date={order.orderDate} />
            </div>
          ))}
            {/* <div className="dash-order-1"> <OrderDetails id={272} status={false} date={"Tues,4th April,2023"}/> </div>
            <div className="dash-order-1"> <OrderDetails id={500} status={true} date={"Sat,1st April,2023"}/> </div>
            <div className="dash-order-1"> <OrderDetails id={521} status={true} date={"Wed,21st March,2023"}/> </div>
            <div className="dash-order-1"> <OrderDetails id={690} status={true} date={"Tues,1st March,2023"}/> </div>
            <div className="dash-order-1"> <OrderDetails id={700} status={true} date={"Tues,1st March,2023"}/> </div> */}
        </div>
    </>
  )
}
