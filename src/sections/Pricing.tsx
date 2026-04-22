const APP_URL = 'https://app.mylifeboard.app'

const plans = [
  {
    name: 'Essai gratuit',
    price: '0€',
    period: '7 jours',
    description: 'Accès complet, aucune carte requise.',
    features: [
      'Tous les modules inclus',
      'Web + Mobile',
      'Données sécurisées',
      'Support par email',
    ],
    cta: 'Démarrer l\'essai',
    href: APP_URL,
    highlight: false,
  },
  {
    name: 'Pro Mensuel',
    price: '3,59€',
    period: 'par mois',
    description: 'Pour ceux qui veulent rester flexibles.',
    features: [
      'Accès illimité à tous les modules',
      'Web + Mobile synchronisés',
      'Mises à jour et nouvelles fonctionnalités',
      'Support prioritaire',
    ],
    cta: 'Choisir Mensuel',
    href: APP_URL,
    highlight: false,
  },
  {
    name: 'Pro Annuel',
    price: '35,99€',
    period: 'par an',
    badge: 'Économisez 17%',
    description: 'Le meilleur rapport qualité-prix.',
    features: [
      'Tout du plan mensuel',
      'Facturation annuelle',
      'Économisez 7,09€ par an',
      'Support prioritaire',
    ],
    cta: 'Choisir Annuel',
    href: APP_URL,
    highlight: true,
  },
  {
    name: 'Lifetime',
    price: '89€',
    period: 'une seule fois',
    badge: 'Meilleure offre',
    description: 'Payez une fois, accédez à vie.',
    features: [
      'Accès illimité à vie',
      'Toutes les futures fonctionnalités',
      'Web + Mobile pour toujours',
      'Support prioritaire à vie',
    ],
    cta: 'Obtenir l\'accès à vie',
    href: APP_URL,
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs simples et transparents</h2>
          <p className="text-xl text-gray-500">
            Essayez gratuitement, souscrivez quand vous êtes prêt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-semibold ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.name}
                  </span>
                  {plan.badge && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                    / {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={plan.highlight ? 'text-blue-200' : 'text-green-500'}>✓</span>
                    <span className={plan.highlight ? 'text-blue-50' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          L'abonnement se gère depuis l'application mobile · Résiliation à tout moment
        </p>
      </div>
    </section>
  )
}
