import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProcessingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/payment-success"); // ไปหน้า Payment Success หลังจาก 5 วินาที
        }, 5000);

        return () => clearTimeout(timer); // ล้าง timer เมื่อออกจากหน้า
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Processing Payment...</h1>
            <p className="text-gray-600">Please wait while we confirm your payment.</p>
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mt-6 duration-500"></div>
        </div>
    );
};

export default ProcessingPage;
