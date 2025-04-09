const express = require('express'); 
const Whish = require('../models/Whishes'); 

const router = express.Router();

router.post("/",async (req,res)=>{

    const {message, author, iconType,password,familyName} = req.body; 

    const newWish = new Whish({
        message,
        author,
        iconType,
        familyName,
        password
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

router.delete("/all/:password", async (req,res)=>{
    try{
            const {password} = req.params; 
    
            if(password !== process.env.ADMIN_PASS){
                return res.status(401).json({message: 'Unauthorized. Incorrect password.'})
            }
    
            const result = await Whish.deleteMany({});
    
            res.status(200).json({
                message: 'All Whishes deleted successfully',
                deletedCount: result.deletedCount
            })
        } catch(error){
            console.error('Error deleting all Whishes:', error);
            res.status(500).json({message: 'Error deletin all Whishes'});
        }

})

module.exports = router;