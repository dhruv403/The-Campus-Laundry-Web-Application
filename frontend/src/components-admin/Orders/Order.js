import React, {useState, useEffect} from 'react'
import './Order.css'
import OrderDetails from '../OrderDetails/OrderDetails'
import axios from 'axios'

export default function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders  = async () => {
      try {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const config = {
          headers: {
            'auth-token' :token,
            'email': user.userEmail
          }
        };
        // console.log(config);
        
        const response = await axios.post('http://localhost:5000/api/order/getOrderAdmin', {}, config);
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

            <div className="dash-head-admin"><h1 className='hello-dash-admin'>Orders</h1></div>
            
            {orders.map((order) => (
              <div className="dash-order-1-admin">
                 <OrderDetails id={order.orderId}
                  name={order.name}
                  rollno={((order.email).split("@")[0]).toUpperCase()}
                  contact = {order.contactNo}
                  hostel = {order.hostel.toUpperCase()}
                  roomNo = {order.roomNo.toUpperCase()}
                  payementMethod = {order.payementMethod}
                  orderList = {order.hashMap}
                  status={order.status}
                  date={order.orderDate}
                  amount = {order.totalPrice}
                  />
               </div>
            ))}
            <div className="dash-order-1-admin"> <OrderDetails id={500} status={true} date={"Sat,1st April,2023"}/> </div>
            <div className="dash-order-1-admin"> <OrderDetails id={521} status={true} date={"Wed,21st March,2023"}/> </div>
            <div className="dash-order-1-admin"> <OrderDetails id={690} status={true} date={"Tues,1st March,2023"}/> </div>
            <div className="dash-order-1-admin"> <OrderDetails id={700} status={true} date={"Tues,1st March,2023"}/> </div>
        </div>
    </>
  )
}
