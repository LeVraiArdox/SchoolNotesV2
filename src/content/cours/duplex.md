---
title: 'Half et Full Duplex'
tag: 'Réseaux'
description: 'Cours sur le half et full duplex.'
heroImage: '/network.png'
---

# Half et Full Duplex
Avant d’aller plus loin, procédons à un petit rappel de connaissance. Nous avons vu lors de l’étude de la couche 1 du
modèle OSI le protocole CSMA/CD dont le rôle est de régler les problèmes de collisions pour les supports filaires sur
des architectures en Bus ou utilisant des Hubs.

Or comme nous l’avons également vu, le Hub est un équipement qui a disparu au profit du Switch. Donc la question que
l’on doit se poser est : est-ce qu’il y a des domaines de collisions avec les Switchs ?

Pour répondre à cette question nous allons voir plusieurs cas concrets.

Imaginons que les utilisateurs du PC 01 et 02 décident au même
moment de s’envoyer un message.

On peut donc se poser la question de la présence ou non d’une collision
vu que les messages sont envoyés au même moment. Mais ça serait
oublié la structure de notre câble pairs torsadés. En effet **ces dernière
se composent de plusieurs fils dont l’un d’entre eux est dédié à l’envoi
et un autre à la réception de données. De ce fait il ne peut pas y avoir de
collision se produisant sur le support de transmission.**
![Exemple 1](/ex1.png)
<br />
Prenons un autre exemple : Que se passe-t-il si PC 01 et 03 envoie en même
temps un message au PC 02 ?

Dans ce cas nous avons clairement des risques de collisions malgré notre câble
pairs torsadé, puisque nous avons 2 messages qui vont arriver en même temps
sur le fil dédié à la réception du PC 02.On peut supposer qu’il y aura une collision,
et que suite à cette dernière le protocole CSMA/CD va rentrer en fonctionnement. Mais
en réalité il n’en n’est rien.

Comme nous l’avons déjà vu, le Switch est un équipement intelligent, il dispose
de la table CAM que nous avons vu précédemment, mais ce n’est pas le seul
outil à sa disposition. En effet le Switch dispose d’une mémoire tampon, dans
laquelle il peut stocker une à plusieurs trames.

**Dans notre cas, le Switch va recevoir les 2 trames en même temps, et va les stocker
dans sa mémoire tampon. Il va ensuite les envoyer une par une au PC 02. Il n’y a donc
pas de collision, et le protocole CSMA/CD n’a pas besoin d’entrer en fonctionnement.**

![Exemple 2](/ex2.png)
<br />

Le fait de ne pas mettre en place un réseau sans utilisation du protocole CSMA/CD porte
un nom : il s’agit de l’appellation **Full Duplex**.

A l'inverse, quand on utilise un hub ou un cable coaxial, on parle de **Half Duplex**.
En effet, dans ce cas, il y a un seul fil pour l'envoi et la réception des données. Il
est donc possible d'avoir des collisions.

Le switch a révolutionné le monde des réseaux, car il a permis de mettre en place des
réseaux en Full Duplex.

Toutefois, **il faut rester vigilant**, car si le full duplex est mal utilisé, celui-ci
peut faire des ravages.

Que se passe-t-il alors lorsque l'on branche plusieures machines en half duplex et une en
full duplex sur un hub ou un switch ?

Dans ce cas, la machine en full duplex va parler sans detecter les collisions. Pire encore,
si cette machine télécharge un fichier volumineux, cette derniere va parler en continu et
empecher les autres d'utiliser le reseau.

Et si nous branchions un hub ou un vieil équipement sur un switch ?

Dans ce cas, le switch va devoir s'adapter et passer en half duplex. C'est tout simple.

Mais attention, il ne faut pas faire fonctionner l'intégralité du switch en half duplex,
mais seulement le port connecté au hub ou un vieil equipement. De manière générale, 
les switchs détectent la connexion avec une machine en half duplex et s'autoconfigurent,
mais il reste possible pour l'admin de configurer ce paramètre a ma main. 

<br />

**On retiendra donc que pour eviter tout probleme, on "nivele" le fonctionnement du
switch par le bas quand on doit choisir le duplex.**

<br />