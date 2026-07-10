import type { NextApiRequest, NextApiResponse } from 'next'

let messages: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body
    const newMessage = {
      id: `MSG-${Date.now()}`,
      name, email, phone, subject, message,
      createdAt: new Date().toISOString(),
    }
    messages.push(newMessage)
    return res.status(201).json({ message: 'تم إرسال رسالتك بنجاح' })
  }
  return res.status(405).json({ error: 'Method not allowed' })
}
