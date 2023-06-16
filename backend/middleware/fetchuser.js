const jwt = require('jsonwebtoken')
const JWT_SECRET = 'Atul'

const fetchuser = (req,res,next) => {
    console.log("hello");
    //Get the user from jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token)
    {
        res.status(401).send({error: "Please Authenticate using a valid token"});
    }
    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        // console.log(data.user);
        next();
    }
    catch(error){
        res.status(401).send({error: "Please Authenticate using a valid token"});
    }
    
}

module.exports = fetchuser;