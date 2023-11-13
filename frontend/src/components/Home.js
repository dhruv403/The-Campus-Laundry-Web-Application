import React from 'react'
import '../App.css'
import home_page_pic from '../images/home_page_pic_compressed.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="homepage" >
        <p className='hidee'>Welcome to Campus Laundry Service</p>
        <div className="row1">

          <div className='col1' >
            <img src={home_page_pic} alt='' ></img>
          </div>


          <div className='col2' >
            <div className="text-center" >
              <div className="card-body">
                <h1 className="card-title headingl" >Campus Laundry</h1>
                <p className="card-text" >Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time.</p>
                <br />
                <h3>Try our admin side as well</h3>
                <h3>Email Id: admin@lnmiit.ac.in</h3>
                <h3>Password: admin</h3>
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
