---
title: 'Protocol Ethernet'
tag: 'Réseaux'
description: 'Cours sur le protocole Ethernet.'
heroImage: '/network.png'
---


Nous avons vu quels éléments étaient nécessaires aux machines pour communiquer ensemble. Mais nous n’avons pas vu
comment celles-ci dialoguaient entre elles, ou plutôt comment et à l’aide de quoi ces dernières interprètent les bits
circulant en couche 1.
<br />
Pour se faire elles vont donc et peu importe leurs systèmes d’exploitation utilisés un même langage ou protocole qui se
nomme Ethernet.
<br />
Le protocole Ethernet va nous permettre deux choses :
- **Définir la signification des 0 et 1 circulant sur la couche 1**
- **Déterminer l’ordre dans lequel les informations doivent circuler**
<br />
Ce qui va permettre de structurer le message et comprendre le message, qu’on appelle **trame**. Cette trame peut prendre
plusieurs formes que nous allons devoir décortiquer dans les prochaines pages.

**À noter** : en couche 2 il y a d’autres protocoles qu’Ethernet, mais il est de très loin le plus utilisé.
</div>

## Ethernet II

Les trames Ethernet modernes ont été utilisées pour la première fois dans la structure dite Ethernet II avant
qu’Ethernet ne soit développé en 1983 par l’IEEE dans le protocole standard IEEE 802.3. Nous allons donc commencer
par étudier cette structure avant de voir ces différentes variations.
<br />
Voici les différents champs qui composent le cœur de la trame; **l’ensemble des champs est égal à 1518 octets** :
- **On commence par les adresses MAC destinataires, suivies de la MAC de l’expéditeur codé sur 6 octets chacune** comme vu précédemment. Les chercheurs ont déterminé qu’il était plus intéressant d’avoir l’adresse du destinataire
en premier, en effet ce positionnement permet de savoir immédiatement si le message est pour nous* ou non. (Dans
le sens est que la trame est pour la machine qui reçoit la reçoit ou non)
- **Le champ longueur / type : qui indique le protocole utilisé en couche 3 pour transmettre la donnée, codé sur
2 octets.**
- **La donnée avec un minimum attendu de 46 octets et maximum de 1500.**
- **Le champ FCS (Frame Check Sequence) codé sur 4 octets qui permet de valider l'intégrité de la trame à 1 bit
près. Il utilise un CRC (Cyclic Redundancy Check)** qui englobe tous les champs de la trame. Ainsi, la station
réceptrice peut décider si la trame est correcte et doit être transmise à la couche supérieure : LLC
<br />
À quoi sert le CRC?

Le CRC est une valeur mathématique qui représente l’ensemble des champs de la trame. La machine de destination peut
décider si la trame est valide ou non. Voyons un exemple pour mieux comprendre.
<br />
Imaginons que nous avons une trame de 100 octets, et que nous avons un CRC de 4 octets. La machine de destination
va calculer le CRC de la trame reçue, si le CRC calculé est différent du CRC reçu, alors la trame est corrompue et
elle sera jetée. Si le CRC est identique, alors la trame est valide et elle sera transmise à la couche supérieure.
<br />
![Trames](/trames.png)
<br />
Enfin pour terminer plusieurs champs vont venir encadrer notre **Trame Ethernet** afin de former un **Paquet Ethernet**:
- **Le Préambule :** qui est une séquence de 7 octets qui permet de synchroniser les horloges des machines. Il est placé devant chaque trame.
Comme la transmission de données est asynchrone, il est nécessaire de synchroniser les horloges des machines pour que la trame soit correctement reçue,
sinon, une partie de la trame pourrait être perdue. 

**A noter que les deux derniers bits sont systematiquement à 1.**

- **Inter Frame Gap (IFG) ou temps inter-frame**: est un delai d'attente entre l'envoi de deux trames. Ce delai est egal a 96 bits soit 9.6 microsecondes
pour un débit de 10 Mbit/s. Il permet de laisser le temps aux machines de se préparer à recevoir une nouvelle trame. **Attention, cette definition 
a été revue en fobction des débits.** 
<br />
![Trame 2](/trames2.png)