const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const  { Order, orderValidationSchema } = require('../models/Order');
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
