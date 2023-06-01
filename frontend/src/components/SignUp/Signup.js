import './Signup.css'

import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";


export default function Signup() {

    const [credentials,setCredentials] = useState({name:'',  email:'', password:'', cpassword:''})
    const navigate = useNavigate();

    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        const {name,email,password,cpassword} = credentials;

        const emailRegex = /\b[A-Z0-9._%+-]+@lnmiit\.ac\.in\b/i;
        if (!emailRegex.test(email)) 
        {
            alert("Kindly Sign Up With LNMIIT Domain Account");
            return;
        }

        if(cpassword != password)
        {
            alert("Password do not Match");
            return;
        }

        let response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password,cpassword})
        });
        const json = await response.json();
        // console.log(json);
        if(json.success)
        {
            //redirect
            localStorage.setItem('token',json.authtoken);
            alert('Sign Up Successful, Kindly Login');
            navigate('/');
        }
        else{
          alert('Invalid Credentials...')
        }
    }
    
    const onChange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className="signup-container">
        
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <div class="title">
                    <p><u><center>Sign Up</center></u></p>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" autoComplete='off' required/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" autoComplete='off'  required/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
                </div>
                <div class="mb-3">
                    <label for="cpassword" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
                </div>
                <div className="signup-submit">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <div className="container-last-signup">
                        Already have an account?
                    
                    <Link to='/' id='signup-login' className='mx-1'> Login </Link> 
                </div>
            </form>
        </div>
    </div>
    
  )
}