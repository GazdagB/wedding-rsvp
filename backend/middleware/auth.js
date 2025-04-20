const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET; 

// Middleware to verify JWT token
const verifyToken = (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if(!token){
        return res.status(401).json({message: 'No token provided'});
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        next(); 
    } catch (error) {
        if(error.name = 'TokenExpiredError'){
            return res.status(401).json({message: 'Token Expired'})
        }

        return res.status(403).json({message: 'Invalid token'})
    }

};

  module.exports = verifyToken;