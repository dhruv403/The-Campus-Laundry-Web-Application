const express = require('express');
const router = express.Router();

const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//for password hasing -> Protection
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'Atul'
var jwt = require('jsonwebtoken');

const fetchuser = require('../middleware/fetchuser')
const Item = require('../models/Item')

//Route1: Create a User using: POST "/api/auth/createuser". Doesn't requires authentication.

router.post('/createuser',[
    body('name','Enter a Valid Name').isLength({min: 5}),
    body('email', 'Enter a Valid Email Address').isEmail(),
    body('password', 'Please Enter the Correct Password').isLength({min: 5}),
] ,async (req,res)=>{

    let success = false;
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    // whether the user with this email exists already.
    try{
        let user= await User.findOne({email: req.body.email});
        if(user)
        {
            return res.status(404).json({error: "Sorry a user with this email already exists"})
        }
        
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password,salt);
        //create a new user
        user = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
        });

        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success = true;
        res.json({success,authtoken});
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server: Some error occured");
    }
})

//Route2: Authenticate a User using: "/api/auth/login". No login required

router.post('/login',[
    body('email', 'Enter a Valid Email Address').isEmail(),
    body('password','Enter a valid password').exists(),
] ,async (req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        // console.log(user.password);
        if(!user)
        {
            success = false;
            return res.status(400).json({error: 'Invalid User'});
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare)
        {
            success=false;
            return res.status(400).json({success, error: 'Invalid User'});
        }
        
        const data = {
            user:{
                id: user.id
            }
        }
        
        const authtoken = jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success, authtoken});

    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server: Some error Occured");
    }
})

//Route3: Get loggedin User Details using: POST '/api/auth/getuser' Login Required

router.post('/getuser', fetchuser ,async (req,res)=>{
    try{
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    }catch(error)
    {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/checkout', (req,res) => {
    console.log("hello");
    console.log(req.body);
})

// Route to fetch item prices
router.get('/items', async (req, res) => {
    try {
      const items = await Item.find({}, 'name price');
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
module.exports = router