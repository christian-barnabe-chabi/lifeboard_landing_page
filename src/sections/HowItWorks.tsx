import { Monitor, Smartphone } from 'lucide-react'

const steps = [
  {
    n: '01',
    title: 'Créez votre compte',
    description: 'Inscrivez-vous en 30 secondes. Pas de carte bancaire requise pour l\'essai gratuit de 7 jours.',
  },
  {
    n: '02',
    title: 'Connectez vos données',
    description: 'Ajoutez vos comptes bancaires, définissez vos habitudes et renseignez vos objectifs de vie.',
  },
  {
    n: '03',
    title: 'Suivez et progressez',
    description: 'Consultez votre tableau de bord chaque matin depuis le web ou l\'app mobile. Restez aligné avec vos priorités.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
          <p className="text-xl text-gray-500">
            Opérationnel en quelques minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-5">
                {s.n}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Multi-platform callout */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-3">Web & Mobile — synchronisés</h3>
          <p className="text-slate-300 max-w-xl mx-auto">
            Accédez à LifeBoard depuis votre ordinateur sur <strong className="text-white">app.mylifeboard.app</strong> ou
            téléchargez l'application mobile sur iOS et Android. Vos données sont disponibles partout, en temps réel.
          </p>
          <div className="flex justify-center gap-3 mt-8">
            <span className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm font-medium">
              <Monitor size={14} /> Web
            </span>
            <span className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm font-medium">
              <Smartphone size={14} /> iOS
            </span>
            <span className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm font-medium">
              <Smartphone size={14} /> Android
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
