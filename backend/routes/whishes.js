const express = require('express'); 
const Whish = require('../models/Whishes'); 
const path = require("path")
const verifyToken = require("../middleware/auth")
const fs = require("fs")
const { MISSING_PASSWORD, GUEST_NOT_FOUND, INCORRECT_PASSWORD, LIMIT_REACHED, SERVER_ERROR } = require('../utils/errorsCodes');
const AppError = require('../utils/AppError')

//TODO: Do not return passwords 

const router = express.Router();

const invitedGuestsPath = path.join(__dirname, '../data/invitedGuests.json');
const invitedGuests = JSON.parse(fs.readFileSync(invitedGuestsPath, 'utf8'))

router.post("/",async (req,res, next)=>{

    const {message, author, iconType,password,familyName} = req.body; 

    if(!password){
        return next(new AppError(MISSING_PASSWORD.message, MISSING_PASSWORD.statusCode))
    }

    const guest = invitedGuests.find(g => g.familyName === familyName);

    if(!guest){
       return next(new AppError(GUEST_NOT_FOUND.message, GUEST_NOT_FOUND.statusCode))
    }

    if(guest.password !== password){
        return next(new AppError(INCORRECT_PASSWORD.message, INCORRECT_PASSWORD.statusCode))
    }

    const submittedCount = await Whish.find({familyName: familyName})
    console.log(submittedCount);
    

    if(submittedCount.length > 3){
        return next(new AppError(LIMIT_REACHED.message, LIMIT_REACHED.statusCode));
    }

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
        next(new AppError(SERVER_ERROR.message, SERVER_ERROR.statusCode))
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

router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedWhish = await Whish.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedWhish) {
            return res.status(404).json({ message: 'Whish not found' });
        }
        res.status(200).json(updatedWhish);
    } catch (error) {
        console.error('Error updating RSVP:', error);
        res.status(500).json({ message: 'Error updating RSVP' });
    }
});

module.exports = router;