const express = require('express');
const RSVP = require('../models/Rsvp');
const path = require('path');
const fs = require("fs")
const verifyToken = require('../middleware/auth')

const router = express.Router();

// Read the JSON file directly using fs
const invitedGuestsPath = path.join(__dirname, '../data/invitedGuests.json');
const invitedGuests = JSON.parse(fs.readFileSync(invitedGuestsPath, 'utf8'))

//POST an RSVP
router.post('/', async (req, res) => {
    const { familyName, accept, email, adults, children5to10, childrenUnder5, message, adultsNames, children5to10Names, childrenUnder5Names, password } = req.body;

    if(!password){
        return res.status(400).json({message: 'A jelszó megadása kötelező!'}); 
    }

    const existingRsvp = await RSVP.findOne({ familyName });
        if (existingRsvp) {
            return res.status(400).json({ message: 'Nem sikerült beküldeni. Már érkezett tőled visszajelzés!' });
        }


    // Check if the guest is on the invite list
    const guest = invitedGuests.find(g => g.familyName === familyName);

    if(!guest){
       return res.status(400).json({message: 'A neved nem szerepl a listán vagy elírtad.'})
    }

    if(guest.password !== password){
        return res.status(400).json({message: 'Hibás jelszó. Kérlek ellenőrizd a meghívódon szereplő jelszót.'}); 
    }

    // Create a new RSVP document
    const newRsvp = new RSVP({
        familyName,
        accept,
        email,
        adults,
        children5to10,
        childrenUnder5,
        adultsNames,
        children5to10Names,
        childrenUnder5Names,
        message
    });

    try {
        // Save the RSVP to the database
        await newRsvp.save();
    

        res.status(200).json({
            message: 'Thank you for your RSVP!',
            data: newRsvp
        });
    } catch (error) {
        console.error('Error saving RSVP:', error);
        res.status(500).json({ message: 'Valamilyen hiba történt a beküldés folyamán.' });
    }
});

//GET ALL RSVPS
router.get('/all', async (req,res)=>{
    try{
        const {status} = req.query; 
        let filter = {}; 

        if (status) {
            if (status !== 'accepted' && status !== 'declined') {
                return res.status(400).json({ message: 'Invalid status value. Please use accepted or declined.' });
            }
            filter.accept = status === 'accepted'; // Convert query string to boolean
        }

        const rsvps = await RSVP.find(filter);
        res.status(200).json(rsvps)
    } catch (error){
        console.log('Error fetching RSVPs:', error);
        res.status(500).json({message: "Error fetching RSVPs"})
    }
})

router.get('/counts', verifyToken, async (req, res) => {
    try {
      if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Hozzáférés megtagadva. Adminisztrátori jogosultságok szükségesek.' });
      }
  
      const acceptedRsvps = await RSVP.find({ accept: true });
  
      let totalAdults = 0;
      let totalChildren5to10 = 0; // Fixed property name
      let totalChildrenUnder5 = 0;
  
      acceptedRsvps.forEach(rsvp => {
        totalAdults += rsvp.adults || 0;
        totalChildren5to10 += rsvp.children5to10 || 0; // Fixed: using children5to10 instead of childrenUnder5
        totalChildrenUnder5 += rsvp.childrenUnder5 || 0;
      });
  
      res.status(200).json({
        totalAdults,
        totalChildren5to10, // Fixed property name
        totalChildrenUnder5,
        totalAttendees: totalAdults + totalChildren5to10 + totalChildrenUnder5
      });
    } catch (error) {
      console.error('Error calculating RSVP counts', error);
      res.status(500).json({ message: 'Error calculating RSVP counts' });
    }
  });

//GET RSVP
router.get('/:id', async (req,res)=>{
    try{
        const rsvp = await RSVP.findById(req.params.id);
        if (!rsvp){
            return res.status(404).json({message: 'RSVP not found'});
        }

        res.status(200).json(rsvp)
    } catch(error){
        console.error(error); 
        res.status(500).json({message: 'Error geting RSVP'})
    }
})

//Update RSVP
router.put('/:id', async (req, res) => {
    try {
        const updatedRsvp = await RSVP.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRsvp) {
            return res.status(404).json({ message: 'RSVP not found' });
        }
        res.status(200).json(updatedRsvp);
    } catch (error) {
        console.error('Error updating RSVP:', error);
        res.status(500).json({ message: 'Error updating RSVP' });
    }
});

router.delete('/all/:password', async (req,res)=>{
    try{
        const {password} = req.params; 

        if(password !== process.env.ADMIN_PASS){
            return res.status(401).json({message: 'Unauthorized. Incorrect password.'})
        }

        const result = await RSVP.deleteMany({});

        res.status(200).json({
            message: 'All RSVPs deleted successfully',
            deletedCount: result.deletedCount
        })
    } catch(error){
        console.error('Error deleting all RSVPs:', error);
        res.status(500).json({message: 'Error deletin all RSVPs'});
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const rsvpToDelete = await RSVP.findByIdAndDelete(req.params.id);
        if(!rsvpToDelete){
            res.status(400).json({message: "Couldn't find the RSVP"})
        }

        res.status(200).json({message: 'RSVP deleted sucsessfully!'});
    } catch(error){
        console.error(error); 

    }
})



module.exports = router; 