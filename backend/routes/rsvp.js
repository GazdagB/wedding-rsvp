const express = require('express'); 
const RSVP = require('../models/Rsvp'); 

const router = express.Router(); 

const invitedGuests = [
    'john doe',
    'jane smith',
    'mark johnson',
    'erika máté',
    'gazdag balázs',
    'gazdag sándor'
]

//POST an RSVP
router.post('/', async (req, res) => {
    const { firstName, lastName, accept, email, adults, children5to10, childrenUnder5, message } = req.body;

    const fullName = `${firstName.trim().toLowerCase()} ${lastName.trim().toLowerCase()}`;

    const existingRsvp = await RSVP.findOne({ fullName });
        if (existingRsvp) {
            return res.status(400).json({ message: 'Nem sikerült beküldeni. Már érkezett tőled visszajelzés!' });
        }


    // Check if the guest is on the invite list
    if (!invitedGuests.includes(fullName)) {
        return res.status(400).json({ message: 'A neved nem szerepel a vendég listán vagy elírtad.' });
    }

    // Create a new RSVP document
    const newRsvp = new RSVP({
        fullName,
        accept,
        email,
        adults,
        children5to10,
        childrenUnder5,
        message
    });

    try {
        // Save the RSVP to the database
        await newRsvp.save();
        console.log('RSVP received:', newRsvp);

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