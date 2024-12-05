const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();



router.get('/', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});


router.post('/', async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
});


router.delete('/:id', async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(204).end();
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });

        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ message: "Error updating booking", error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Requested ID:", id); 
        const booking = await Booking.findById(id); 
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' }); 
        }

        res.json(booking); 
    } catch (error) {
        console.error("Error fetching booking:", error); 
        res.status(500).json({ message: 'Error fetching booking', error });
    }
});


router.put('/:id/paymentStatus', async (req, res) => {
    try {
        const { id } = req.params;
        const { paymentStatus, paymentMethod } = req.body; 

        
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { paymentStatus, paymentMethod }, 
            { new: true, runValidators: true } 
        );

        if (!updatedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json(updatedBooking); 
    } catch (error) {
        console.error("Error updating payment status:", error);
        res.status(500).json({ message: "Error updating payment status", error });
    }
});





  

module.exports = router;
