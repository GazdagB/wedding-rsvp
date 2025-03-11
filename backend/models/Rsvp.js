const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    accept: {
        type: Boolean,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    adults: {
        type: Number,
        required: true,
    },
    children5to10: {
        type: Number,
        required: true,
    },
    childrenUnder5: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        default: ''
    }
})

const Rsvp = mongoose.model('Rsvp', rsvpSchema);

module.exports = Rsvp;