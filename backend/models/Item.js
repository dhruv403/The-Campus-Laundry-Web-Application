const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: [Number],
    required: true,
  },
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
