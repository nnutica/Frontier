import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type PaymentModalProps = {
    onClose: () => void; // กำหนดชนิดของ onClose เป็นฟังก์ชันที่ไม่มีพารามิเตอร์และไม่มีค่าที่ส่งกลับ
};

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
    const [selectedMethod, setSelectedMethod] = useState<string>("");
    const navigate = useNavigate();

    const handlePayment = () => {
        if (!selectedMethod) {
            alert("Please select a payment method.");
            return;
        }
        onClose(); // ปิด Modal
        navigate("/processing"); // ไปหน้า Wait Payment Process
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>

                {/* ตรงนี้ตกแต่งได้ พยายามยุ่งแค่ในส่วนของ ClassName กับ ข้อความในTag P */}
                <div className="space-y-2">
                    <div
                        className={`border rounded-lg p-3 ${selectedMethod === "credit_card" ? "bg-blue-100" : ""
                            }`}
                        onClick={() => setSelectedMethod("credit_card")}
                    >
                        <h3 className="font-bold">Credit Card</h3>
                        <p className="text-sm text-gray-600">Pay with your credit card.</p>
                    </div>
                    <div
                        className={`border rounded-lg p-3 ${selectedMethod === "paypal" ? "bg-blue-100" : ""
                            }`}
                        onClick={() => setSelectedMethod("paypal")}
                    >
                        <h3 className="font-bold">PayPal</h3>
                        <p className="text-sm text-gray-600">Pay using your PayPal account.</p>
                    </div>
                    <div
                        className={`border rounded-lg p-3 ${selectedMethod === "bank_transfer" ? "bg-blue-100" : ""
                            }`}
                        onClick={() => setSelectedMethod("bank_transfer")}
                    >
                        <h3 className="font-bold">Bank Transfer</h3>
                        <p className="text-sm text-gray-600">Transfer money to our bank.</p>
                    </div>
                </div>
                {/* สิ้นสุดวิธีชำระ */}
                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handlePayment}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
