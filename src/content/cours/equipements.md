---
title: 'De quels equipements se compose un réseau ?'
tag: 'Réseaux'
description: 'Cours sur les équipements réseaux.'
heroImage: '/network.png'
---

## Le répéteur

Un **répéteur** est un dispositif électronique combinant un récepteur et un émetteur, qui
compense les pertes de transmission d'un média (cuivre, fibre, radio) en
amplifiant et traitant éventuellement le signal, sans modifier son contenu. C'est
un équipement informatique d'infrastructure de réseaux de type passerelle. 
<br />
Le répéteur cuivre permet d'augmenter la limite de distance d'un réseau, limitée
à 100 m, entre deux interfaces réseaux.
<br />
Le répéteur fibre quand à lui peut prolonger le signal entre 60 et 100 Kms selon
le type de répéteur.
<br />
Enfin le répéteur Wi-Fi quand à lui prolonge le signal sur une surface moyenne
de 300 à 400 mètres carrés. La portée varie suivant plusieurs paramètres
épaisseurs et matériaux constituant les murs, autres types d’ondes présentes,
etc.

![Répéteur](/repeteurs.png)
<br />
<hr />

## Le Switch L2 et le Switch L3
Un **switch L2** est un équipement qui fonctionne comme un pont multiports et qui permet de relier plusieurs segments ou
périphériques d'un réseau informatique entre eux.

Il est chargé d'analyser les trames (que nous étudierons plus tard) qui arrivent sur les ports d'entrée. Il opère un filtrage
des données afin de les orienter vers le bon port. Il permet également la mise en place de réseaux virtuels (VLAN, que nous
verrons également plus tard).
<br />
Le **switch L3** assure les mêmes fonctions qu’un switch L2, mais peut en plus effectuer les mêmes tâches que le routeur.
![Switch](/switch.png)
<br />
<hr />

## Le Routeur
Un **routeur** est un équipement réseau informatique assurant le routage des paquets. Son rôle est de faire transiter des
paquets d'un réseau vers un autre. Pour ce faire, le routeur dispose de différents protocoles de routage : RIP (Routing
Information Protocol), IGRP (Interior Gateway Routing Protocol), OSPF (Open Shortest Path First), IS-IS (Integrated
Intermediate System to Intermediate System), EIGRP (Enhanced Interior Gateway Routing Protocol), BGP (Border
Gateway Protocol).
![Routeur](/routeur.png)
<br />
<hr />

## Le Firewall
Le **Firewall** ou pare-feu est considéré comme une des pierres
angulaires de la sécurité d'un réseau informatique.

Il a pour principale tâche de contrôler le trafic entre différentes
zones de confiance. Généralement, les zones de confiance incluent
Internet (une zone dont la confiance est nulle) et au moins un réseau
interne (une zone dont la confiance est plus importante).
<br />
Le but est de fournir une connectivité contrôlée et maîtrisée, grâce à l'application de la politique de sécurité, c'est-à-dire de
règles qui filtrent le trafic entrant et sortant et d'un modèle de connexion basé sur le principe du moindre privilège.
<br />
Le filtrage se fait selon divers critères : filtrage de paquets, filtrage par IP, filtrage MAC, filtrage stateless, filtrage statefull.
Chacun de ces filtrages intervient à différentes couches du réseau (Modèle OSI que nous aborderons plus tard). Pour
terminer, le Firewall permet de mettre en place et de délimiter des DMZ (zone démilitarisée), il s’agit de réseaux
spécifiques avec un niveau de sécurité et de filtrage plus élevé et strict où nous allons placer les serveurs. Il existe deux
types de DMZ : le privé où l’on positionne les serveurs qui ne sont joignables que depuis l’intérieur et le public où l’on
positionne les serveurs qui doivent être joignables depuis Internet.
![Firewall](/firewall.png)
<br />
<hr />

## Les équipements Wi-Fi

- **Access Point** : abrégé en AP (point d'accès ou borne Wi-Fi en français) est un
dispositif matériel utilisé pour créer un réseau sans fil local (WLAN).
Il agit comme un pont entre un réseau câblé, tel qu'un réseau Ethernet, et les
appareils sans fil, permettant ainsi à ces derniers de se connecter à Internet ou
à d'autres réseaux. Les points d'accès Wi-Fi sont essentiels pour étendre la
portée d'un réseau sans fil, en particulier dans les grandes zones où les
environnements ou le signal du routeur principal ne peut pas atteindre tous
les appareils.
Ils sont couramment utilisés dans les bureaux, les écoles, les lieux publics, pour garantir une couverture Wi-Fi stable et
étendue.
<br />
- **WLC** : Un contrôleur de réseau local sans fil (WLC, pour Wireless LAN Controller) est un dispositif ou un logiciel utilisé
pour gérer plusieurs points d'accès Wi-Fi au sein d'un réseau.
Les WLC permettant aux administrateurs de réseau de déployer et de contrôler efficacement un réseau sans fil étendu. Il
offre des fonctionnalités avancées telles que la gestion de la bande passante, la sécurité du réseau, l'itinérance des
utilisateurs entre les points d'accès sans interruption, et l'optimisation automatique des canaux et des puissances
d'émission.
Les WLC sont largement utilisés dans les grandes entreprises, les campus universitaires et autres environnements où
une gestion centralisée et un contrôle précis des réseaux sans fil sont essentiels pour assurer des performances
optimales et une sécurité renforcée.
<br />
<div className="seperator" />

## Les autres equipements
- **Téléphone IP** : Un téléphone IP est un appareil téléphonique qui utilise le
protocole Internet (VoIP) pour transmettre des appels vocaux via un réseau
informatique, plutôt que par des lignes téléphoniques traditionnelles. Il est
couramment utilisé dans les entreprises pour offrir des fonctionnalités
avancées telles que la messagerie vocale, la conférence téléphonique, et
l'intégration avec des systèmes de gestion.
<br />
- **Caméra IP** : Une caméra IP est un dispositif de surveillance qui capture et
transmet des images vidéo via un réseau informatique, permettant un accès
en temps réel ou en différé à distance. Utilisées dans les systèmes de sécurité
des entreprises, les caméras IP offrent des fonctionnalités comme la
détection de mouvement, la vision nocturne, et l'enregistrement en haute
définition
<br />
- **Lecteur de badge NFC** : Un lecteur de badge NFC est un dispositif utilisé pour contrôler l'accès aux locaux d'une
entreprise en utilisant la technologie Near Field Communication (NFC). Les utilisateurs présentent leur badge à
proximité du lecteur pour s'authentifier et déverrouiller les portes, assurant ainsi une gestion sécurisée et sans contact
des accès.
<div className="seperator" />