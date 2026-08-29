# Kasper Studio — Plateforme de décision

Data-room interne : stratégie, marché, concurrents, opportunités, ICP, offres et systèmes IA (Kasper OS), centralisés dans une plateforme HTML autonome.

- **Site live** : https://jfeosjfosi.github.io/kasper-plateforme/
- **Éditer / déployer / accès pour une autre IA** : voir [`docs/handoff-hosting-kasper-os.md`](docs/handoff-hosting-kasper-os.md)

## Structure

- `index.html` — la coquille (design + rendu JS vanilla). Design uniquement.
- `concurrents-data.js` — `window.CONCURRENTS` (19 concurrents scorés).
- `kasper-data.js` — le reste de la data (KPIs, positionnement, marché, opportunités, ICP, angles, offres, Kasper OS, équipe, roadmap, sources).
- `docs/` — les notes de stratégie (.md).
- `auto-sync.mjs` — watcher local : pousse automatiquement à chaque modif (GitHub Pages redéploie).

Hébergement : GitHub Pages (racine, auto-deploy sur push `main`, ~1 min, zéro build).
