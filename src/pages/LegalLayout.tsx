import { Link } from 'react-router-dom'

interface Props {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <nav className="border-b border-gray-100 px-8 py-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-black">
            LifeBoard
          </Link>
          <Link to="/" className="text-sm text-gray-400 hover:text-black transition-colors">
            ← Retour
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm text-gray-400 mb-3">Dernière mise à jour : {lastUpdated}</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-10">{title}</h1>
        <div className="prose prose-gray max-w-none">
          {children}
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap gap-6 text-sm text-gray-400">
          <Link to="/legal/terms" className="hover:text-gray-700 transition-colors">Conditions d'utilisation</Link>
          <Link to="/legal/privacy" className="hover:text-gray-700 transition-colors">Politique de confidentialité</Link>
          <Link to="/legal/data-deletion" className="hover:text-gray-700 transition-colors">Suppression des données</Link>
          <Link to="/legal/data-export" className="hover:text-gray-700 transition-colors">Export des données</Link>
        </div>
      </footer>
    </div>
  )
}
