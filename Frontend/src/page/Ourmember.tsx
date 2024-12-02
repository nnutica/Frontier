

function Ourmember() {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">สมาชิกในทีม</h2>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Member 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/200"
              alt="สมชาย ใจดี"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">ฐิติกรณ์ นันทเดชะ</h3>
              <p className="text-gray-600">ตำแหน่ง: หัวหน้าทีม</p>
              <p className="text-gray-600">หน้าที่: วางแผนและบริหารโครงการ</p>
              <p className="text-gray-600">ID: 1650703901</p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/200"
              alt="สมหญิง สง่า"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">นิตินัทธ์ ล้ออุทัย</h3>
              <p className="text-gray-600">ตำแหน่ง: นักพัฒนา</p>
              <p className="text-gray-600">หน้าที่: เขียนโค้ดและพัฒนาเว็บไซต์</p>
              <p className="text-gray-600">ID: 1650703596</p>
            </div>
          </div>

          {/* Member 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/200"
              alt="ปริญญา เปี่ยมสุข"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">หรรษธร เกษียร</h3>
              <p className="text-gray-600">ตำแหน่ง: นักออกแบบ</p>
              <p className="text-gray-600">หน้าที่: ออกแบบ UI/UX</p>
              <p className="text-gray-600">ID: 1650700964</p>
            </div>
          </div>

          {/* Member 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/200"
              alt="ธนา ทองดี"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">อมาวสุ ด้วงอินทร์</h3>
              <p className="text-gray-600">ตำแหน่ง: นักการตลาด</p>
              <p className="text-gray-600">หน้าที่: วางแผนการตลาดและโฆษณา</p>
              <p className="text-gray-600">ID: 1650704404</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Ourmember