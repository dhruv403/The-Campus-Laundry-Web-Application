import React from 'react'
import '../App.css'
import home_page_pic from '../images/home_page_pic.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="homepage" >
        <p className='hide'>Campus Laundry</p>
        <div className="row1">

          <div className='col1' >
            <img src={home_page_pic} ></img>
          </div>


          <div className='col2' >
            <div className="text-center" >
              <div className="card-body">
                <h1 className="card-title headingl" >Campus Laundry</h1>
                <p className="card-text" >Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time.</p>
                <Link to="/services" className="btn btn-primary btn-lg">View Services</Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Home
