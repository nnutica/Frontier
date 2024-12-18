import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import qrpayment from "../assets/qrpayment.png";

type PaymentModalProps = {
    onClose: () => void; 
};

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
    const [selectedMethod, setSelectedMethod] = useState<string>("");
    const [loading, setLoading] = useState(false); // เพิ่ม state สำหรับ loading
    const navigate = useNavigate();
    const { bookingId } = useParams<{ bookingId: string }>(); // ดึง bookingId จาก URL

    const handlePayment = async () => {
        if (!selectedMethod) {
            alert("Please select a payment method.");
            return;
        }

        setLoading(true); // เริ่มโหลด
        try {
            // อัปเดต paymentStatus เป็น "Paid"
            await axios.put(`/api/bookings/${bookingId}`, {
                paymentStatus: "Paid",
            });

            onClose(); // ปิด Modal
            navigate("/processing"); // ไปหน้า Wait Payment Process
        } catch (error) {
            console.error("Error updating payment status:", error);
            alert("Failed to update payment status. Please try again.");
        } finally {
            setLoading(false); // จบโหลด
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>

                
                <div className="space-y-2">
                    <div
                        className={`border rounded-lg p-3 ${
                            selectedMethod === "credit_card" ? "bg-blue-100" : ""
                        }`}
                        onClick={() => setSelectedMethod("credit_card")}
                    >
                        <h3 className="font-bold">Credit Card</h3>
                        <p className="text-sm text-gray-600">Pay with your credit card.</p>
                    </div>
                    <div
                        className={`border rounded-lg p-3 ${
                            selectedMethod === "paypal" ? "bg-blue-100" : ""
                        }`}
                        onClick={() => setSelectedMethod("paypal")}
                    >
                        <h3 className="font-bold">PayPal</h3>
                        <p className="text-sm text-gray-600">Pay using your PayPal account.</p>
                    </div>
                    <div
                        className={`border rounded-lg p-3 ${
                            selectedMethod === "bank_transfer" ? "bg-blue-100" : ""
                        }`}
                        onClick={() => setSelectedMethod("bank_transfer")}
                    >
                        <h3 className="font-bold">Bank Transfer</h3>
                        <p className="text-sm text-gray-600">Transfer money to our bank.</p>
                    </div>
                    {/* เพิ่ม QR Payment */}
                    <div
                        className={`border rounded-lg p-3 ${
                            selectedMethod === "qr_payment" ? "bg-blue-100" : ""
                        }`}
                        onClick={() => setSelectedMethod("qr_payment")}
                    >
                        <h3 className="font-bold">QR Payment</h3>
                        <p className="text-sm text-gray-600">Pay by scanning a QR code.</p>
                        {selectedMethod === "qr_payment" && (
                            <div className="mt-4">
                                <h4 className="font-semibold">Scan this QR Code:</h4>
                                <img
                                    src={qrpayment} // ใส่ path รูป QR Code
                                    alt="QR Code"
                                    className="mt-2 w-40 h-40 mx-auto"
                                />
                            </div>
                        )}
                    </div>
                </div>
                {/* สิ้นสุดวิธีชำระ */}
                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                        disabled={loading} // ปิดปุ่มระหว่างโหลด
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handlePayment}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg"
                        disabled={loading} // ปิดปุ่มระหว่างโหลด
                    >
                        {loading ? "Processing..." : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
