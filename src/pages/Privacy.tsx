import { LegalLayout } from './LegalLayout'

export function Privacy() {
  return (
    <LegalLayout title="Politique de confidentialité" lastUpdated="6 mai 2026">
      <Section title="1. Identité du responsable de traitement">
        <p>La présente politique de confidentialité décrit la manière dont <strong>OMNIA NEST SARL</strong>, éditeur du service LifeBoard, collecte, utilise, conserve et protège vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi n° 2008-12 du 25 janvier 2008 sur la Protection des Données à caractère Personnel au Sénégal.</p>
        <p className="mt-3"><strong>Responsable de traitement :</strong> OMNIA NEST SARL<br />
        <strong>Siège social :</strong> Dakar, Sénégal<br />
        <strong>Contact :</strong> <a href="mailto:support@omnia-nest.com" style={{ color: "var(--color-primary)" }} className="hover:underline">support@omnia-nest.com</a></p>
      </Section>

      <Section title="2. Données collectées">
        <p><strong>Données d'identification et de compte :</strong> prénom, nom, adresse e-mail et mot de passe (haché et jamais stocké en clair) lors de l'inscription.</p>
        <p className="mt-3"><strong>Données de contenu personnel :</strong> toutes les informations que vous saisissez librement dans l'application — transactions financières, habitudes, objectifs, entrées de journal personnel, tâches, priorités du jour, données de santé (poids, sommeil, hydratation, activité), vision personnelle. Ces données sont strictement personnelles, liées à votre compte, et ne sont jamais consultées, partagées ou vendues à des tiers.</p>
        <p className="mt-3"><strong>Données de facturation :</strong> en cas de souscription à un abonnement payant, les données de paiement sont traitées exclusivement par notre prestataire de paiement. OMNIA NEST SARL ne stocke aucun numéro de carte bancaire.</p>
        <p className="mt-3"><strong>Données techniques de navigation :</strong> adresse IP, type de navigateur ou d'appareil, système d'exploitation, journaux d'accès et d'erreurs. Ces données sont utilisées uniquement à des fins de sécurité, de débogage et d'amélioration du service.</p>
        <p className="mt-3"><strong>Communications :</strong> si vous nous contactez par e-mail, nous conservons la correspondance afin de traiter votre demande.</p>
      </Section>

      <Section title="3. Bases légales du traitement">
        <p>OMNIA NEST SARL fonde ses traitements de données sur les bases légales suivantes :</p>
        <ul>
          <li><strong>Exécution du contrat</strong> : création et gestion de votre compte, fourniture du service LifeBoard</li>
          <li><strong>Intérêt légitime</strong> : sécurité du service, prévention des abus et de la fraude, amélioration du service</li>
          <li><strong>Obligation légale</strong> : conservation des données requises par la loi (notamment fiscales)</li>
          <li><strong>Consentement</strong> : envoi de communications marketing ou promotionnelles (si vous y avez consenti)</li>
        </ul>
      </Section>

      <Section title="4. Utilisation des données">
        <p>Vos données sont utilisées exclusivement pour :</p>
        <ul>
          <li>Créer et gérer votre compte utilisateur</li>
          <li>Fournir, maintenir et améliorer le service LifeBoard</li>
          <li>Vous envoyer des rappels d'habitudes par e-mail (si vous les avez activés dans vos paramètres)</li>
          <li>Traiter vos paiements et gérer votre abonnement</li>
          <li>Répondre à vos demandes d'assistance</li>
          <li>Assurer la sécurité et l'intégrité du service</li>
          <li>Respecter nos obligations légales et réglementaires</li>
        </ul>
        <p className="mt-3"><strong>OMNIA NEST SARL ne vend, ne loue et ne partage jamais vos données personnelles avec des tiers à des fins commerciales ou publicitaires.</strong></p>
      </Section>

      <Section title="5. Stockage et sécurité">
        <p>Vos données sont hébergées sur des serveurs situés dans l'Union Européenne. OMNIA NEST SARL met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou altération :</p>
        <ul>
          <li>Chiffrement des communications via HTTPS/TLS</li>
          <li>Hachage sécurisé des mots de passe</li>
          <li>Isolation stricte des données par utilisateur — aucun utilisateur ne peut accéder aux données d'un autre</li>
          <li>Journalisation des accès et détection d'anomalies</li>
          <li>Sauvegardes régulières des données</li>
        </ul>
        <p className="mt-3">Malgré ces mesures, aucun système n'est infaillible. En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, nous vous en informerons dans les délais requis par le RGPD.</p>
      </Section>

      <Section title="6. Cookies et traceurs">
        <p>LifeBoard utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du service (maintien de session, préférences d'affichage). Aucun cookie publicitaire, de suivi comportemental ou appartenant à des régies publicitaires tierces n'est déposé sur votre appareil.</p>
        <p className="mt-3">Certains outils d'analyse d'audience anonymisés peuvent être utilisés pour mesurer l'utilisation globale du service, sans jamais identifier les utilisateurs individuellement.</p>
      </Section>

      <Section title="7. Partage avec des tiers">
        <p>OMNIA NEST SARL peut être amenée à partager certaines données avec les catégories de sous-traitants suivantes, dans le strict cadre de l'exécution du service :</p>
        <ul>
          <li><strong>Hébergement et infrastructure</strong> : stockage et disponibilité du service</li>
          <li><strong>Processeur de paiement</strong> : gestion sécurisée des transactions bancaires</li>
          <li><strong>Service d'envoi d'e-mails</strong> : envoi des rappels d'habitudes et communications transactionnelles</li>
        </ul>
        <p className="mt-3">Tous ces sous-traitants sont contractuellement tenus de respecter la confidentialité de vos données, d'assurer leur sécurité et de ne les utiliser qu'aux fins prévues. Ils sont sélectionnés pour leur conformité au RGPD.</p>
        <p className="mt-3">OMNIA NEST SARL pourra également divulguer vos données si cela est requis par une obligation légale, une décision judiciaire ou une autorité compétente.</p>
      </Section>

      <Section title="8. Transferts hors UE">
        <p>Si certains de nos sous-traitants sont établis en dehors de l'Union Européenne, OMNIA NEST SARL s'assure que des garanties appropriées sont en place (clauses contractuelles types de la Commission Européenne, certification Privacy Shield ou équivalent) avant tout transfert de données.</p>
      </Section>

      <Section title="9. Vos droits (RGPD)">
        <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :</p>
        <ul>
          <li><strong>Droit d'accès</strong> : obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie</li>
          <li><strong>Droit de rectification</strong> : faire corriger des données inexactes ou incomplètes</li>
          <li><strong>Droit à l'effacement</strong> (« droit à l'oubli ») : demander la suppression de vos données dans les cas prévus par la loi</li>
          <li><strong>Droit à la limitation du traitement</strong> : restreindre l'utilisation de vos données dans certains cas</li>
          <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré, lisible par machine, et les transférer à un autre service</li>
          <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données fondé sur l'intérêt légitime</li>
          <li><strong>Droit de retrait du consentement</strong> : retirer à tout moment un consentement préalablement accordé, sans porter atteinte à la licéité des traitements antérieurs</li>
        </ul>
        <p className="mt-3">Pour exercer ces droits, contactez-nous à <a href="mailto:support@omnia-nest.com" style={{ color: "var(--color-primary)" }} className="hover:underline">support@omnia-nest.com</a>. Nous nous engageons à répondre dans un délai d'un mois. En cas de réponse insatisfaisante, vous disposez du droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }} className="hover:underline">www.cnil.fr</a>).</p>
      </Section>

      <Section title="10. Conservation des données">
        <p>Vos données de compte et de contenu sont conservées pendant toute la durée d'activité de votre compte. En cas de suppression du compte, vos données personnelles sont effacées dans un délai de <strong>30 jours</strong>, à l'exception :</p>
        <ul>
          <li>Des données de facturation et transactions, conservées 10 ans conformément aux obligations légales comptables et fiscales</li>
          <li>Des données nécessaires à la résolution de litiges en cours ou à la prévention de fraudes</li>
        </ul>
        <p className="mt-3">Les données techniques (logs) sont conservées pour une durée maximale de 12 mois.</p>
      </Section>

      <Section title="11. Mineurs">
        <p>LifeBoard est destiné à des personnes majeures. OMNIA NEST SARL ne collecte pas sciemment de données personnelles concernant des mineurs de moins de 16 ans. Si vous avez connaissance qu'un mineur a créé un compte, veuillez nous en informer afin que nous procédions à la suppression de ces données.</p>
      </Section>

      <Section title="12. Modifications de la politique">
        <p>OMNIA NEST SARL se réserve le droit de modifier la présente politique de confidentialité pour refléter des évolutions légales, réglementaires ou fonctionnelles. Toute modification substantielle vous sera notifiée par e-mail au moins 30 jours avant son entrée en vigueur. La version en vigueur est toujours accessible sur cette page avec sa date de dernière mise à jour.</p>
      </Section>

      <Section title="13. Contact">
        <p>Pour toute question relative à vos données personnelles ou à la présente politique, contactez OMNIA NEST SARL à : <a href="mailto:support@omnia-nest.com" style={{ color: "var(--color-primary)" }} className="hover:underline">support@omnia-nest.com</a></p>
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
