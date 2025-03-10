const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser');

const app = express(); 
const PORT = process.env.PROT || 5000; 

const invitedGuests = [
    'john doe',
    'jane smith',
    'mark johnson'
]

//Middleware 
app.use(cors()); 
app.use(bodyParser.json()); 

//Test route 
app.get('/', (req,res)=>{
    res.send('Wedding RSVP API is running!');
})

app.post('/rsvp',(req,res)=>{
    const {firstName,lastName, accept, email, adults, children5to10, childrenUnder5,message} = req.body;

    const fullName = `${firstName.toLowerCase()} ${lastName.toLowerCase()}`;

    if(!invitedGuests.includes(fullName)) {
        return res.status(400).json({message: 'Your name is not on the guest list'});
    }

    const rsvpData = {
        fullName,
        accept,
        email,
        adults,
        children5to10,
        childrenUnder5,
        message
    };

    console.log('RSVP recieved:', rsvpData);

    res.status(200).json({
        message: 'Thank you for your RSVP!',
        data: rsvpData
    })
    
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);    
})

