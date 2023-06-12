import React from 'react'
import home_page_pic from '../images/home_page_pic.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
        <div className="homepage" style={{margin: '-1rem 0rem', height: '650px'}} >
                <div className="row ">

                    <div className="  " style={{width: '50%'}}>
                    <img style={{margin: '3.5rem 3.5rem 12rem auto', align:'right', height:'32rem'}} class = "img-fluid d-block "  src={home_page_pic} alt="..."
                            ></img>
                    </div>


                    <div className="col  " style={{margin: '0px'}}>
                            <div className="   text-center" style={{width: "auto"}} >
                            {/* <img src={home_page_pic} className="card-img-top" alt="..."></img> */}
                            <div className="card-body">
                                <h1 className="card-title" style={{padding: '4rem 0rem 0rem 0rem', fontSize:'75px', color:'#3e87c3', fontFamily: 'Open Sans', fontWeight: '400'}}>Campus Laundry</h1>
                                <p className="card-text" style={{padding:'2rem 5rem', fontSize: '27px'}}>Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time.</p>
                                <Link to="/services" className="btn btn-primary btn-lg" style={{fontSize: '26px', padding: '2rem', margin: '0rem 0rem 0rem -45px', width:'16rem', borderRadius: '10px', backgroundColor: '#3e87c3', fontFamily: 'Open Sans', fontWeight: '400'}}>View Services</Link>
                            </div>
                            </div>
                    </div>


                </div>
        </div>
    </>
  )
}

export default Home
