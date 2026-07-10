import type { NextApiRequest, NextApiResponse } from 'next'
import { createBooking, getRoomById } from '../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { roomId, checkIn, checkOut, guests, guestName, guestEmail, guestPhone, specialRequests } = req.body

    if (!roomId || !checkIn || !checkOut || !guestName || !guestEmail) {
      return res.status(400).json({ error: 'جميع الحقول المطلوبة يجب أن تكون مكتملة' })
    }

    const room = getRoomById(roomId)
    if (!room) {
      return res.status(404).json({ error: 'الغرفة غير موجودة' })
    }

    const nights = Math.max(1, (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
    const totalPrice = nights * room.price

    const booking = createBooking({
      roomId,
      roomNameAr: room.nameAr,
      roomNameEn: room.nameEn,
      guestName,
      guestEmail,
      guestPhone,
      checkIn,
      checkOut,
      guests: Number(guests),
      totalPrice,
      specialRequests,
    })

    return res.status(201).json(booking)
  }

  if (req.method === 'GET') {
    const { email } = req.query
    const { getBookingsByEmail } = require('../../../lib/db')
    if (email) {
      const bookings = getBookingsByEmail(email as string)
      return res.status(200).json(bookings)
    }
    return res.status(400).json({ error: 'البريد الإلكتروني مطلوب' })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
