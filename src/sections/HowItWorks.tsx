const steps = [
  {
    n: '01',
    title: 'Créez votre compte',
    description: 'Inscrivez-vous en 30 secondes. Aucune carte bancaire requise pour l\'essai gratuit de 7 jours.',
  },
  {
    n: '02',
    title: 'Renseignez vos données',
    description: 'Ajoutez vos comptes, définissez vos habitudes et renseignez vos objectifs.',
  },
  {
    n: '03',
    title: 'Suivez votre progression',
    description: 'Consultez votre tableau de bord chaque matin sur le web ou l\'app mobile.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-32 px-8 border-t border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">Comment ça marche</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Opérationnel en quelques minutes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map(s => (
            <div key={s.n}>
              <p className="text-5xl font-bold text-gray-100 mb-6 tabular-nums">{s.n}</p>
              <h3 className="text-lg font-semibold text-black mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 border border-gray-200 rounded-2xl p-12 bg-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Web & Mobile — synchronisés</h3>
              <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
                Accédez à LifeBoard depuis votre ordinateur sur <strong className="text-black">app.mylifeboard.app</strong> ou téléchargez l'application sur iOS et Android. Vos données sont disponibles partout, en temps réel.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <span className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600">Web</span>
              <span className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600">iOS</span>
              <span className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600">Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
