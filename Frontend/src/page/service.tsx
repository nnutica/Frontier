
function Service() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">บริการของเรา</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          เรามุ่งมั่นในการมอบประสบการณ์การจองโรงแรมที่สะดวกสบาย รวดเร็ว และปลอดภัย
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="bg-blue-100 text-blue-500 p-4 rounded-full">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H9"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">ค้นหาโรงแรม</h3>
            <p className="text-gray-600 mt-2">
              ค้นหาโรงแรมที่ตรงกับความต้องการของคุณจากหลายพันแห่งทั่วโลก.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="bg-green-100 text-green-500 p-4 rounded-full">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V7a1 1 0 00-1-1h-6V5a1 1 0 00-1-1H8a1 1 0 00-1 1v1H5a1 1 0 00-1 1v6a1 1 0 001 1h6v6a1 1 0 001 1h6a1 1 0 001-1v-6z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">การจองออนไลน์</h3>
            <p className="text-gray-600 mt-2">
              จองห้องพักผ่านระบบออนไลน์ที่รวดเร็วและปลอดภัย พร้อมการยืนยันทันที.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="bg-yellow-100 text-yellow-500 p-4 rounded-full">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4zm-7 6a7 7 0 0114 0H5z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">สนับสนุนลูกค้า</h3>
            <p className="text-gray-600 mt-2">
              ทีมงานพร้อมให้บริการช่วยเหลือ 24/7 ในการแก้ไขปัญหาการจอง.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Service