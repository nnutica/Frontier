import { useState } from "react";
import PaymentModal from "../component/PaymentModal/PaymentModal";

const PaymentPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        /* Modal Component */
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Payment</h1>
            {/* แก้ตรงนี้ เป็นคล้ายๆหน้า สรุปค่าใช้จ่ายที่ต้องชำระ*/}

            <button
                onClick={handleOpenModal}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow"
            >
                Choose Payment Method
            </button>

            {/* เปิด Modal */}
            {showModal && <PaymentModal onClose={handleCloseModal} />}
        </div>
    );
};

export default PaymentPage;
