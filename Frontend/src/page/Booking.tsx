import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomCard from "../component/RoomCard";
import BookingModal from "../component/BookingForm";

interface Room {
    _id: string;
    type: string;
    price: number;
    availableRooms: number;
}

const Booking: React.FC = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get("/api/rooms");
                setRooms(response.data);
            } catch (err) {
                console.error("Error fetching rooms:", err);
            }
        };

        fetchRooms();
    }, []);

    const openModal = (room: Room) => {
        setSelectedRoom(room);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedRoom(null);
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Room Booking</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rooms.map((room) => (
                    <RoomCard key={room._id} room={room} onBook={() => openModal(room)} />
                ))}
            </div>
            {isModalOpen && selectedRoom && (
                <BookingModal room={selectedRoom} onClose={closeModal} />
            )}
        </div>
    );
};

export default Booking;
