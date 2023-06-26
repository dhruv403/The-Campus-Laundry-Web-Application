import React, { useState, useEffect, useRef } from 'react'
import basket from '../../images/basket_navbar.gif'
import logo from '../../images/Logo.png'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleLogout = () => {
    localStorage.removeItem('token');
    // localStorage.removeItem('currentUser');
    navigate('/');
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userName = (user.userEmail).split("@")[0];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <NavLink className='navbar-brand' to='/home'><img className='logo' src={logo} alt="" /></NavLink>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item  navbar_items  specorder">
                <NavLink className="nav-link" aria-current="page" to="/home">Welcome {userName}</NavLink>
              </li>
              <li className="nav-item  navbar_items  specorder ">
                <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item  navbar_items  specorder">
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item  navbar_items  specorder" >
                <NavLink className="nav-link " to="/whychooseus">Why Choose us</NavLink>
              </li>
              <li className="nav-item  navbar_items  specorder">
                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
              </li>
              <li className="nav-item dropdown navbar_items" onClick={toggleDropdown} ref={dropdownRef}>
                <img style={{ height: '45px', cursor: 'pointer' }} src={basket} alt="" />
                {isDropdownOpen && (
                  <ul className="dropdown-menu show dropdown-menu-left-user" aria-labelledby="basketDropdown" onClick={closeDropdown}>
                    <li>
                      <NavLink className="dropdown-item" to="/user-profile">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
