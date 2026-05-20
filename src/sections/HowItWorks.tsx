import { useInView } from '../hooks/useParallax'
import { Features } from '../config/features'

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
    description: 'Revenez régulièrement pour mettre à jour vos données et mesurer votre progression dans le temps.',
  },
]

function StepsGrid() {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {steps.map((s, i) => (
        <div
          key={s.n}
          className="transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: inView ? `${i * 150}ms` : '0ms',
          }}
        >
          <p className="text-5xl font-bold text-[var(--color-primary)]/20 mb-6 tabular-nums">{s.n}</p>
          <h3 className="text-lg font-semibold text-black mb-3">{s.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>
  )
}

function PlatformBanner() {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className="mt-24 border border-gray-200 rounded-2xl p-6 md:p-12 bg-white transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-black mb-2">
            {Features.SHOW_MOBILE_APP ? 'Disponible sur le web, bientôt sur mobile' : 'Disponible sur le web'}
          </h3>
          <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
            Accédez à LifeBoard depuis votre ordinateur sur <strong className="text-black">app.mylifeboard.app</strong>.
            {Features.SHOW_MOBILE_APP && " L'application mobile iOS et Android est en cours de développement, restez informé."}
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <span className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600">Web</span>
          {Features.SHOW_MOBILE_APP && (
            <>
              <span className="border border-dashed border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-400">iOS (bientôt)</span>
              <span className="border border-dashed border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-400">Android (bientôt)</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export function HowItWorks() {
  const { ref: headingRef, inView: headingVisible } = useInView()

  return (
    <section id="how" className="py-32 px-8 border-t border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        <div
          ref={headingRef}
          className="mb-20 transition-all duration-700 ease-out"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p className="text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-4">Comment ça marche</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Opérationnel en quelques minutes.
          </h2>
        </div>

        <StepsGrid />
        <PlatformBanner />

      </div>
    </section>
  )
}
