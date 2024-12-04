import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
    bookingId: string;
    onClose: () => void;
}

interface Room {
    type: string;
    price: number;
    availableRooms: number;
}

const BookingUpdateModal: React.FC<Props> = ({ bookingId, onClose }) => {
    const [formData, setFormData] = useState({
        guestName: "",
        roomType: "",
        previousRoomType: "",
        guests: 1,
        checkIn: "",
        checkOut: "",
        paymentStatus: "Pending",
    });
    const [rooms, setRooms] = useState<Room[]>([]);
    const [error, setError] = useState("");

    // Fetch available rooms from the database
    const fetchRooms = async () => {
        try {
            const { data } = await axios.get("/api/rooms");
            setRooms(data); // Assuming API returns an array of rooms
        } catch (err) {
            console.error("Error fetching rooms:", err);
            setError("Failed to load available rooms.");
        }
    };

    // Fetch booking details by ID
    const fetchBooking = async () => {
        try {
            const { data } = await axios.get(`/api/bookings/${bookingId}`);
            setFormData({
                guestName: data.guestName,
                roomType: data.roomType,
                previousRoomType: data.roomType, // เก็บค่าห้องเดิมไว้ใช้เปรียบเทียบ
                guests: data.guests,
                checkIn: data.checkIn,
                checkOut: data.checkOut,
                paymentStatus: data.paymentStatus,
            });
        } catch (error) {
            console.error("Error fetching booking:", error);
            setError("Failed to load booking details. Please try again later.");
        }
    };

    useEffect(() => {
        fetchRooms(); // Load rooms on component mount
        fetchBooking(); // Load booking details on component mount
    }, [bookingId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { guestName, roomType, checkIn, checkOut } = formData;
        if (!guestName || !roomType || !checkIn || !checkOut) {
            setError("Please fill in all required fields.");
            return false;
        }
        return true;
    };

    const handleUpdate = async () => {
        if (!validateForm()) return;

        try {
            const { roomType, previousRoomType, ...rest } = formData;

            // ถ้าห้องเดิมและห้องใหม่ไม่เหมือนกัน ให้ส่งคำขอไป backend
            if (roomType !== previousRoomType) {
                // เพิ่มห้องว่างให้ห้องเดิม
                await axios.put(`/api/rooms/${previousRoomType}/increment`);

                // ลดห้องว่างจากห้องใหม่
                await axios.put(`/api/rooms/${roomType}/decrement`);
            }

            // อัปเดตข้อมูลการจอง
            await axios.put(`/api/bookings/${bookingId}`, { ...rest, roomType });

            alert("Booking updated successfully!");
            onClose();
        } catch (error) {
            console.error("Error updating booking:", error);
            setError("Failed to update booking. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Update Booking</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Guest Name</label>
                        <input
                            type="text"
                            name="guestName"
                            value={formData.guestName}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Room Type</label>
                        <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="" disabled>
                                Select a room type
                            </option>
                            {rooms.map((room) => (
                                <option key={room.type} value={room.type}>
                                    {room.type} - ฿{room.price} ({room.availableRooms} available)
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Number of Guests</label>
                        <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={(e) =>
                                setFormData({ ...formData, guests: Number(e.target.value) })
                            }
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Check-In</label>
                        <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Check-Out</label>
                        <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Payment Status</label>
                        <select
                            name="paymentStatus"
                            value={formData.paymentStatus}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
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
                </div>
            </div>
        </div>
    );
};

export default BookingUpdateModal;
