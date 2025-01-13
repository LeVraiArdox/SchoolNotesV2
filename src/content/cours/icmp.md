---
title: "le protocole ICMP"
tag: "Réseaux"
description: "Cours sur le protocole ICMP."
heroImage: "/network.png"
---

## Le protocole ICMP

Internet Control Message Protocol est l’un des protocoles fondamentaux constituant la suite des protocoles Internet,
il se situe au même niveau que le protocole IP bien qu’il ne fournisse pas les services habituellement associées à
un protocole de couche réseau.

Il est utilisé pour envoyer des messages d’erreur et de contrôle, notamment pour tester la connectivité entre deux
machines, vérifier la disponibilité d’un service ou encore pour obtenir des informations sur le réseau.

En effet, comme le protocole IP ne gère que le transport des paquets et ne permet pas l'envoi de messages d'erreurs,
c'est grâce à ce protocole qu'une machine émettrice peut savoir qu'il y a eu un incident de réseau.

Le protocole ICMP permet de gérer les informations relatives aux erreurs du protocole IP. Il ne permet pas de
corriger ces erreurs, mais d’en informer les différents émetteurs des Datagrammes en erreurs. Chaque pile IP,
que ce soit des routeurs ou des stations de travail, gèrent l’entête ICMP par défaut.

Les messages d’erreur ICMP sont transportés sur le réseau sous forme de Datagramme, comme n’importe quelle
donnée. Ainsi, les messages d’erreurs peuvent eux-mêmes être sujet aux erreurs. Toutefois, en cas d’erreur sur un
message ICMP, aucune trame d’erreurs n’est délivrée pour éviter un effet « boule de neige ».
<br />
