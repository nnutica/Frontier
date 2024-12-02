import React from "react";

interface Room {
    _id: string;
    type: string;
    price: number;
    availableRooms: number;
}

interface Props {
    room: Room;
    onBook: () => void;
}

const RoomCard: React.FC<Props> = ({ room, onBook }) => {
    return (
        <div className="border rounded-lg shadow-md p-4">
            <img
                src={`https://via.placeholder.com/400x300?text=${room.type}`}
                alt={room.type}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{room.type}</h2>
            <p className="text-gray-600">Price: ${room.price} / night</p>
            <p className="text-gray-600">Available Rooms: {room.availableRooms}</p>
            <button
                onClick={onBook}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
            >
                Book Now
            </button>
        </div>
    );
};

export default RoomCard;
