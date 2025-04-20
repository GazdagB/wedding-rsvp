const express = require('express');
const jwt = require('jsonwebtoken'); 
const router = express.Router();
const verifyToken = require('../middleware/auth')


router.get('/validate-token', verifyToken, (req,res)=>{

    return res.status(200).json({
        valid: true,
        user: {
            isAdmin: req.user.isAdmin
        }
    })
})

module.exports ={
    router,
    verifyToken
}