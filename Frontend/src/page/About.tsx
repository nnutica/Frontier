
function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">เกี่ยวกับ RoomSnap</h1>
          <p className="text-lg">
            แพลตฟอร์มจองโรงแรมที่ดีที่สุดสำหรับการเดินทางของคุณ
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ประวัติความเป็นมา</h2>
          <p className="text-gray-700 leading-relaxed">
            RoomSnap ก่อตั้งขึ้นเพื่อช่วยให้การจองที่พักเป็นเรื่องง่าย
            ด้วยเครือข่ายโรงแรมและที่พักคุณภาพหลากหลายทั่วโลก
            เราให้บริการแพลตฟอร์มที่ใช้งานง่ายและสะดวก
            พร้อมข้อเสนอสุดพิเศษที่เหมาะกับงบประมาณและความต้องการของคุณ
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ภารกิจของเรา</h2>
          <p className="text-gray-700 leading-relaxed">
            RoomSnap มุ่งมั่นที่จะเป็นพันธมิตรที่ดีที่สุดสำหรับนักเดินทาง
            โดยนำเสนอบริการจองโรงแรมที่รวดเร็วและโปร่งใส
            พร้อมการสนับสนุนลูกค้าที่เป็นมิตรตลอด 24 ชั่วโมงทุกวัน
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">สิ่งที่เราเชื่อมั่น</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>ความสะดวก: แพลตฟอร์มที่ใช้งานง่ายและรวดเร็ว</li>
            <li>ความคุ้มค่า: ข้อเสนอสุดพิเศษที่ช่วยให้คุณประหยัด</li>
            <li>ความน่าเชื่อถือ: ระบบการจองที่ปลอดภัยและเชื่อถือได้</li>
            <li>บริการลูกค้า: การช่วยเหลือตลอด 24 ชั่วโมงทุกวัน</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default About