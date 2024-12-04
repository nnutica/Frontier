function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">เกี่ยวกับ RoomSnap</h1>
          <p className="text-lg font-light">
            แพลตฟอร์มการจองโรงแรมที่ตอบโจทย์ทุกความต้องการในการเดินทางของคุณ
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
            RoomSnap ก่อตั้งขึ้นด้วยพันธกิจที่จะทำให้การค้นหาและจองที่พักเป็นเรื่องง่ายและสะดวก
            เราเชื่อมั่นในการมอบประสบการณ์การใช้งานที่ล้ำสมัย พร้อมด้วยที่พักหลากหลายประเภทที่เหมาะสมกับงบประมาณ
            และความต้องการของผู้เดินทางทุกกลุ่ม
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
            ภารกิจของเรา
          </h2>
          <p className="text-gray-700 leading-loose">
            เรามุ่งมั่นที่จะเป็นตัวเลือกอันดับหนึ่งสำหรับการจองโรงแรม ด้วยแพลตฟอร์มที่รวดเร็ว
            เชื่อถือได้ และโปร่งใส พร้อมทั้งการให้บริการลูกค้าที่ยอดเยี่ยมและรองรับตลอด 24 ชั่วโมง
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
            สิ่งที่เราเชื่อมั่น
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li className="leading-relaxed">
              <span className="font-semibold text-gray-800">ความสะดวก:</span> 
              แพลตฟอร์มที่ง่ายต่อการใช้งานและตอบโจทย์ทุกขั้นตอน
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-gray-800">ความคุ้มค่า:</span> 
              ข้อเสนอพิเศษที่มอบความประหยัดสูงสุดสำหรับลูกค้า
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-gray-800">ความน่าเชื่อถือ:</span> 
              ระบบที่ปลอดภัยและได้รับการยอมรับในมาตรฐานระดับสากล
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold text-gray-800">บริการลูกค้า:</span> 
              การสนับสนุนที่รวดเร็วและเป็นมิตรตลอด 24 ชั่วโมงทุกวัน
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default About;
