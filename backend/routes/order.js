const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const  { Order, orderValidationSchema } = require('../models/Order');

// Route: POST /api/order/orders
// Description: Store order details in the database
// Access: Private (authenticated route)
router.post('/orders', async (req, res) => {
  try {
    // res.send("hello")
    const { name, email, contactNo, hostel, roomNo, paymentMethod, hashMap } = req.body;


    const { error } = orderValidationSchema.validate(req.body);
    console.log(error);
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
      hashMap
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

module.exports = router;
