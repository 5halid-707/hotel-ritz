import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllRooms, getRoomById } from '../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query
    if (id) {
      const room = getRoomById(id as string)
      if (!room) return res.status(404).json({ error: 'الغرفة غير موجودة' })
      return res.status(200).json(room)
    }
    const rooms = getAllRooms()
    return res.status(200).json(rooms)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}
