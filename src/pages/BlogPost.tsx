import { useState, useEffect, useCallback } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const API = (import.meta.env.VITE_API_URL as string) ?? '/api'

function setMeta(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function removeMeta(property: string) {
  document.querySelector(`meta[property="${property}"]`)?.remove()
}

function renderContent(html: string): string {
  return html.replace(
    /\{\{button\|([^|]+)\|([^}]+)\}\}/g,
    (_, label, url) =>
      `<div style="text-align:center;margin:2rem 0"><a href="${url}" style="display:inline-block;padding:0.75rem 1.5rem;background:var(--color-primary);color:#fff;font-weight:600;border-radius:0.75rem;text-decoration:none">${label}</a></div>`,
  )
}

interface Post {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string
  coverImage: string | null
  views: number
  publishedAt: string
  authorName: string | null
  authorBio: string | null
  authorProfileUrl: string | null
}

interface PostSummary {
  id: number
  title: string
  slug: string
  excerpt: string | null
  coverImage: string | null
  views: number
  publishedAt: string
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const [suggestions, setSuggestions] = useState<PostSummary[]>([])

  const handleShare = useCallback(async () => {
    const url = window.location.href
    const title = post?.title ?? 'LifeBoard Blog'
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {})
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [post])

  useEffect(() => {
    if (!slug) return
    window.scrollTo(0, 0)
    setPost(null)
    setSuggestions([])
    setLoading(true)
    fetch(`${API}/public/blog/${slug}`)
      .then(r => {
        if (!r.ok) { navigate('/blog', { replace: true }); return null }
        return r.json()
      })
      .then(data => {
        if (data) {
          setPost(data)
          document.title = `${data.title} — LifeBoard`
          fetch(`${API}/public/blog`)
            .then(r => r.json())
            .then((all: PostSummary[]) => setSuggestions(all.filter(p => p.slug !== slug).slice(0, 2)))
          setMeta('og:title', `${data.title} — LifeBoard`)
          setMeta('og:description', data.excerpt ?? '')
          setMeta('og:url', window.location.href)
          setMeta('og:type', 'article')
          if (data.coverImage) {
            setMeta('og:image', data.coverImage)
            setMeta('twitter:image', data.coverImage)
            setMeta('twitter:card', 'summary_large_image')
          }
        }
      })
      .finally(() => setLoading(false))
    return () => {
      document.title = 'LifeBoard'
      ;['og:title', 'og:description', 'og:url', 'og:type', 'og:image', 'twitter:image', 'twitter:card'].forEach(removeMeta)
    }
  }, [slug])

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white">
        <Link to="/" className="text-base font-semibold tracking-tight text-[var(--color-primary)]">LifeBoard</Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Accueil</Link>
          <Link to="/blog" className="hover:text-[var(--color-primary)] transition-colors">Blog</Link>
        </div>
        <a
          href="https://app.mylifeboard.app"
          className="text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Commencer
        </a>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : !post ? null : (
          <>
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-64 object-cover rounded-2xl mb-8"
              />
            )}

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>{post.views.toLocaleString()} vue{post.views !== 1 ? 's' : ''}</span>
              <button onClick={handleShare} className="ml-auto flex items-center gap-1.5 text-gray-400 hover:text-[var(--color-primary)] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                {copied ? 'Lien copié !' : 'Partager'}
              </button>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

            {post.excerpt && (
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">{post.excerpt}</p>
            )}

            <div
              className="prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />

            <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                {copied ? 'Lien copié !' : 'Partager cet article'}
              </button>
            </div>

            {post.authorName && (
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col items-center text-center gap-3">
                {post.authorProfileUrl ? (
                  <img
                    src={post.authorProfileUrl}
                    alt={post.authorName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-semibold text-xl">
                    {post.authorName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{post.authorName}</p>
                  {post.authorBio && (
                    <p className="text-sm text-gray-500 leading-relaxed mt-1 max-w-md">{post.authorBio}</p>
                  )}
                </div>
              </div>
            )}

            {suggestions.length > 0 && (
              <div className="mt-16">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Articles similaires</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {suggestions.map(s => (
                    <Link key={s.id} to={`/blog/${s.slug}`} className="group flex flex-col gap-3">
                      {s.coverImage ? (
                        <img src={s.coverImage} alt={s.title} className="w-full h-40 object-cover rounded-xl group-hover:opacity-90 transition-opacity" />
                      ) : (
                        <div className="w-full h-40 rounded-xl bg-gray-100" />
                      )}
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">{s.title}</p>
                        {s.excerpt && <p className="text-sm text-gray-500 mt-1 line-clamp-2">{s.excerpt}</p>}
                        <p className="text-xs text-gray-400 mt-2">{new Date(s.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
