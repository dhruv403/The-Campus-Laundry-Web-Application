import React, {useEffect} from 'react'
import './WhyChooseUs.css'
import car from '../../images/car.png'
import ecoFriendly from '../../images/ecoFriendly.png'
import guarantee from '../../images/guarantee.png'
import price from '../../images/price.png'
import hygienic from '../../images/hygienic.png'
import affordable from '../../images/affordable.png'
function WhyChooseUs() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []); 
  
  return (
    <>
    <div className="whychooseus-page">
    <div style={{textAlign:'center'}}>
        <h1 className='heading'>Why Choose Us?</h1>
    </div>
        <div className="cont">
          <div className='boxes'>
              <img src={car} id='images1' alt='' />
              <h5 className='box-text'>Free Pickup and Delivery </h5>
              <p className='para'>Doorstep Pickup and Your clothes will be delivered at your doorstep on time</p>
          </div>
          <div className='boxes'>
              <img src={hygienic}  id='images2' alt=''/> 
              <h5 className='box-text'>Hygenic</h5>
              <p className='para'>Your clothes are hygienically washed so they are germ-free and clean.</p>

          </div>
          <div className='boxes'>
              <img src={affordable} id='images3' alt=''  />
              <h5 className='box-text'>Affordable</h5>
              <p className='para'>You pay just as same as the price set by your selected laundry vendor.</p>

          </div>
        </div>
        <div className="cont">
          <div className='boxes'>
              <img src={ecoFriendly} id='images4'  alt=''/>
              <h5 className='box-text'>Eco-Friendly </h5>
              <p className='para'>Doorstep Pickup and Your clothes will be delivered at your doorstep on time</p>
          </div>
          <div className='boxes'>
              <img src={guarantee}  id='images2' alt='' /> 
              <h5 className='box-text'>Quality Gurantee</h5>
              <p className='para'>Your clothes are hygienically washed so they are germ-free and clean.</p>

          </div>
          <div className='boxes'>
              <img src={price} id='images3'  alt=''/>
              <h5 className='box-text'>Transparent Pricing</h5>
              <p className='para'>You pay just as same as the price set by your selected laundry vendor.</p>

          </div>
        </div>
        </div>
    </>
  )
}

export default WhyChooseUs
