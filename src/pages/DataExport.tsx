import { LegalLayout } from './LegalLayout'

export function DataExport() {
  return (
    <LegalLayout title="Export des données" lastUpdated="22 avril 2026">
      <Section title="Votre droit à la portabilité">
        <p>Conformément au RGPD, vous avez le droit d'obtenir une copie de l'ensemble de vos données personnelles dans un format structuré, couramment utilisé et lisible par machine.</p>
      </Section>

      <Section title="Données exportables">
        <p>L'export inclut toutes vos données LifeBoard :</p>
        <ul>
          <li><strong>Finances</strong> : revenus, dépenses, investissements, comptes, dettes, prêts</li>
          <li><strong>Habitudes</strong> : définitions et historique complet des logs</li>
          <li><strong>Objectifs</strong> : objectifs et jalons avec leur statut</li>
          <li><strong>Journal</strong> : toutes les entrées et revues hebdomadaires</li>
          <li><strong>Kanban</strong> : projets et tâches avec leurs sous-tâches</li>
          <li><strong>Priorités</strong> : historique des priorités quotidiennes</li>
          <li><strong>Paramètres</strong> : vos préférences de compte</li>
        </ul>
      </Section>

      <Section title="Format d'export">
        <p>Les données sont exportées au format <strong>JSON</strong>, un format universel lisible par la plupart des outils d'analyse de données (Excel, Python, etc.).</p>
      </Section>

      <Section title="Comment exporter vos données">
        <p><strong>Option 1 — Depuis l'application :</strong></p>
        <ol>
          <li>Ouvrez LifeBoard (web ou mobile)</li>
          <li>Accédez aux <strong>Paramètres</strong></li>
          <li>Faites défiler jusqu'à la section "Données"</li>
          <li>Appuyez sur <strong>"Exporter mes données"</strong></li>
          <li>Un fichier JSON sera téléchargé ou envoyé par e-mail</li>
        </ol>
        <p className="mt-4"><strong>Option 2 — Par e-mail :</strong></p>
        <p>Envoyez une demande à <a href="mailto:support@mylifeboard.app?subject=Demande d'export de données" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a> depuis l'adresse e-mail associée à votre compte.</p>
        <p className="mt-2">Objet suggéré : <em>"Demande d'export de données"</em></p>
      </Section>

      <Section title="Délais de traitement">
        <p>L'export est disponible instantanément via l'application. En cas de demande par e-mail, vous recevrez votre fichier dans un délai de <strong>72 heures</strong>.</p>
      </Section>

      <Section title="Sécurité">
        <p>Le fichier d'export contient des données sensibles (finances, journal personnel). Conservez-le dans un endroit sécurisé et ne le partagez pas avec des tiers.</p>
      </Section>

      <Section title="Contact">
        <p>Pour toute question concernant l'export de vos données : <a href="mailto:support@mylifeboard.app" style={{ color: "var(--color-primary)" }} className="hover:underline">support@mylifeboard.app</a></p>
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
