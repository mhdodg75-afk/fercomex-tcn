# Site web FERCOMEX-TCN

Site officiel de l'ONGD **FERCOMEX-TCN** (Ferme Communautaire et
Expérimentale – La Terre de Chez-Nous), organisation congolaise fondée
en 1997 à Lubumbashi, Haut-Katanga.

🌍 **Bilingue** : français (racine) et anglais (dossier `en/`).

## Structure

```
.                     Pages françaises
├── en/               Pages anglaises
├── css/style.css     Couleurs et mise en page (tout en haut du fichier)
├── js/main.js        Menu mobile
├── images/           Photos du site
│   ├── galerie/      Archives de la ferme
│   └── membres/      Portraits de l'équipe
├── videos/           Vidéo de terrain
├── _headers          En-têtes de sécurité (Netlify / Cloudflare Pages)
├── robots.txt        Instructions pour les moteurs de recherche
├── sitemap.xml       Plan du site
└── GUIDE-A-LIRE.md   👈 Le guide complet, à lire en premier
```

## Technique

Site **statique** : HTML, CSS et un peu de JavaScript. Aucune base de
données, aucun cadriciel, aucune dépendance à installer. Pour le voir en
local, ouvrez `index.html` dans un navigateur.

## Mise en ligne

Déposez le dossier sur **Netlify** ou **Cloudflare Pages** (gratuit,
HTTPS automatique). Ces hébergeurs lisent le fichier `_headers`, qui
active les protections de sécurité.

⚠️ GitHub Pages fonctionne aussi, mais ne lit pas `_headers` : les
protections seront partielles.

## Sécurité

- Aucune base de données, aucun compte utilisateur
- En-têtes de sécurité stricts (`_headers`) et politique de sécurité du
  contenu intégrée dans chaque page
- Formulaire de contact protégé contre les robots
- Aucun cookie de suivi ni publicité
- Signalement d'une faille : `/.well-known/security.txt`

**Ne versez jamais** dans ce dépôt de mots de passe, de clés d'API, de
dossiers nominatifs ou de pièces comptables : tout ce qui est ici est
destiné à être public.

## Modifier le site

Tout est expliqué pas à pas dans [`GUIDE-A-LIRE.md`](GUIDE-A-LIRE.md).

---

© FERCOMEX-TCN — Contenu et photographies propriété de l'organisation.
