import React from 'react'
import './Dashboard.css'
import OrderDetails from '../OrderDetails/OrderDetails'
export default function Dashboard() {
  return (
    <>
        <div className="dashboard-cont">
            <div className="dash-head"><h1 className='hello-dash'>Dashboard</h1></div>
            <div className="dash-order-1"> <OrderDetails id={272} status={false} date={"Tues,4th April,2023"}/> </div>
            <div className="dash-order-1"> <OrderDetails id={500} status={true} date={"Sat,1st April,2023"}/> </div>
            <div className="dash-order-1"> <OrderDetails id={521} status={true} date={"Wed,21st March,2023"}/> </div>
            <div className="dash-order-1"> <OrderDetails id={690} status={true} date={"Tues,1st March,2023"}/> </div>
            <div className="dash-order-1"> <OrderDetails id={700} status={true} date={"Tues,1st March,2023"}/> </div>
        </div>
    </>
  )
}
