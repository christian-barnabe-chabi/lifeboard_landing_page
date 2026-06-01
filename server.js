const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 80
const API_URL = process.env.VITE_API_URL || 'https://app.mylifeboard.app/api'
const dist = path.join(__dirname, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const BOT_UA = /bot|crawler|spider|facebookexternalhit|twitterbot|linkedinbot|whatsapp|slackbot|telegrambot|googlebot|bingbot/i

app.use(express.static(dist, {
  setHeaders(res, filePath) {
    if (filePath.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    } else if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache')
    }
  },
}))

app.get('/blog/:slug', async (req, res) => {
  if (!BOT_UA.test(req.headers['user-agent'] || '')) {
    return res.sendFile(path.join(dist, 'index.html'))
  }

  try {
    const r = await fetch(`${API_URL}/public/blog/${req.params.slug}`)
    if (!r.ok) return res.sendFile(path.join(dist, 'index.html'))
    const post = await r.json()

    const title = `${post.title} — LifeBoard`
    const description = post.excerpt || 'LifeBoard — votre tableau de bord de vie personnel'
    const image = post.coverImage || 'https://mylifeboard.app/og-image.jpg'
    const url = `https://mylifeboard.app/blog/${post.slug}`

    const html = template
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`)
      .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`)
      .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}" />`)
      .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
      .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`)
      .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`)
      .replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}" />`)

    res.setHeader('Content-Type', 'text/html')
    res.send(html)
  } catch {
    res.sendFile(path.join(dist, 'index.html'))
  }
})

app.get('/{*splat}', (_req, res) => {
  res.setHeader('Cache-Control', 'no-cache')
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(PORT, () => console.log(`Landing page server on port ${PORT}`))
