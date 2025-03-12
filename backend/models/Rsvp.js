const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    accept: { type: Boolean, required: true },
    email: { type: String, required: true },
    adults: { type: Number, required: true },
    children5to10: { type: Number, required: true },
    childrenUnder5: { type: Number, required: true },
    adultsNames: { type: [String], default: [] },
    children5to10Names: { type: [String], default: [] },
    childrenUnder5Names: { type: [String], default: [] },
    message: { type: String },
});

module.exports = mongoose.model('Rsvp', rsvpSchema);