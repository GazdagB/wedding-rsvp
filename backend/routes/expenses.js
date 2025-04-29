const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.get('/', async (req,res) =>{
   try {
         const expenses = await Expense.find();
            if (!expenses) {
                return res.status(404).json({ message: 'No expenses found' });
            }
         res.status(200).json(expenses);
    
   } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ message: 'Error fetching expenses' });
   }
})

router.get('/:id', async (req,res)=>{
    try{
        const expense = await Expense.findById(req.params.id);
        if (!expense){
            return res.status(404).json({message: 'Expense not found'});
        }

        res.status(200).json(expense)
    } catch(error){
        console.error(error); 
        res.status(500).json({message: 'Error geting expense'})
    }
})

router.post('/', async (req,res) => {
    try {
        const { name, amount, date, description, category } = req.body;
        const newExpense = new Expense({ name, amount, date, description, category });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ message: 'Error creating expense' });
    }
}
)

router.put('/:id', async (req, res) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json(updatedExpense);
    } catch (error) {
        console.error('Error updating expense:', error);
        res.status(500).json({ message: 'Error updating expense' });
    }
}
)

router.delete('/:id', async (req,res)=>{
    try{
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
        if (!deletedExpense){
            return res.status(404).json({message: 'Expense not found'});
        }
        res.status(200).json({message: 'Expense deleted successfully'})
    } catch(error){
        console.error(error); 
        res.status(500).json({message: 'Error deleting expense'})
    }
})

module.exports = router;