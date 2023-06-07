
import React, {useState, useEffect } from 'react'
import './Services.css'
import washAndFold from '../../images/wash-fold.jpeg'
import ironAndFold from '../../images/iron-fold.jpg'
import ironAndWash from '../../images/iron-wash.jpg'

import {useNavigate} from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(0);

    const handleService = async (serviceNumber) => {
      await setSelectedService(serviceNumber);
      console.log(serviceNumber);
      console.log(selectedService);
      navigate('/order',  {
        state: {
            // selectedService
            serviceNumber
        },
    });
    };

    
  return (
    <div className='services-sec1'>

        <div className="services-sec3 text-center">
            <h1 className='services-heading'>Services</h1>
        </div>


        <div className="services-sec4">

            <div className="services-card1">
                <div className="services-sec4-1">
                    <div className="services-image1-contianer">
                        <img src={ironAndWash } alt='' height={200}/>
                    </div>
                    <div className="services-card1-body">
                        <div className="services-card1-title">Iron & Wash</div>
                        <div className="services-card1-text">All your regular wear garments will be washed, steam ironed and neatly packed for delivery.</div>
                    </div>
                    <div className="services-card1-submit">
                        <button onClick={() => handleService(0)}>Select Service</button>
                    </div>
                </div>
            </div>

            <div className="services-card2">
                <div className="services-sec4-2">
                    <div className="services-image2-contianer">
                        <img src={washAndFold } alt='' height={200}/>
                    </div>
                    <div className="services-card2-body">
                        <div className="services-card2-title">Wash & Fold</div>
                        <div className="services-card2-text">Just in case you choose not to use our steam ironing services we will wash and fold them for you.</div>
                    </div>
                    <div className="services-card2-submit">
                        <button onClick={() => handleService(1)}>Select Service</button>
                    </div>
                </div>
            </div>

            <div className="services-card3">
                <div className="services-sec4-3">
                    <div className="services-image3-contianer">
                    <img src={ironAndFold } alt='' height={200}/>
                    </div>
                    <div className="services-card3-body">
                        <div className="services-card3-title">Iron & Fold</div>
                        <div className="services-card3-text">Just in case you choose to use only our steam ironing services we will iron and fold them for you.</div>
                    </div>
                    <div className="services-card3-submit">
                        <button onClick={() => handleService(2)}>Select Service</button>
                    </div>
                </div>
            </div>
        </div>
       

        <div className="services-sec4">

            <div className="services-card1">
                <div className="services-sec4-1">
                    <div className="services-image1-contianer">
                        <img src={ironAndWash   } alt='' height={200}/>
                    </div>
                    <div className="services-card1-body">
                        <div className="services-card1-title">Dry Cleaning</div>
                        <div className="services-card1-text">All your sensitive and special garments will be individually treated for any stains and dry cleaned.

</div>
                    </div>
                    <div className="services-card1-submit">
                        <button onClick={() => handleService(3)}>Select Service</button>
                    </div>
                </div>
            </div>

            <div className="services-card2">
                <div className="services-sec4-2">
                    <div className="services-image2-contianer">
                        <img src={washAndFold } alt='' height={200}/>
                    </div>
                    <div className="services-card2-body">
                        <div className="services-card2-title">Emergency Service</div>
                        <div className="services-card2-text">You can use our emergency service to receive services easily and quickly in our machines using very safe.</div>
                    </div>
                    <div className="services-card2-submit">
                        <button onClick={() => handleService(4)}>Select Service</button>
                    </div>
                </div>
            </div>

            <div className="services-card3">
                <div className="services-sec4-3">
                    <div className="services-image3-contianer">
                    <img src={ironAndFold } alt='' height={200}/>
                    </div>
                    <div className="services-card3-body">
                        <div className="services-card3-title">Subscription Based</div>
                        <div className="services-card3-text">You can get Best Price, Quality Service, Doorstep Pickup & Delivery Service, Hygiene & Fresh Laundry</div>
                    </div>
                    <div className="services-card3-submit">
                        <button onClick={() => handleService(5)}>Select Service</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
