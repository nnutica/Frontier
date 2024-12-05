import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PaymentModal from "../component/PaymentModal";

interface Booking {
  guestName: string;
  guests: number;
  roomType: string;
  checkIn: string; // ISO 8601 date-time string
  checkOut: string; // ISO 8601 date-time string
  totalPrice: number;
}

const PaymentPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const [bookingData, setBookingData] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`/api/bookings/${bookingId}`);
        setBookingData(response.data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (bookingId) {
      fetchBookingData();
    }
  }, [bookingId]);

  // Format the date to display only the day, month, and year
  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString("en-GB"); // Change to 'en-GB' or 'th-TH' for Thai format
  };

  // Calculate the number of nights between check-in and check-out dates
  const calculateNumberOfNights = (checkIn: string, checkOut: string) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    return timeDifference / (1000 * 3600 * 24); // Convert time difference from milliseconds to days
  };

  // Calculate the price per night
  const calculatePricePerNight = (totalPrice: number, numberOfNights: number) => {
    return totalPrice / numberOfNights;
  };

  if (loading) return <p>Loading...</p>;
  if (!bookingData) return <p>Booking not found.</p>;

  const numberOfNights = calculateNumberOfNights(bookingData.checkIn, bookingData.checkOut);
  const pricePerNight = calculatePricePerNight(bookingData.totalPrice, numberOfNights);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Payment Summary</h1>
      <h1 className="text-3xl font-bold mb-6">User: {bookingData.guestName} </h1>
      
      {showPaymentModal && <PaymentModal onClose={() => setShowPaymentModal(false)} />}
        
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-4">Receipt</h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Guest Name:</span>
            <span className="font-semibold text-gray-800">{bookingData.guestName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Guest:</span>
            <span className="font-semibold text-gray-800">{bookingData.guests}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Room Type:</span>
            <span className="font-semibold text-gray-800">{bookingData.roomType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Check-In:</span>
            <span className="font-semibold text-gray-800">{formatDate(bookingData.checkIn)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Check-Out:</span>
            <span className="font-semibold text-gray-800">{formatDate(bookingData.checkOut)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Nights Stayed:</span>
            <span className="font-semibold text-gray-800">{numberOfNights}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Price Per Night:</span>
            <span className="font-semibold text-gray-800">{pricePerNight.toFixed(2)}฿</span>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-800">Total Price:</span>
            <span className="text-lg font-bold text-blue-600">{bookingData.totalPrice.toFixed(2)}฿</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Thank you for your stay!</p>
          <p className="text-gray-500 text-sm">We hope to see you again soon.</p>
        </div>
        <div className="flex justify-center mt-6">
      <button
        onClick={() => setShowPaymentModal(true)}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
      >
        Choose Payment Method
      </button>
         </div>
      </div>
    </div>
  );
};

export default PaymentPage;
