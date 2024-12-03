import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
    bookingId: string;
    onClose: () => void;
}

const rooms = [
    { type: "Standard", price: 800, availableRooms: 5 },
    { type: "Deluxe", price: 1200, availableRooms: 5 },
    { type: "Family", price: 2500, availableRooms: 5 },
    { type: "Luxury", price: 5000, availableRooms: 5 },
    { type: "Superstar", price: 100000, availableRooms: 1 },
];

const BookingUpdateModal: React.FC<Props> = ({ bookingId, onClose }) => {
    const [guestName, setGuestName] = useState("");
    const [roomType, setRoomType] = useState("");
    const [guests, setGuests] = useState(1);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("Pending");

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await axios.get(`/api/bookings/${bookingId}`);
                const booking = response.data;
                setGuestName(booking.guestName);
                setRoomType(booking.roomType);
                setGuests(booking.guests);
                setCheckIn(booking.checkIn);
                setCheckOut(booking.checkOut);
                setPaymentStatus(booking.paymentStatus);
            } catch (error) {
                console.error("Error fetching booking details:", error);
            }
        };
        fetchBooking();
    }, [bookingId]);

    const handleUpdate = async () => {
        const updatedBooking = {
            guestName,
            roomType,
            guests,
            checkIn,
            checkOut,
            paymentStatus,
        };

        try {
            await axios.put(`/api/bookings/${bookingId}`, updatedBooking);
            alert("Booking updated successfully!");
            onClose();
        } catch (error) {
            console.error("Error updating booking:", error);
            alert("Failed to update booking.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Update Booking</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Guest Name</label>
                        <input
                            type="text"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Room Type</label>
                        <select
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        >
                            {rooms.map((room) => (
                                <option key={room.type} value={room.type}>
                                    {room.type} - ฿{room.price} ({room.availableRooms} available)
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Number of Guests</label>
                        <input
                            type="number"
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Check-In</label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Check-Out</label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Payment Status</label>
                        <select
                            value={paymentStatus}
                            onChange={(e) => setPaymentStatus(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleUpdate}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingUpdateModal;
