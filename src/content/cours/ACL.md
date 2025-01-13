---
title: 'ACL'
tag: 'Réseaux'
description: "Cours sur les Listes de Contrôle d'Accès."
heroImage: '/network.png'
---

Les **Listes de Contrôle d'Accès** (**ACL, pour Access Control List**) sont des **mécanismes de sécurité** essentiels dans les
réseaux modernes, **utilisés pour contrôler et filtrer le trafic entrant ou sortant d’un réseau**. Elles permettent
**d’établir des règles** précises qui spécifient quels paquets peuvent être autorisés ou bloqués, en fonction de divers
critères tels que l’adresse IP source ou destination, le protocole utilisé, ou encore le numéro de port.

Les ACL sont généralement mises en œuvre sur les routeurs, les pare-feu, ou encore les commutateurs de niveau 3, afin
de protéger les ressources critiques et d’améliorer la sécurité globale du réseau.

Il existe trois types d’ACL principaux :
- **ACL standard** : elles filtrent le trafic en fonction de l’adresse IP source uniquement.
- **ACL étendue** : elles filtrent le trafic en fonction de critères plus avancés, tels que l’adresse IP source et
destination, le protocole utilisé, ou encore le numéro de port.
- **ACL nommée** : elles permettent de regrouper plusieurs règles dans une seule liste, facilitant ainsi leur gestion et
leur maintenance.

Les ACL sont utilisés pour diverses raisons, telles que :
- **Sécuriser l’accès aux ressources du réseau** : Par exemple, limiter l’accès à des serveurs critiques uniquement à
certaines adresses IP ou à des sous-réseaux spécifiques.
- **Contrôler les flux de trafic** : Par exemple, autoriser uniquement le trafic SSH ou RDP vers un serveur administratif,
mais bloquer les autres protocoles non autorisés.
- **Restreindre les communications entre réseaux** : Par exemple, dans une entreprise, on peut isoler le trafic de
certains départements afin qu'ils ne puissent pas accéder aux ressources d’autres départements.
- **Gérer la bande passante en priorisant ou en bloquant certains types de trafic** : Par exemple, autoriser
uniquement le trafic VoIP pour les appels vocaux, mais bloquer le téléchargement de fichiers volumineux qui
pourraient encombrer la bande passante.

Les ACL doivent être placées au bon endroit dans le réseau. Les ACL standard sont
généralement **placées aussi près que possible de la destination à filtrer**, tandis que les ACL étendues sont
**placées près de la source du trafic à contrôler**.

Les règles des ACL sont **lues séquentiellement**, c’est-à-dire une par une et dans l’ordre ou elles
ont été saisies. Il est important de bien organiser les règles, car dès qu’un paquet correspond à une règle, le reste des
règles n’est pas évalué. Il faut donc commencer par les règles les plus spécifiques.
