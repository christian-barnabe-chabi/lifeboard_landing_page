import { LegalLayout } from './LegalLayout'

export function Refund() {
  return (
    <LegalLayout title="Politique de remboursement" lastUpdated="23 avril 2026">
      <Section title="1. Période d'essai gratuite">
        <p>LifeBoard propose une période d'essai gratuite de 7 jours, sans carte bancaire requise. Vous pouvez explorer toutes les fonctionnalités de l'application sans aucun engagement. Aucun remboursement n'est applicable durant cette période puisqu'aucun paiement n'est prélevé.</p>
      </Section>

      <Section title="2. Abonnements mensuels et annuels">
        <p>Si vous souscrivez à un abonnement payant (mensuel ou annuel), vous bénéficiez d'une <strong>garantie satisfait ou remboursé de 14 jours</strong> à compter de la date du premier paiement. Si vous n'êtes pas satisfait, contactez-nous à <a href="mailto:support@mylifeboard.app" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a> dans ce délai et nous vous rembourserons intégralement, sans question.</p>
        <p className="mt-3">Passé ce délai de 14 jours, les paiements sont non remboursables. Vous pouvez toutefois résilier votre abonnement à tout moment depuis les paramètres de votre compte — l'accès reste actif jusqu'à la fin de la période déjà payée.</p>
      </Section>

      <Section title="3. Accès Lifetime (paiement unique)">
        <p>L'achat d'un accès Lifetime bénéficie également d'une <strong>garantie satisfait ou remboursé de 14 jours</strong> à compter de la date d'achat. Passé ce délai, le paiement est définitif et non remboursable, l'accès étant accordé à vie.</p>
      </Section>

      <Section title="4. Renouvellements automatiques">
        <p>Les abonnements se renouvellent automatiquement à la fin de chaque période. Si vous souhaitez éviter un renouvellement, vous devez résilier votre abonnement <strong>au moins 24 heures avant</strong> la date de renouvellement depuis les paramètres de votre compte. Les paiements déjà prélevés suite à un renouvellement ne sont pas remboursables, sauf en cas d'erreur technique de notre part.</p>
      </Section>

      <Section title="5. Procédure de remboursement">
        <p>Pour demander un remboursement, envoyez un e-mail à <a href="mailto:support@mylifeboard.app" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a> en précisant :</p>
        <ul>
          <li>L'adresse e-mail associée à votre compte</li>
          <li>La date du paiement concerné</li>
          <li>La raison de votre demande (facultatif, mais apprécié)</li>
        </ul>
        <p className="mt-3">Nous traiterons votre demande dans un délai de 5 jours ouvrés. Le remboursement sera effectué via le même moyen de paiement que celui utilisé lors de l'achat.</p>
      </Section>

      <Section title="6. Cas particuliers">
        <p>Nous nous réservons le droit de refuser un remboursement en cas d'abus avérés (demandes répétées, utilisation intensive avant demande, etc.). En cas de dysfonctionnement technique grave imputable à LifeBoard, nous étudierons votre situation au cas par cas, indépendamment des délais mentionnés ci-dessus.</p>
      </Section>

      <Section title="7. Contact">
        <p>Pour toute question relative à notre politique de remboursement, contactez-nous à : <a href="mailto:support@mylifeboard.app" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a></p>
      </Section>
    </LegalLayout>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-2">{children}</div>
    </div>
  )
}
