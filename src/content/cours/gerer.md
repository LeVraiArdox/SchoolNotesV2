---
title: 'Comment gère-t-on un réseau ?'
tag: 'Réseaux'
description: 'Cours sur les modes de gestion des réseaux.'
heroImage: '/network.png'
---

## Les modes de gestion
Avant d’entrer dans le détail des différentes topologies réseaux, il faut savoir qu’il existe deux modes de gestion des
topologies réseaux : soit en mode poste à poste, soit en mode centralisé
<br />
- **Le mode poste à poste**: consiste à interconnecter des ordinateurs entre eux via un switch, un hub ou directement entre eux, si ces derniers disposent de deux cartes réseaux (la topologie en anneau). Dans ce mode, chaque ordinateur dispose de ses propres services et ressources. Les ressources d’une machine peuvent être bien évidemment partagées sur réseau ; cependant, comme celles-ci sont stockées dans le disque dur de l’ordinateur, si elles n’ont pas fait l’objet d’une copie locale dans les autres ordinateurs du réseau et que l’ordinateur propriétaire des ressources est éteint, alors les ressources ne sont plus disponibles.
![Poste à poste](/posteaposte.png)
- **Le mode centralisé**: ou mode Client/Serveur. Contrairement au mode poste à poste, le mode centralisé, comme son nom l’indique, centralise les services et les ressources sur des serveurs, ce qui permet d’avoir une disponibilité permanente des ressources et des services tant que les serveurs ne sont pas en panne. Cependant, il nécessite plus de moyens, car il faut gérer et maintenir le fonctionnement des serveurs, ce qui représente un coût supplémentaire
<br />
<hr />