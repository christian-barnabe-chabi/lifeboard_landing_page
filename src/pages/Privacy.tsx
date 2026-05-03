import { LegalLayout } from './LegalLayout'

export function Privacy() {
  return (
    <LegalLayout title="Politique de confidentialité" lastUpdated="22 avril 2026">
      <Section title="1. Introduction">
        <p>LifeBoard s'engage à protéger la vie privée de ses utilisateurs. Cette politique explique quelles données nous collectons, comment nous les utilisons et quels sont vos droits.</p>
      </Section>

      <Section title="2. Données collectées">
        <p><strong>Données de compte :</strong> nom, adresse e-mail et mot de passe (haché) lors de l'inscription.</p>
        <p className="mt-3"><strong>Données de contenu :</strong> toutes les informations que vous saisissez dans l'application — transactions financières, habitudes, objectifs, entrées de journal, tâches, priorités du jour. Ces données sont strictement personnelles et ne sont jamais partagées.</p>
        <p className="mt-3"><strong>Données techniques :</strong> adresse IP, type de navigateur ou d'appareil, logs d'accès. Ces données sont utilisées uniquement à des fins de sécurité et de débogage.</p>
      </Section>

      <Section title="3. Utilisation des données">
        <p>Vos données sont utilisées exclusivement pour :</p>
        <ul>
          <li>Fournir et améliorer le service LifeBoard</li>
          <li>Vous envoyer des rappels d'habitudes (si activés)</li>
          <li>Répondre à vos demandes d'assistance</li>
          <li>Assurer la sécurité du service</li>
        </ul>
        <p className="mt-3">Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers à des fins commerciales.</p>
      </Section>

      <Section title="4. Stockage et sécurité">
        <p>Vos données sont stockées sur des serveurs sécurisés. Les mots de passe sont chiffrés et ne sont jamais stockés en clair. Les communications entre votre appareil et nos serveurs sont chiffrées via HTTPS.</p>
      </Section>

      <Section title="5. Cookies">
        <p>LifeBoard utilise uniquement des cookies techniques nécessaires au fonctionnement du service. Aucun cookie publicitaire ou de tracking tiers n'est utilisé.</p>
      </Section>

      <Section title="6. Services tiers">
        <p>LifeBoard utilise les services suivants :</p>
        <ul>
          <li><strong>Processeur de paiement</strong> : gestion des abonnements via l'app web</li>
          <li><strong>Hébergement</strong> : infrastructure serveur pour stocker vos données</li>
        </ul>
        <p className="mt-3">Ces prestataires sont contractuellement tenus de respecter la confidentialité de vos données.</p>
      </Section>

      <Section title="7. Vos droits">
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
          <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
          <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
          <li><strong>Droit à la portabilité</strong> : exporter vos données dans un format standard</li>
          <li><strong>Droit d'opposition</strong> : vous opposer à certains traitements</li>
        </ul>
        <p className="mt-3">Pour exercer ces droits, contactez-nous à <a href="mailto:support@mylifeboard.app" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a>.</p>
      </Section>

      <Section title="8. Conservation des données">
        <p>Vos données sont conservées tant que votre compte est actif. En cas de suppression de compte, vos données sont effacées dans un délai de 30 jours, à l'exception des données requises par obligation légale.</p>
      </Section>

      <Section title="9. Modifications">
        <p>Toute modification substantielle de cette politique vous sera notifiée par e-mail avant son entrée en vigueur.</p>
      </Section>

      <Section title="10. Contact">
        <p>Pour toute question relative à vos données personnelles : <a href="mailto:support@mylifeboard.app" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a></p>
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
