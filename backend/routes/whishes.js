const express = require('express'); 
const Whish = require('../models/Whishes'); 
const path = require("path")
const fs = require("fs")

const router = express.Router();

const invitedGuestsPath = path.join(__dirname, '../data/invitedGuests.json');
const invitedGuests = JSON.parse(fs.readFileSync(invitedGuestsPath, 'utf8'))

router.post("/",async (req,res)=>{

    const {message, author, iconType,password,familyName} = req.body; 

    if(!password){
        return res.status(400).json({message: 'A jelszó megadása kötelező!'}); 
    }

    const guest = invitedGuests.find(g => g.familyName === familyName);

    if(!guest){
       return res.status(400).json({message: 'A neved nem szerepl a listán vagy elírtad.'})
    }

    if(guest.password !== password){
        return res.status(400).json({message: 'Hibás jelszó. Kérlek ellenőrizd a meghívódon szereplő jelszót.'}); 
    }

    const submittedCount = await Whish.find({familyName: familyName})
    console.log(submittedCount);
    

    if(submittedCount.length > 3){
        return res.status(400).json({message: "Elfogytak a beküldhető üzeneteid 3/3 üzenet beküldve."})
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