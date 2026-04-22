import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-gray-100 px-8 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <span className="font-semibold text-black">LifeBoard</span>
          <p className="text-sm text-gray-400 mt-2">Votre tableau de bord de vie personnel.</p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div className="flex flex-col gap-2 text-gray-500">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">Application</p>
            <a href="https://app.mylifeboard.app" className="hover:text-black transition-colors">Accéder à l'app</a>
            <a href="mailto:support@mylifeboard.app" className="hover:text-black transition-colors">Contact</a>
          </div>

          <div className="flex flex-col gap-2 text-gray-500">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">Légal</p>
            <Link to="/legal/terms" className="hover:text-black transition-colors">Conditions d'utilisation</Link>
            <Link to="/legal/privacy" className="hover:text-black transition-colors">Confidentialité</Link>
            <Link to="/legal/data-deletion" className="hover:text-black transition-colors">Suppression des données</Link>
            <Link to="/legal/data-export" className="hover:text-black transition-colors">Export des données</Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-300">© {new Date().getFullYear()} LifeBoard. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
