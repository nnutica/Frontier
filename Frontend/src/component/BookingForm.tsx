import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [availableRooms, setAvailableRooms] = useState<number | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomAvailability = async () => {
      try {
        const response = await axios.get(`/api/rooms/${room._id}/availability`);
        setAvailableRooms(response.data.availableRooms);
      } catch (err) {
        console.error("Error fetching room availability:", err);
      }
    };

    fetchRoomAvailability();
  }, [room._id]);

  const calculateTotalPrice = () => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const days = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
      if (days > 0) {
        setTotalPrice(days * room.price);
      } else {
        setTotalPrice(null);
      }
    } else {
      setTotalPrice(null);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [checkIn, checkOut]);

  const validateForm = () => {
    if (!guestName || !checkIn || !checkOut || guests < 1) {
      alert("Please fill in all required fields.");
      return false;
    }

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if (endDate <= startDate) {
      alert("Check-out date must be after check-in date.");
      return false;
    }

    if (availableRooms !== null && availableRooms <= 0) {
      alert("No rooms available for this type.");
      return false;
    }

    return true;
  };

  const handleBooking = async () => {
    if (!validateForm()) return;

    const booking = {
      bookingId: `${Date.now()}-${room.type}`,
      guestName,
      roomType: room.type,
      guests,
      checkIn,
      checkOut,
      totalPrice,
      paymentStatus: "Pending",
    };

    try {
      await axios.post("/api/bookings", booking);
      await axios.put(`/api/rooms/${room.type}/decrement`);
      setShowConfirmationModal(true);
    } catch (err) {
      console.error("Error booking room:", err);
      alert("Failed to book the room.");
    }
  };

  const handlePayNow = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      navigate("/payment");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Book {room.type} Room</h2>
        <p className="mb-4">
          <strong>Price:</strong> {room.price} baht per night
        </p>
        {availableRooms !== null ? (
          <p className="mb-4">
            <strong>Available Rooms:</strong> {availableRooms}
          </p>
        ) : (
          <p className="mb-4">Loading available rooms...</p>
        )}
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
          {totalPrice !== null && (
            <p className="mb-4 text-green-600">
              <strong>Total Price:</strong> {totalPrice} baht
            </p>
          )}
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
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            {!isRedirecting ? (
              <>
                <h2 className="text-xl font-bold mb-4">Booking Successful</h2>
                <p className="mb-4">
                  Your booking has been completed successfully.
                </p>
                <p className="mb-4">
                  If you choose "Pay Later," you can check your booking history in the Record page.
                </p>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setShowConfirmationModal(false);
                      onClose();
                    }}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                  >
                    Pay Later
                  </button>
                  <button
                    type="button"
                    onClick={handlePayNow}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Pay Now
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">Redirecting to Payment...</h2>
                <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 mx-auto animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingModal;
