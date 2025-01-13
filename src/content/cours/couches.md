---
title: 'Les couches OSI'
tag: 'Réseaux'
description: 'Cours sur les couches OSI.'
heroImage: '/network.png'
---

# Couche 1 - Physique
La couche 1 est la couche physique. Elle est responsable de la transmission des données brutes sur un support de transmission.
Elle est chargée de la transmission des bits sur un support de transmission. Les protocoles de la couche 1 sont les protocoles
de transmission, tels que Ethernet. 

On a comme exemple de support de transmission:
- Les câbles en cuivre
- Les fibres optiques
- Les ondes radio
- Les ondes lumineuses (pour les fibres optiques)
<br />
<hr />
# Couche 2 - Liaison de données
La couche 2 est la couche liaison de données. Elle est responsable de la transmission des données entre les machines d'un réseau local.
Elle est chargée de la détection et de la correction des erreurs, de la gestion du flux et du contrôle d'accès au support. Les protocoles
de la couche 2 sont les protocoles de liaison, tels que Ethernet.

Par exemple, la couche 2 est responsable de la transmission des données entre un ordinateur et un switch.
<br />
<hr />
# Couche 3 - Réseau
La couche 3 est la couche réseau. Elle est responsable de la transmission des données entre les machines d'un réseau. 
Elle est chargée de l'adressage logique, du routage et de la commutation des paquets. Les protocoles de la couche 3 sont 
les protocoles de routage, tels que IP.

Avant de continuer, il est important de comprendre que la majorité des reseaux sont interconnectées. Internet ne fait pas exception.

Maintenant, la question est **que faut il pour router l'info ?**

Pour répondre, il faut savoir que chaque machine d'un réseau possède une adresse IP unique. Cette adresse est composée de deux parties:
- L'adresse réseau
- L'adresse de l'hôte

L'adresse réseau permet de déterminer le réseau auquel appartient la machine. L'adresse de l'hôte permet de déterminer la machine sur le réseau.

Il existe deux types d'adresses IP:
- **IPV4**: C'est le plus utilisé. Il est composé de 4 octets.
- **IPV6**: Il est composé de 8 octets. Il a été créé pour pallier le manque d'adresses IPV4.

Pour plus d'infos, voir le cours sur les IP.
<br />
<hr />
# Couche 4 - Transport
Le rôle de la couche 4 est de **rendre les applications des couches 5, 6 et 7** (couche 4 TCP/IP) joignables depuis le
réseau.

Elle permet également la **mise en relation entre une application client avec une application serveur**.
En résumé on peut dire que cette couche gère les connexions applicatives.

Maintenant que nous savons les rôles de la couche Transport, nous allons voir comment elle va résoudre les
problématiques suivantes :
* Comment rendre une application joignable ?
* Comment la couche 4 fait transiter la donnée des couches applicatives vers la couche réseau ?

La réponse à la première problématique est la mise en place d’un identifiant. Tout comme la couche 2 avec l’adresse
MAC et la couche 3 avec l’adresse IP, la couche 4 dispose de son propre identifiant : **le port** que l’on nomme également
**port applicatif**.

Le port est une adresse logique correspondant à une application donnée.

Cette adresse est codée sur \(2^{16}\) bits, ce qui nous donne donc 65536 ports possibles du 0 au 65535.

L’utilisation des ports ne se fait pas de manière aléatoire , la normalisation et l’assignation de ces derniers sont gérées
par l’IANA.

Voici la répartition des 65536 fait par l’IANA 
- Les ports de 0 à 1023 sont les ports bien connus, ils sont réservés pour les applications les plus courantes.
- Les ports de 1024 à 49151 sont les ports enregistrés, ils sont utilisés par des applications qui ont été enregistrées auprès de l’IANA.
- Les ports de 49152 à 65535 sont les ports dynamiques, ils sont utilisés par les applications qui n’ont pas besoin d’être enregistrées.

Le fait d’associer un numéro de port avec une adresse IP s’appelle un « **Socket** » et s’écrit sous la forme
**Adresse IP:Numéros de port**.

Nous avons vu comment la couche 4 règle le problème d’identification des applications grâce au numéro de port.

Maintenant comment fait la couche Transport pour faire passer la donnée des couches applicatives à la couche réseau.

Comme vous vous en doutez la couche 4 dispose elle aussi de son lot de protocoles, ces derniers sont au nombre de trois: 
TCP, UDP et QUIC. (en réalité il y en a d’autres, mais ce sont les plus importants donc balec).

Pourquoi trois protocoles ?

A l’origine il faut savoir qu’il n’y en avait que deux TCP et UDP, mais il y a quelques années les chercheur voulant
amélioré les performances réseau se sont heurtés à une problématique dont le protocole QUIC a été la solution (nous
détaillerons tous çà plus loin). La raison à ce choix vient du fait que les chercheurs se sont rendus compte que chaque
application n’avait pas les mêmes besoins en terme de transport de la donnée.

Certaines applications ont besoin d’un transport dit « fiable » ce qui implique la mise en place d’un système de transport
permettant de garantir que la donnée a bien été reçue par le destinataire. Exemple : la messagerie électronique ou
encore la navigation WEB. Le protocole qui garantit cette fiabilité c’est TCP (Voir le cours sur TCP).

D’autres applications ont pas besoin d’être joignables et le plus rapidement possible. Exemple : Le streaming ou la
télévision par Internet qui doivent fournir une information en temps réel. Le protocole qui aura la charge du transport
de ce type de données est UDP (Voir le cours sur UDP).
<br />
<hr />

### Les couches 5, 6 et 7 sont des couches applicatives, elles sont moins importantes, son on en parlera peu.
<br />
<hr />

# Couche 5 - Session
La couche 5 est la couche session. Elle est responsable de l'établissement, de la gestion et de la fin des sessions entre les machines.
Elle est chargée de la synchronisation des données, de la gestion des sessions et de la reprise après panne. Les protocoles de la couche 5
sont les protocoles de session, tels que NetBIOS.
<br />
<hr />
# Couche 6 - Présentation
La couche 6 est la couche présentation. Elle est responsable de la traduction des données entre les machines.
Elle est chargée de la traduction des données, de la compression et du chiffrement. Les protocoles de la couche 6 sont les protocoles
de présentation, tels que SSL.
<br />
<hr />
# Couche 7 - Application
La couche 7 est la couche application. Elle est responsable de la communication entre les applications.
Elle est chargée de la communication entre les applications, de la gestion des sessions et de la gestion des données. Les protocoles de la couche 7
sont les protocoles d'application, tels que HTTP.
<br />
<hr />
