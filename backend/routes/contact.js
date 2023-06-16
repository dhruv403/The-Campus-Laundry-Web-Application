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
    console.log(error);
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

router.get('/getMessage', async(req, res) => {
  try {
    console.log("hello");
    // const messages = await Messages.find().sort((a, b) => {
    //   const dateA = new Date(a.messageDate);
    //   const dateB = new Date(b.messageDate);
    //   return dateA - dateB;
    // });;

    let message;
    message = await Messages.find().exec();
      
      // Sort messages by messageDate
      message.sort((a, b) => {
        const dateA = new Date(a.messageDate);
        const dateB = new Date(b.messageDate);
        return dateB - dateA;
      });
    console.log(message);
    res.json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router;