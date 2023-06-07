const mongoose = require('mongoose');
const Item = require('./models/Item'); // Assuming you have defined the Item schema/model

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://AtulRatnawat:mongodb@cluster0.fhtvk2m.mongodb.net/BTP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the item data
const itemData = [
    {
        "name": "shirt",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Jeans",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Pant",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "T-Shirt",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "shirt",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Lower",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Towel",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Shorts",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Bed Sheet",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Pillow Cover",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Dohar",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Vest",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Underwear",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Socks",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Hanky",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Shoes",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Blanket",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Jacket",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Sweater",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Hoodie",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Bag",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    },
    {
        "name": "Curtain",
        "price": [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60"
        ]
    }
];

// Insert the item data into the collection
Item.insertMany(itemData)
  .then(() => {
    console.log('Item data inserted successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error inserting item data:', err);
    mongoose.connection.close();
  });
