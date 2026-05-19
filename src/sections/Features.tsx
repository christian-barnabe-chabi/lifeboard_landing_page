import { useState } from 'react'
import { Sun, Moon, BookOpen, Kanban } from 'lucide-react'

const MODULES = [
  {
    tag: 'Vue d\'ensemble',
    title: 'Tout ce qui compte, en un coup d\'œil.',
    description: 'Chaque matin, votre tableau de bord vous accueille avec l\'essentiel : solde net, habitudes du jour, priorités, objectifs en cours. Plus besoin de jongler entre dix applications.',
    benefits: [
      'Résumé financier instantané : revenus, dépenses, épargne',
      'Priorités du jour en 3 points pour rester focalisé',
      'Progression de vos habitudes et objectifs actifs',
    ],
    light: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/home_light.png',
    dark: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/home_dark.png',
    textRight: false,
  },
  {
    tag: 'Finance',
    title: 'Prenez le contrôle de votre argent.',
    description: 'Suivez vos revenus, dépenses, investissements, prêts et abonnements dans un espace unifié. Comprenez où va votre argent chaque mois, et agissez en conséquence.',
    benefits: [
      'Suivi des flux récurrents et ponctuels',
      'Patrimoine net calculé automatiquement',
      'Budget mensuel par catégorie avec alertes de dépassement',
    ],
    light: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/finance-dash_light.png',
    dark: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/finance-dash_dark.png',
    textRight: true,
  },
  {
    tag: 'Habitudes & Objectifs',
    title: 'Construisez des routines qui durent.',
    description: 'Créez des habitudes quotidiennes, hebdomadaires ou personnalisées. Visualisez vos séries, mesurez vos taux de complétion et restez aligné avec vos objectifs de vie à long terme.',
    benefits: [
      'Heatmap annuelle pour visualiser la régularité',
      'Objectifs avec jalons et progression en pourcentage',
      'Rappels par e-mail configurables pour chaque habitude',
    ],
    light: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/habits_light.png',
    dark: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/habits_dark.png',
    textRight: false,
  },
  {
    tag: 'Calendrier & Organisation',
    title: 'Un seul calendrier pour tout voir.',
    description: 'Tâches, objectifs, habitudes, entrées de journal et revues hebdomadaires : tout est agrégé dans une vue calendrier unifiée. Planifiez, exécutez, révisez.',
    benefits: [
      'Vue par jour ou par mois avec tous vos événements',
      'Kanban flexible pour gérer projets et tâches',
      'Revues hebdomadaires intégrées pour faire le bilan',
    ],
    light: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/calendar_light.png',
    dark: 'https://storage-cf-r2.mylifeboard.app/landing_page/public/calendar_dark.png',
    textRight: true,
  },
]

const EXTRAS = [
  {
    icon: BookOpen,
    title: 'Journal personnel',
    description: 'Un espace privé pour écrire, réfléchir et noter votre humeur. Revues hebdomadaires incluses pour faire le point sur vos avancées.',
  },
  {
    icon: Kanban,
    title: 'Kanban & Tâches',
    description: 'Organisez vos projets et tâches avec un tableau flexible. Statuts, priorités, échéances et liens vers vos objectifs.',
  },
]


function TextContent({ tag, title, description, benefits, isDark }: {
  tag: string; title: string; description: string; benefits: string[]; isDark: boolean
}) {
  return (
    <>
      <p className={`text-xs font-semibold tracking-widest uppercase mb-4 transition-colors duration-500 ${isDark ? 'text-blue-400' : 'text-[var(--color-primary)]'}`}>
        {tag}
      </p>
      <h2 className={`text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      <p className={`leading-relaxed mb-6 text-[15px] transition-colors duration-500 ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
        {description}
      </p>
      <ul className="flex flex-col gap-3">
        {benefits.map(b => (
          <li key={b} className={`flex items-start gap-3 text-sm transition-colors duration-500 ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-500 ${isDark ? 'bg-blue-400' : 'bg-[var(--color-primary)]'}`} />
            {b}
          </li>
        ))}
      </ul>
    </>
  )
}

interface ModuleProps {
  tag: string
  title: string
  description: string
  benefits: string[]
  light: string
  dark: string
  textRight: boolean
  initialDark: boolean
}

function FeatureSection({ tag, title, description, benefits, light, dark, textRight, initialDark }: ModuleProps) {
  const [isDark, setIsDark] = useState(initialDark)

  return (
    <>
      <div className="relative overflow-hidden border-b border-gray-100" style={{ minHeight: 'clamp(420px, 60vw, 580px)' }}>
        {/* Background images */}
        <img
          src={light}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={dark}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Mobile overlay: bottom-up gradient covering text */}
        <div
          className="absolute inset-0 block md:hidden transition-opacity duration-500"
          style={{
            opacity: 1,
            backdropFilter: 'blur(16px) saturate(150%)',
            WebkitBackdropFilter: 'blur(16px) saturate(150%)',
            background: isDark
              ? 'linear-gradient(to top, rgba(8,8,20,0.97) 45%, rgba(8,8,20,0.6) 70%, transparent 100%)'
              : 'linear-gradient(to top, rgba(255,255,255,0.97) 45%, rgba(255,255,255,0.6) 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 95%)',
            maskImage: 'linear-gradient(to top, black 40%, transparent 95%)',
          }}
        />

        {/* Desktop overlay: side gradient light */}
        <div
          className="absolute inset-0 hidden md:block transition-opacity duration-500"
          style={{
            opacity: isDark ? 0 : 1,
            backdropFilter: 'blur(18px) saturate(160%)',
            WebkitBackdropFilter: 'blur(18px) saturate(160%)',
            background: textRight
              ? 'linear-gradient(to left, rgba(255,255,255,0.94) 48%, rgba(255,255,255,0.5) 68%, transparent 85%)'
              : 'linear-gradient(to right, rgba(255,255,255,0.94) 48%, rgba(255,255,255,0.5) 68%, transparent 85%)',
            WebkitMaskImage: textRight
              ? 'linear-gradient(to left, black 50%, transparent 82%)'
              : 'linear-gradient(to right, black 50%, transparent 82%)',
            maskImage: textRight
              ? 'linear-gradient(to left, black 50%, transparent 82%)'
              : 'linear-gradient(to right, black 50%, transparent 82%)',
          }}
        />
        {/* Desktop overlay: side gradient dark */}
        <div
          className="absolute inset-0 hidden md:block transition-opacity duration-500"
          style={{
            opacity: isDark ? 1 : 0,
            backdropFilter: 'blur(18px) saturate(160%)',
            WebkitBackdropFilter: 'blur(18px) saturate(160%)',
            background: textRight
              ? 'linear-gradient(to left, rgba(8,8,20,0.94) 48%, rgba(8,8,20,0.5) 68%, transparent 85%)'
              : 'linear-gradient(to right, rgba(8,8,20,0.94) 48%, rgba(8,8,20,0.5) 68%, transparent 85%)',
            WebkitMaskImage: textRight
              ? 'linear-gradient(to left, black 50%, transparent 82%)'
              : 'linear-gradient(to right, black 50%, transparent 82%)',
            maskImage: textRight
              ? 'linear-gradient(to left, black 50%, transparent 82%)'
              : 'linear-gradient(to right, black 50%, transparent 82%)',
          }}
        />

        {/* Text block */}
        {/* Mobile: pinned to bottom */}
        <div className="relative z-10 block md:hidden px-6 pb-10 pt-48">
          <TextContent tag={tag} title={title} description={description} benefits={benefits} isDark={isDark} />
        </div>
        {/* Desktop: side-aligned */}
        <div
          className={`relative z-10 hidden md:flex max-w-5xl mx-auto px-8 py-16 items-center ${textRight ? 'justify-end' : 'justify-start'}`}
          style={{ minHeight: 'clamp(420px, 60vw, 580px)' }}
        >
          <div className="max-w-sm w-full">
            <TextContent tag={tag} title={title} description={description} benefits={benefits} isDark={isDark} />
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
          <button
            onClick={() => setIsDark(v => !v)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium cursor-pointer select-none transition-all duration-200"
            style={{
              background: isDark ? '#1e1e2e' : '#ffffffee',
              color: isDark ? '#e2e8f0' : '#374151',
              border: isDark ? '1px solid #3a3a5c' : '1px solid #e5e7eb',
            }}
          >
            {isDark ? <Moon size={11} /> : <Sun size={11} />}
            {isDark ? 'Sombre' : 'Clair'}
          </button>
        </div>
      </div>

    </>
  )
}

export function Features() {
  return (
    <section id="features" className="border-t border-gray-100">
      <div className="py-24 px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-4">Fonctionnalités</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-lg">
            Des modules interconnectés pour piloter chaque aspect de votre vie.
          </h2>
        </div>
      </div>

      {MODULES.map((m, i) => (
        <FeatureSection key={m.tag} {...m} initialDark={i % 2 !== 0} />
      ))}

      <div className="py-24 px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold text-[var(--color-primary)] tracking-widest uppercase mb-4">Et aussi</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {EXTRAS.map(e => (
              <div key={e.title} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <e.icon size={20} className="text-[var(--color-primary)] mb-5" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-black mb-2">{e.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
