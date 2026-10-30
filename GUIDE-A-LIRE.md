# 🌱 Guide du site FERCOMEX-TCN — à lire en premier

Bienvenue ! Ce guide explique **tout ce que vous devez faire, étape par étape**,
pour personnaliser le site et le mettre en ligne sur **www.fercomex-tcn.com**.

---

## 📁 Ce que contient ce dossier

| Fichier / dossier | Rôle |
|---|---|
| `index.html` | Page d'accueil |
| `a-propos.html` | Histoire, vision, missions, objectifs |
| `nos-actions.html` | Les 4 domaines d'action détaillés |
| `actualites.html` | Les nouvelles de l'ONG |
| `contact.html` | Formulaire de contact + section don |
| `confidentialite.html` | Politique de confidentialité (obligation légale) |
| `css/style.css` | Les couleurs et le style de tout le site |
| `js/main.js` | Le menu mobile (ne pas toucher) |
| `images/` | Toutes les photos du site |

Pour voir le site sur votre ordinateur : **double-cliquez sur `index.html`**,
il s'ouvrira dans votre navigateur.

---

## ÉTAPE 1 — Les photos

### ✅ Déjà en place
- `images/hero.jpg` — grande image d'accueil (centre de formation de Kasungami)
- `images/apropos-histoire.jpg` — la ferme (section « Notre histoire »)
- `images/apropos-equipe.jpg` — le groupe de Kaisala
- `images/logo.jpg` — votre logo officiel
- `images/membres/` — les 16 portraits des membres (page Équipe)

⚠️ **À vérifier** : ouvrez `equipe.html` et confirmez que chaque portrait
correspond bien au bon nom. Pour corriger une photo, remplacez simplement
le fichier correspondant dans `images/membres/` (format carré, 400 × 400 px).

### 📷 Toutes les photos sont en place

Le site n'utilise plus aucune icône de remplacement : les quatre
domaines d'action et les actualités sont illustrés par de vraies photos
de terrain.

| Fichier | Photo | Origine |
|---|---|---|
| `hero.jpg` | Centre de formation de Kasungami | Vos photos |
| `apropos-histoire.jpg` | La ferme | Vos photos |
| `apropos-equipe.jpg` | Le groupe à Kaisala | Vos photos |
| `action-agriculture.jpg` | Pépinière de vétiver | WhatsApp 2026 |
| `action-climat.jpg` | Planches de culture et repiquage | Courriel 2010 |
| `action-dechets.jpg` | Big bags de plastique collecté | WhatsApp 2026 |
| `action-femmes.jpg` | Ensachage du maïs récolté | Courriel 2010 |
| `actu-2025.jpg` | Sac stencilé FERCOMEX-TCN | WhatsApp 2026 |
| `actu-rotary.jpg` | Visite du Rotary Club, février 2013 | Courriel 2013 |
| `actu-porcs.jpg` | Les porcs dans leur enclos | Courriel 2013 |
| `images/membres/` | Les 16 portraits | Document des membres |

Pour remplacer une photo : déposez la vôtre dans `images/` **sous le
même nom de fichier**, et elle apparaît automatiquement. Formats :
600 × 450 px pour les domaines d'action, 640 × 400 px pour les
actualités, 1600 × 900 px pour `hero.jpg`.

⚠️ **Avant de publier une photo où une personne est reconnaissable**,
assurez-vous d'avoir son accord — et l'accord écrit des parents s'il
s'agit d'un enfant.

---

## ÉTAPE 2 — Modifier les textes

Ouvrez un fichier `.html` avec **Visual Studio Code**
(gratuit, https://code.visualstudio.com) ou le Bloc-notes.

Faites Ctrl + F et cherchez `MODIFIEZ` : ces repères indiquent tout ce qui
reste à compléter.

- Vos **coordonnées** : téléphone, adresse précise, courriel officiel
- Les **chiffres clés** de la page d'accueil (communautés accompagnées,
  producteurs formés) — remplacez les tirets par vos vrais nombres
- Les **noms de vos partenaires**
- La description exacte du réseau **Ethics4Growth**
- Les **liens de vos réseaux sociaux** (`contact.html`)
- La présentation de votre **équipe** sur `a-propos.html`

⚠️ Modifiez uniquement le texte **entre** les balises, jamais les balises.

---

## ÉTAPE 3 — Ajouter une nouvelle actualité (plus tard)

Dans `actualites.html`, cherchez le repère
`NOUVELLES ACTUALITÉS ICI`. Copiez un bloc complet :

```html
<article class="carte-actu">
  ...
</article>
```

Collez-le juste sous le repère, changez la photo, la date, le titre
et le texte. C'est tout ! (Pensez à mettre aussi les 3 plus récentes
sur la page d'accueil `index.html`, section Actualités.)

---

## ÉTAPE 4 — Activer le formulaire de contact

Le formulaire utilise **Formspree** (gratuit, sécurisé, sans serveur) :

1. Créez un compte gratuit sur https://formspree.io avec l'adresse
   e-mail de l'ONG.
2. Cliquez « New Form », donnez-lui un nom, copiez l'adresse fournie
   (elle ressemble à `https://formspree.io/f/abcdwxyz`).
3. Dans `contact.html`, remplacez `VOTRE-CODE-ICI` par votre code.

Les messages arriveront directement dans votre boîte e-mail.
Le champ invisible `_gotcha` bloque les robots spammeurs : ne le supprimez pas.

---

## ÉTAPE 5 — Acheter le nom de domaine

1. Allez chez un registraire fiable : **Namecheap** (namecheap.com),
   **OVH** (ovhcloud.com) ou **GoDaddy**.
2. Recherchez `fercomex-tcn.com` et vérifiez qu'il est disponible.
3. Achetez-le (environ 15–25 $ US par an, à renouveler chaque année).
4. Activez la **protection WHOIS** (souvent gratuite) pour masquer
   vos informations personnelles.

ℹ️ Les majuscules ne comptent pas : `www.fercomex-TCN.com` et
`www.fercomex-tcn.com` mènent au même site.

---

## ÉTAPE 6 — Mettre le site en ligne (hébergement)

Je recommande **Netlify** (netlify.com) : gratuit pour un site comme
celui-ci, très fiable, et le **HTTPS (cadenas de sécurité) est
automatique**.

1. Créez un compte gratuit sur https://www.netlify.com
2. Cliquez « Add new site » → « Deploy manually ».
3. **Glissez-déposez le dossier complet du site** dans la zone prévue.
   Le site est en ligne en 30 secondes sur une adresse provisoire.
4. Allez dans « Domain settings » → « Add custom domain » et entrez
   `fercomex-tcn.com`.
5. Netlify vous donne des **serveurs DNS** (ex. `dns1.p03.nsone.net`) :
   copiez-les dans les réglages DNS chez votre registraire (étape 5).
6. Attendez quelques heures : le site répond alors sur
   `www.fercomex-tcn.com` avec le HTTPS activé automatiquement. ✅

Alternative : **Cloudflare Pages** (pages.cloudflare.com), gratuit aussi.

Pour mettre à jour le site plus tard : modifiez vos fichiers sur votre
ordinateur, puis re-glissez le dossier dans Netlify (« Deploys » →
glisser-déposer). L'ancien site est remplacé instantanément.

---

## ÉTAPE 7 — Sécurité : la liste de contrôle ✅

Votre site est déjà conçu pour être très sûr :

- ✅ **HTTPS automatique** avec Netlify (connexion chiffrée)
- ✅ **Site statique** : pas de base de données, donc quasiment rien à pirater
- ✅ **Formulaire protégé** contre le spam (piège anti-robots + limites de taille)
- ✅ **Politique de confidentialité** incluse (`confidentialite.html`)
- ✅ Pas de cookies de suivi, pas de publicité

Ce que VOUS devez faire :
- 🔐 Mot de passe **long et unique** pour Netlify, Formspree et le registraire
  (utilisez un gestionnaire de mots de passe comme Bitwarden, gratuit)
- 🔐 Activez la **double authentification (2FA)** sur ces trois comptes
- 🔐 Ne publiez **jamais** de coordonnées bancaires sur le site : pour les
  dons en ligne, on ajoutera plus tard un service de paiement sécurisé
  (PayPal Giving, HelloAsso, GlobalGiving…)
- 🔐 Ne mettez pas de photos permettant d'identifier des enfants sans
  l'autorisation écrite des parents

---

## ÉTAPE 8 — Avant le lancement : vérifications finales

- [ ] Toutes les photos provisoires sont remplacées
- [ ] Les chiffres clés sont les vrais chiffres
- [ ] Les coordonnées (e-mail, téléphone) sont exactes
- [ ] Le formulaire fonctionne (envoyez-vous un message test)
- [ ] Le site s'affiche bien sur un téléphone
- [ ] Les liens des réseaux sociaux fonctionnent (ou sont retirés)

---


---

## 🌐 Le site est bilingue (français / anglais)

| Version | Dossier | Pages |
|---|---|---|
| Français | racine du dossier | `index.html`, `a-propos.html`, `equipe.html`, `nos-actions.html`, `actualites.html`, `contact.html`, `confidentialite.html` |
| Anglais | sous-dossier `en/` | `index.html`, `about.html`, `team.html`, `our-work.html`, `news.html`, `contact.html`, `privacy.html` |

Un sélecteur **FR | EN** apparaît dans le menu de chaque page et renvoie
vers la page équivalente dans l'autre langue.

### ⚠️ Règle d'or : modifiez toujours les DEUX versions
Si vous changez un numéro de téléphone, un chiffre ou une actualité en
français, faites la même modification dans le fichier anglais correspondant.
Sinon les deux versions vont diverger.

### Le formulaire de contact anglais
Mettez le **même code Formspree** dans `en/contact.html` que dans
`contact.html` (cherchez `VOTRE-CODE-ICI` dans les deux fichiers).

### Quelle langue s'affiche en premier ?
Le visiteur arrive par défaut sur la version française (`index.html`).
C'est le bon choix pour la RDC. Les bailleurs internationaux cliqueront
sur « EN ».


---

## 🪶 Le ruban de devise trilingue

Sous le menu de chaque page, un ruban vert affiche la devise en
alternance : **FR** Notre Terre — Notre Prospérité · **EN** Our Land —
Our Prosperity · **SW** Udongo Wetu — Ufanisi Wetu.

Chaque langue reste 4 secondes, puis la suivante apparaît en fondu.
L'animation est faite entièrement en CSS : elle fonctionne même si le
JavaScript est bloqué.

**Modifier une devise** : cherchez `RUBAN DE DEVISE` dans une page
`.html` et changez le texte. ⚠️ À faire dans les 14 fichiers
(7 français + 7 anglais dans `en/`).

**Changer la vitesse** : dans `css/style.css`, section « Ruban de
devise », remplacez les valeurs `12s` (cycle complet pour les trois
langues). Par exemple `9s` = 3 secondes par langue.

### ⚠️ Si le ruban ne change pas de langue chez vous

C'est que votre système a l'option « réduire les animations » activée.
Le ruban affiche alors les trois devises empilées, sans mouvement —
c'est voulu, pour les personnes sensibles au mouvement.

Pour vérifier :
- **Windows** : Paramètres → Accessibilité → Effets visuels → « Effets
  d'animation »
- **macOS** : Réglages Système → Accessibilité → Affichage → « Réduire
  les animations »
- **iPhone / Android** : Accessibilité → Mouvement / Animations

Les visiteurs de votre site qui n'ont pas activé cette option verront
bien l'alternance.

Pour forcer l'alternance pour tout le monde, supprimez dans
`css/style.css` le bloc qui commence par
`@media (prefers-reduced-motion: reduce)` (il est signalé par un
commentaire).

---

## 🏷️ Les logos des réseaux et partenaires

Le site affiche pour l'instant une **pastille colorée avec le sigle**
(GWCN, GAIA, BFP…) à la place de chaque logo. C'est propre et lisible,
mais les vrais logos feront plus professionnel.

**Comment les ajouter :**

1. Obtenez le logo officiel en PNG à fond transparent (voir
   `images/logos/LISEZ-MOI.txt` pour savoir à qui le demander).
2. Déposez le fichier dans `images/logos/` sous le nom indiqué.
3. Dans `index.html`, cherchez `LOGO :` et suivez l'instruction écrite
   juste au-dessus de chaque pastille.
4. Refaites la même chose dans `en/index.html` (le chemin y commence
   par `../`).

⚠️ **Ne copiez pas un logo trouvé par une recherche d'images Google.**
La qualité est mauvaise et l'usage n'est pas autorisé. Chaque réseau
fournit gratuitement à ses membres un « member badge » officiel :
écrivez à info@gwcnweb.org (GWCN) ou info@no-burn.org (GAIA) et
demandez-le en précisant que FERCOMEX-TCN est membre.


---

## 🖼️ La galerie « La ferme en images »

En bas de la page **Nos actions** (et de `en/our-work.html`), 16 photos
d'archives de 2010 et 2013 : préparation des sols, cultures, élevage,
construction, visite du Rotary Club.

**Ajouter une photo** : déposez-la dans `images/galerie/` (560 × 420 px),
puis copiez un bloc `<figure> … </figure>` dans la page et changez le
nom du fichier, l'année et la légende.

## 🔐 Fichiers de sécurité ajoutés

| Fichier | Rôle |
|---|---|
| `_headers` | En-têtes de sécurité (Netlify, Cloudflare Pages) |
| `robots.txt` | Indique aux moteurs quoi indexer |
| `sitemap.xml` | Plan du site pour Google |
| `404.html` | Page affichée si une adresse n'existe pas |
| `.well-known/security.txt` | Pour signaler une faille de sécurité |
| `README.md` | Présentation du projet (pour GitHub) |
| `.gitignore` | Empêche de verser des fichiers sensibles |

Chaque page contient aussi une **politique de sécurité du contenu**
intégrée, qui protège même sur un hébergeur qui ne lit pas `_headers`.

⚠️ **Avant la mise en ligne**, remplacez le domaine
`www.fercomex-tcn.com` par le vôtre dans `robots.txt`, `sitemap.xml`
et `.well-known/security.txt` si vous en choisissez un autre. Mettez
aussi à jour l'adresse courriel du `security.txt`.

### Netlify ou GitHub Pages ?

| | Netlify / Cloudflare Pages | GitHub Pages |
|---|---|---|
| HTTPS automatique | ✅ | ✅ |
| Lit le fichier `_headers` | ✅ | ❌ |
| Dépôt privé possible (gratuit) | ✅ | ❌ |
| Note attendue sur securityheaders.com | **A** | C ou D |

👉 **Netlify est recommandé** pour la sécurité maximale.

## Besoin de changer les couleurs ?

Ouvrez `css/style.css` : les couleurs sont toutes regroupées **en haut
du fichier** avec leur nom en français. Changez une valeur, tout le
site suit.

Bon lancement ! 🌍🌱
