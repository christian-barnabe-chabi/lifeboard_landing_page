import { LegalLayout } from './LegalLayout'

export function Terms() {
  return (
    <LegalLayout title="Conditions d'utilisation" lastUpdated="6 mai 2026">
      <Section title="1. Présentation de l'éditeur">
        <p>LifeBoard est un service édité par <strong>OMNIA NEST SARL</strong>, société à responsabilité limitée, dont le siège social est situé à <strong>Dakar, Sénégal</strong>. LifeBoard est accessible à l'adresse <strong>app.mylifeboard.app</strong> ainsi que via l'application mobile iOS et Android (en cours de développement).</p>
        <p className="mt-3">Pour toute question, vous pouvez nous contacter à : <a href="mailto:support@omnia-nest.com" style={{ color: "var(--color-primary)" }} className="hover:underline">support@omnia-nest.com</a></p>
      </Section>

      <Section title="2. Acceptation des conditions">
        <p>En accédant à LifeBoard via le site web <strong>app.mylifeboard.app</strong> ou l'application mobile, vous reconnaissez avoir lu, compris et accepté d'être lié par les présentes conditions d'utilisation dans leur intégralité. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le service.</p>
        <p className="mt-3">Ces conditions s'appliquent à toute personne physique utilisant le service à titre personnel, non professionnel. L'utilisation à des fins commerciales nécessite une autorisation écrite préalable d'OMNIA NEST SARL.</p>
      </Section>

      <Section title="3. Description du service">
        <p>LifeBoard est un tableau de bord personnel conçu pour vous aider à piloter les différentes dimensions de votre vie au quotidien. Le service comprend notamment :</p>
        <ul>
          <li><strong>Finance</strong> : suivi des revenus, dépenses, investissements, prêts, dettes, budget et abonnements</li>
          <li><strong>Performance</strong> : gestion d'habitudes, objectifs, journal personnel et bilans hebdomadaires</li>
          <li><strong>Organisation</strong> : tableau kanban, calendrier et priorités du jour</li>
          <li><strong>Vision</strong> : horizons temporels et tableau de vision personnelle</li>
          <li><strong>Santé</strong> : suivi du poids, sommeil, hydratation et activité physique</li>
        </ul>
        <p className="mt-3">Le service est accessible sur le web à l'adresse <strong>app.mylifeboard.app</strong>. Une application mobile iOS et Android est actuellement en cours de développement. OMNIA NEST SARL se réserve le droit de faire évoluer les fonctionnalités du service à tout moment.</p>
      </Section>

      <Section title="4. Compte utilisateur">
        <p>Pour utiliser LifeBoard, vous devez créer un compte en fournissant un prénom, un nom, une adresse e-mail valide et un mot de passe. Vous êtes seul responsable de la confidentialité de vos identifiants et de l'ensemble des activités effectuées depuis votre compte.</p>
        <p className="mt-3">Vous vous engagez à :</p>
        <ul>
          <li>Fournir des informations exactes, complètes et à jour lors de l'inscription</li>
          <li>Ne pas créer de compte au nom d'une autre personne sans son autorisation</li>
          <li>Ne pas partager vos identifiants de connexion avec des tiers</li>
          <li>Notifier immédiatement OMNIA NEST SARL de tout accès non autorisé à votre compte à l'adresse <a href="mailto:support@omnia-nest.com" style={{ color: "var(--color-primary)" }} className="hover:underline">support@omnia-nest.com</a></li>
        </ul>
        <p className="mt-3">OMNIA NEST SARL ne peut être tenu responsable des dommages résultant du non-respect de ces obligations de sécurité.</p>
      </Section>

      <Section title="5. Période d'essai et abonnement">
        <p>LifeBoard propose une <strong>période d'essai gratuite de 7 jours</strong> à compter de la création du compte, sans nécessiter de carte bancaire. L'ensemble des fonctionnalités est accessible durant cette période. À l'issue de la période d'essai, l'accès au service requiert la souscription d'un abonnement payant.</p>
        <p className="mt-3">Les plans disponibles sont :</p>
        <ul>
          <li><strong>Pro Mensuel</strong> : 4,99 $ USD / mois, renouvelable automatiquement chaque mois</li>
          <li><strong>Pro Annuel</strong> : 49,99 $ USD / an, renouvelable automatiquement chaque année</li>
          <li><strong>Lifetime</strong> : 199,99 $ USD paiement unique, accès à vie sans abonnement récurrent</li>
        </ul>
        <p className="mt-3">Tous les prix sont indiqués en dollars américains (USD), taxes comprises. Les abonnements sont gérés depuis l'application web <strong>app.mylifeboard.app</strong>. Vous pouvez résilier votre abonnement à tout moment depuis les paramètres de votre compte, sans frais. La résiliation prend effet à la fin de la période déjà payée. Aucun remboursement proratisé n'est accordé pour la période restante, sauf dans le cadre de la garantie de remboursement décrite dans notre <a href="/remboursement" style={{ color: "var(--color-primary)" }} className="hover:underline">Politique de remboursement</a>.</p>
      </Section>

      <Section title="6. Utilisation acceptable">
        <p>LifeBoard est un outil à usage strictement personnel. Vous acceptez de ne pas utiliser le service pour :</p>
        <ul>
          <li>Toute activité illégale, frauduleuse ou contraire à l'ordre public</li>
          <li>Tenter d'accéder aux données d'autres utilisateurs</li>
          <li>Perturber, compromettre ou endommager le service ou ses infrastructures</li>
          <li>Procéder à des tentatives de rétro-ingénierie, décompilation ou extraction du code source</li>
          <li>Utiliser des robots, scrapers ou tout outil automatisé pour accéder au service</li>
          <li>Utiliser le service à des fins commerciales, de revente ou de sous-licence sans autorisation écrite</li>
          <li>Publier ou transmettre des contenus illicites, diffamatoires ou portant atteinte aux droits de tiers</li>
        </ul>
        <p className="mt-3">Tout manquement à ces règles pourra entraîner la suspension ou la résiliation immédiate de votre compte, sans préavis et sans remboursement.</p>
      </Section>

      <Section title="7. Disponibilité du service">
        <p>OMNIA NEST SARL s'efforce de maintenir LifeBoard disponible 24h/24, 7j/7, mais ne peut garantir une disponibilité ininterrompue. Des interruptions planifiées (maintenance, mises à jour) ou non planifiées (incidents techniques, force majeure) peuvent survenir.</p>
        <p className="mt-3">OMNIA NEST SARL informera les utilisateurs des maintenances planifiées dans un délai raisonnable. En cas d'interruption prolongée, aucune indemnisation ne pourra être réclamée, sauf disposition contraire de la loi applicable.</p>
      </Section>

      <Section title="8. Propriété intellectuelle">
        <p>LifeBoard et l'ensemble de ses éléments constitutifs (interface utilisateur, code source, design, marques, logos, textes et données) sont la propriété exclusive d'OMNIA NEST SARL ou de ses concédants de licence, et sont protégés par les lois sénégalaises et les conventions internationales relatives à la propriété intellectuelle.</p>
        <p className="mt-3">Aucun droit de propriété intellectuelle n'est cédé à l'utilisateur au titre des présentes conditions. Toute reproduction, représentation, adaptation, modification ou utilisation de tout ou partie de ces éléments, sans l'autorisation écrite préalable d'OMNIA NEST SARL, est strictement interdite et constitue une contrefaçon.</p>
        <p className="mt-3">Les contenus que vous saisissez dans LifeBoard (données financières, journaux, habitudes, etc.) restent votre propriété. Vous accordez à OMNIA NEST SARL une licence limitée, non-exclusive et révocable, aux seules fins d'exécuter le service.</p>
      </Section>

      <Section title="9. Données personnelles">
        <p>OMNIA NEST SARL traite vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés. Le détail de ce traitement est décrit dans notre <a href="/confidentialite" style={{ color: "var(--color-primary)" }} className="hover:underline">Politique de confidentialité</a>, qui fait partie intégrante des présentes conditions.</p>
      </Section>

      <Section title="10. Résiliation">
        <p>Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application, ou en adressant une demande à <a href="mailto:support@omnia-nest.com" style={{ color: "var(--color-primary)" }} className="hover:underline">support@omnia-nest.com</a>. La suppression du compte entraîne la résiliation immédiate de l'abonnement en cours (sans remboursement proratisé, sauf dans le délai légal de rétractation) et l'effacement de vos données dans un délai de 30 jours.</p>
        <p className="mt-3">OMNIA NEST SARL se réserve le droit de suspendre ou résilier l'accès d'un utilisateur, sans préavis, en cas de violation des présentes conditions, d'utilisation abusive, ou de non-paiement.</p>
      </Section>

      <Section title="11. Limitation de responsabilité">
        <p>LifeBoard est fourni "en l'état" et "selon disponibilité". Dans les limites autorisées par la loi applicable, OMNIA NEST SARL ne saurait être tenu responsable :</p>
        <ul>
          <li>Des pertes ou corruptions de données liées à une panne technique ou à une erreur de l'utilisateur</li>
          <li>Des décisions financières, personnelles ou professionnelles prises sur la base des données saisies dans l'application</li>
          <li>Des dommages indirects, accessoires, spéciaux ou consécutifs découlant de l'utilisation ou de l'impossibilité d'utiliser le service</li>
          <li>Des interruptions de service liées à des causes indépendantes de la volonté d'OMNIA NEST SARL</li>
        </ul>
        <p className="mt-3">La responsabilité totale d'OMNIA NEST SARL au titre des présentes ne saurait en aucun cas excéder le montant versé par l'utilisateur au cours des 12 derniers mois précédant le dommage.</p>
      </Section>

      <Section title="12. Modifications des conditions">
        <p>OMNIA NEST SARL se réserve le droit de modifier les présentes conditions à tout moment. En cas de modification substantielle, les utilisateurs seront informés par e-mail au moins 30 jours avant l'entrée en vigueur des nouvelles conditions. La poursuite de l'utilisation du service après cette date vaut acceptation des nouvelles conditions. En cas de désaccord, l'utilisateur dispose de la faculté de résilier son compte sans frais avant l'entrée en vigueur des modifications.</p>
      </Section>

      <Section title="13. Loi applicable et juridiction compétente">
        <p>Les présentes conditions sont régies par le droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes conditions, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord amiable, le litige sera soumis aux tribunaux français compétents.</p>
        <p className="mt-3">Conformément aux dispositions du Code de la consommation, vous disposez également du droit de recourir gratuitement à un médiateur de la consommation.</p>
      </Section>

      <Section title="14. Contact">
        <p>Pour toute question relative aux présentes conditions, contactez OMNIA NEST SARL à : <a href="mailto:support@omnia-nest.com" style={{ color: "var(--color-primary)" }} className="hover:underline">support@omnia-nest.com</a></p>
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
