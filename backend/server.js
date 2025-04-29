const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
require('dotenv').config(); 
const rsvpRoutes = require('./routes/rsvp');
const adminRoutes = require('./routes/admin')
const whishRouter = require('./routes/whishes');
const {router : AuthRouter, verifyToken} = require('./routes/auth')
const errorHandler = require('./middleware/errorHandler');
const expensesRouter = require('./routes/expenses');

const app = express(); 
const PORT = process.env.PORT || 5000; 

//Middleware 
app.use(cors()); 
app.use(bodyParser.json()); 

//Test route 
app.get('/', (req,res)=>{
    res.send('Wedding RSVP API is running!');
})

app.use('/rsvp',rsvpRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', AuthRouter)
app.use('/whish', whishRouter)
app.use('/expenses', expensesRouter)

app.use(errorHandler)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ MongoDB Atlas connection error:", err);
  });



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);    
})

