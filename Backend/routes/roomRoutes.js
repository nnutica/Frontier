const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// GET all rooms
router.get('/', async (req, res) => {
    const rooms = await Room.find();
    res.json(rooms);
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

module.exports = router;
