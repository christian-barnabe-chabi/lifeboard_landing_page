const APP_URL = 'https://app.mylifeboard.app'

const plans = [
  {
    name: 'Essai gratuit',
    amount: 'Gratuit',
    period: '7 jours',
    description: 'Accès complet, aucune carte requise.',
    features: ['Tous les modules inclus', 'Web + Mobile', 'Données sécurisées'],
    cta: 'Démarrer l\'essai',
    highlight: false,
  },
  {
    name: 'Pro Mensuel',
    amount: '$3.59',
    period: 'par mois',
    description: 'Pour ceux qui veulent rester flexibles.',
    features: ['Accès illimité à tous les modules', 'Web + Mobile synchronisés', 'Support prioritaire'],
    cta: 'Choisir Mensuel',
    highlight: false,
  },
  {
    name: 'Pro Annuel',
    amount: '$35.99',
    period: 'par an',
    badge: 'Économisez 17%',
    description: 'Le meilleur rapport qualité-prix.',
    features: ['Tout du plan mensuel', 'Économisez $7.09 par an', 'Support prioritaire'],
    cta: 'Choisir Annuel',
    highlight: true,
  },
  {
    name: 'Lifetime',
    amount: '$200',
    period: 'une seule fois',
    badge: 'Meilleure offre',
    description: 'Payez une fois, accédez à vie.',
    features: ['Accès illimité à vie', 'Toutes les futures fonctionnalités', 'Support prioritaire à vie'],
    cta: 'Obtenir l\'accès à vie',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">Tarifs</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Simple et transparent.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? 'bg-gray-900 text-white border border-gray-700'
                  : 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
              }`}
            >
              <div className="mb-8 flex-1">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {plan.name}
                  </span>
                  {plan.badge && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${plan.highlight ? 'bg-white/10 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}>
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mb-1">
                  <span className={`text-4xl font-bold tabular-nums ${plan.highlight ? 'text-white' : 'text-black dark:text-white'}`}>
                    {plan.amount}
                  </span>
                </div>
                <p className="text-xs mb-6 text-gray-400">
                  {plan.period}
                </p>

                <ul className="space-y-2">
                  {plan.features.map(f => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${plan.highlight ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                      <span className="mt-0.5 shrink-0 text-gray-400">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={APP_URL}
                className={`block text-center text-sm font-semibold py-3 rounded-xl transition-colors ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'border border-gray-200 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          L'abonnement se gère depuis l'app web · Résiliation à tout moment
        </p>
      </div>
    </section>
  )
}
