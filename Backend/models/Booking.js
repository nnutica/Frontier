const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingId: { type: String },
    guestName: { type: String, required: true },
    roomType: { type: String, required: true },
    guests: { type: Number, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
});

module.exports = mongoose.model('Booking', bookingSchema);
