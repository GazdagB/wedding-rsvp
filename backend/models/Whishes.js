const mongoose = require('mongoose');

const whishesSchema = new mongoose.Schema({
    message: {type: String, required: true},
    author: {type: String, required: true},
    iconType: {type: String, required:true}
})

module.exports = mongoose.model('Whishes', whishesSchema)