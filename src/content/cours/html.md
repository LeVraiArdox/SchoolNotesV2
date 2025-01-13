---
title: "HTML"
description: "Cours sur le HTML"
tag: "Web"
heroImage: "/html.png"
---

import Diagram from "../../comp/diagram.jsx"

## HTML

Le HTML (HyperText Markup Language) est un langage de balisage utilisé pour créer des pages Web.
Il est écrit en utilisant des balises qui décrivent le contenu de la page. Les balises sont entourées
de chevrons et sont généralement utilisées par paires. Par exemple, une balise de titre commence par `<h1>`
et se termine par `</h1>`. Voici un exemple de balise de titre:

```html
<h1>Ceci est un titre</h1>
```

<hr />
## Structure de base d'une page HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title>Titre de la page</title>
</head>
<body>
    <h1>Ceci est un titre</h1>
    <p>Ceci est un paragraphe.</p>
</body>
</html>
```

<hr />
## Styliser les balises
Il est possible de styliser les balises HTML en utilisant le CSS (Voir le cours sur le CSS).
Pour utiliser le CSS, il faut l'inclure dans le fichier HTML en utilisant la balise `<link>` dans la balise `<head>`.
Voici un exemple de CSS pour styliser un titre:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titre de la page</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h1>Ceci est un titre</h1>
    <p>Ceci est un paragraphe.</p>
  </body>
</html>
```

- stylesheet : indique le type de fichier
- href : indique le chemin du fichier CSS
- type : indique le type de fichier

<hr />
## Balises de base HTML

- Les titres: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`. Plus le chiffre est grand, plus le titre est petit.
- Les paragraphes: `<p>`. Utilisé pour les paragraphes de texte. (`<p>Ceci est un paragraphe.</p>`)
- Les liens: `<a>`. Utilisé pour les liens hypertextes. (`<a href="https://www.google.com">Google</a>`)
- Les images: `<img>`. Utilisé pour afficher des images. (`<img src="image.jpg" alt="Description de l'image">`)
- Les listes: `<ul>`, `<ol>`, `<li>`. Utilisé pour les listes non ordonnées et ordonnées.
  - `<ul>`: liste non ordonnée
  - `<ol>`: liste ordonnée
  - `<li>`: élément de liste
- Les tableaux: `<table>`, `<tr>`, `<td>`. Utilisé pour afficher des données tabulaires.
  - `<table>`: table
  - `<tr>`: ligne
  - `<td>`: cellule
- Les formulaires: `<form>`, `<input>`, `<button>`. Utilisé pour les formulaires.
  - `<form>`: formulaire
  - `<input>`: champ de saisie
  - `<button>`: bouton

Il est possible de faire plusieures pages dans un projet. Cependant, la page principale doit toujours s'appeler `index.html` pour que le serveur web puisse la trouver.
