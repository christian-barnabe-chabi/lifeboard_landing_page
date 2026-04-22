const APP_URL = 'https://app.mylifeboard.app'
const APP_STORE_URL = '#'
const PLAY_STORE_URL = '#'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <span className="font-semibold text-lg tracking-tight">LifeBoard</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
          <a href="#how" className="hover:text-white transition-colors">Comment ça marche</a>
          <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
        </div>
        <a
          href={APP_URL}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Commencer
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-8">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          Disponible sur web et mobile
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Votre tableau de bord
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            de vie personnel
          </span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Finances, habitudes, objectifs, journal, kanban — tout ce qui compte dans votre vie,
          au même endroit. Simple, privé, puissant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_URL}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-blue-500/20"
          >
            Essayer gratuitement — 7 jours
          </a>
          <div className="flex items-center gap-3">
            <a href={APP_STORE_URL} className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors">
              <AppleIcon />
              App Store
            </a>
            <a href={PLAY_STORE_URL} className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors">
              <PlayIcon />
              Google Play
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Aucune carte bancaire requise · Annulation à tout moment
        </p>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none" />
    </section>
  )
}

function AppleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
    </svg>
  )
}
