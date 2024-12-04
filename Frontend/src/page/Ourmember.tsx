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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                      {/* Member 1 */}
                      

                      {/* Member 2 */}
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member4}
                              alt="นิตินัทธ์ ล้ออุทัย"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-6 text-center">
                              <h3 className="text-1m font-semibold text-gray-800">นิตินัทธ์ ล้ออุทัย</h3>
                              <p className="text-gray-500 mt-2">ตำแหน่ง: หัวหน้า </p>
                              <p className="text-gray-500">Project Manager: Design ระบบ วางแผนงาน แบ่งงาน </p>
                              <p className="text-gray-500">Frontend: ทำให้สามารถเรียกใช้งานฟังก์ชั่นจากฝั่ง Frontendได้  </p>
                              <p className="text-gray-500">Backend: ทำฟังก์ชั้น CRUD ทั้งระบบ สร้างDatabase  </p>
                              <p className="text-gray-400 mt-4">ID: 1650703596</p>
                          </div>
                      </div>

                      {/* Member 3 */}
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member1}
                              alt="หรรษธร เกษียร"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-6 text-center">
                              <h3 className="text-1m font-semibold text-gray-800">หรรษธร เกษียร</h3>
                              <p className="text-gray-500 mt-2">ตำแหน่ง: นักออกแบบ</p>
                              <p className="text-gray-500">Frontend: ออกแบบ UI Design Systemของเว็บไซต์ </p>
                              <p className="text-gray-500">Backend:เพิ่มปุ่มเรียกใช้ฟังก์ชั่นที่จะเรียกใช้ระบบหลังบ้าน  </p>
                              <p className="text-gray-400 mt-4">ID: 1650700964</p>
                          </div>
                      </div>

                      {/* Member 4 */}
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member2}
                              alt="อมาวสุ ด้วงอินทร์"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-6 text-center">
                              <h3 className="text-1m font-semibold text-gray-800">อมาวสุ ด้วงอินทร์</h3>
                              <p className="text-gray-500 mt-2">ตำแหน่ง: UI Design </p>
                              <p className="text-gray-500">Frontend:หน้าประวัติการจอง </p>
                              <p className="text-gray-500"> Backend:ดึงข้อมูลจากฐานข้อมูลมาลงหน้าเว็บ</p>
                              <p className="text-gray-400 mt-4">ID: 1650704404</p>
                          </div>
                      </div>

                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member3}
                              alt="ฐิติกรณ์ นันทเดชะ"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-6 text-center">
                              <h3 className="text-1m font-semibold text-gray-800">ฐิติกรณ์ นันทเดชะ</h3>
                              <p className="text-gray-500 mt-2">ตำแหน่ง: เด็กฝึกงาน</p>
                              <p className="text-gray-500">Frontend: จัดตำแหน่งของข้อมูล</p>
                              <p className="text-gray-500"> Backend:Testข้อมูลจาก Postman </p>
                              <p className="text-gray-400 mt-4">ID: 1650703901</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Ourmember;
