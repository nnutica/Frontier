import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingUpdateModal from "../component/BookingUpdateModal";

interface Booking {
    _id: string;
    guestName: string;
    roomType: string;
    guests: number;
    checkIn: string;
    checkOut: string;
    paymentStatus: string;
}

const BookingHistory: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("/api/bookings");
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };
        fetchBookings();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this booking?")) return;

        try {
            await axios.delete(`/api/bookings/${id}`);
            setBookings(bookings.filter((booking) => booking._id !== id));
            alert("Booking deleted successfully!");
        } catch (error) {
            console.error("Error deleting booking:", error);
            alert("Failed to delete the booking.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Booking History</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Guest Name</th>
                            <th className="border border-gray-300 px-4 py-2">Room Type</th>
                            <th className="border border-gray-300 px-4 py-2">Guests</th>
                            <th className="border border-gray-300 px-4 py-2">Check-In</th>
                            <th className="border border-gray-300 px-4 py-2">Check-Out</th>
                            <th className="border border-gray-300 px-4 py-2">Payment Status</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td className="border border-gray-300 px-4 py-2">{booking.guestName}</td>
                                <td className="border border-gray-300 px-4 py-2">{booking.roomType}</td>
                                <td className="border border-gray-300 px-4 py-2">{booking.guests}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {new Date(booking.checkIn).toLocaleDateString()}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {new Date(booking.checkOut).toLocaleDateString()}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{booking.paymentStatus}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                                        onClick={() => setSelectedBookingId(booking._id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                        onClick={() => handleDelete(booking._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedBookingId && (
                <BookingUpdateModal
                    bookingId={selectedBookingId}
                    onClose={() => setSelectedBookingId(null)}
                />
            )}
        </div>
    );
};

export default BookingHistory;
