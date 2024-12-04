import React from "react";
import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";
import room3 from "../assets/room3.png";
import room4 from "../assets/room4.png";
import room5 from "../assets/room5.png";

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
  const getImageUrl = (roomType: string) => {
    switch (roomType) {
      case "Standard":
        return room3;
      case "Deluxe":
        return room1;
      case "Family":
        return room2;
      case "Luxury":
        return room4;
      case "Superstar":
        return room5;
      default:
        return room3; // Default image if type doesn't match
    }
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={getImageUrl(room.type)}
        alt={room.type}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{room.type}</h2>
      <p className="text-gray-600">Price: {room.price} baht / night</p>
      <p className="text-gray-600">
        Available Rooms: {room.availableRooms > 0 ? room.availableRooms : "No rooms available"}
      </p>
      <button
        onClick={onBook}
        disabled={room.availableRooms === 0} // Disable button if no rooms available
        className={`bg-blue-500 text-white px-4 py-2 rounded mt-4 ${
          room.availableRooms === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        Book Now
      </button>
    </div>
  );
};

export default RoomCard;
