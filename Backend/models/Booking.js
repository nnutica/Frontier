const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingId: { type: String },
    guestName: { type: String, required: true },
    roomType: { type: String, required: true },
    guests: { type: Number, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
},{ timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
