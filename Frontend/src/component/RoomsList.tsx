// src/components/RoomsList.tsx
import React from "react";

type Room = {
    id: string;
    name: string;
    type: string;
    price: number;
    available: boolean;
};

const rooms: Room[] = [
    { id: "1", name: "Room A", type: "Single", price: 500, available: true },
    { id: "2", name: "Room B", type: "Double", price: 800, available: false },
    { id: "3", name: "Room C", type: "Suite", price: 1200, available: true },
];

const RoomsList: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Available Rooms</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rooms.map((room) => (
                    <div
                        key={room.id}
                        className={`p-4 border rounded-lg ${room.available ? "bg-green-100" : "bg-gray-200"
                            }`}
                    >
                        <h2 className="text-xl font-semibold">{room.name}</h2>
                        <p>{room.type}</p>
                        <p className="text-gray-500">Price: ${room.price}</p>
                        <button
                            className={`mt-4 px-4 py-2 rounded ${room.available ? "bg-blue-500 text-white" : "bg-gray-400"
                                }`}
                            disabled={!room.available}
                        >
                            {room.available ? "Book Now" : "Unavailable"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomsList;
