const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const Room = require('./models/Room');

const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        seedRooms();
    })
    .catch((err) => console.error('Connection error:', err));


async function seedRooms() {
    const existingRooms = await Room.find();
    if (existingRooms.length === 0) {
        const rooms = [
            { type: 'Standard', price: 800, availableRooms: 5 },
            { type: 'Deluxe', price: 1200, availableRooms: 5 },
            { type: 'Family', price: 2500, availableRooms: 5 },
            { type: 'Luxury', price: 5000, availableRooms: 5 },
            { type: 'Superstar', price: 100000, availableRooms: 1 },
        ];
        await Room.insertMany(rooms);
        console.log('Seeded initial room data');
    } else {
        console.log('Rooms already exist, skipping seeding');
    }
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
