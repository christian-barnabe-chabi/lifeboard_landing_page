import { LegalLayout } from './LegalLayout'

export function DataDeletion() {
  return (
    <LegalLayout title="Suppression des données" lastUpdated="22 avril 2026">
      <Section title="Votre droit à l'effacement">
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez le droit de demander la suppression de l'ensemble de vos données personnelles stockées par LifeBoard.</p>
      </Section>

      <Section title="Ce qui est supprimé">
        <p>Une demande de suppression de compte entraîne l'effacement définitif de :</p>
        <ul>
          <li>Votre profil (nom, adresse e-mail, mot de passe)</li>
          <li>Toutes vos données financières (revenus, dépenses, investissements, comptes, dettes)</li>
          <li>Vos habitudes et historique de suivi</li>
          <li>Vos objectifs et jalons</li>
          <li>Vos entrées de journal et revues hebdomadaires</li>
          <li>Vos tâches, projets et priorités</li>
          <li>Vos paramètres et préférences</li>
        </ul>
        <p className="mt-3">La suppression est <strong>irréversible</strong>. Nous vous recommandons d'exporter vos données avant de procéder.</p>
      </Section>

      <Section title="Comment supprimer votre compte">
        <p><strong>Option 1 — Depuis l'application :</strong></p>
        <ol>
          <li>Ouvrez LifeBoard (web ou mobile)</li>
          <li>Accédez aux <strong>Paramètres</strong></li>
          <li>Faites défiler jusqu'à la section "Compte"</li>
          <li>Appuyez sur <strong>"Supprimer mon compte"</strong></li>
          <li>Confirmez votre mot de passe et validez</li>
        </ol>
        <p className="mt-4"><strong>Option 2 — Par e-mail :</strong></p>
        <p>Envoyez une demande de suppression à <a href="mailto:support@mylifeboard.app?subject=Demande de suppression de compte" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a> depuis l'adresse e-mail associée à votre compte.</p>
        <p className="mt-2">Objet suggéré : <em>"Demande de suppression de compte"</em></p>
      </Section>

      <Section title="Délais de traitement">
        <p>Votre demande sera traitée dans un délai de <strong>30 jours</strong> à compter de sa réception. Vous recevrez une confirmation par e-mail une fois la suppression effectuée.</p>
      </Section>

      <Section title="Données conservées après suppression">
        <p>Certaines données peuvent être conservées au-delà de ce délai si la loi l'exige (obligations comptables, litiges en cours). Ces données sont anonymisées ou supprimées dès que l'obligation légale cesse.</p>
      </Section>

      <Section title="Contact">
        <p>Pour toute question concernant la suppression de vos données : <a href="mailto:support@mylifeboard.app" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a></p>
      </Section>
    </LegalLayout>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1">{children}</div>
    </div>
  )
}
