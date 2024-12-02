
export const Footer = () => {
    return (
<div className="min-h-screen flex flex-col">
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              {/* Company Info */}
              <div className="w-full sm:w-1/3 mb-4">
                <h3 className="text-lg font-bold mb-2">Two Cities Manufacturing</h3>
                <p>
                  บริษัทผู้นำด้านเครื่องทำลายล้างโลก
                </p>
              </div>
  
              {/* Links */}
              <div className="w-full sm:w-1/3 mb-4">
                <h3 className="text-lg font-bold mb-2">ลิงก์ที่มีประโยชน์</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      หน้าแรก
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      ผลิตภัณฑ์
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      ติดต่อเรา
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Contact */}
              <div className="w-full sm:w-1/3">
                <h3 className="text-lg font-bold mb-2">ติดต่อเรา</h3>
                <p>
                  โทรศัพท์:{" "}
                  <a href="tel:+441234567890" className="hover:underline">
                    +44 123 456 7890
                  </a>
                </p>
                <p>
                  อีเมล:{" "}
                  <a href="mailto:info@twocities.com" className="hover:underline">
                    sammy1234@twocities.com
                  </a>
                </p>
                <p>
                  ที่อยู่: 123 ถนนสายหลัก, เมือง A, สหราชอาณาจักร
                </p>
              </div>
            </div>
  
            {/* Bottom Text */}
            <div className="mt-8 text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Two Cities Manufacturing. สงวนลิขสิทธิ์.
            </div>
          </div>
        </footer>
      </div>

    )
}
