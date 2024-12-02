function Roomtype() {
    return (
        <div>
            <div className="min-h-screen bg-gray-100">
      {/* Room Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Room 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Deluxe Room"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Deluxe Room</h2>
              <p className="text-gray-700 mb-4">
                ห้องพักหรูหรา พร้อมวิวสวยงามและสิ่งอำนวยความสะดวกครบครัน
              </p>
              <p className="text-blue-500 font-semibold text-lg mb-4">฿2,500/คืน</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                จองเลย
              </button>
            </div>
          </div>

          {/* Room 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Family Suite"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Family Suite</h2>
              <p className="text-gray-700 mb-4">
                ห้องพักสำหรับครอบครัว กว้างขวางและสะดวกสบาย
              </p>
              <p className="text-blue-500 font-semibold text-lg mb-4">฿4,500/คืน</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                จองเลย
              </button>
            </div>
          </div>

          {/* Room 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Standard Room"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Standard Room</h2>
              <p className="text-gray-700 mb-4">
                ห้องพักมาตรฐาน สะอาดและคุ้มค่าราคา
              </p>
              <p className="text-blue-500 font-semibold text-lg mb-4">฿1,500/คืน</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                จองเลย
              </button>
            </div>
          </div>

          {/* Room 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Executive Suite"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Luxury Suite</h2>
              <p className="text-gray-700 mb-4">
                ห้องพักพิเศษสำหรับผู้บริหาร พร้อมสิ่งอำนวยความสะดวกชั้นเยี่ยม
              </p>
              <p className="text-blue-500 font-semibold text-lg mb-4">฿6,000/คืน</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                จองเลย
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
        </div>
    )
}

export default Roomtype