---
title: 'Les modeles OSI et TCP/IP'
tag: 'Réseaux'
description: 'Cours sur les modeles OSI et TCP/IP.'
heroImage: '/network.png'
---

## Qu’est-ce que le modèle OSI ?

**OSI** (de l'anglais **Open Systems Interconnection**) est un modèle conceptuel crée par l’ISO (International
Organizations For Standardization en français Organisation Internationale de Normalisation) qui permet la mise
en place de la communication entre différents systèmes informatiques à l’aide de protocoles standardisés.

Le modèle OSI est composé de sept couches numérotées de 1 à 7 :
- **La couche 1** : couche physique
- **La couche 2** : couche liaison de données
- **La couche 3** : couche réseau
- **La couche 4** : couche transport
- **La couche 5** : couche session
- **La couche 6** : couche présentation
- **La couche 7** : couche application
<br />
Chacune des couches a un rôle bien précis et manipule un type de données à l’aide de protocoles qui lui sont propres
<br />

**À noter que chaque couche ne connait que les couches qui lui sont adjacentes**. Cela veut dire qu’une couche
connait uniquement la couche qui la précède et celle qui la suit.

Exemple : La couche 2 Liaisons de données, ne connait donc que la couche 1 Physique (celle qui la précède) et la couche
3 Réseaux (celle qui la suit).
<br />
Le tableau suivant nous donne les informations de base de chaque couche (rôle, type de données, protocole), nous
aborderons plus en détails chacun de ces couches.
![OSI](/reseaux/ositab.png)
<br />

Pour les retenir, il existe une phrase mémotechnique que vous pouvez utiliser :

**P**our **L**e **R**eseau **T**out **S**e **P**asse **A**utomatiquement

**P**hysique, **L**iaison de données, **R**éseau, **T**ransport, **S**ession, **P**résentation, **A**pplication
</div>
<br />
Voyons ce qui se passe entre chaque couche de notre modèle OSI lorsqu’une machine crée un data.

![OSI](/osi.png)
<br />
Ce procédé que nous venons de voir s’appelle **l’encapsulation**. Chaque couche va venir successivement rajouter sa
partie à la donnée de la couche précédente (en en-tête ou en queue). Une fois la couche 1 atteinte la donnée sort sur le
réseau, puis sera successivement désencapsuler* et encapsuler pour que chaque machine du réseau puisse
interpréter les données dont elle a besoin afin de transférer la donnée jusqu’au destinataire qui désencapsulera une
dernière fois la donnée.

**désencapsuler: procédé inverse montré par le schéma**
<br />
Maintenant voyons un cas concret comportant machine et équipement réseau, afin de comprendre ce qui se passe dans
notre réseau.
![OSI](/osi2.png)
<br />
<hr />

## Qu’est-ce que le modèle TCP/IP ?
La suite TCP/IP est l'ensemble des protocoles rassemblés dans un modèle conceptuel permettant le transfert des
données sur Internet. Il est également aussi appelée **DoD Standard** ou bien **DoD Model** ou encore **DoD TCP/IP** ou **US
DoD Model**.
<br />
Elle est souvent appelée TCP/IP, d'après le nom de ses deux premiers protocoles : **TCP** (de l'anglais **Transmission
Control Protocol**) et **IP** (de l'anglais **Internet Protocol**). Ils ont été inventés par Vinton G. Cerf et Bob Kahn, travaillant
alors pour la DARPA. La première publication de TCP/IP remonte à septembre 1973 lors d'une conférence de l'INWG.
<br />

Le réseau ARPANET adopte le 1er janvier 1983 la suite de protocoles TCP/IP qui sera la base d'Internet.

TCP/IP est composé de quatre couches :

- **La couche 1** : Acces au reseau
- **La couche 2** : Internet
- **La couche 3** : Transport
- **La couche 4** : Application
<br />
Le tableau suivant nous donne les informations de base de chaque couche (rôle, type de données, protocole), nous
aborderons plus en détails chacun de ces couches.
![TCP/IP](/tcptab.png)
<br /> 
<hr />

## Difference entre OSI et TCP/IP
Le modèle TCP/IP a été créé afin de répondre à un problème pratique, alors que le modèle OSI correspond à une
approche plus théorique, et a été développé plus tôt dans l'histoire des réseaux. Le modèle OSI est donc plus facile à
comprendre, mais le modèle TCP/IP est le plus utilisé en pratique.
<br />
Contrairement au modèle OSI, qui décompose les différents protocoles en sept couches, TCP/IP en comporte que quatre.

En effet, les sept différentes couches du modèle OSI peuvent décrire la suite de protocoles Internet, cependant elles ne
correspondent pas toujours avec les habitudes d'Internet.
<br />
![OSI vs TCP/IP](/osivstcp.png)
<br />
<hr />