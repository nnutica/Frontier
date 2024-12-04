import Member1 from "../assets/member1.png"
import Member2 from "../assets/member2.png"
import Member3 from "../assets/member3.png"
import Member4 from "../assets/member4.png"
function Ourmember() {
  return (
      <div>
          <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100 py-12">
              <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                      Member
                  </h2>

                  {/* Team Member Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                     
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member4}
                              alt="นิตินัทธ์ ล้ออุทัย"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                              <h3 className="text-2xl font-semibold text-gray-800 text-center">นิตินัทธ์ ล้ออุทัย</h3>
                              <span className=" bottom-font-semibold">ตำแหน่ง:</span><span className="text-blue-600 mt-2">Project Manager Design ระบบ วางแผนงาน แบ่งงาน</span><br />
                              <span className=" bottom-font-semibold">Frontend:</span><span className="text-blue-600 mt-2">ทำให้สามารถเรียกใช้งานฟังก์ชั่นจากฝั่ง Frontendได้</span><br />
                              <span className=" bottom-font-semibold">Backend:</span><span className="text-blue-600 mt-2">ทำฟังก์ชั้น CRUD ทั้งระบบ สร้างDatabase  </span><br />
                              <span className=" bottom-font-semibold">ID:</span><span className="text-blue-600 mt-2">1650703596</span><br />
                          </div>
                      </div>

                     
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member1}
                              alt="หรรษธร เกษียร"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                          <h3 className="text-2xl font-semibold text-gray-800 text-center">หรรษธร เกษียร</h3>
                              <span className=" bottom-font-semibold">ตำแหน่ง:</span><span className="text-blue-600 mt-2">System Design Frontend-Main-Developer</span><br />
                              <span className=" bottom-font-semibold">Frontend:</span><span className="text-blue-600 mt-2">ออกแบบ UI Design Systemของเว็บไซต์</span><br />
                              <span className=" bottom-font-semibold">Backend:</span><span className="text-blue-600 mt-2">เพิ่มปุ่มเรียกใช้ฟังก์ชั่นที่จะเรียกใช้ระบบหลังบ้าน  </span><br />
                              <span className=" bottom-font-semibold">ID:</span><span className="text-blue-600 mt-2">1650700964</span><br />
                          </div>
                      </div>

                     
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member2}
                              alt="อมาวสุ ด้วงอินทร์"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                          <h3 className="text-2xl font-semibold text-gray-800 text-center">อมาวสุ ด้วงอินทร์</h3>
                              <span className=" bottom-font-semibold">ตำแหน่ง:</span><span className="text-blue-600 mt-2">UI Structure Design Frontend-Main-Developer </span><br />
                              <span className=" bottom-font-semibold">Frontend:</span><span className="text-blue-600 mt-2">หน้าประวัติการจอง</span><br />
                              <span className=" bottom-font-semibold">Backend:</span><span className="text-blue-600 mt-2">ดึงข้อมูลจากฐานข้อมูลมาลงหน้าเว็บ </span><br />
                              <span className=" bottom-font-semibold">ID:</span><span className="text-blue-600 mt-2">1650704404</span><br />
                          </div>
                      </div>

                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member3}
                              alt="ฐิติกรณ์ นันทเดชะ"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                          <h3 className="text-2xl font-semibold text-gray-800 text-center">ฐิติกรณ์ นันทเดชะ</h3>
                              <span className=" bottom-font-semibold">ตำแหน่ง:</span><span className="text-blue-600 mt-2">Intern,Document,Asset Finder</span><br />
                              <span className=" bottom-font-semibold">Frontend:</span><span className="text-blue-600 mt-2">จัดตำแหน่งของข้อมูล หาAssetมาลงหน้าเว็บ</span><br />
                              <span className=" bottom-font-semibold">Backend:</span><span className="text-blue-600 mt-2">จัดการวางAsset Roomให้ตรงตามข้อมูลในDatabase </span><br />
                              <span className=" bottom-font-semibold">ID:</span><span className="text-blue-600 mt-2">1650703901</span><br />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Ourmember;
