---
title: 'La table CAM'
tag: 'Réseaux'
description: 'Cours sur la table CAM.'
heroImage: '/network.png'
---


S’il y a un équipement à « associer » à la couche 2 du modèle OSI, c’est le Switch (ou commutateur en français). Comme
vu dans le précédent support de cours, le switch est une grosse multiprise RJ45 **intelligent**, et c’est ce terme qui est
important. Car contrairement à son ancêtre le Hub qui réémettait une trame entrant sur tous les autres ports du Hub, le
Switch lui est capable d’apprendre et de transmettre la trame directement au bon destinataire.

La question est donc : quelles différences il y a entre le Switch et le Hub ?

La réponse est la table CAM, cette dernière fonctionne sur une mise en relation
entre le numéro de port du switch et l’adresse MAC de la machine qui est
connectée à ce port. Ce qui donne un tableau pouvant ressembler à celui-ci :

|   Port    | Addrese MAC    |
|-----------|----------------|
| 1         | Addresse MAC 1 |
| 15        | Addresse MAC 2 |
| 29        | Addresse MAC 3 |

Comment se construit cette table ?

Lorsqu’une trame arrive sur un port du switch, ce dernier va regarder l’adresse MAC de la machine qui a envoyé la trame
et va l’associer au port sur lequel la trame est arrivée. Ainsi, si une trame arrive sur le port 1 avec l’adresse MAC 1, le
switch va associer le port 1 à l’adresse MAC 1. Si une trame arrive sur le port 1 avec l’adresse MAC 2, le switch va
associer le port 1 à l’adresse MAC 2. Et ainsi de suite.
C'est dynamique, car si une machine change de port, la table CAM va se mettre à jour.

Nous allons voir un exemple concret afin de voir en détail comment cela se passe. Dans cet exemple nous partirons du
fait que la table CAM de notre switch est vide. Ci-dessous l’architecture de notre exemple:

![CAM](/cam.png)

(c'est un peu flou désolé)
<br />
- Le PC 1 envoie une trame à la machine 2
$$
PC 1 => Switch => PC 2
$$
- Le switch reçoit la trame sur le port 1 et regarde l’adresse MAC de la machine 1
$$
Port 1 => MAC 1
$$
- Le switch va donc associer le port 1 à l’adresse MAC 1. Il met donc sa table à jour.
$$
| Port 1 | MAC 1 |
$$
- Maintenant comment notre Switch va-t-il faire pour envoyer la trame à destination du PC 02 alors que son adresse MAC n’est pas présente dans
la table CAM ? Et bien notre Switch va tout simplement envoyer la trame sur tous les ports actifs, sauf celui d’origine.
$$
Switch => tout
$$
- Le PC 03 et 04 n’étant pas concerné par cette trame vont simplement
la détruire. Le PC 02 étant concerné va lui traiter la trame.
$$
Switch => PC 02
$$
Lorsque le PC 02 va répondre au PC 01, le switch va également lire la
trame et obtenir l’adresse MAC du PC 02. Il va donc mettre à jour sa table CAM.
$$
| Port 1 | MAC 1 |
| Port 2 | MAC 2 |
$$
Et ainsi de suite. C’est ce qu’on appelle le **Forwarding**. C’est-à-dire que le switch va envoyer la trame directement
au bon destinataire. C’est ce qui fait la force du switch par rapport au Hub.
<br />
Nous allong ajouter a notre table CAM une derniere colonne qui est le TTL (Time To Live) qui est un compteur qui permet de supprimer une adresse MAC de la table apres un certain temps d'inactivité. Cela permet de liberer de la place dans la table CAM.
<br />
|   Port    | Addrese MAC    | TTL |
|-----------|----------------| --- |
| 1         | Addresse MAC 1 | 60s |
| 15        | Addresse MAC 2 | 45s |
| 29        | Addresse MAC 3 | 30s |
<br />
On parle de processus décrementiel, c'est à dire que le TTL va se decrementer de 1 seconde en seconde. Si le TTL arrive à 0, l'adresse MAC est supprimée de la table CAM.
<br />