/* Kasper Studio — data concurrents (régénérable, séparée du design)
   Source : recherche concurrentielle 2026-08-29 (4 sous-agents web).
   menaceScore : HIGH=9, MEDIUM-HIGH=7, MEDIUM=5, LOW-MEDIUM=4, LOW=2, N/A=0.
   Couleur menace : rouge = menace haute (risque), ambre = moyenne, vert = faible. */
window.CONCURRENTS = [
  {
    id: "swanky", name: "Swanky", vertical: "Shopify", type: "Concurrent direct",
    pays: "UK + ancrage FR", menace: "HIGH", menaceScore: 9, pricing: "N/A (devis)",
    hero: "Agence Shopify Plus, niche abonnement & rétention DTC, modèle full-funnel.",
    resume: "Seule agence internationale avec un ancrage France réel + une niche défendable (abonnement/rétention) + une couverture full-funnel. La menace e-commerce la plus frontale.",
    forces: ["Seul acteur intl avec ancrage FR", "Niche défendable (abonnement/rétention DTC)", "Full-funnel design → acquisition → rétention"],
    faiblesses: ["Positionnement large", "Pas d'axe IA / systèmes automatiques", "[Hypothèse] moins de proximité qu'un acteur 100% FR"],
    angle: "On ajoute ce qui leur manque : IA opérationnelle (Kasper OS), preuve vécue CYKL, et un positionnement FR premium.",
    source: "https://swankyagency.com", date: "2026-08-29"
  },
  {
    id: "digidop", name: "Digidop", vertical: "Code", type: "Concurrent direct",
    pays: "France (Paris)", menace: "HIGH", menaceScore: 9, pricing: "5 500 – 110 000 $ (public)",
    hero: "« L'agence Webflow n°1 en France, pionnière dans l'adoption de l'IA. »",
    resume: "Le concurrent frontal sur le marché francophone : même langue, même terrain (Webflow + IA/AEO), forte notoriété, pricing public agressif de transparence. +180 marques.",
    forces: ["Leader FR Webflow, Enterprise Premium Partner", "Pricing public transparent (avantage conversion)", "Récit IA/AEO déjà installé", "Full-service design+dev+growth + marque blanche"],
    faiblesses: ["Pas de media buying payant (SEO/AEO organique seulement)", "E-commerce peu/pas mis en avant", "Mono-plateforme Webflow (peu de Shopify/headless)"],
    angle: "On ne refait pas « Webflow + IA ». On ouvre les fronts qu'ils n'ont pas : media buying payant, e-commerce Shopify, et IA opérationnelle (au-delà de l'AEO).",
    source: "https://www.digidop.com/fr", date: "2026-08-29"
  },
  {
    id: "eastsideco", name: "Eastside Co", vertical: "Shopify", type: "Concurrent direct",
    pays: "UK", menace: "MEDIUM-HIGH", menaceScore: 7, pricing: "N/A (devis)",
    hero: "Agence Shopify full-funnel : design + dev + acquisition + rétention in-house.",
    resume: "Le modèle le plus proche de Kasper (chaîne complète in-house). Principale différence : anglophone et sans axe IA.",
    forces: ["Modèle full-funnel proche de Kasper", "Acquisition + rétention internalisées"],
    faiblesses: ["Anglophone (barrière FR)", "Pas d'axe IA / systèmes"],
    angle: "On différencie par l'IA (Kasper OS) et un ton praticien FR, pair-à-pair.",
    source: "https://eastsideco.com", date: "2026-08-29"
  },
  {
    id: "akaru", name: "Akaru", vertical: "Design", type: "Concurrent",
    pays: "France (Lyon)", menace: "MEDIUM", menaceScore: 5, pricing: "N/A (devis)",
    hero: "« Creative web agency in Lyon » — « We joyfully reject the ordinary. »",
    resume: "Agence web créative Lyon, sites vitrines + e-commerce Shopify custom, forte technique interactive (WebGL/GSAP). Passerelle vers l'e-com mais s'arrête au build.",
    forces: ["Excellence technique interactive (WebGL/GSAP, ~35 Awwwards)", "Expertise e-commerce Shopify custom", "Clients prestige (Salomon, Asics, Decathlon, Xbox, HBO)"],
    faiblesses: ["S'arrête au build créatif", "Pas de media buying / IA / run perf", "Ton « beaux sites cool », peu orienté résultats chiffrés"],
    angle: "On couvre la chaîne complète acquisition → conversion → optimisation continue (le « run », pas juste le « build »).",
    source: "https://www.akaru.fr", date: "2026-08-29"
  },
  {
    id: "bonhomme", name: "Bonhomme", vertical: "Design", type: "Concurrent",
    pays: "France (Paris)", menace: "MEDIUM", menaceScore: 5, pricing: "N/A (devis)",
    hero: "« Agence de branding et web à Paris spécialisée dans les marques premium et luxe. »",
    resume: "Studio branding + web luxe (Chanel, Dior, Cartier, Dom Pérignon). Preuve sociale la plus forte du panel design. Domine le luxe parisien, mais hors de la chaîne perf.",
    forces: ["Roster luxe exceptionnel", "+200 distinctions internationales (3 Lovie Gold)", "Positionnement premium clair et défendable"],
    faiblesses: ["Très petite structure (~9), dépend des fondateurs", "Pas de media buying / IA / e-com à la performance", "Cible luxe peu transposable aux PME/scale-ups"],
    angle: "Hors du terrain luxe, sur la chaîne perf/acquisition/e-commerce, ils ne concurrencent pas Kasper.",
    source: "https://bonhommeparis.com/fr", date: "2026-08-29"
  },
  {
    id: "refokus", name: "Refokus", vertical: "Code", type: "Concurrent",
    pays: "US + DE (NYC/Hambourg)", menace: "MEDIUM", menaceScore: 5, pricing: "~25 000 $+",
    hero: "« The agency founders call when their brand and website need to catch up to the startup they're building. »",
    resume: "Agence Webflow design-premium spécialisée deep-tech B2B, très primée (80+ awards), EU-présente. Signature motion/3D forte, mais niche étroite.",
    forces: ["Signature visuelle/motion (WebGL/3D/GSAP)", "Outils propriétaires + mentoring d'agences", "Preuve awards exceptionnelle, présence EU"],
    faiblesses: ["Niche deep-tech B2B, prix premium", "Pas de media buying / e-commerce", "Dépendance à l'esthétique awards"],
    angle: "On ouvre media buying + e-commerce + IA opérationnelle, là où Refokus reste sur le build design premium.",
    source: "https://www.refokus.com", date: "2026-08-29"
  },
  {
    id: "instrument", name: "Instrument", vertical: "Créa", type: "Concurrent (aspirationnel)",
    pays: "US (Portland)", menace: "MEDIUM", menaceScore: 5, pricing: "N/A (devis)",
    hero: "Agence créative digitale de grande envergure (grandes marques).",
    resume: "Référence créa haut de gamme US. Benchmark d'inspiration plus que menace commerciale directe sur le marché FR.",
    forces: ["Envergure créative", "Grandes marques"],
    faiblesses: ["US (hors marché FR)", "Pas de media buying / e-com / IA productisée"],
    angle: "FR + full-funnel mesuré + IA : un terrain qu'Instrument ne joue pas.",
    source: "https://www.instrument.com", date: "2026-08-29"
  },
  {
    id: "cuberto", name: "Cuberto", vertical: "Créa", type: "Concurrent",
    pays: "International", menace: "MEDIUM", menaceScore: 5, pricing: "N/A (devis)",
    hero: "Studio de design produit / UI à forte signature visuelle.",
    resume: "Concurrent d'inspiration design (signature UI/produit reconnaissable). Design-centré, sans dimension performance.",
    forces: ["Signature UI/produit très reconnaissable"],
    faiblesses: ["Design-centré", "Pas de perf / e-commerce / IA"],
    angle: "On relie le design au résultat business (acquisition + conversion), pas juste à l'esthétique.",
    source: "https://cuberto.com", date: "2026-08-29"
  },
  {
    id: "cherami", name: "Cher Ami", vertical: "Créa", type: "Concurrent",
    pays: "France (Lyon)", menace: "MEDIUM", menaceScore: 5, pricing: "N/A (devis)",
    hero: "Studio créa FR (équivalent retenu pour « Cher Studio »).",
    resume: "Studio créatif FR, proximité locale. Interprétation du brief : « Cher Studio » n'était pas vérifiable, Cher Ami retenu comme meilleur équivalent.",
    forces: ["Créa FR, proximité"],
    faiblesses: ["Pas de media buying / e-commerce / IA"],
    angle: "Multi-services + preuve chiffrée : un cran au-dessus d'un studio créa pur.",
    source: "https://cher-ami.tv", date: "2026-08-29",
    note: "Correction de brief : « Cher Studio » non vérifiable → Cher Ami retenu (interprétation)."
  },
  {
    id: "locomotive", name: "Locomotive", vertical: "Design", type: "Concurrent (benchmark)",
    pays: "Canada (Montréal)", menace: "LOW-MEDIUM", menaceScore: 4, pricing: "N/A (devis)",
    hero: "« Digital-first Design Agency… the ultimate digital one-stop shop. »",
    resume: "Studio digital one-stop haut de gamme, palmarès Awwwards massif (Agency of the Year 2018-2024), créateurs de Locomotive Scroll. Référence mondiale mais peu présente en France.",
    forces: ["Palmarès Awwwards le plus impressionnant du panel", "Notoriété communautaire (Locomotive Scroll)", "Discours one-stop shop bien rodé"],
    faiblesses: ["Hors Europe (peu pertinent PME FR)", "Pas de media buying / IA", "Premium peu accessible"],
    angle: "Proximité FR + acquisition + IA opérationnelle : le « one-stop shop » de Locomotive s'arrête au digital design/dev.",
    source: "https://locomotive.ca/en", date: "2026-08-29"
  },
  {
    id: "edgarallan", name: "Edgar Allan", vertical: "Code", type: "Concurrent (benchmark messaging)",
    pays: "US (Atlanta)", menace: "LOW-MEDIUM", menaceScore: 4, pricing: "N/A (devis)",
    hero: "« Webflow Enterprise Partner working at the intersection of brand and performance. »",
    resume: "Autorité sur l'axe marque + performance, 800+ projets Webflow, récit AEO 2026. Référence de messaging à dépasser, mais US et sans paid ni e-commerce.",
    forces: ["Autorité brand + performance", "800+ projets, Webflow Enterprise Partner", "Récit AEO/« found by AI » bien positionné"],
    faiblesses: ["US/anglophone (absent du marché FR)", "Pas de media buying ni e-commerce", "Pricing opaque"],
    angle: "Sa « performance » = SEO/AEO organique. On ajoute le paid + l'e-commerce + le FR.",
    source: "https://www.edgarallan.com", date: "2026-08-29"
  },
  {
    id: "finsweet", name: "Finsweet", vertical: "Code", type: "Concurrent (technique)",
    pays: "US", menace: "LOW-MEDIUM", menaceScore: 4, pricing: "N/A (devis)",
    hero: "« Enterprise Webflow development for teams that need it to scale. »",
    resume: "Autorité technique n°1 de l'écosystème Webflow (créateurs de Client-First, Attributes). Modèle white-label/embedded. Imbattable sur la technique enterprise, mais pas sur notre terrain.",
    forces: ["Crédibilité technique n°1 de l'écosystème", "Modèle white-label/embedded", "Périmètre technique large (e-com, accessibilité, apps)"],
    faiblesses: ["Peu de brand strategy", "Pas de media buying / acquisition", "Orienté enterprise, US"],
    angle: "Peu de chevauchement : on évite le terrain enterprise technique et on joue le multi-services perf FR.",
    source: "https://finsweet.com", date: "2026-08-29"
  },
  {
    id: "wemakewebsites", name: "We Make Websites", vertical: "Shopify", type: "Concurrent",
    pays: "UK", menace: "LOW-MEDIUM", menaceScore: 4, pricing: "N/A (devis)",
    hero: "Agence Shopify enterprise/luxe anglophone (filiale Tech Mahindra).",
    resume: "Segment enterprise/luxe, hors du segment probable de Kasper (mid-market accessible).",
    forces: ["Références enterprise/luxe"],
    faiblesses: ["Hors segment PME/mid-market", "Anglophone"],
    angle: "On occupe le mid-market FR accessible, délaissé entre TPE low-cost et enterprise UK.",
    source: "https://wemakewebsites.com", date: "2026-08-29"
  },
  {
    id: "ramotion", name: "Ramotion", vertical: "Design", type: "Modèle à copier",
    pays: "US (San Francisco)", menace: "LOW-MEDIUM", menaceScore: 4, pricing: "50 000 – 200 000 $ (public)",
    hero: "« Product & brand design agency — build impactful brands, engage users, and drive growth. » — « Look 10x bigger. Investor-ready. »",
    resume: "Le concurrent le plus business/ROI-driven, pricing public transparent, narration valorisation. Peu de recouvrement FR direct, mais le meilleur modèle de positionnement à imiter.",
    forces: ["Pricing public transparent (filtre les leads, ancre la valeur)", "Discours relié au business (levée, valorisation, sales cycle)", "Preuves solides (4.8/5, 1956 avis ; $1B+ levés par clients)"],
    faiblesses: ["Niche startups tech US", "Prix élevés", "Pas de media buying / IA / e-com transactionnel"],
    angle: "À copier : pricing public + narration ROI + offres packagées — appliqués au marché FR.",
    source: "https://www.ramotion.com", date: "2026-08-29"
  },
  {
    id: "murmure", name: "Murmure", vertical: "Design", type: "Concurrent (inspiration)",
    pays: "France (Caen/Paris)", menace: "LOW", menaceScore: 2, pricing: "N/A (devis)",
    hero: "« Studio de direction artistique, de design graphique et numérique » — récit de marque.",
    resume: "Design culturel/artistique et storytelling, collectif de freelances. Territoire différent : concurrent d'inspiration créative, pas de menace commerciale directe.",
    forces: ["Typo maison open-source (Le Murmure)", "Ancrage culturel crédible, longévité (2010)", "~20 distinctions print/digital"],
    faiblesses: ["Structure légère (collectif)", "Pas d'acquisition / IA / e-com perf", "Marque bicéphale potentiellement confuse"],
    angle: "Terrain différent (design culturel). On ne se compare pas, on cible le résultat business.",
    source: "https://murmure.me", date: "2026-08-29"
  },
  {
    id: "okeystudio", name: "Okey Studio", vertical: "Code", type: "Non-concurrent structurel",
    pays: "France (Toulouse)", menace: "LOW", menaceScore: 2, pricing: "N/A (devis)",
    hero: "« A French creative digital studio… interactive websites, made with love and a bit of code. »",
    resume: "Studio de 2 freelances (Toulouse). Fort capital créatif/awards pour sa taille, mais ne joue pas dans la catégorie d'une agence multi-services structurée.",
    forces: ["Capital créatif/awards (5 SOTD Awwwards) pour 2 personnes", "Agilité, relation directe"],
    faiblesses: ["2 personnes, non scalable", "Périmètre étroit (design + dev créatif)", "Aucun media buying / IA / e-commerce"],
    angle: "Concurrent uniquement sur des projets créatifs boutique. Aucune menace multi-services.",
    source: "https://okeystudio.com", date: "2026-08-29",
    note: "Correction de brief : « Okey Dokey » n'existe pas → Okey Studio."
  },
  {
    id: "kab", name: "KAB Agency", vertical: "Shopify", type: "Hors sujet (WordPress local)",
    pays: "France (Lot-et-Garonne)", menace: "LOW", menaceScore: 2, pricing: "Entrée de gamme",
    hero: "Agence WordPress locale, cible TPE / artisans.",
    resume: "N'est PAS une agence Shopify. Menace faible, mais repère de pricing entrée de gamme FR.",
    forces: ["Ancrage local", "Entrée de gamme"],
    faiblesses: ["Pas Shopify (WordPress)", "Pas de performance / IA"],
    angle: "Non pertinent comme concurrent direct ; utile comme borne basse de pricing.",
    source: "https://kabagency.com", date: "2026-08-29",
    note: "Correction de brief : WordPress local, pas une agence Shopify."
  },
  {
    id: "bakery", name: "Bakery Agency", vertical: "Créa", type: "Concurrent (hors FR)",
    pays: "US (Austin)", menace: "LOW", menaceScore: 2, pricing: "N/A (devis)",
    hero: "Agence créa/brand (retenue pour « Bakery »).",
    resume: "Le « Bakery » créatif réellement notoire (Austin). Hors marché FR, sans performance ni e-commerce.",
    forces: ["Créa notoire US"],
    faiblesses: ["Hors FR", "Pas de perf / e-commerce"],
    angle: "Non pertinent sur le marché FR multi-services.",
    source: "https://bakery.agency", date: "2026-08-29",
    note: "Correction de brief : bakery.paris renvoie une erreur 500 → Bakery Agency (Austin)."
  },
  {
    id: "boldcommerce", name: "Bold Commerce", vertical: "Shopify", type: "Partenaire potentiel",
    pays: "Canada (Winnipeg)", menace: "N/A", menaceScore: 0, pricing: "—",
    hero: "Éditeur d'apps Shopify (abonnement, bundles, checkout).",
    resume: "N'est PAS une agence : éditeur d'apps Shopify canadien. Plutôt un partenaire d'intégration / upsell qu'un concurrent.",
    forces: ["Techno complémentaire (apps abonnement/upsell)"],
    faiblesses: ["N'est pas un concurrent agence"],
    angle: "À considérer comme brique d'intégration dans nos missions e-commerce.",
    source: "https://boldcommerce.com", date: "2026-08-29",
    note: "Correction de brief : éditeur d'apps, pas une agence FR."
  }
];
