---
title: 'Les bases git'
tag: 'git'
description: 'Cours sur les bases de git'
heroImage: '/git.png'
---

## Les bases de git
Git est un logiciel de gestion de versions. Il permet de suivre les modifications d'un projet, et de travailler a plusieurs dessus.
Il existe plusieures commandes importantes:
- **git init**: initialise un nouveau dépôt (repository)
- **git clone**: clone un dépôt existant
- **git add**: ajoute des fichiers au suivi
- **git commit**: enregistre les modifications
- **git push**: envoie les modifications sur un serveur
- **git pull**: récupère les modifications depuis un serveur
- **git branch**: gère les branches
- **git merge**: fusionne les branches
- **git log**: affiche l'historique des commits
- **git status**: affiche l'état du dépôt
- **git checkout**: change de branche

<hr />

## Les blob
Un blob est un objet git qui contient le contenu d'un fichier. Il est stocké dans le dossier .git/objects sous forme de hash.

ex: index.html est un blob

## Les trees
Un tree est un objet git qui contient la structure d'un répertoire. Il contient des blobs et des autres trees. Il est stocké dans le dossier .git/objects sous forme de hash.

ex: un dossier contenant index.html et style.css est un tree

## Les commits
Un commit est un objet git qui contient les modifications d'un projet. Il contient un tree, un auteur, un message, et des parents. Il est stocké dans le dossier .git/objects sous forme de hash.

ex: un commit qui ajoute index.html et style.css:
    
 ```sh
git commit -m "add index.html and style.css"
```

<hr />

## Exemple d'utilisation de git
1. Initialiser un dépôt:
    ```sh
    git init
    ```
    On peut verifier le status du dépot:
    ```sh
    git status
    ```
2. Ajouter des fichiers:
    ```sh
    git add index.html
    git add style.css
    ```
3. Enregistrer les modifications:
    ```sh
    git commit -m "add index.html and style.css"
    ```
4. Voir l'historique:
    ```sh
    git log
    ```
5. Changer de branche:
    ```sh
    git branch backend
    git checkout -b backend
    ```
6. Creer une autre branche:
    ```sh
    git branch frontend
    git checkout -b frontend
    ```
7. Fusionner les branches:
    ```sh
    git merge backend
    ```
8. Envoyer les modifications:
    ```sh
    git push origin main 
    ```
9. Récupérer les modifications:
    ```sh
    git pull origin main
    ```
