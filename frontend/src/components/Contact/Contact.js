import  MailIcon from "../../images/mailicon.png";
import  PhoneIcon from "../../images/smartphone.png";
import  YouTubeIcon from "../../images/youtube.png";
import  LinkedInIcon from "../../images/linkedin.png";
import InstagramIcon from "../../images/instagram.png";
import  FacebookIcon from "../../images/facebook.png";
import  LocationOnIcon from "../../images/location.png";
import  TelegramIcon from "../../images/telegram.png";

import "./Contact.css";
import React, {useState} from "react";
import axios from 'axios'

export default function Contact() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    message: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const obj = {
        name: data.fullname,
        email : data.email,
        contactNo: data.mobile,
        message: data.message
      }
      const response = await axios.post('http://localhost:5000/api/contact/sendMessage', obj);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    alert("Your response has been recorded");
    setData({
      fullname: "",
      email: "",
      mobile: "",
      message: ""
    })
  };
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setData({...data, [name]:value});
    console.log(data)
  }
  return (
  
    <>
      <div className="contact-sec">
        

        <div className="contact-sec2">
          
          <div className="contact-sec2-1">
            <div className="contact-sec1">
              <h1>Contact Us 🚀</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="contact-container">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Name: </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Full Name"
                    autoComplete="off"
                    onChange={handleOnChange}
                    name="fullname"
                    value={data.fullname}

                    required
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlInput2">Email Address: </label>
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="name@example.com"
                    autoComplete="off"
                    onChange={handleOnChange}
                    name="email"
                    value={data.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlInput3">Mobile Number: </label>
                  <br />
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleFormControlInput3"
                    pattern="[0-9]{10}"
                    inputmode="numeric"
                    placeholder="+91"
                    maxLength={10}
                    autoComplete="off"
                    minLength={10}
                    onChange={handleOnChange}
                    name="mobile"
                    value={data.mobile}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Your Message: </label>
                  <br />
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={handleOnChange}
                    name="message"
                    value={data.message}
                    required
                  ></textarea>
                </div>
                <div className="contact-btn">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="contact-sec2-2 ">
            <div className="contact-card1">
              <div className="contact-card-body">
                <div className="contact-card-title">
                  <p className="contact-ex">
                    Drop IN
                    {/* <TelegramIcon /> */}
                  </p>
                </div>
                <div className="contact-card-text mx-3">
                  <div className="contact-icon">
                  <img height="25px" className="mx-0" src={LocationOnIcon} alt="" />
                    {/* <LocationOnIcon />{" "} */}
                  </div>
                  <div className="contact-text">
                    The LNM Institute of Information Technology, Rupa ki Nangal,
                    Post-Sumel, Via, Jamdoli, Jaipur, Rajasthan 302031
                  </div>
                </div>
                <br />
                <div className="contact-mail mx-3">
                  <div className="contact-icon">
                  <img height="25px" className="" src={MailIcon} alt="" />
                    {/* <MailIcon />{" "} */}
                  </div>
                  <div className="contact-text">campuslaundry@gmail.com</div>
                </div>
                <br />
                <div className="contact-contact mx-3">
                  <div className="contact-icon">
                  <img height="25px" className="" src={PhoneIcon} alt="" />
                    {/* <PhoneIcon />{" "} */}
                  </div>
                  <div className="contact-text">+91 834-9034-310</div>
                </div>
                <br />
                <div className="contact-follow mx-4">
                  <div className="contact-textt">Follow Us On: </div>
                  <div className="contact-iconn">
                    <img height="25px" className="mx-1" src={InstagramIcon} alt="" />
                    <img height="25px" className="mx-1" src={YouTubeIcon} alt="" />
                    <img height="25px" className="mx-1" src={FacebookIcon} alt="" />
                    <img height="25px" className="mx-1" src={LinkedInIcon} alt="" />
                    {/* <InstagramIcon />
                    <YouTubeIcon />
                    <FacebookIcon />
                    <LinkedInIcon /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
