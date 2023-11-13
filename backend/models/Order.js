const mongoose = require('mongoose');

const { Schema } = mongoose;
const Joi = require('joi');

const OrderSchema = new Schema({
    orderId: {
        type: Number,
        required: true,
        unique: true,
        },
    name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  hostel: {
    type: String,
    required: true,
  },
  roomNo: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  hashMap: {
    type: Map,
    of: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  orderDate: {
    type: String,
    default: () => {
        const date = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  serviceNo: {
    type: Number,
    required:true
  },
  razorpay_order_id:{
    type:String,
    required:true,
},
razorpay_payment_id:{
    type:String,
    required:true,
},
razorpay_signature:{
    type:String,
    required:true,
},
});


const orderValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().regex(/@lnmiit.ac.in$/).required(),
  contactNo: Joi.string().pattern(/^[0-9]{10}$/).required(),
  hostel: Joi.string().valid('bh1', 'bh2', 'bh3', 'bh4', 'bh-1', 'bh-2', 'bh-3', 'bh-4').required().lowercase(),
  roomNo: Joi.string().required(),
  paymentMethod: Joi.string().required(),
  hashMap: Joi.object().required(),
  status: Joi.boolean().default(false),
  orderDate: Joi.string(),
  totalPrice: Joi.number().required(),
  serviceNo: Joi.number().valid(0, 1, 2, 3, 4, 5).required(),
  razorpay_order_id: Joi.string(),
  razorpay_payment_id: Joi.string(),
  razorpay_signature: Joi.string(),
  // Add other fields and their validation rules
});


const Order = mongoose.model('Order', OrderSchema);
module.exports = {
    Order,
    orderValidationSchema,
  };
