import React from 'react'
import './AdminDashboard.css'
import Graph from '../Graph-Dashboard/Graph'
import drying from '../../images/drying.png'
import piechart from '../../images/pie-chart.png'
import barchart from '../../images/chart.png'
import coins from '../../images/dollar.png'


export default function AdminDashboard() {
  return (
    <div className='dashboard'>
        <div className="dashboard-title"> 
            <h1 className='dashboard-heading'>Admin Dashboard</h1> 
        </div>
        <div className="dashboard-a">
            <div className="option1">
                <button type="button" class="btn btn-secondary btn-lg option-buttons" >
                    <div className="button-content">
                        <div className="tag"><img src={drying} id='imagess'></img></div>
                        <div className="option-content">Total Orders</div>
                    </div>
                </button>                
            </div>
            <div className="option2">
                <button type="button" class="btn btn-secondary btn-lg option-buttons" >
                    <div className="button-content">
                        <div className="tag"><img src={piechart} id='imagess'></img></div>
                        <div className="option-content">Orders Pending</div>
                    </div>
                </button>
            </div>
            <div className="option3">
                <button type="button" class="btn btn-secondary btn-lg option-buttons" >  
                    <div className="button-content">
                        <div className="tag"><img src={barchart} id='imagess'></img></div>
                        <div className="option-content">Order Completed</div>
                    </div>
                </button>
            </div>
            <div className="option4">
                <button type="button" class="btn btn-secondary btn-lg option-buttons" >
                    <div className="button-content">
                        <div className="tag"><img src={coins} id='imagess'></img></div>
                        <div className="option-content">Total Earnings</div>
                    </div>
                </button>
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
