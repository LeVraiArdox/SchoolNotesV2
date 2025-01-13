---
title: "QUIC"
tag: "Réseaux"
description: "Cours sur le protocole QUIC."
heroImage: "/network.png"
---


A noter que nous ferons une courte présentation de ce protocole car même s’il est de plus en plus utilisé, il ne
représente pas la majorité des communication Web. En effet étant implanté dans la version 3 d’HTTP (que nous
évoquerons plus tard), celle-ci ne représente en 2023 que 25 à 30 % du trafic global de la navigation Web.

Le protocole QUIC (Quick UDP Internet Connections) est un protocole de transport développé par Google en 2012, conçu
pour améliorer la performance des connexions internet. En effet à l’heure actuelle nous avons des protocoles de
transport qui permettent:
- L’envoi rapide de données (assuré par UDP)
- Garantir la réception de la donnée (assuré par TCP)

Mais sans pour autant avoir les deux en même temps.
<br />
Le protocole QUIC (Quick UDP Internet Connections) est un protocole de transport développé par Google, conçu pour
améliorer la performance des connexions internet et allier vitesse et garantie de réception.
<br />
Voici quelques caractéristiques de QUIC :
<br />
- **Basé sur UDP** : Contrairement à TCP, QUIC est construit sur le protocole UDP (User Datagram Protocol). UDP est un
protocole de transport sans connexion qui permet un échange de données rapides, mais sans garantie d'intégrité ou
de livraison.
<br />
- **Intégration de TLS** : QUIC intègre directement le chiffrement TLS (Transport Layer Security) dans le protocole, ce qui
permet une sécurisation des connexions dès le début de l'échange de données, sans nécessiter de négociations
supplémentaires comme dans TCP+TLS.
<br />
- **Réduction de la Latence**: QUIC réduit la latence grâce à l'élimination du round-trip initial requis pour l'établissement
de la connexion et pour l'échange de clés de chiffrement. Ceci est particulièrement bénéfique pour les connexions
mobiles ou les connexions à haute latence.
<br />
- **Multiplexage sans blocage** : QUIC permet le multiplexage de plusieurs flux de données dans une seule connexion. Cela
signifie que la perte d'un paquet n'affecte pas les autres flux, contrairement à TCP où la perte d'un paquet peut
bloquer l'ensemble de la connexion (head-of-line blocking).
<br />
- **Correction d'erreurs avancées** : QUIC utilise des mécanismes avancés pour gérer les pertes de paquets et les
retransmissions, ce qui améliore la performance dans les réseaux avec des pertes de paquets élevées.