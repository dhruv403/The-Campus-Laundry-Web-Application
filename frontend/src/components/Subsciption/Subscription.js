import React, { useEffect, useRef, useState } from 'react'
import './Subscription.css'
import axios from 'axios'


export default function Subscription() {

    const [amount, setAmount] = useState(500);
    const [curruser, setCurruser] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const user = JSON.parse(localStorage.getItem('currentUser'));
                const config = {
                    headers: {
                        'auth-token': token,
                        'email': user.userEmail
                    }
                };
                const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
                const response = await axios.post(`${REACT_APP_BASE_URL}/api/auth/getuser`, {}, config);
                console.log(response.data);
                setCurruser(response.data.name);
                console.log(curruser);
              } catch (error) {
                console.error(error);
              }
        }
        fetchUser();
        // eslint-disable-next-line
    }, []);


    const sub2 = () => {
        setAmount(1000);
        handlePayment();
    }
    const sub1 = () => {
        setAmount(500);
        handlePayment();
    }

    const handlePayment = async() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const amountSummary = {
            amount: amount,
        }
        try {
            const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
              // eslint-disable-next-line no-unused-vars
            const response = await axios.post(`${REACT_APP_BASE_URL}/api/order/subscription-checkout`, amountSummary);
            const {data:{key}}=await axios.get(`${REACT_APP_BASE_URL}/api/order/getkey`)
            console.log(response.data);
            const options = {
              "key": key, // Enter the Key ID generated from the Dashboard
              "amount": response.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              "currency": "INR",
              "name": curruser,
              "description": "Subscription transaction",
              "image": "https://example.com/your_logo",
              "order_id": response.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              "handler": async function (response){
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                const finalPayment = {
                  email: user.userEmail,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature
                }
                await axios.post(`${REACT_APP_BASE_URL}/api/order/subscription-update`, finalPayment);
                // navigate('/dashboard');
                console.log(response);
    
              },
              "prefill": {
                  "name": "Dhruv Sharma",
                  "email": "sharmadhruv272@gmail.com",
                  "contact": "9000090000"
              },
              "notes": {
                  "address": "Razorpay Corporate Office"
              },
              "theme": {
                  "color": "#3399cc"
              }
          };
          console.log('Hello')
          console.log(options);
            const razor = await new window.Razorpay(options);
            razor.open();
            // show();
          } catch (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              if (error.response.status === 400) {
                alert('Please enter valid details.');
              } else if (error.response.status === 500) {
                alert('Server has some issues. Please try again later.');
              }
              else {
                alert('Something wierd happened. Check if you have entered valid details otherwise server has some issues today!!!');
              }
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
              alert('No response received from the server. Please try again later.');
            } else {
              // Something happened in setting up the request that triggered an error
              console.log('Error', error.message);
              alert('An error occurred. Please try again later.');
            }
          }
    }
    
  return (
    <>
      <div className="od-cont-admin1-subscription">
        <div className="od-sec-1-admin1-subscription">
          <div className="od-sec-1-p1-admin1-subscription"><h2>Subscription Plan #1</h2> </div>
          <div className="od-sec-1-p2-admin1-subscription" ><h4><span className='statusclass-subscription'> Duration:</span> 1 Month</h4> </div>
          <div className="od-sec-2-amount-admin1-subscription"> <h3><b> Amount: </b>  ₹ 500 </h3> </div>
          
        </div>
        <div className="od-sec-2-admin1-subscription">

          <div className="od-sec-1-p3-admin1-subscription"><button className='detailsb-subscription' onClick={sub1}> View Details </button> </div>
        </div>

      </div>
      <div className="od-cont-admin1-subscription">
        <div className="od-sec-1-admin1-subscription">
          <div className="od-sec-1-p1-admin1-subscription"><h2>Subscription Plan #2</h2> </div>
          <div className="od-sec-1-p2-admin1-subscription" ><h4><span className='statusclass-subscription'> Duration:</span> 1 Month</h4> </div>
          <div className="od-sec-2-amount-admin1-subscription"> <h3><b> Amount: </b>  ₹ 1000 </h3> </div>
          
        </div>
        <div className="od-sec-2-admin1-subscription">

          <div className="od-sec-1-p3-admin1-subscription"><button className='detailsb-subscription' onClick={sub2}> View Details </button> </div>
        </div>

      </div>


      
    </>
  )
}
