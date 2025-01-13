---
title: "Routage"
tag: "Réseaux"
description: "Cours sur le routage."
heroImage: "/network.png"
---

**Le routage est le mécanisme par lequel des chemins sont sélectionnés dans un réseau pour acheminer
les données d'un expéditeur jusqu'à un ou plusieurs destinataires.**

Le routeur est l’équipement réseau qui assure le routage, pour effectuer cette tâche, le routeur dispose d’une table de
routage, il s’agit d’un tableau qui contient la route (ou chemin) que peuvent emprunter les paquets IP.
<br />
Afin d’effectuer cette tâche de manière optimale, le routeur devra choisir la meilleure route pour un paquet IP
donné, les paramètres de ce choix dépendront du type de routage choisi par l’administrateur.
<br />
Que se passe t-il dans le réseau lorsque nos données sont routées, est ce que ces dernières empruntes toujours le même
chemin et s’agit il du plus cours ?
<br />
Prenons l’exemple avec l'envoi d'un mail avec un expéditeur à Paris à un destinataire à Lyon.

Attention : les noms de ville formant le chemin emprunté par la donnée sont purement symboliques et ne désignent aucunement
une architecture réelle.

On pourrait croire que les paquets qui constituent le mail vont prendre la route la plus courte qui pourrait être Paris =>
Troyes => Dijon => Mâcon et enfin Lyon.
<br />
Mais dans les faits, il n'est pas impossible que les paquets suivent un trajet du type Paris => Londres => Berlin => Tokyo
et enfin Lyon.
<br />
Cela peut paraître aberrant, **mais en fait à l'instant où vous avez envoyé vos paquets c'était cette route la plus
rapide**. Là encore c'est un exemple qui s'éloigne de la réalité dans le fait lors de l'envoi d’un ensemble de paquets il est
quasiment impossible que les différents paquets passent tous par la même route.

Note: Les paquets prennent la route la plus rapide, pas la plus courte.

Comme nous l’avons vu juste avant, il existe différentes méthodes de routages qui se distinguent par la façon dont les
routes se construisent.
<hr />

## Les routes directement connectées
**Elles permettent à des réseaux directement connectés au même routeur de communiquer**: pour ces réseaux, le
routeur peut acheminer le paquet directement à la destination finale en faisant appel au protocole de niveau 2
(Ethernet par exemple). Dans ce cas aucune configuration de routage n’est nécessaire il suffit juste d’adresser
correctement les équipements réseau et machines.
![directroute](/directroute.png)
<hr />

## Les routes statiques
**Elles permettent à des réseaux qui ne sont pas directement connectés de communiquer**: pour ces réseaux, le
routeur va consulter sa table de routage afin de déterminer quel chemin prendront les paquets IP. Dans le cas d’un
routage statique les routes sont définies manuellement par l’administrateur du réseau, c’est-à-dire que c’est lui qui va
écrire chacune des routes pour chaque destinataire et sur l’ensemble des routeur.
![staticroute](/staticroute.png)
<hr />

## Les routes dynamiques
**Elles permettent à des réseaux qui ne sont pas directement connectés de communiquer**: ici le routeur va
également utilisé çà table de routage afin de déterminer quel chemin prendrons les paquets IP. Dans le cas d’un routage
dynamique les routes sont définies par un protocole de routage qui a été mis en place par l’administrateur
![dynamicroute](/dynamicroute.png)
Ici, on va parler un peu plus.
<br />
Le routage dynamique a plusieurs avantages:
- Le rôle principal est de découvrir dynamiquement les routes vers les réseaux d’un inter-réseau et les
inscrire dans la table de routage sur le routeur. Cela permet de mettre à jour automatiquement la table de
routage en cas de changement de topologie.
- S’il existe plus d’une route vers un réseau, il va inscrire la meilleure route dans la table de routage.
- Il peut détecter les routes qui ne sont plus valides et les supprimer de la table de routage.
- Il peut ajouter le plus rapidement possible de nouvelles routes ou remplacer le plus rapidement les routes
perdues par la meilleure route actuellement disponible.
<br />
**Protocol de routage internes**:
Les protocoles de routage interne (IGP) sont conçus pour gérer le trafic à l’intérieur d’un Autonomus Systeme*,
comme un réseau d’entreprise ou un Data Center.
**Pour simplifier les choses dites vous que ces protocoles ont pour mission de router les paquets au sein d’une
infrastructure appartenant à la même organisation**.

**Liste des protocole IGP : RIP (V1, V2 et NG), IGRP, EIGRP, OSPF (V2 et V3) et IS-IS**

On ne va parler que des protocoles de routage interne, car on ne va jamais (ou très rarement) utiliser des protocoles de routage externe.

- Autonomus Systeme : Un Autonomous System, ou système autonome, est un ensemble de réseaux informatiques IP
intégrés à Internet et dont la politique de routage interne est cohérente. Un AS est généralement sous le contrôle d'une
entité ou organisation unique, typiquement un fournisseur d'accès à Internet, mais cela peut également être une
entreprise.
<hr />