import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import Graph from '../Graph-Dashboard/Graph';
import drying from '../../images/drying.png';
import piechart from '../../images/pie-chart.png';
import barchart from '../../images/chart.png';
import coins from '../../images/dollar.png';
import axios from 'axios';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/order/getOrderAdmindashboard');
      setOrders(response.data);
    } catch (error) {
      console.log('Error fetching orders:', error);
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderOrdersContent = () => {
    if (activeButton === 'totalOrders') {
      const totalOrdersCount = orders.length;
    } 
    else if (activeButton === 'ordersPending') {
      const pendingOrdersCount = orders.filter(order => !order.status).length;
    } 
    else if (activeButton === 'ordersCompleted') {
      const completedOrdersCount = orders.filter(order => order.status).length;
    } 
    else if (activeButton === 'totalEarnings') {
      const totalEarnings = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    }
  };
  
  return (
    <div className="dashboard">
      <div className="dashboard-title">
        <h1 className="dashboard-heading">Admin Dashboard</h1>
      </div>
      <div className="dashboard-a">
        <div className="option1">
          <button
            type="button"
            className={`btn btn-secondary btn-lg option-buttons ${
              activeButton === 'totalOrders' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('totalOrders')}
          >
            <div className="button-content">
              <div className="tag">
                <img src={drying} id="imagess" alt="Total Orders" />
              </div>
              {activeButton !== 'totalOrders' && (
                <div className="option-content">Total Orders</div>
              )}
              {activeButton === 'totalOrders' && (
                <div className="count-badge">{orders.length}</div>
              )}
            </div>
          </button>
        </div>
        <div className="option2">
          <button
            type="button"
            className={`btn btn-secondary btn-lg option-buttons ${
              activeButton === 'ordersPending' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('ordersPending')}
          >
            <div className="button-content">
              <div className="tag">
                <img src={piechart} id="imagess" alt="Orders Pending" />
              </div>
              {activeButton !== 'ordersPending' && (
                <div className="option-content">Orders Pending</div>
              )}
              {activeButton === 'ordersPending' && (
                <div className="count-badge">
                  {orders.filter(order => !order.status).length}
                </div>
              )}
            </div>
          </button>
        </div>
        <div className="option3">
          <button
            type="button"
            className={`btn btn-secondary btn-lg option-buttons ${
              activeButton === 'ordersCompleted' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('ordersCompleted')}
          >
            <div className="button-content">
              <div className="tag">
                <img src={barchart} id="imagess" alt="Orders Completed" />
              </div>
              {activeButton !== 'ordersCompleted' && (
                <div className="option-content">Orders Completed</div>
              )}
              {activeButton === 'ordersCompleted' && (
                <div className="count-badge">
                  {orders.filter(order => order.status).length}
                </div>
              )}
            </div>
          </button>
        </div>
        <div className="option4">
          <button
            type="button"
            className={`btn btn-secondary btn-lg option-buttons ${
              activeButton === 'totalEarnings' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('totalEarnings')}
          >
            <div className="button-content">
              <div className="tag">
                <img src={coins} id="imagess" alt="Total Earnings" />
              </div>
              {activeButton !== 'totalEarnings' && (
                <div className="option-content">Total Earnings</div>
              )}
              {activeButton === 'totalEarnings' && (
                <div className="count-badge">
                  ${orders.reduce((sum, order) => sum + order.totalPrice, 0).toFixed(2)}
                </div>
              )}
            </div>
          </button>
        </div>
      </div>
      <div className="dashboard-b">
        <u>Weekly Orders</u>
      </div>
      <div className="dashboard-c">{renderOrdersContent()}</div>
    </div>
  );  
}
