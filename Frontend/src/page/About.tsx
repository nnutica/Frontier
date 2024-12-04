function About() { 
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">เกี่ยวกับโรงแรม Frontier</h1>
          <p className="text-lg font-light">
            โรงแรมที่มอบประสบการณ์การพักผ่อนสุดพิเศษในทุกช่วงเวลาของคุณ
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-12 flex-grow">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
            ประวัติความเป็นมา
          </h2>
          <p className="text-gray-700 leading-loose">
          เว็บไซต์แสดงระบบการจองห้องพักของโรงแรม Frontier ก่อตั้งขึ้นด้วยความตั้งใจที่จะมอบที่พักที่อบอุ่น สะดวกสบาย 
            และให้ความรู้สึกเหมือนบ้านสำหรับผู้เข้าพักทุกคน เราเน้นคุณภาพในการบริการ 
            และสถานที่ที่ออกแบบมาเพื่อรองรับทุกความต้องการของลูกค้า
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
          CRUD 
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li className="leading-relaxed">
              <span className="font-semibold text-gray-800">Create:</span> 
              ผู้ใช้ สามารถสร้างการจองห้องพักผ่านหน้าเว็บ
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-gray-800">Read:</span> 
              ผู้ใช้ สามารถดูประวัติการจองของตัวเองได้
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-gray-800">Update:</span> 
              ผู้ใช้ สามารถแก้ไข การจองของตัวเองได้
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-gray-800">Delete:</span> 
              ผู้ใช้ สามารถลบ การจองของตัวเองได้
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default About;
