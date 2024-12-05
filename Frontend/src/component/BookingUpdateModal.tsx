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
    totalPrice: 0, // เพิ่ม totalPrice
  });
  const [rooms, setRooms] = useState<Room[]>([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  // ดึงข้อมูลห้องพัก
  const fetchRooms = async () => {
    try {
      const { data } = await axios.get("/api/rooms");
      setRooms(data);
    } catch (err) {
      console.error("Error fetching rooms:", err);
      setError("Failed to load available rooms.");
    }
  };

  // ดึงข้อมูลการจอง
  const fetchBooking = async () => {
    try {
      const { data } = await axios.get(`/api/bookings/${bookingId}`);
      setFormData({
        guestName: data.guestName,
        roomType: data.roomType,
        previousRoomType: data.roomType,
        guests: data.guests,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        paymentStatus: data.paymentStatus,
        totalPrice: data.totalPrice || 0, // รับ totalPrice
      });
    } catch (error) {
      console.error("Error fetching booking:", error);
      setError("Failed to load booking details. Please try again later.");
    }
  };

  useEffect(() => {
    fetchRooms();
    fetchBooking();
  }, [bookingId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTotalPrice = () => {
    const room = rooms.find((r) => r.type === formData.roomType);
    if (!room) return;

    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    if (nights > 0) {
      const totalPrice = room.price * nights;
      setFormData((prev) => ({ ...prev, totalPrice })); // อัพเดตราคา
    }
  };

  useEffect(() => {
    if (formData.roomType && formData.checkIn && formData.checkOut) {
      calculateTotalPrice();
    }
  }, [formData.roomType, formData.checkIn, formData.checkOut]);

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

      if (roomType !== previousRoomType) {
        await axios.put(`/api/rooms/${previousRoomType}/increment`);
        await axios.put(`/api/rooms/${roomType}/decrement`);
      }

      await axios.put(`/api/bookings/${bookingId}`, { ...rest, roomType });

      setSuccessMessage("Booking updated successfully!");
    } catch (error) {
      console.error("Error updating booking:", error);
      setError("Failed to update booking. Please try again.");
      setErrorModal(true);
    }
  };

  const closeModal = () => {
    setSuccessMessage("");
    setErrorModal(false);
    onClose();
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
              <option value="" disabled>Select a room type</option>
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
              onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
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
          <div>
            <label className="block text-gray-700">Total Price</label>
            <input
              type="text"
              value={`฿${formData.totalPrice.toLocaleString()}`}
              readOnly
              className="w-full border rounded px-3 py-2 bg-gray-100"
            />
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
        {successMessage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold mb-4">Success</h3>
                        <p className="mb-4">{successMessage}</p>
                        <button
                            onClick={closeModal}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
            {errorModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold mb-4">Error</h3>
                        <p className="mb-4">{error}</p>
                        <button
                            onClick={closeModal}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}        
      </div>
    </div>
  );
};

export default BookingUpdateModal;
