const express = require('express'); 
const Whish = require('../models/Whishes'); 

const router = express.Router();

router.post("/",async (req,res)=>{

    const {message, author, iconType} = req.body; 

    const newWish = new Whish({
        message,
        author,
        iconType
    })

    try {
       await newWish.save(); 
       res.status(200).json({
        message: "Thank you for your wish",
        data: newWish
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"})
    }
})

router.get("/all",async (req,res)=>{
    try {
        const allWhishes =await Whish.find({});
        res.status(200).json({
            data: allWhishes
        })
    } catch (error) {
        res.status(400).json({message: "Can't find whish"})
        console.log(error);
    }

})

module.exports = router;