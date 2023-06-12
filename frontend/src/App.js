import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ReviewsAndRatings from "./components/ReviewsAndRatings/ReviewsAndRatings";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import Counter from "./components/Counter/Counter";
import Order from "./components/Order/Order";
import Bag from "./components/Bag/Bag";
import Login from './components/Login/Login'
import Contact from '../src/components/Contact/Contact'
import SignUp from '../src/components/SignUp/Signup'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Success from "./components/Success/Success";
import Dashboard from "./components/Dashboard/Dashboard";
import React, {useEffect} from 'react'
import ScrollToTop from "./components/ScrollToTop";


function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={[ <ScrollToTop/>,<Login/>]}></Route>
          <Route exact path="/signup" element={[ <ScrollToTop/>,<SignUp/>]}></Route>
          <Route exact path="/home" element={[ <ScrollToTop/>,<Navbar/>,<Home/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route>
          <Route exact path="/services" element={[ <ScrollToTop/>,<Navbar/>,<Services/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route>
          <Route exact path="/whychooseus" element={[ <ScrollToTop/>,<Navbar/>,<WhyChooseUs/>,<ReviewsAndRatings/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route>
          <Route exact path="/hello" element={[ <ScrollToTop/>,<Navbar/>,<ReviewsAndRatings/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route>

          {/* <Route exact path="/checkout" element={[ <ScrollToTop/>,<Navbar/>,<Checkout/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route> */}
          <Route exact path="/checkout" element={
             <>
             <ScrollToTop />
             <Navbar />
             <Checkout grandTotal = {0}/>
             <Footer email={"campus.laundry@gmail.com"} phone={"+91 83490 34310"} />
           </>

            }></Route>

          <Route exact path="/dashboard" element={[ <ScrollToTop/>,<Navbar/>,<Dashboard/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route>
          <Route exact path="/order" element={[ <ScrollToTop/>,<Navbar/>,<Order/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route>
          <Route exact path="/contactus" element={[ <ScrollToTop/>,<Navbar/>,<Contact/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route>
          <Route exact path="/success" element={[ <ScrollToTop/>,<Navbar/>,<Success/>,<Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} />]}></Route>
          
        </Routes>
      </BrowserRouter>

     {/* <HelloWorld/> */}
     {/* <Home/> */}
     {/* <Services/> */}
     {/* <WhyChooseUs/> */}
     {/* <ReviewsAndRatings/> */}
     {/* <Footer email={"campus.laundary@gmail.com"} phone={"+91 83490 34310"} /> */}
     {/* <Checkout/> */}
     {/* <Bag/> */}
     {/* <Order/> */}

    </>
  );
}

export default App;
