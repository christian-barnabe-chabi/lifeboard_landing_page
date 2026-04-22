import { TrendingUp, Flame, Target, BookOpen, Kanban, CalendarDays } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Finance personnelle',
    description: 'Suivez vos revenus, dépenses, investissements, dettes et patrimoine net en temps réel. Graphiques et indicateurs clés inclus.',
    color: 'bg-green-50 border-green-100',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
  },
  {
    icon: Flame,
    title: 'Suivi des habitudes',
    description: 'Créez des habitudes quotidiennes, hebdomadaires ou personnalisées. Visualisez vos séquences et progressions.',
    color: 'bg-orange-50 border-orange-100',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
  },
  {
    icon: Target,
    title: 'Objectifs de vie',
    description: 'Définissez vos objectifs à court et long terme, suivez votre avancement avec des jalons et des pourcentages.',
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    icon: BookOpen,
    title: 'Journal personnel',
    description: 'Un espace privé pour écrire, réfléchir et noter votre humeur au quotidien. Revues hebdomadaires incluses.',
    color: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
  },
  {
    icon: Kanban,
    title: 'Kanban & Tâches',
    description: 'Organisez vos projets et tâches avec un tableau kanban flexible. Priorités, sous-tâches, dates d\'échéance.',
    color: 'bg-slate-50 border-slate-100',
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-100',
  },
  {
    icon: CalendarDays,
    title: 'Calendrier unifié',
    description: 'Une vue calendrier qui agrège tâches, objectifs, habitudes et entrées de journal. Tout votre planning au même endroit.',
    color: 'bg-cyan-50 border-cyan-100',
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-100',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tout ce dont vous avez besoin</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Six modules intégrés pour piloter chaque aspect de votre vie — finances, santé, ambitions, réflexion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className={`rounded-2xl border p-6 ${f.color}`}>
              <div className={`w-10 h-10 rounded-xl ${f.iconBg} flex items-center justify-center mb-4`}>
                <f.icon size={20} className={f.iconColor} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
