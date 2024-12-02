import React, { useState } from "react";
import axios from "axios";

interface Room {
    _id: string;
    type: string;
    price: number;
}

interface Props {
    room: Room;
    onClose: () => void;
}

const BookingModal: React.FC<Props> = ({ room, onClose }) => {
    const [guestName, setGuestName] = useState("");
    const [guests, setGuests] = useState(1);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("Pending");

    const handleBooking = async () => {
        const booking = {
            bookingId: `${Date.now()}-${room.type}`,
            guestName,
            roomType: room.type,
            guests,
            checkIn,
            checkOut,
            paymentStatus,
        };
        console.log("Sending booking data:", booking);
        try {
            await axios.post("/api/bookings", booking);
            alert("Booking successful!");
            onClose();
        } catch (err) {
            console.error("Error booking room:", err);
            alert("Failed to book the room.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Book {room.type}</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Guest Name</label>
                        <input
                            type="text"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Number of Guests</label>
                        <input
                            type="number"
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="w-full border rounded px-3 py-2"
                            min={1}
                            max={room.type === "Superstar" ? 1 : 5}
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
                            onClick={handleBooking}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
