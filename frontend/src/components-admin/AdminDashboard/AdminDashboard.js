import React from 'react'
import './AdminDashboard.css'
import Graph from '../Graph-Dashboard/Graph'

export default function AdminDashboard() {
  return (
    <div className='dashboard'>
        <div className="dashboard-navbar"> Navbar </div>
        <div className="dashboard-title"> 
            <h1 className='dashboard-heading'>Admin Dashboard</h1> 
        </div>
        <div className="dashboard-a">
            <div className="option1">
                <button type="button" class="btn btn-secondary btn-lg option-buttons">Total Orders</button>                
            </div>
            <div className="option2">
                <button type="button" class="btn btn-secondary btn-lg option-buttons">Orders Pending</button>
            </div>
            <div className="option3">
                <button type="button" class="btn btn-secondary btn-lg option-buttons">Order Completed</button>
            </div>
            <div className="option4">
                <button type="button" class="btn btn-secondary btn-lg option-buttons">Total Earnings</button>
            </div>
        </div>
        <div className="dashboard-b">
            <u>Weekly Orders</u>
        </div>
        <div className="dashboard-c">
            {/* <Graph/> */}
        </div>
    </div>
  )
}
