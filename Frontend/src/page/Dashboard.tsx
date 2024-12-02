
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
    const [rooms, setRooms] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/rooms').then(res => setRooms(res.data));
        axios.get('http://localhost:5000/api/bookings').then(res => setBookings(res.data));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-semibold">Rooms</h2>
                    <ul>
                        {rooms.map((room: any, index) => (
                            <li key={index}>
                                {room.type} - ${room.price} (Available: {room.availableRooms})
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Bookings</h2>
                    <ul>
                        {bookings.map((booking: any, index) => (
                            <li key={index}>
                                {booking.guestName} - {booking.roomType} (Check-in: {new Date(booking.checkIn).toLocaleDateString()})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
