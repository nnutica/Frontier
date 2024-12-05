const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();


// GET all bookings
router.get('/', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

// POST create a booking
router.post('/', async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
});

// DELETE a booking
router.delete('/:id', async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(204).end();
});
// PUT update a booking
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });

        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ message: "Error updating booking", error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Requested ID:", id); // Log เพื่อตรวจสอบ ID ที่ถูกส่งเข้ามา
        const booking = await Booking.findById(id); // ค้นหา booking ในฐานข้อมูล

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' }); // กรณีไม่เจอข้อมูล
        }

        res.json(booking); // ส่งข้อมูลกลับ
    } catch (error) {
        console.error("Error fetching booking:", error); // Log error หากเกิดข้อผิดพลาด
        res.status(500).json({ message: 'Error fetching booking', error }); // ส่ง error กลับ
    }
});

// PUT update paymentStatus
router.put('/:id/paymentStatus', async (req, res) => {
    try {
        const { id } = req.params;
        const { paymentStatus, paymentMethod } = req.body; // รับข้อมูล paymentStatus และ paymentMethod

        // ค้นหาการจองที่มี ID ตรงกับที่ส่งมา
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { paymentStatus, paymentMethod }, // อัปเดต paymentStatus และ paymentMethod
            { new: true, runValidators: true } // กำหนดให้ส่งผลลัพธ์ที่อัปเดตแล้วกลับมา
        );

        if (!updatedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json(updatedBooking); // ส่งข้อมูลการจองที่อัปเดตแล้ว
    } catch (error) {
        console.error("Error updating payment status:", error);
        res.status(500).json({ message: "Error updating payment status", error });
    }
});



// อัปเดตทุกเอกสารในฐานข้อมูลที่ไม่มี totalPrice
const updateBookings = async () => {
  const bookings = await Booking.find();
  
  bookings.forEach(async (booking) => {
    if (!booking.totalPrice) {
      const totalPrice = calculateTotalPrice(booking);  // คำนวณราคาสุทธิ
      booking.totalPrice = totalPrice;
      await booking.save();  // บันทึกการเปลี่ยนแปลง
    }
  });
};


  

module.exports = router;
