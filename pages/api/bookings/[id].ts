import type { NextApiRequest, NextApiResponse } from 'next'
import { getBookingById, cancelBooking } from '../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    const booking = getBookingById(id as string)
    if (!booking) return res.status(404).json({ error: 'الحجز غير موجود' })
    return res.status(200).json(booking)
  }

  if (req.method === 'DELETE') {
    const cancelled = cancelBooking(id as string)
    if (!cancelled) return res.status(404).json({ error: 'الحجز غير موجود' })
    return res.status(200).json({ message: 'تم إلغاء الحجز بنجاح' })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
