const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// GET all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find(); // ตรวจสอบว่า `availableRooms` มีในผลลัพธ์
        res.json(rooms);
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


// POST create a room
router.post('/', async (req, res) => {
    const room = new Room(req.body);
    await room.save();
    res.status(201).json(room);
});

// PUT update a room
router.put('/:id', async (req, res) => {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRoom);
});

// DELETE a room
router.delete('/:id', async (req, res) => {
    await Room.findByIdAndDelete(req.params.id);
    res.status(204).end();
});
// GET a single room by ID
router.get('/:id', async (req, res) => {
    try {
        console.log("Fetching room with ID:", req.params.id); // ตรวจสอบค่า ID ที่ส่งมา
        const room = await Room.findById(req.params.id);
        if (!room) {
            console.log("Room not found");
            return res.status(404).json({ message: "Room not found" });
        }
        res.json(room);
    } catch (error) {
        console.error("Error fetching room:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.get('/:id/availability', async (req, res) => {
    try {
        console.log("Fetching room with ID:", req.params.id); // ตรวจสอบค่า ID ที่ส่งมา
        const room = await Room.findById(req.params.id);
        if (!room) {
            console.log("Room not found");
            return res.status(404).json({ message: "Room not found" });
        }
        res.json(room);
    } catch (error) {
        console.error("Error fetching room:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.put('/:id/increment', async (req, res) => {
    try {
        const room = await Room.findOneAndUpdate(
            { type: req.params.id }, // ใช้ type แทน _id
            { $inc: { availableRooms: 1 } },
            { new: true }
        );
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.json(room);
    } catch (error) {
        console.error("Error incrementing room availability:", error);
        res.status(500).json({ message: "Error incrementing room availability", error });
    }
});

router.put('/:id/decrement', async (req, res) => {
    try {
        const room = await Room.findOneAndUpdate(
            { type: req.params.id }, // ใช้ type แทน _id
            { $inc: { availableRooms: -1 } },
            { new: true }
        );
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.json(room);
    } catch (error) {
        console.error("Error decrementing room availability:", error);
        res.status(500).json({ message: "Error decrementing room availability", error });
    }
});


router.put('/:id', async (req, res) => {
    const { previousRoomType, newRoomType, ...bookingData } = req.body;

    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });

        // ถ้าประเภทห้องเปลี่ยนแปลง
        if (previousRoomType !== newRoomType) {
            // เพิ่มห้องว่างให้ประเภทห้องเดิม
            await Room.findOneAndUpdate(
                { type: previousRoomType },
                { $inc: { availableRooms: 1 } }
            );
            // ลดห้องว่างให้ประเภทห้องใหม่
            const updatedRoom = await Room.findOneAndUpdate(
                { type: newRoomType },
                { $inc: { availableRooms: -1 } },
                { new: true }
            );
            if (!updatedRoom || updatedRoom.availableRooms < 0) {
                return res.status(400).json({ message: "Not enough rooms available" });
            }
        }

        // อัปเดตข้อมูลการจอง
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, bookingData, { new: true });
        res.json(updatedBooking);
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;
