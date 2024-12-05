import React, { useState } from "react";

interface BookingDeleteModalProps {
  onConfirm: () => Promise<void>;
  onCancel: () => void;
}

const BookingDeleteModal: React.FC<BookingDeleteModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const handleDelete = async () => {
    try {
      await onConfirm(); // เรียกฟังก์ชันลบข้อมูล
      setDeleteSuccess(true); // เปลี่ยนเป็นสถานะสำเร็จ
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete booking.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        {deleteSuccess ? (
          <div className="text-center">
            <h2 className="text-lg font-bold text-green-600 mb-4">
              Delete Successful
            </h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={onCancel} // กดปุ่มนี้เพื่อปิด Modal
            >
              OK
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this booking?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={onCancel} // ปิด Modal โดยไม่ลบข้อมูล
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDelete} // ลบข้อมูล
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingDeleteModal;
