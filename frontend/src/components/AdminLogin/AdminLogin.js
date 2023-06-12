import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import './AdminLogin.css'
import LoginImg from '../../images/Login-img.png'
import finalLogo from '../../images/login_logo.png'

export default function AdminLogin() 
{
    const [credentials,setCredentials] = useState({email:'', password:''})

    const navigate = useNavigate();

    const handleSubmit = async (e) => 
    {
      e.preventDefault();
      let response = await fetch("http://localhost:5000/api/auth/adminlogin", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json();
      
      console.log(json);
      
      if(json.success)
      {
        const user = {
          userEmail: credentials.email
        };
        localStorage.setItem('token',json.authtoken);
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate('/admin-dashboard');
      }
      else{
        alert('Invalid Credentials...')
      }
    }
  
    const onChange = (e) =>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  
    return (
      <div className="admin-login">
        <div className="admin-login-sec1">
          <div className="admin-sec-left">
              <div className="admin-login-logo">
                <img src={finalLogo} alt="" height={'100px'} width={'110px'}/>
              </div>
              <div className="admin-login-img">
                <img src={LoginImg} alt="" height={'300px'} />
              </div>
          </div>
          <div className="admin-sec-right">
            <div className="admin-container">
                <div className="admin-container-top">
                    <div className="admin-container-top-1">
                        <b><u>Admin</u></b> 
                    </div>
                    <div className="admin-container-top-2">
                        <b><u>Sign In</u></b> 
                    </div>
                </div>
              <div className="admin-container-mid">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" autoComplete='off' required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                  </div>
                  <div className="logbutton">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
              <div className="admin-container-last">
                <a href='www.google.com'> Terms of Use  </a> |  <a href='www.google.com'> Privacy Policy </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
