import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PaymentModal from "../component/PaymentModal";

interface Booking {
  guestName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
}

const PaymentPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>(); // ดึง bookingId จาก URL
  const [bookingData, setBookingData] = useState<Booking | null>(null); // เก็บข้อมูลการจอง
  const [loading, setLoading] = useState(true); // สถานะโหลด
  const [showPaymentModal, setShowPaymentModal] = useState(false); // สำหรับเปิด/ปิด Modal

  // ดึงข้อมูลการจองจาก backend
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`/api/bookings/${bookingId}`); // ดึงข้อมูลจาก backend
        setBookingData(response.data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      } finally {
        setLoading(false); // หยุดโหลดไม่ว่าดึงสำเร็จหรือไม่
      }
    };

    if (bookingId) {
      fetchBookingData(); // เรียกใช้งานฟังก์ชัน
    }
  }, [bookingId]);

  if (loading) return <p>Loading...</p>; // ระหว่างโหลดข้อมูล
  if (!bookingData) return <p>Booking not found.</p>; // หากไม่พบข้อมูล

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Payment Summary</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* แสดงข้อมูลการจอง */}
        <p><strong>Guest Name:</strong> {bookingData.guestName}</p>
        <p><strong>Room Type:</strong> {bookingData.roomType}</p>
        <p><strong>Check-In:</strong> {new Date(bookingData.checkIn).toLocaleDateString()}</p>
        <p><strong>Check-Out:</strong> {new Date(bookingData.checkOut).toLocaleDateString()}</p>
        <p><strong>Total Price:</strong> {bookingData.totalPrice} baht</p>

        {/* ปุ่มเปิด Payment Modal */}
        <button
          onClick={() => setShowPaymentModal(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow mt-6 hover:bg-blue-600"
        >
          Choose Payment Method
        </button>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && <PaymentModal onClose={() => setShowPaymentModal(false)} />}
    </div>
  );
};

export default PaymentPage;
