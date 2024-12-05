import "../index.css"
import Promotion1 from "../assets/Promotion1.png"
import Promotion2 from "../assets/Promotion2.png"
import Promotion3 from "../assets/Promotion3.png"
import Promotion4 from "../assets/Promotion4.png"
import Room1 from "../assets/room1.png"
import Room2 from "../assets/room2.png"
import Room3 from "../assets/room3.png"
import Room4 from "../assets/room4.png"
import Room5 from "../assets/room5.png"
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl" style={{ width: '100%', height: 'auto' }}>
            <img
              src={Promotion1}
              alt="Promo 1"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600">Welcome Deal</h3>
              <p className="text-gray-700 text-sm">ส่วนลด 20% สำหรับการจองครั้งแรกในราคา 2,000 บาท/คืน พร้อมให้คุณเริ่มต้นการพักผ่อนสุดพิเศษ</p>
              <p className="text-lg font-bold text-blue-500 mt-2">฿1,200/คืน</p>
              <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
                จองเลย
              </button>
            </div>
          </div>

          {/* Promo Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl" style={{ width: '100%', height: 'auto' }}>
            <img
              src={Promotion3}
              alt="Promo 3"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600">Breakfast Bliss</h3>
              <p className="text-gray-700 text-sm">รับฟรี! อาหารเช้าสำหรับ 2 ท่าน เมื่อจองห้องพักราคา 3,500 บาท/คืน เติมเต็มความสุขทุกเช้า</p>
              <p className="text-lg font-bold text-blue-500 mt-2">฿2,500/คืน</p>
              <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
                จองเลย
              </button>
            </div>
          </div>

          {/* Promo Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl" style={{ width: '100%', height: 'auto' }}>
            <img
              src={Promotion2}
              alt="Promo 2"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600">Relaxation Retreat</h3>
              <p className="text-gray-700 text-sm">ห้องพักหรูพร้อม บริการสปาฟรี สำหรับจองที่พักราคา 4,000 บาท/คืน สัมผัสความผ่อนคลายในทุกมิติ</p>
              <p className="text-lg font-bold text-blue-500 mt-2">฿800/คืน</p>
              <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
                จองเลย
              </button>
            </div>
          </div>

          {/* Promo Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl" style={{ width: '100%', height: 'auto' }}>
            <img
              src={Promotion4}
              alt="Promo 4"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600">Long Stay Saver</h3>
              <p className="text-gray-700 text-sm">รับส่วนลด 15% สำหรับการจองที่พักระยะยาว ในราคาห้องพัก 5,000 บาท/คืน คุ้มค่าทุกวันแห่งการพักผ่อน</p>
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl">
              <img
              src={Room3}
              alt="Room 3"
              className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Standard Room</h2>
                <p className="text-gray-700 mb-4">
                  ห้องพักมาตรฐาน สะอาดและคุ้มค่าราคา
                </p>
                <p className="text-blue-500 font-semibold text-lg mb-4">฿800/คืน</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  จองเลย
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl">
              <img
              src={Room1}
              alt="Room 1"
              className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Deluxe Room</h2>
                <p className="text-gray-700 mb-4">
                  ห้องพักหรูหรา พร้อมวิวสวยงามและสิ่งอำนวยความสะดวกครบครัน
                </p>
                <p className="text-blue-500 font-semibold text-lg mb-4">฿1,200/คืน</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  จองเลย
                </button>
              </div>
            </div>

            {/* Room 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl">
              <img
              src={Room2}
              alt="Room 2"
              className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Family Suite</h2>
                <p className="text-gray-700 mb-4">
                  ห้องพักสำหรับครอบครัว กว้างขวางและสะดวกสบาย
                </p>
                <p className="text-blue-500 font-semibold text-lg mb-4">฿2,500/คืน</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  จองเลย
                </button>
              </div>
            </div>

            {/* Room 3 */}
            

            {/* Room 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden px-4 hover:shadow-2xl">
              <img
              src={Room4}
              alt="Room 4"
              className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Luxury Suite</h2>
                <p className="text-gray-700 mb-4">
                  ห้องพักพิเศษสำหรับผู้บริหาร พร้อมสิ่งอำนวยความสะดวกชั้นเยี่ยม
                </p>
                <p className="text-blue-500 font-semibold text-lg mb-4">฿5,000/คืน</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  จองเลย
                </button>
              </div>
            </div>
          </div>
          <br />
          {/* Room 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl">
              <img
              src={Room5}
              alt="Room 5"
              className="w-full h-96 object-cover scale-x-full scale-y-60"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Superstar</h2>
                <p className="text-gray-700 mb-4">
                  ห้องพักพิเศษสำหรับผู้บริหาร พร้อมสิ่งอำนวยความสะดวกชั้นเยี่ยม
                </p>
                <p className="text-blue-500 font-semibold text-lg mb-4">฿100,000/คืน</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  จองเลย
                </button>
              </div>
            </div>
        </main>

      </div>
    </div>

  )
}

export default Home