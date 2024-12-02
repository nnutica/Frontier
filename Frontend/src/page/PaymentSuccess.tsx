
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    return (
        /* แก้/ตกแต่ง ClassNameในนี้ */
        <div className="flex flex-col items-center justify-center h-screen bg-green-100">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
            <p className="text-gray-700">Thank you for your payment.</p>

            <button
                onClick={() => navigate("/")}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-6"
            >
                Back to Home
            </button>
        </div>
    );
};

export default PaymentSuccessPage;
