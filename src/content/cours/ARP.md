---
title: 'Le protocol ARP'
tag: 'Réseaux'
description: 'Cours sur le protocole ARP.'
heroImage: '/network.png'
---

ARP signifie Address Resolution Protocol. C'est un protocole qui permet de faire le lien entre une adresse IP et une adresse MAC.
On ne l'a pas placé dans le cours sur les couches 1 ou 2 car il est un peu particulier. En effet, il est situé entre la couche 1 et 2.

## Comment ça marche ?

Lorsqu'une machine veut envoyer un paquet à une autre machine, elle doit connaître l'adresse MAC de la machine destinataire. Pour cela, elle peut 
envoyer une requête ARP en broadcast. C'est-à-dire qu'elle va envoyer une requête à toutes les machines du réseau. La machine destinataire va répondre 
à cette requête en envoyant son adresse MAC.

Selon l'equipement et le systeme d'exploitation, la commande pour voir la table ARP est différente. Souvent, on utilise la commande `arp -a` pour la voir.

Voici un exemple de table ARP:

| Adresse IP | Adresse MAC | Type   |
|------------|-------------|--------|
| IP1        | MAC1        | Static |
| IP2        | MAC2        | Dynamic|
| IP3        | MAC3        | Dynamic|


<br />
Il existe deux types de correspondance:
- **Static ARP**: C'est une entrée que l'on ajoute manuellement. Cela permet de sécuriser le réseau.
- **Dynamic ARP**: C'est une entrée qui est ajoutée automatiquement. Cela permet de ne pas avoir à ajouter manuellement chaque machine du réseau.

Et voila, c'est tout.