import { TrendingUp, Flame, Target, BookOpen, Kanban, CalendarDays } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Finance personnelle',
    description: 'Revenus, dépenses, investissements, patrimoine net. Tous vos indicateurs financiers en un coup d\'œil.',
  },
  {
    icon: Flame,
    title: 'Suivi des habitudes',
    description: 'Créez des habitudes quotidiennes ou personnalisées. Visualisez vos séquences sur la durée.',
  },
  {
    icon: Target,
    title: 'Objectifs de vie',
    description: 'Définissez vos objectifs à court et long terme. Suivez votre progression avec des jalons.',
  },
  {
    icon: BookOpen,
    title: 'Journal personnel',
    description: 'Un espace privé pour écrire, réfléchir et noter votre humeur. Revues hebdomadaires incluses.',
  },
  {
    icon: Kanban,
    title: 'Kanban & Tâches',
    description: 'Organisez projets et tâches avec un tableau flexible. Priorités, sous-tâches, échéances.',
  },
  {
    icon: CalendarDays,
    title: 'Calendrier unifié',
    description: 'Une vue qui agrège tâches, objectifs, habitudes et journal. Tout votre planning au même endroit.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 px-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <p className="text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-4">Fonctionnalités</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-lg">
            Des modules interconnectés pour piloter chaque aspect de votre vie.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {features.map(f => (
            <div key={f.title} className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <f.icon size={20} className="text-[var(--color-primary)] mb-5" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-black mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
