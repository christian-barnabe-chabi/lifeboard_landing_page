
import { Features } from '../config/features'

const APP_URL = 'https://app.mylifeboard.app'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
        <span className="text-base font-semibold tracking-tight text-[var(--color-primary)]">LifeBoard</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <button onClick={() => scrollTo('features')} className="hover:text-[var(--color-primary)] transition-colors cursor-pointer bg-transparent border-none p-0">Fonctionnalités</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-[var(--color-primary)] transition-colors cursor-pointer bg-transparent border-none p-0">Tarifs</button>
        </div>
        <a
          href={APP_URL}
          className="text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Commencer
        </a>
      </nav>

      {/* Hero */}
      <main
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto w-full"
      >
        <p className="text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-8">
          Tableau de bord de vie personnel
        </p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none text-black mb-8">
          Pilotez votre vie,<br />simplement.
        </h1>
        <p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-12">
          Finances, habitudes, objectifs, journal ... tout ce qui compte, au même endroit. Simple, privé, puissant.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={APP_URL}
            className="bg-[var(--color-primary)] text-white font-medium px-8 py-4 rounded-xl text-base hover:opacity-90 transition-opacity"
          >
            Essayer gratuitement · 7 jours
          </a>
          {Features.SHOW_MOBILE_APP && (
            <>
              <span className="text-base font-medium border border-dashed border-gray-200 px-8 py-4 rounded-xl text-gray-400 cursor-default select-none">
                iOS (bientôt)
              </span>
              <span className="text-base font-medium border border-dashed border-gray-200 px-8 py-4 rounded-xl text-gray-400 cursor-default select-none">
                Android (bientôt)
              </span>
            </>
          )}
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Aucune carte bancaire requise · Annulation à tout moment
        </p>
      </main>

      {/* Divider */}
      <div className="border-t border-gray-100 py-6 px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
        <span>Finance</span>
        <span className="text-gray-200">·</span>
        <span>Habitudes</span>
        <span className="text-gray-200">·</span>
        <span>Objectifs</span>
        <span className="text-gray-200">·</span>
        <span>Journal</span>
        <span className="text-gray-200">·</span>
        <span>Kanban</span>
        <span className="text-gray-200">·</span>
        <span>Calendrier</span>
      </div>
    </div>
  )
}
