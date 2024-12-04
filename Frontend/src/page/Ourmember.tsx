import Member1 from "../assets/member1.png"
import Member2 from "../assets/member2.png"
import Member3 from "../assets/member3.png"
import Member4 from "../assets/member4.png"
import {Nut,Tar,Korya,Sam} from "../content/memberdata"
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
                              <h3 className="text-2xl font-semibold text-gray-800 text-center">{Nut.name}</h3>
                              <span className=" bottom-font-semibold">ตำแหน่ง:</span><span className="text-blue-600 mt-2">{Nut.Role}</span><br />
                              <span className=" bottom-font-semibold">Project Manager:</span><span className="text-blue-600 mt-2">{Nut.ProjectManager}</span><br />
                              <span className=" bottom-font-semibold">Frontend:</span><span className="text-blue-600 mt-2">{Nut.Frontend}</span><br />
                              <span className=" bottom-font-semibold">Backend:</span><span className="text-blue-600 mt-2">{Nut.Backend}  </span><br />
                              <span className=" bottom-font-semibold">ID:</span><span className="text-blue-600 mt-2">{Nut.StudentID}</span><br />
                          </div>
                      </div>

                     
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member1}
                              alt="หรรษธร เกษียร"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                          <h3 className="text-2xl font-semibold text-gray-800 text-center">{Tar.name}</h3>
                              <span className=" bottom-font-semibold">ตำแหน่ง:</span><span className="text-blue-600 mt-2">{Tar.Role}</span><br />
                              <span className=" bottom-font-semibold">Frontend:</span><span className="text-blue-600 mt-2">{Tar.Frontend}</span><br />
                              <span className=" bottom-font-semibold">Backend:</span><span className="text-blue-600 mt-2">{Tar.Backend} </span><br />
                              <span className=" bottom-font-semibold">ID:</span><span className="text-blue-600 mt-2">{Tar.StudentID}</span><br />
                          </div>
                      </div>

                     
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member2}
                              alt="อมาวสุ ด้วงอินทร์"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                          <h3 className="text-2xl font-semibold text-gray-800 text-center">{Korya.name}</h3>
                              <span className=" bottom-font-semibold">ตำแหน่ง:</span><span className="text-blue-600 mt-2">{Korya.Role} </span><br />
                              <span className=" bottom-font-semibold">Frontend:</span><span className="text-blue-600 mt-2">{Korya.Frontend}</span><br />
                              <span className=" bottom-font-semibold">Backend:</span><span className="text-blue-600 mt-2">{Korya.Backend}</span><br />
                              <span className=" bottom-font-semibold">ID:</span><span className="text-blue-600 mt-2">{Korya.StudentID}</span><br />
                          </div>
                      </div>

                      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                          <img
                              src={Member3}
                              alt="ฐิติกรณ์ นันทเดชะ"
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                          <h3 className="text-2xl font-semibold text-gray-800 text-center">{Sam.name}</h3>
                              <span className=" bottom-font-semibold">ตำแหน่ง:</span><span className="text-blue-600 mt-2">{Sam.Role}</span><br />
                              <span className=" bottom-font-semibold">Frontend:</span><span className="text-blue-600 mt-2">{Sam.Frontend}</span><br />
                              <span className=" bottom-font-semibold">Backend:</span><span className="text-blue-600 mt-2">{Sam.Backend}</span><br />
                              <span className=" bottom-font-semibold">ID:</span><span className="text-blue-600 mt-2">{Sam.StudentID}</span><br />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Ourmember;
