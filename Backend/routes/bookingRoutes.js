const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// GET all bookings
router.get('/', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

// POST create a booking
router.post('/', async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
});

// DELETE a booking
router.delete('/:id', async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(204).end();
});
// PUT update a booking
router.put("/bookings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true } // ใช้ runValidators เพื่อตรวจสอบความถูกต้อง
        );

        if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });

        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ message: "Error updating booking", error });
    }
});

module.exports = router;
