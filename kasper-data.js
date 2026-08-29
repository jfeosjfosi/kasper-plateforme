/* Kasper Studio — data stratégie (régénérable, séparée du design)
   Sources : docs/ du projet + recherche 2026-08-29. fait vs hypothèse distingués. */

/* ---- KPIs d'accueil ---- */
window.KPIS = [
  { k: "19", l: "concurrents analysés", s: "4 verticales, FR + international" },
  { k: "2", l: "menaces HIGH", s: "Digidop (Webflow+IA FR) · Swanky (Shopify)" },
  { k: "6", l: "white spaces", s: "dont media buying : 0 concurrent" },
  { k: "≈990 €", l: "audit (porte d'entrée)", s: "sous le 500-2000 € du marché" }
];

window.VERDICT = {
  titre: "Le multi-services est un white space réel — à condition de le prouver.",
  texte: "Sur 19 acteurs, aucun ne combine design + media buying + IA + e-commerce. Personne ne fait de media buying payant ; l'IA des concurrents se limite à l'AEO. La place « FR premium multi-services » est vacante. MAIS le marché 2026 punit le généraliste sans preuve : tout le positionnement repose sur le fil rouge (concevoir → lancer → piloter) et la case study CYKL chiffrée.",
  reco: "Foncer sur le multi-services, ancré par CYKL + un pricing transparent. Prochaine action n°1 : extraire les vraies métriques CYKL (GSC + Shopify)."
};

/* ---- Positionnement ---- */
window.POSITIONNEMENT = {
  phrase: "Kasper Studio — l'agence qui conçoit, lance et pilote votre croissance.",
  sous: "Design premium, media buying, e-commerce et IA (Kasper OS) dans une seule équipe. On ne s'arrête pas au livrable : on installe des systèmes automatiques qui font durer les résultats.",
  filRouge: ["Concevoir", "Lancer", "Piloter"],
  filRougeNote: "Les 4 services sont les leviers d'une même promesse (la croissance mesurée), pas 4 métiers empilés. C'est le rempart anti-fouillis.",
  preuve: "On pilote CYKL (notre e-commerce de vélos titane) avec les mêmes méthodes et outils qu'on installe chez nos clients.",
  piliers: [
    { nom: "Design & Branding", desc: "Identité, direction artistique, UI/UX, sites, refonte de parcours, pitch decks.", tag: "G — Créa" },
    { nom: "Media Buying / Acquisition", desc: "Meta Ads (stratégie, créas, campagnes, ROAS). Transversal : lead gen + e-com, pas une niche.", tag: "G — Acquisition" },
    { nom: "IA / Kasper OS", desc: "Systèmes automatiques (agents Hermes) déployés chez le client : veille, monitoring, alertes, contenu, rapports.", tag: "Différenciateur" },
    { nom: "E-commerce & Shopify", desc: "Marketing e-com, conversion/CRO, configurateur & bundles, supply chain & stock.", tag: "E — Terrain CYKL" }
  ],
  awareness: "Marché solution/product aware, sophistication élevée, sceptique. Entrer par la douleur nommée + preuve chiffrée. Bannir « AI-powered » et « on maximise votre potentiel »."
};

/* ---- Marché & tendances ---- */
window.MARCHE = {
  pricing: [
    { presta: "Site vitrine (FR)", mediane: "3 500 €", fourchette: "2 000 – 8 000 €", src: "lafabriquedunet.fr" },
    { presta: "Site e-commerce (FR)", mediane: "10 000 €", fourchette: "3 000 – 40 000 €", src: "lafabriquedunet.fr" },
    { presta: "Site sur-mesure (FR)", mediane: "18 000 €", fourchette: "6 000 – 45 000 €", src: "lafabriquedunet.fr" },
    { presta: "Projet de marque (FR)", mediane: "10 000 €", fourchette: "5 000 – 30 000 €", src: "lafabriquedunet.fr" },
    { presta: "Rebranding complet (FR)", mediane: "30 000 €", fourchette: "15 000 – 60 000 €", src: "lafabriquedunet.fr" },
    { presta: "Build Shopify (intl)", mediane: "5 – 20 K$", fourchette: "Plus : 40 – 150 K$+", src: "kreativagroup / hunger" },
    { presta: "Retainer Shopify (intl)", mediane: "2,5 – 15 K$/mois", fourchette: "E-com full-service : 10 – 50 K$/mois", src: "limelightmarketing" },
    { presta: "Media buying (intl)", mediane: "10 – 20 % du budget pub", fourchette: "+ minimums / forfait", src: "limelightmarketing" }
  ],
  tendances: [
    { t: "L'IA n'est plus un différenciateur", d: "En 2026, mêmes modèles pour tous : « AI is no longer a differentiator. It is infrastructure. » Dire « on est AI-powered » ne vaut rien. → Kasper OS doit se vendre en actions concrètes (systèmes qui agissent), jamais en slogan.", src: "Forbes Agency Council", type: "fait" },
    { t: "Agency as strategic partner", d: "L'exécution se commoditise (IA + internalisation) ; la valeur migre vers le jugement, la stratégie, l'IP propriétaire et les résultats.", src: "4A's Look Ahead 2026", type: "fait" },
    { t: "Pricing à l'outcome en hausse", d: "McKinsey ~25 % de ses honoraires liés aux résultats. « L'heure n'est plus l'unité de valeur. »", src: "IndiaNIC / a16z", type: "fait" },
    { t: "Le marché punit le généraliste", d: "« Une agence qui travaille pour tout le monde ne peut pas faire de claim de valeur crédible. » Il faut nommer un pattern de résultats.", src: "Schmidt Consulting Group", type: "fait" },
    { t: "Audit payant = filtre de confiance", d: "Un diagnostic facturé 500-2000 € « élimine 80 % des prestataires qui vivent du récurrent sans produire ». Valide notre Audit payant.", src: "info-ecommerce.fr", type: "fait" }
  ]
};

/* ---- Opportunités / white spaces ---- */
window.OPPORTUNITES = [
  { id: "media-buying", nom: "Media buying intégré", score: 10, resume: "AUCUN des 19 concurrents ne fait de media buying payant (Meta/Google/TikTok). Le white space n°1, et le pilier de G.", detail: "Tous s'arrêtent au SEO/AEO organique. Positionner Kasper sur « on ne fait pas que construire, on amène du trafic payant qualifié et on le convertit ».", exige: "Preuve de ROAS (budgets G : 5-20 K€/mois, ROAS 2,5-4x)." },
  { id: "ia-op", nom: "IA opérationnelle (Kasper OS)", score: 10, resume: "L'IA des concurrents se limite à l'AEO (« être trouvé par ChatGPT »). L'IA qui AGIT (agents Hermes, automatisation) est libre.", detail: "Veille, monitoring, alertes, contenu, rapports, automatisation du répétitif — installés chez le client. Différenciateur n°1 + récurrent.", exige: "Ne jamais vendre comme buzzword. Montrer des actions concrètes." },
  { id: "ecom-e2e", nom: "E-commerce performance de bout en bout", score: 9, resume: "Store design + acquisition + CRO + rétention réunis : quasi absent du panel.", detail: "Les studios design livrent et partent ; Webflow est faible en e-com. Notre terrain de preuve = CYKL.", exige: "Case study CYKL chiffrée." },
  { id: "fullfunnel-fr", nom: "Full-funnel mesuré en français", score: 9, resume: "Le discours « performance » existe, la preuve chiffrée (trafic → conversion → CA/marge) manque partout.", detail: "Aligné avec la bascule outcome pricing. Piloter par la marge nette après CAC = le langage du dirigeant.", exige: "Mesure / attribution en place." },
  { id: "fr-premium", nom: "FR premium multi-services", score: 9, resume: "Les FR sont mono-verticale ; les full-stack crédibles sont hors Europe. Place vacante.", detail: "Un acteur FR full-stack (design + acquisition + IA + e-com) à ambition premium n'existe pas dans le panel.", exige: "Incarner le fil rouge + la preuve." },
  { id: "pricing-transparent", nom: "Pricing productisé transparent", score: 8, resume: "17/19 concurrents = « nous contacter ». Afficher fourchettes/programmes = confiance + qualification.", detail: "Seuls Ramotion et Digidop montrent des prix, et c'est un aimant à conversion. Table stake face à Digidop.", exige: "Des packages clairs (Audit / Mission / Kasper OS)." }
];

/* ---- ICP & psychographie ---- */
window.ICP = {
  personas: [
    { nom: "Fondateur e-commerce Shopify", tag: "Cible primaire", desc: "Fait tout (produit, fournisseurs, clients). CA ~100K-5M€. Veut vendre plus sans que ça casse (stock, cash, support).", pilote: "Pilote par la marge nette après CAC.", accroche: "Votre e-commerce plafonne. On sait pourquoi, et quoi faire." },
    { nom: "Dirigeant PME / marque", tag: "Cible élargie", desc: "Veut une image au niveau de son produit + des résultats. Pas forcément Shopify ni startup (audience élargie du choix multi-services).", pilote: "Veut un partenaire intégré, pas 3 freelances à coordonner.", accroche: "Une marque au niveau de votre produit — et qui vend." }
  ],
  objections: [
    { o: "« Je vais payer des heures sans résultat. »", r: "Audit payant chiffré + KPI mesurables dès M1 + sprints de 6 semaines." },
    { o: "« Ils vont me verrouiller (jargon, accès, dépendance). »", r: "Transfert de compétences, propriété des assets et des accès, pas de lock-in." },
    { o: "« Ils font tout = ils ne maîtrisent rien. »", r: "Fil rouge + preuve vécue chiffrée (CYKL), pattern de résultats nommable." },
    { o: "« Un généraliste va casser mon SEO / ma conversion. »", r: "On nomme le chiffre à bouger avant de toucher au site ; on sait quand passer la main." },
    { o: "« Encore une agence qui vend du rêve. »", r: "Diagnostic honnête, même si vous ne travaillez pas avec nous ensuite." }
  ],
  verbatims: [
    "Mon agence me parle trafic, mais ma marge ne bouge pas.",
    "Je n'ai pas le temps de devenir expert SEO, ads et stock en même temps.",
    "Quand je coupe les pubs, les ventes s'arrêtent net.",
    "Ils refusent de me donner les accès — je me sens pris en otage.",
    "Un mauvais choix, c'est des mois de croissance perdue.",
    "Donnez-moi les 3 actions qui comptent, pas 50 recommandations.",
    "Mon site fait amateur à côté des gros."
  ]
};

/* ---- Angles ---- */
window.ANGLES = [
  { nom: "Douleur → « absence de système »", cible: "Fondateur e-com", type: "Douleur", hook: "Ce n'est pas de la malchance. C'est l'absence de système.", prio: "P1" },
  { nom: "Anti-généraliste retourné", cible: "Dirigeant / marque", type: "Contre-intuitif", hook: "Design, acquisition, e-commerce et IA. Reliés par vos résultats, pas empilés.", prio: "P1" },
  { nom: "Preuve vécue CYKL", cible: "Fondateur e-com", type: "Preuve", hook: "On ne vend pas ce qu'on n'utilise pas nous-mêmes.", prio: "P1 (nécessite chiffres réels)" },
  { nom: "IA = infrastructure qui agit", cible: "Tous", type: "Éducatif", hook: "On installe un système qui surveille, alerte et rapporte à votre place.", prio: "P1" },
  { nom: "Audit = filtre de confiance", cible: "Tous", type: "Preuve", hook: "Un plan d'action chiffré. Même si vous ne travaillez pas avec nous.", prio: "P1" }
];

/* ---- Offres ---- */
window.OFFRES = [
  { nom: "Audit Croissance", prix: "à partir de ~990 €", role: "Porte d'entrée", hot: false, points: ["Diagnostic sur le périmètre concerné (marketing, conversion, stock/ops, données)", "Livrable : plan d'action priorisé et chiffré", "7 à 10 jours", "Crédible : sous le 500-2000 € du marché"] },
  { nom: "Mission Croissance", prix: "Sur devis", role: "Offre cœur", hot: true, points: ["30 à 90 jours : stratégie + exécution", "Design, acquisition, refonte e-com, ou combinaison", "Installation de Kasper OS incluse", "Livraisons datées"] },
  { nom: "Kasper OS", prix: "Installation + abonnement", role: "Le récurrent", hot: false, points: ["Déploiement de l'infra IA (agents Hermes)", "Puis suivi continu (veille, monitoring, alertes, rapports)", "Ne se crie pas sur le site — se pose en call", "C'est le recurring / la LTV"] },
  { nom: "Sprints Design", prix: "à partir de ~1 800 €", role: "Produits d'appel", hot: false, points: ["Branding Sprint, Landing/Site, Pitch Deck", "Conservés (on assume le multi-services)", "Design comme produit ET comme levier"] },
  { nom: "Media Buying", prix: "10-20 % budget / forfait", role: "Pilier G", hot: false, points: ["Meta Ads : stratégie, créas, campagnes, ROAS", "Transversal (lead gen + e-com, pas une niche)", "Chaque euro mesuré, pas de vanity metrics"] }
];

/* ---- Systèmes IA / Kasper OS (agents Hermes) ---- */
window.KASPEROS = {
  intro: "Kasper OS = l'implémentation de systèmes automatiques (agents Hermes) dans l'e-commerce du client. Pas « on utilise l'IA » : des agents configurés qui exécutent des tâches en continu, à la place du client. On les fait déjà tourner sur CYKL.",
  volets: [
    { nom: "Installation (prestation)", desc: "On déploie Hermes sur le Shopify du client et ses outils (Klaviyo, Google, GA4, Meta) : agents configurés, automatisations branchées, alertes actives." },
    { nom: "Continu (abonnement — le récurrent)", desc: "La machine tourne pour eux, en continu, avec un rapport hebdo actionnable." }
  ],
  systemes: [
    { nom: "Veille concurrentielle", desc: "Prix, nouveautés, pubs, stocks des concurrents — surveillés en continu.", freq: "Continu" },
    { nom: "Monitoring SEO", desc: "Positions Google, mots-clés, opportunités.", freq: "Rapport hebdo" },
    { nom: "Alertes e-commerce", desc: "Rupture de stock, produit à problème, avis négatif — signalés avant que ça coûte des ventes.", freq: "Temps réel" },
    { nom: "Contenu & fiches produits", desc: "Briefs et textes générés dans le ton de marque du client.", freq: "À la demande" },
    { nom: "Rapports de croissance", desc: "Un point hebdo clair avec les actions à faire — pas 40 pages de data brute.", freq: "Hebdo" },
    { nom: "Automatisation du répétitif", desc: "Reporting, tri, suivi : la machine s'en charge.", freq: "Continu" }
  ],
  closing: "Argument massue : « On pilote CYKL avec ces systèmes. On ne vend pas ce qu'on n'utilise pas nous-mêmes. »"
};

/* ---- Équipe & territoire ---- */
window.EQUIPE = {
  vision: "Studio à 2 fondateurs, high-margin. On scale via l'IA et les systèmes (Kasper OS), on ne recrute pas. Le site doit refléter ça : petite équipe senior + systèmes, pas une « grosse agence ».",
  membres: [
    { nom: "Guillaume (G)", role: "Acquisition & Créa", fait: ["Meta Ads / acquisition (5-20 K€/mois, ROAS 2,5-4x, lead gen + e-com, transversal)", "Direction artistique, graphisme, branding", "IA au quotidien (Claude Code, Cursor)"], pasfait: ["Gestion de stock / supply chain", "Consulting SEO / contenu au quotidien"] },
    { nom: "Elliot (E)", role: "Stratégie, E-commerce, Ops & IA", fait: ["Consulting Shopify, marketing e-commerce", "Supply chain, gestion de stock complexe (flux tendu)", "Déploiement de Kasper OS (Hermes)", "Configurateur produit & stratégie de bundles"], pasfait: [] }
  ]
};

/* ---- Roadmap / prochaines actions ---- */
window.ROADMAP = [
  { t: "Extraire les métriques CYKL réelles (GSC + Shopify)", p: "P1", note: "Débloque la preuve n°1. Sans ça, le positionnement reste théorique." },
  { t: "Figer les offres + fourchettes de prix affichables", p: "P1", note: "Différenciation par la transparence (face à Digidop/Ramotion)." },
  { t: "Écrire la copy home en multi-services", p: "P1", note: "Fil rouge + 4 piliers, pas Shopify-only. Directive à Kasper OS." },
  { t: "Productiser Kasper OS (pack standard, livrables, prix plancher)", p: "P2", note: "Le récurrent à cadrer." },
  { t: "Re-tagger les réalisations existantes par service", p: "P2", note: "Preuve d'exécution : Reeflect, Leadminer, Leets, etc." },
  { t: "Veille continue Digidop & Swanky", p: "P3", note: "Via Kasper OS — nos 2 menaces HIGH." }
];

/* ---- Sources ---- */
window.SOURCES = [
  { n: "La Fabrique du Net — tarifs site / branding", u: "https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs", d: "2026-08-29" },
  { n: "Kreativa Group — Shopify agency pricing 2026", u: "https://kreativagroup.com/post/shopify-agency-pricing-what-it-costs-in-2026", d: "2026-08-29" },
  { n: "LimeLight — eCommerce agency cost 2026", u: "https://limelightmarketing.com/blogs/how-much-does-an-ecommerce-agency-cost-in-2025/", d: "2026-08-29" },
  { n: "Forbes — When every agency has the same AI", u: "https://www.forbes.com/councils/forbesagencycouncil/2026/08/12/when-every-agency-has-the-same-ai-what-are-you-actually-selling/", d: "2026-08-29" },
  { n: "4A's — Look Ahead 2026 : Agency as Strategic Partner", u: "https://www.aaaa.org/look-ahead/partner-agency/", d: "2026-08-29" },
  { n: "IndiaNIC — Agency pricing hours vs outcomes", u: "https://www.indianic.com/resources/agency-pricing-hours-vs-outcomes-ai-era", d: "2026-08-29" },
  { n: "Schmidt Consulting Group — value-based pricing", u: "https://www.schmidtconsulting.group/blog/agency-value-based-pricing/", d: "2026-08-29" },
  { n: "Info-Ecommerce — choisir une agence e-commerce", u: "https://www.info-ecommerce.fr/agences-services-ecommerce-choisir-prestataires-2026/", d: "2026-08-29" },
  { n: "Recherche concurrents (4 sous-agents, workspace Desktop)", u: "", d: "2026-08-29" },
  { n: "Docs projet : 01-strategie-ia-v4, 02-audit-site-actuel, 03-plan-refonte", u: "", d: "2026-08-29" }
];
