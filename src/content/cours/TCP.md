---
title: "TCP"
tag: "Réseaux"
description: "Cours sur le protocole TCP."
heroImage: "/network.png"
---


TCP signifie **Transmission Control Protocol**, et il s'agit d'un protocole orienté connexion. Le protocole TCP est très
utilisé lorsque l'on utilise des protocoles IP, c'est pour cela que l'on parle aussi de TCP/IP.
<br />
TCP est un protocole de la couche transport (4) du modèle OSI. Il est responsable de la **fiabilité** de la transmission des
données, c'est-à-dire qu'il garantit que les données envoyées par un appareil sont bien reçues par l'appareil de
destination. 

C'est un peu comme si vous envoyiez un colis par la poste, et que vous vouliez être sûr que le colis arrive
à bon port avec un accusé de réception.

Avec le protocole TCP, avant que des données soient échangées entre les deux hôtes, **l'hôte source va créer une session
de connexion avec l'hôte distant afin de le prévenir qu'il va recevoir des données**. Pour cela, un premier échange
aura lieu entre les deux hôtes.
<br />
Une fois que la connexion est établie, l'échange de données peut commencer. Pendant cet échange de données, **les
paquets (correspondants aux données) sont envoyés dans l'ordre, et le protocole TCP va s'assurer que tous les
paquets sont bien transmis**. Si ce n'est pas le cas, il est capable de renvoyer les paquets manquants.
<br />
Cette connexion sera maintenue jusqu'à ce qu'elle soit fermée, ce qui signifie qu'elle sera active à minima jusqu'à la fin
de l'échange de données entre les deux hôtes. Elle peut être maintenue afin d'être prête dès que les deux hôtes auront
besoin de communiquer ensemble.
<br />
TCP est également capable de **contrôler la congestion du réseau sur lequel les paquets sont échangés**. Un
algorithme de contrôle de congestion est utilisé et en cas de surcharge du réseau, le flux TCP sera adapté en
conséquence.

Les unités de transmission de base, sur lesquelles repose le protocole, sont des segments.

Pour établir une connexion TCP, celle-ci doit toujours être identifiée par deux points (client et serveur) clairement
définis. Le rôle du client et le rôle du serveur n’ont aucune importance. L’important est que le protocole TCP dispose
pour chacun de ces points, d’une **paire ordonnée comprenant une adresse IP et un port**.
<br />

## Le 3-Way Handshake (ou poignée de main en trois temps)
Pour établir une connexion TCP valide, les deux points impliqués doivent disposer d’une adresse IP univoque (IPv4 ou
IPv6) et du port souhaité, déclaré et validé pour la transmission de données.
<br />
Le déroulement de la procédure de connexion via le protocole
TCP est le suivant :
- Dans un premier temps, le client envoie au serveur un paquet ou segment **SYN** portant un numéro séquentiel aléatoire
individuel. Ce numéro garantit la transmission intégrale et dans le bon ordre (sans doublon) des données. 
- Lorsque le serveur reçoit le segment, il approuve la connexion
en renvoyant un paquet SYN-ACK (de l’anglais acknowledgement = « confirmation »), ainsi que le numéro séquentiel du 
client augmenté de 1. Il transmet également aux clients son propre numéro séquentiel.
- Pour finir, le client confirme la réception du segment SYN-ACK en envoyant son propre paquet ACK qui, cette fois-ci, contient le
numéro séquentiel du serveur augmenté de 1. Simultanément, il peut transmettre ses premières données au serveur.
![3way](/tcp.png)
Les deux partenaires de communication peuvent désactiver une connexion TCP établie. La déconnexion unilatérale est également
possible. Cette dernière est considérée comme une connexion semi-fermée : même lorsqu’un abonné a désactivé sa connexion, l’autre
partie peut encore lui transmettre des données.

Les différentes étapes de la déconnexion bilatérale (initiée ici par le client pour plus de simplicité) sont les suivantes :
<br />
- Le client envoie un segment **FIN** au serveur et lui indique ainsi qu’il ne souhaite plus envoyer de données. Tout comme lors de
l’établissement de la connexion, il envoie son propre numéro de séquence.
- Le serveur confirme la réception du paquet par un segment **ACK**, contenant le numéro séquentiel augmenté de 1.
- Si, de son côté, le serveur a également terminé la transmission de données, il envoie également un paquet **FIN**, auquel il adjoint son
numéro séquentiel.
- Le client confirme la réception du segment FIN par un paquet ACK* contenant le numéro séquentiel du serveur augmenté de 1.
La connexion TCP est alors fermée.