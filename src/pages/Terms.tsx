import { LegalLayout } from './LegalLayout'

export function Terms() {
  return (
    <LegalLayout title="Conditions d'utilisation" lastUpdated="22 avril 2026">
      <Section title="1. Acceptation des conditions">
        <p>En accédant à LifeBoard via le site web <strong>app.mylifeboard.app</strong> ou l'application mobile, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le service.</p>
      </Section>

      <Section title="2. Description du service">
        <p>LifeBoard est un tableau de bord personnel vous permettant de gérer vos finances, habitudes, objectifs, journal personnel, tâches et calendrier. Le service est accessible sur le web et via une application mobile iOS et Android.</p>
      </Section>

      <Section title="3. Compte utilisateur">
        <p>Pour utiliser LifeBoard, vous devez créer un compte en fournissant une adresse e-mail et un mot de passe. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité effectuée depuis votre compte.</p>
        <p className="mt-3">Vous vous engagez à :</p>
        <ul>
          <li>Fournir des informations exactes lors de l'inscription</li>
          <li>Ne pas partager votre compte avec des tiers</li>
          <li>Notifier immédiatement tout accès non autorisé à votre compte</li>
        </ul>
      </Section>

      <Section title="4. Période d'essai et abonnement">
        <p>LifeBoard propose une période d'essai gratuite de 7 jours à compter de la création du compte, sans nécessiter de carte bancaire. À l'issue de cette période, l'accès au service requiert un abonnement payant.</p>
        <p className="mt-3">Les plans disponibles sont :</p>
        <ul>
          <li><strong>Pro Mensuel</strong> : 3,99 € / mois, renouvelable automatiquement</li>
          <li><strong>Pro Annuel</strong> : 35,99 € / an, renouvelable automatiquement</li>
          <li><strong>Lifetime</strong> : 89 € paiement unique, accès à vie</li>
        </ul>
        <p className="mt-3">Les abonnements sont gérés depuis l'application web <strong>app.mylifeboard.app</strong>. Vous pouvez résilier à tout moment depuis les paramètres de votre compte.</p>
      </Section>

      <Section title="5. Utilisation acceptable">
        <p>Vous acceptez de ne pas utiliser LifeBoard pour :</p>
        <ul>
          <li>Toute activité illégale ou frauduleuse</li>
          <li>Tenter d'accéder aux données d'autres utilisateurs</li>
          <li>Perturber ou endommager le service</li>
          <li>Utiliser le service à des fins commerciales sans autorisation</li>
        </ul>
      </Section>

      <Section title="6. Disponibilité du service">
        <p>Nous nous efforçons de maintenir LifeBoard disponible en permanence, mais ne pouvons garantir une disponibilité ininterrompue. Des interruptions peuvent survenir pour maintenance, mises à jour ou raisons techniques indépendantes de notre volonté.</p>
      </Section>

      <Section title="7. Propriété intellectuelle">
        <p>LifeBoard et tous ses contenus (interface, code, design, textes) sont la propriété exclusive de leurs auteurs. Toute reproduction ou utilisation sans autorisation écrite est interdite.</p>
      </Section>

      <Section title="8. Résiliation">
        <p>Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application. Nous nous réservons le droit de suspendre ou supprimer un compte en cas de violation des présentes conditions.</p>
      </Section>

      <Section title="9. Limitation de responsabilité">
        <p>LifeBoard est fourni "en l'état". Nous ne pouvons être tenus responsables des pertes de données, interruptions de service ou dommages indirects résultant de l'utilisation du service.</p>
      </Section>

      <Section title="10. Modifications">
        <p>Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs seront informés de toute modification substantielle par e-mail ou via le service. La poursuite de l'utilisation après notification vaut acceptation des nouvelles conditions.</p>
      </Section>

      <Section title="11. Contact">
        <p>Pour toute question relative aux présentes conditions, contactez-nous à : <a href="mailto:support@mylifeboard.app" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a></p>
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
