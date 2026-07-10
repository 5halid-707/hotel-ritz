import type { NextApiRequest, NextApiResponse } from 'next'

const CDN_BASE = 'https://cache.marriott.com/is/image/marriotts7prod'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = (req.query.slug as string[]).join('/')
  const query = req.url?.includes('?') ? req.url.substring(req.url.indexOf('?')) : ''
  const url = `${CDN_BASE}/${slug}${query}`

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.ritzcarlton.com/ar/hotels/jedrj-the-ritz-carlton-jeddah/overview/',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      }
    })

    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch image' })
      return
    }

    const buffer = await response.arrayBuffer()
    const contentType = response.headers.get('content-type') || 'image/jpeg'
    res.setHeader('Content-Type', contentType)
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800')
    res.send(Buffer.from(buffer))
  } catch {
    res.status(500).json({ error: 'Image proxy failed' })
  }
}