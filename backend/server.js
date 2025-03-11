const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
require('dotenv').config(); 
const rsvpRoutes = require('./routes/rsvp');

const app = express(); 
const PORT = process.env.PROT || 5000; 

//Middleware 
app.use(cors()); 
app.use(bodyParser.json()); 

//Test route 
app.get('/', (req,res)=>{
    res.send('Wedding RSVP API is running!');
})

app.use('/rsvp',rsvpRoutes)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);    
})

