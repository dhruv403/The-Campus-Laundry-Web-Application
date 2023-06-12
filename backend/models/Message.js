const mongoose = require('mongoose');

const { Schema } = mongoose;
const Joi = require('joi');

const MessageScema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
  contactNo: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  messageDate: {
    type: String,
    default: () => {
        const date = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    },
},
});


const messageValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().regex(/@lnmiit.ac.in$/).required(),
  contactNo: Joi.string().pattern(/^[0-9]{10}$/).required(),
  message: Joi.string().required(),
  orderDate: Joi.string(),
  // Add other fields and their validation rules
});


const Messages = mongoose.model('Messages', MessageScema);
module.exports = {
    Messages,
    messageValidationSchema,
  };