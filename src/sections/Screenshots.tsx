import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const SHOTS = [
  {
    label: 'Tableau de bord',
    description: 'Vue d\'ensemble de vos finances, habitudes et priorités du jour.',
    light: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/home_light.png',
    dark: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/home_dark.png',
  },
  {
    label: 'Finance',
    description: 'Revenus, dépenses et patrimoine net centralisés en un coup d\'œil.',
    light: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/finance-dash_light.png',
    dark: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/finance-dash_dark.png',
  },
  {
    label: 'Habitudes',
    description: 'Suivez vos routines quotidiennes et visualisez vos séquences.',
    light: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/habits_light.png',
    dark: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/habits_dark.png',
  },
  {
    label: 'Calendrier',
    description: 'Tâches, objectifs et habitudes réunis dans une seule vue.',
    light: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/calendar_light.png',
    dark: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/calendar_dark.png',
  },
]

function ScreenshotCard({ label, description, light, dark }: typeof SHOTS[number]) {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 aspect-[16/10]">
        <img
          src={light}
          alt={`${label} (mode clair)`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={dark}
          alt={`${label} (mode sombre)`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        />

        <button
          onClick={() => setIsDark(v => !v)}
          className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium shadow-md transition-colors duration-200 cursor-pointer select-none"
          style={{
            background: isDark ? '#1e1e2e' : '#ffffff',
            color: isDark ? '#e2e8f0' : '#374151',
            border: isDark ? '1px solid #3a3a5c' : '1px solid #e5e7eb',
          }}
          aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
          {isDark ? <Moon size={12} /> : <Sun size={12} />}
          {isDark ? 'Sombre' : 'Clair'}
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-black mb-1">{label}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function Screenshots() {
  return (
    <section id="screenshots" className="py-32 px-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-4">Aperçu</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Conçu pour être beau,<br className="hidden md:block" /> jour et nuit.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SHOTS.map(s => (
            <ScreenshotCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
