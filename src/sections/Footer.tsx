export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="font-semibold text-white">LifeBoard</span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="https://app.mylifeboard.app" className="hover:text-white transition-colors">
              Accéder à l'app
            </a>
            <a href="mailto:support@mylifeboard.app" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} LifeBoard. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
