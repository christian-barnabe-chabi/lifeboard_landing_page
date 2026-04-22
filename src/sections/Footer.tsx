import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <span className="font-semibold text-white text-lg">LifeBoard</span>
            <p className="text-sm text-slate-500 mt-2 max-w-xs">
              Votre tableau de bord de vie personnel — web et mobile.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Application</p>
              <div className="flex flex-col gap-2 text-sm">
                <a href="https://app.mylifeboard.app" className="hover:text-white transition-colors">Accéder à l'app</a>
                <a href="mailto:support@mylifeboard.app" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Légal</p>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/legal/terms" className="hover:text-white transition-colors">Conditions d'utilisation</Link>
                <Link to="/legal/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link>
                <Link to="/legal/data-deletion" className="hover:text-white transition-colors">Suppression des données</Link>
                <Link to="/legal/data-export" className="hover:text-white transition-colors">Export des données</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} LifeBoard. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
