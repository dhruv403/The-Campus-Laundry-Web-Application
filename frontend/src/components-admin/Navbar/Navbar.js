import React from 'react'
import basket from '../../images/basket_navbar.gif'
import logo from '../../images/Logo.png'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // localStorage.removeItem('currentUser');
    navigate('/');
  }

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userName = (user.userEmail).split("@")[0];
  return (
    <>
        <nav className="navbar navbar-expand-sm navbar-light nav_page" style={{fontSize: '25px'}} >
          <div className="container-fluid ">
          <NavLink className='navbar-brand' to='/home'><img className='logo' src={logo} alt="" /></NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end"  id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item  navbar_items">
                <NavLink className="nav-link " aria-current="page" to="/home">Welcome {userName}</NavLink>
                </li>
                {/* <li className="nav-item  navbar_items">
                  <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
                </li> */}
                <li className="nav-item  navbar_items">
                  <NavLink className="nav-link" to="/admin-dashboard">Dashboard</NavLink>
                </li>			
                <li className="nav-item  navbar_items" id='next_line'>
                  <NavLink className="nav-link " to="/admin-orders">Orders</NavLink>
                </li>			
                <li className="nav-item  navbar_items">
                  <NavLink className="nav-link" to="/customer-support">Support</NavLink>
                </li>			
                <li className="nav-item ">
                  <NavLink to="/" type="button" onClick={handleLogout}>
                    <img style={{height:'45px'}} src={basket} alt="" />
                  </NavLink>
                </li>			
            </ul>		  
          </div>
        </div>
	</nav>
    </>
  )
}

export default Navbar
