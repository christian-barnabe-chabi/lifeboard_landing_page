import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

const API = (import.meta.env.VITE_API_URL as string) ?? '/api'

interface Post {
  id: number
  title: string
  slug: string
  excerpt: string | null
  coverImage: string | null
  views: number
  publishedAt: string
}

export function BlogList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/public/blog`)
      .then(r => r.json())
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar items={[
        { label: 'Accueil', href: '/' },
        { label: 'Blog', href: '/blog', active: true },
      ]} />

      <main className="max-w-4xl mx-auto px-6 py-16 pt-36">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-500 mb-12">Conseils, stratégies et inspirations pour mieux piloter sa vie</p>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <p className="text-gray-500 text-center py-20">Aucun article pour le moment.</p>
        ) : (
          <div className="grid gap-8">
            {posts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full sm:w-48 h-48 sm:h-32 object-cover rounded-xl flex-shrink-0 group-hover:opacity-90 transition-opacity"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors mb-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                  )}
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span>{post.views.toLocaleString()} vue{post.views !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
