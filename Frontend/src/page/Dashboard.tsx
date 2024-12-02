import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
    const [rooms, setRooms] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/rooms').then((res) => setRooms(res.data));
        axios.get('http://localhost:5000/api/bookings').then((res) => setBookings(res.data));
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Rooms Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Rooms</h2>
                    <ul className="divide-y divide-gray-200">
                        {rooms.map((room: any, index) => (
                            <li key={index} className="py-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">
                                        {room.type} - ${room.price}
                                    </span>
                                    <span className="text-sm text-green-600">
                                        Available: {room.availableRooms}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bookings Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Bookings</h2>
                    <ul className="divide-y divide-gray-200">
                        {bookings.map((booking: any, index) => (
                            <li key={index} className="py-2">
                                <div className="flex flex-col">
                                    <span className="text-gray-700 font-medium">
                                        {booking.guestName}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {booking.roomType} (Check-in: {new Date(booking.checkIn).toLocaleDateString()})
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
