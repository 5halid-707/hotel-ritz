import type { NextApiRequest, NextApiResponse } from 'next'

let subscribers: string[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body
    if (!email) return res.status(400).json({ error: 'البريد الإلكتروني مطلوب' })
    subscribers.push(email)
    return res.status(201).json({ message: 'تم الاشتراك بنجاح' })
  }
  return res.status(405).json({ error: 'Method not allowed' })
}
