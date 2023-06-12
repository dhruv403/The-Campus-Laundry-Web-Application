import React from 'react'
import admin from '../../images/admin_logo_footer.png'
import './Footer.css'
import { NavLink } from 'react-router-dom'
export default function Footer(props) {  
  return (
    <>
    <div className="main-footer">

        <div className="footer-cont">
            <div className='footer-sec-1'>

              <div className='foot-title'>
                <img src={admin} alt="" />
                <h1>Admin Portal</h1>
              </div>
              <div className='foot-title'>
                <h2>Campus Laundry Online Laundry Service</h2>
              </div>
              <div className="foot-details">
                <h3> Email : {props.email}</h3>
              </div>
              <div className="foot-details">
                <h3> Phone : {props.phone}</h3>
              </div>

            </div>
        {/* <div className="footer-row"> */}
            <div className='footer-sec-2'>


              <div className="footer-small-text">
              <NavLink  to="/"> Get Help </NavLink>
              </div>
              <div className="footer-small-text">
              <NavLink  to="/"> Read FAQ </NavLink>
              </div>
              <div className="footer-small-text">
              <NavLink  to="/"> View Templates </NavLink>
              </div>
              <div className="footer-small-text">
              <NavLink  to="/whychooseus"> Why Choose us </NavLink>
              </div>
            </div>

            <div className='footer-sec-2'>

              <div className="footer-small-text">
              <NavLink  to="/"> Privacy Policy </NavLink>

              </div>
              <div className="footer-small-text">
              <NavLink  to="/"> Cookie Policy </NavLink>
              </div>
              <div className="footer-small-text">
              <NavLink  to="/"> Terms of Use </NavLink>
              </div>
              <div className="footer-small-text">
                <NavLink  to="/contactus"> Contact Us</NavLink>
              </div>
            </div>
            {/* </div> */}


        </div>

        {/* <div className="footer-copyright">Copyright 2023 developed by Rubeus Hagrid</div> */}

    </div>
    </>
  )
}
