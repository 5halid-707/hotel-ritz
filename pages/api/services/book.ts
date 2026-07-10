import type { NextApiRequest, NextApiResponse } from 'next'

let serviceBookings: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { serviceId, guestName, guestEmail, guestPhone, date, notes } = req.body
    const booking = {
      id: `SVB-${Date.now()}`,
      serviceId, guestName, guestEmail, guestPhone, date, notes,
      createdAt: new Date().toISOString(),
    }
    serviceBookings.push(booking)
    return res.status(201).json(booking)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}
