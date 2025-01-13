---
title: 'CSS'
tag: 'Web'
description: 'Cours sur le CSS.'
heroImage: '/html.png'
---

## CSS
Le CSS (Cascading Style Sheets) est un langage de feuille de style utilisé pour décrire la présentation d'un document écrit en HTML.
Il permet de définir la mise en forme des éléments HTML, tels que la couleur, la taille, la police, la marge, le positionnement, etc.

<hr />

## Syntaxe
Le CSS est composé de sélecteurs et de déclarations. Un sélecteur est un motif qui identifie les éléments HTML auxquels les règles de style s'appliquent.
Une déclaration est composée d'une propriété et d'une valeur, séparées par deux-points. Par exemple, la déclaration `color: red;` définit la couleur du texte en rouge.

Voici un exemple de règle CSS:
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

On peut également définir des règles pour plusieurs éléments en même temps en les séparant par une virgule:
```css
h1, h2 {
    color: blue;
    font-size: 24px;
}
```

A savoir que on peut styliser des classes personnalisées:
```html
<h1 class="maClasse">Ceci est un titre</h1>
```
```css
.maClasse {
    color: blue;
    font-size: 24px;
}
```

<hr />

## Quelques propriétés CSS courantes
- `color`: définit la couleur du texte. Ex: `color: red;`
- `font-size`: définit la taille de la police. Ex: `font-size: 16px;`
- `background-color`: définit la couleur de fond. Ex: `background-color: yellow;`
- `margin`: définit la marge autour de l'élément. Ex: `margin: 10px;`
- `padding`: définit l'espacement à l'intérieur de l'élément. Ex: `padding: 5px;`
- `border`: définit la bordure de l'élément. Ex: `border: 1px solid black;`
- `text-align`: définit l'alignement du texte. Ex: `text-align: center;`
- `display`: définit le type d'affichage de l'élément. Ex: `display: block;`
- `position`: définit le type de positionnement de l'élément. Ex: `position: relative;`
- `float`: définit le flottement de l'élément. Ex: `float: left;`
- `width`: définit la largeur de l'élément. Ex: `width: 50%;`
- `height`: définit la hauteur de l'élément. Ex: `height: 100px;`
- `z-index`: définit la pile d'affichage de l'élément. Ex: `z-index: 1;`
- `opacity`: définit l'opacité de l'élément. Ex: `opacity: 0.5;`
- `max-width`: définit la largeur maximale de l'élément. Ex: `max-width: 100%;`
- `min-width`: définit la largeur minimale de l'élément. Ex: `min-width: 50%;`
- `max-height`: définit la hauteur maximale de l'élément. Ex: `max-height: 100px;`
- `min-height`: définit la hauteur minimale de l'élément. Ex: `min-height: 50px;`

<hr />

## Sélecteurs CSS
Les sélecteurs CSS permettent de cibler les éléments HTML auxquels les règles de style s'appliquent. Voici quelques exemples de sélecteurs courants:
- Sélecteur d'élément: cible tous les éléments du type spécifié. Ex: `h1 { color: blue; }`
- Sélecteur de classe: cible les éléments avec la classe spécifiée. Ex: `.maClasse { color: red; }`
- Sélecteur d'identifiant: cible l'élément avec l'identifiant spécifié. Ex: `#monId { color: green; }`
- Sélecteur descendant: cible les éléments descendants d'un élément spécifié. Ex: `div p { color: blue; }`
- Sélecteur enfant: cible les éléments enfants d'un élément spécifié. Ex: `div > p { color: red; }`
- Sélecteur universel: cible tous les éléments de la page. Ex: `* { color: black; }`

<hr />

## Exemple
Voici un fichier CSS courant
```css
/* Commentaire CSS */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: blue;
    font-size: 24px;
}

.maClasse {
    color: red;
    font-size: 16px;
}

#monId {
    color: green;
    font-size: 20px;
}

div p {
    color: blue;
}

.container > p {
    color: red;
    display: flex;
    flex-direction: column;
}
```

<hr />