import "../index.css"

function Home() {

    return (
        
<div className="min-h-screen bg-gray-100 py-12">
  {/* Promo Cards Header */}
  <header className="text-center mb-8">
    <h2 className="text-3xl font-bold">โปรโมชั่นพิเศษ</h2>
    <p className="text-lg text-gray-600">เลือกจากโปรโมชั่นที่ดีที่สุดของเรา</p>
  </header>

  {/* Promo Cards Grid */}
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Promo Card 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '100%', height: 'auto' }}>
        <img
          src="https://via.placeholder.com/200x150"
          alt="Promo 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-blue-600">โปรโมชั่น 1</h3>
          <p className="text-gray-700 text-sm">ส่วนลด 20% สำหรับการจองห้องพักครั้งแรก</p>
          <p className="text-lg font-bold text-blue-500 mt-2">฿2,000/คืน</p>
          <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
            จองเลย
          </button>
        </div>
      </div>

      {/* Promo Card 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '100%', height: 'auto' }}>
        <img
          src="https://via.placeholder.com/200x150"
          alt="Promo 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-blue-600">โปรโมชั่น 2</h3>
          <p className="text-gray-700 text-sm">รับฟรี! อาหารเช้าสำหรับ 2 ท่านเมื่อจองห้องพัก</p>
          <p className="text-lg font-bold text-blue-500 mt-2">฿3,500/คืน</p>
          <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
            จองเลย
          </button>
        </div>
      </div>

      {/* Promo Card 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '100%', height: 'auto' }}>
        <img
          src="https://via.placeholder.com/200x150"
          alt="Promo 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-blue-600">โปรโมชั่น 3</h3>
          <p className="text-gray-700 text-sm">ห้องพักพร้อมบริการสปาฟรี</p>
          <p className="text-lg font-bold text-blue-500 mt-2">฿4,000/คืน</p>
          <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
            จองเลย
          </button>
        </div>
      </div>

      {/* Promo Card 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '100%', height: 'auto' }}>
        <img
          src="https://via.placeholder.com/200x150"
          alt="Promo 4"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-blue-600">โปรโมชั่น 4</h3>
          <p className="text-gray-700 text-sm">รับส่วนลด 15% สำหรับการจองห้องพักระยะยาว</p>
          <p className="text-lg font-bold text-blue-500 mt-2">฿5,000/คืน</p>
          <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
            จองเลย
          </button>
        </div>
      </div>
    </div>
  </div>
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

export default Home