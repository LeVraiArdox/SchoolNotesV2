---
title: 'DHCP'
tag: 'Réseaux'
description: 'Cours sur le DHCP.'
heroImage: '/network.png'
---

# DHCP - Dynamic Host Configuration Protocol

Le **DHCP** (Dynamic Host Configuration Protocol) est un protocole réseau qui permet d'attribuer automatiquement une Configuration aux machines d'un réseau.
C'est pratique, car comme ça t'as pas a configurer manuellement les adresses IP de chaque machine, comme sur ce foutu TP sur packet tracer.

Le DHCP attribue les éléments suivants aux machines:
- **Adresse IP**: C'est l'adresse de la machine sur le réseau.
- **Masque de sous-réseau**: C'est une adresse qui permet de déterminer le réseau auquel appartient la machine.
- **Passerelle par défaut (gateway)**: C'est l'adresse de la machine qui permet de router les paquets vers un autre réseau.
- **Serveur DNS**: C'est l'adresse du serveur qui permet de résoudre les noms de domaine en adresses IP.
- **Durée de bail**: C'est la durée pendant laquelle l'adresse IP est attribuée à la machine (7J en général).


Attention: contrairement à ce que tu pourrais penser, un IP seul sur un PC ne sert a rien, c'est comme une note de musique:
si elle n'a pas de clé, c'est juste un point sur une ligne.

### Attribution du bail
Un protocole DHCP fonctionne en quatre phases: 
- **DHCP Discover**: La machine envoie un message de découverte sur le réseau pour trouver un serveur DHCP.
- **DHCP Offer**: Le serveur DHCP reçoit le message de découverte et envoie une offre à la machine.
- **DHCP Request**: La machine envoie une demande au serveur DHCP pour accepter l'offre.
- **DHCP Acknowledge**: Le serveur DHCP reçoit la demande et envoie un accusé de réception à la machine.

### Renouvellement du bail

Le bail d'une adresse IP attribuée par un serveur DHCP a une durée limitée. Pour éviter que l'adresse IP ne soit perdue,
la machine doit renouveler le bail avant la fin de la durée. Pour cela, la machine envoie une demande de renouvellement au serveur DHCP.
Si le serveur accepte, il envoie un accusé de réception à la machine.

Si le serveur refuse, la machine doit recommencer le processus de découverte.
