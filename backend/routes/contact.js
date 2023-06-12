const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const  { Messages, messageValidationSchema } = require('../models/Message');

// Route: POST /api/order/orders
// Description: Store order details in the database
// Access: Private (authenticated route)
router.post('/sendMessage',fetchuser, async (req, res) => {
  try {
    // res.send("hello")
    const { name, email, contactNo, message } = req.body;


    const { error } = messageValidationSchema.validate(req.body);
    // console.log(error);
    if (error) {
      // Return a response indicating validation error
      return res.status(400).json({ error: error.details[0].message });
    }
    // Create a new order document
    const messageObj = new Messages({
      name,
      email,
      contactNo,
      message
    });
    console.log(messageObj);
    // Save the order to the database
    await messageObj.save();

    res.json(messageObj);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;