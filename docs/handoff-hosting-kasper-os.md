# Passation hébergement — Plateforme de décision Kasper Studio

> À destination de **Kasper OS** (l'IA d'E) et de toute IA/dev qui bosse sur la plateforme.
> Objectif : qu'on puisse **bosser sur le même truc, en direct, sans se bloquer**. G et Kasper OS éditent, ça se déploie tout seul.

---

## 1. Les liens

| Quoi | Lien |
|---|---|
| **Site live (à partager)** | https://jfeosjfosi.github.io/kasper-plateforme/ |
| **Repo (source, public)** | https://github.com/jfeosjfosi/kasper-plateforme |
| **Clone** | `git clone https://github.com/jfeosjfosi/kasper-plateforme.git` |

Le site est **dynamique** : dès qu'on pousse sur `main`, GitHub Pages redéploie automatiquement (~1 min). Pas de build, pas de framework, zéro dépendance.

> Note : G voulait du Cloudflare. Pour l'instant c'est hébergé sur **GitHub Pages** (même résultat : lien stable, partageable, auto-update, éditable à deux). Si on veut vraiment mettre **Cloudflare devant** (proxy / domaine custom), il suffit de connecter un compte Cloudflare Pages sur ce repo — dis-le et on le branche.

---

## 2. Architecture (important avant d'éditer)

La **data** est séparée du **design** (règle du skill `decision-data-platform`). Pour changer le **contenu**, tu touches aux fichiers data, **pas** au HTML.

```
kasper-plateforme/
├── index.html            ← la coquille : design system (CSS) + logique (JS). Design uniquement.
├── concurrents-data.js   ← window.CONCURRENTS = [...]  (les 19 concurrents scorés)
├── kasper-data.js        ← window.KPIS, VERDICT, POSITIONNEMENT, MARCHE, OPPORTUNITES,
│                            ICP, ANGLES, OFFRES, KASPEROS, EQUIPE, ROADMAP, SOURCES
├── docs/                 ← les .md de stratégie (éditables/hébergeables aussi)
│   ├── 01-strategie-ia-v4.md
│   ├── 02-audit-site-actuel.md
│   ├── 03-plan-refonte.md
│   ├── reponse-kasper-os-2026-08-29.md
│   └── handoff-hosting-kasper-os.md   ← ce fichier
└── auto-sync.mjs         ← watcher local de G (pousse tout seul à chaque modif)
```

**Pour modifier le contenu** (concurrents, offres, systèmes IA, positionnement, roadmap…) → édite `concurrents-data.js` ou `kasper-data.js`. La structure des objets est explicite, respecte les mêmes clés.
**Pour modifier le design / ajouter un tab** → `index.html` (CSS dans `:root`, rendu en JS vanilla en bas du fichier).

Contraintes à garder : distinguer **fait vs hypothèse**, garder les **sources datées**, ne jamais mettre de chiffre inventé (métriques CYKL = à remplir avec les vraies données GSC/Shopify).

---

## 3. Comment éditer et déployer en direct

### Option A — Accès direct en écriture (recommandé, « on bosse sur le même repo »)
1. Donne-moi (ou à G) ton **identifiant GitHub**. G t'ajoute en collaborateur en une commande :
   ```bash
   gh api -X PUT /repos/jfeosjfosi/kasper-plateforme/collaborators/TON_USER_GITHUB -f permission=push
   ```
   (ou via l'UI : repo → Settings → Collaborators → Add people)
2. Tu acceptes l'invitation, puis :
   ```bash
   git clone https://github.com/jfeosjfosi/kasper-plateforme.git
   cd kasper-plateforme
   # ... tes modifs sur les *-data.js / index.html / docs ...
   git pull --rebase origin main   # toujours pull avant de bosser (évite les blocages)
   git add -A && git commit -m "kasper-os: <ce que tu changes>"
   git push origin main            # -> déploiement auto ~1 min
   ```

### Option B — Sans invitation, tout de suite (fork + PR)
```bash
gh repo fork jfeosjfosi/kasper-plateforme --clone
# modifs, commit, push sur ton fork
gh pr create --fill        # G merge -> déploiement auto
```

### Anti-blocage (les deux bossent en même temps)
- Toujours `git pull --rebase origin main` avant d'éditer et avant de pousser.
- Git gère la fusion ; comme la **data est éclatée par fichier**, les conflits sont rares.
- G tourne `auto-sync.mjs` en local : ses modifs partent automatiquement. Toi tu pushes normalement. Le dernier push gagne pour un fichier donné, donc on se répartit : **toi la data (`*-data.js`, `docs/`), G le design si besoin** — ou on se prévient.

---

## 4. Bloc à ingérer par l'IA (résumé opérationnel)

```
PROJET      : Plateforme de décision interne Kasper Studio (data-room, HTML statique).
LIVE        : https://jfeosjfosi.github.io/kasper-plateforme/
REPO        : https://github.com/jfeosjfosi/kasper-plateforme (public, branche main)
HOST        : GitHub Pages, racine du repo, auto-deploy sur push main (~60 s), pas de build.
ÉDITER DATA : concurrents-data.js (window.CONCURRENTS) + kasper-data.js (KPIS, VERDICT,
              POSITIONNEMENT, MARCHE, OPPORTUNITES, ICP, ANGLES, OFFRES, KASPEROS,
              EQUIPE, ROADMAP, SOURCES). Respecter les clés existantes.
ÉDITER UI   : index.html (CSS dans :root, rendu JS vanilla). Ne pas mettre de data en dur.
DÉPLOYER    : git pull --rebase origin main -> édit -> commit -> git push origin main.
ACCÈS WRITE : être ajouté en collaborateur (fournir ton user GitHub) OU fork + PR.
RÈGLES      : fait vs hypothèse distingués ; sources datées ; aucun chiffre CYKL inventé
              (placeholders [À REMPLIR] tant que les vraies métriques GSC/Shopify manquent).
CADRAGE IA  : « IA » = implémenter des systèmes automatiques (agents Hermes) — voir tab
              Kasper OS. Jamais du buzzword « AI-powered », toujours des actions concrètes.
```

---

## 5. Contexte stratégique (pour aligner l'IA)

- **Positionnement retenu** : **hub multi-services** (Design & Branding · Media Buying / Acquisition · IA/Kasper OS · E-commerce & Shopify), audience large, ancré par le fil rouge **concevoir → lancer → piloter** + la preuve **CYKL**. Shopify/e-com = pilier fort, pas la seule porte d'entrée.
- **IA / Kasper OS** = déploiement de **systèmes automatiques (Hermes)** chez le client : veille concurrentielle, monitoring SEO, alertes e-commerce, contenu, rapports hebdo, automatisation. Installation (presta) + Continu (abonnement = le récurrent).
- **Marché 2026** : l'IA n'est plus un différenciateur (c'est de l'infra) → vendre des actions, pas un slogan ; le généraliste sans preuve est puni → tout repose sur le fil rouge + CYKL chiffré ; pricing transparent = avantage (17/19 concurrents sont opaques).
- **Priorité n°1** : extraire les **vraies métriques CYKL** (GSC + Shopify) pour rendre le positionnement prouvable.

Détails complets dans `docs/` (stratégie v4, audit, plan de refonte, réponse Kasper OS).
