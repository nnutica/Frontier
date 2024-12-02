export const Head = () => {
    return (
<div>
  <header
    className="fixed top-0 left-0 w-full bg-cover bg-center h-[70vh] z-50"
    style={{
      backgroundImage:
        "url('https://ik.imagekit.io/tvlk/blog/2022/01/1-2.jpg?tr=dpr-2,w-675')",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="container mx-auto px-4 py-16 text-white relative z-10">
      <h1 className="text-4xl font-bold mb-4">โปรดค้นหาที่พักที่ดีที่สุด</h1>
      <p className="text-lg mb-8">จองที่พักของคุณด้วยราคาที่ดีที่สุด</p>

      <form className="bg-white p-6 rounded-xl shadow-lg flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="จุดหมายปลายทาง"
            className="w-full p-3 pl-10 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a6 6 0 100 12 6 6 0 000-12zM14.293 14.707a1 1 0 01-1.414 0L10 11.414l-2.879 2.879a1 1 0 01-1.414-1.414l3.586-3.586a1 1 0 011.414 0l3.586 3.586a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <div className="flex-1">
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1">
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            placeholder="2 ผู้เข้าพัก, 1 ห้อง"
            className="w-full p-3 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ค้นหา
        </button>
      </form>
    </div>
  </header>
</div>
    )
}