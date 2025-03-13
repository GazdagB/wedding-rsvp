const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();

router.post('/login', (req,res)=>{
    const {username,password} = req.body; 

    if (password === process.env.ADMIN_PASS && username === process.env.ADMIN_USERNAME ){
        const token = jwt.sign(
            {isAdmin: true},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        );

        res.status(200).json({
            success: true,
            token
        });
    } else{
        res.status(401).json({message: 'Invalid username or password'}); 
    }
})

router.post('/logout', (req,res)=>{
    res.status(200).json({
        success: true,
        message: 'Logged out successfully'
    })
})

module.exports = router;