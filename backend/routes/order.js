const express = require('express');
const router = express.Router();
const razorpay =require("razorpay");
const crypto =require("crypto")
const fetchuser = require('../middleware/fetchuser');
const  { Order, orderValidationSchema } = require('../models/Order');
const  User = require('../models/User');
const Payment = require('../models/PaymentGateway')
const { findOneAndUpdate } = require('../models/Item');


// Route: POST /api/order/orders
// Description: Store order details in the database
// Access: Private (authenticated route)
router.post('/orders', async (req, res) => {
  try {
    // res.send("hello")
    const { name, email, contactNo, hostel, roomNo, paymentMethod, hashMap, totalPrice, serviceNo } = req.body;
    
    
    console.log(serviceNo);
    const { error } = orderValidationSchema.validate(req.body);
    if (error) {
      // Return a response indicating validation error
      return res.status(400).json({ error: error.details[0].message });
    }
    var orderId = 0;
    try {
      const count = await Order.countDocuments();
        orderId = count+1;
        // console.log('Number of documents:', count);
        // console.log('Number of documents:', orderId);
      } catch (error) {
        console.error('Error:', error);
      }
      
      // Create a new order document
      const order = new Order({
        orderId: orderId,
        name,
        email,
        contactNo,
        hostel,
        roomNo,
        paymentMethod,
        hashMap,
        totalPrice,
        serviceNo
        //user: req.user.id, // Assuming req.user.id contains the authenticated user's ID
      });
    console.log(order);
    // Save the order to the database
    await order.save();
    
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});


router.post("/checkout",async(req,res)=>{

  // Created instance for razorpay payment
  const instance = new razorpay({
    key_id:process.env.KEY,
    key_secret:process.env.SECRET,
  })
  const options ={
      amount:Number(req.body.totalPrice*100),
      currency:"INR",
  };
  const order = await instance.orders.create(options);
  // console.log(order);
  res.status(200).json({
    success:true,order
  })

})

// payemnt verification
router.post("/paymentverification",async(req,res)=>{
  // const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
  const {name, email, contactNo, hostel, roomNo, paymentMethod, hashMap, totalPrice, serviceNo, razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
  
  
 const body = razorpay_order_id + "|" +razorpay_payment_id;
 const expectedsgnature =crypto.createHmac('sha256',process.env.SECRET).update(body.toString()).digest('hex')
 const isauth = expectedsgnature === razorpay_signature;
 if(isauth){
    const { error } = orderValidationSchema.validate(req.body);
    if (error) {
      // Return a response indicating validation error
      return res.status(400).json({ error: error.details[0].message });
    }
    var orderId = 0;
    try {
        const count = await Order.countDocuments();
        orderId = count+1;
        // console.log('Number of documents:', count);
        // console.log('Number of documents:', orderId);
      } catch (error) {
        console.error('Error:', error);
      }

    // Create a new order document
    const order = new Order({
      orderId: orderId,
      name,
      email,
      contactNo,
      hostel,
      roomNo,
      paymentMethod,
      hashMap,
      totalPrice,
      serviceNo,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
      //user: req.user.id, // Assuming req.user.id contains the authenticated user's ID
    });
    // console.log(order);
    // Save the order to the database
    await order.save();

    res.json(order);
    // res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)
 }
 else{
    // console.log(error);
    res.status(500).send('Internal Server Error');
 }
})

router.post("/subscription-checkout",async(req,res)=>{

  // Created instance for razorpay payment
  const instance = new razorpay({
    key_id:process.env.KEY,
    key_secret:process.env.SECRET,
  })
  const options ={
      amount:Number(req.body.amount*100),
      currency:"INR",
  };
  const order = await instance.orders.create(options);
  // console.log(order);
  res.status(200).json({
    success:true,order
  })

})

router.post("/subscription-update", async(req, res) => {
  const { email, razorpay_order_id,razorpay_payment_id,razorpay_signature } = req.body;
  try {
    // Find the user by email
    console.log(email);
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const body = razorpay_order_id + "|" +razorpay_payment_id;
    const expectedsgnature =crypto.createHmac('sha256',process.env.SECRET).update(body.toString()).digest('hex')
    const isauth = expectedsgnature === razorpay_signature;

    if(!isauth) {
      return res.status(404).json({ message: 'Payment FAILED!!!' });
    }

    // Update the subscription field to true
    user.subscription = true;

    // Save the updated user
    await user.save();

    return res.status(200).json({ message: 'Subscription updated successfully', user });
  } catch (error) {
    console.error('Error updating subscription:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
})

// for dashboard
router.post('/getOrder',fetchuser, async (req, res) => {
  try {
    const { email } = req.user;
    
    const orders = await Order.find({ email }).sort({ orderId: -1 });
    // console.log(orders);
    res.json({ orders });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get("/getkey",(req,res)=>{
  return res.status(200).json({key:process.env.KEY})
})

// Admin-Dashboard All orders
router.get('/getOrderAdmindashboard', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.log('Error fetching orders:', error);
    res.status(500).json({ error: 'An error occurred while fetching orders.' });
  }
});

router.post('/getOrderAdmin',fetchuser, async (req, res) => {
  try {
    // console.log("hello");
    const orders = await Order.find({}).sort({status: 1}).sort({ orderId: -1 });
    // console.log(orders);
    res.json({ orders });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/changeStatus', fetchuser, async(req, res) => {
  try {
    const {_id, orderId, newStatus, contactNo} = req.body;
    // console.log(req.body)
    const updatedOrder = await Order.findOneAndUpdate(
      {
        _id,
        orderId,
        contactNo
      },
      { $set: {status: newStatus} },
      {new: true}
    );

    // console.log(updatedOrder);
    res.json(updatedOrder); 

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
})

module.exports = router;
