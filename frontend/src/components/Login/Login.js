import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import './Login.css'
import LoginImg from '../../images/Login-img.png'
import finalLogo from '../../images/login_logo.png'
import GoogleLogo from '../../images/google.png';

export default function Login() {
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(`${REACT_APP_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      //redirect
      const user = {
        userEmail: credentials.email
      };
      localStorage.setItem('token', json.authtoken);
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate('/home');
    }
    else {
      alert('Invalid Credentials...')
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate('/admin-login');
  }

  return (
    <div className="login">
      <div className="login-sec1">
        <div className="sec-left">
          <div className="login-logo">
            <img src={finalLogo} alt="" height={'100px'} width={'110px'} />
          </div>
          <div className="login-img">
            <img src={LoginImg} alt="" height={'300px'} />
          </div>
          <div className="login-img1">
            <p className="login-img1-inner">Campus Laundry</p>
          </div>
        </div>
        <div className="sec-right">
          <div className="container">
            <div className="container-top">
              <b><u>Sign In</u></b>
            </div>
            <div className="container-mid">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" autoComplete='off' required />
                  <div id="emailHelp" className="form-text">Enter valid LNMIIT Domain Email Address "@lnmiit.ac.in"</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <div className="logbutton">
                  <button type="submit" className="btn  loginbutton">Login</button>
                  <div className="container-bottom">
                    <img src={GoogleLogo} height={'20px'} alt="" />
                    Continue with Google
                  </div>
                </div>
              </form>
            </div>

            <div className="container-bottom-1">
              <button type="button" class="btn btn-secondary" onClick={handleAdminLogin}>Admin Login</button>
            </div>
            <div className="container-last-signup">
              <p>New User? <Link to='/signup' className='mx-1' id='login-signup'>SignUp</Link> </p>
            </div>
            <div className="container-last">
              <a href='www.google.com'> Terms of Use  </a> |  <a href='www.google.com'> Privacy Policy </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
