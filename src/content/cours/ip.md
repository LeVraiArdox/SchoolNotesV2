---
title: "IPV4 et IPV6"
tag: "Réseaux"
description: "Cours sur les adresses IP IPV4 et IPV6."
heroImage: "/network.png"
---

## IPV4
L'adresse IP appartient à la couche 3 du modèle OSI et assure l'adressage logique, le routage et la commutation des paquets. Cette couche comprend les protocoles de routage, comme **IP**, et permet d'identifier de manière unique chaque appareil sur un réseau. Oui, même votre grille-pain connecté a besoin de son adresse IP!  

**IPv4** (Internet Protocol version 4) est la version la plus utilisée du protocole Internet. Elle utilise 4 octets, soit 32 bits, ce qui donne 2^32 adresses possibles (4 294 967 296 adresses). 

Cela semble beaucoup, mais avec la croissance des appareils connectés, ces adresses sont devenues insuffisantes. D’où l'arrivée d'**IPv6**.

<hr />

## IPV6
**IPv6** (Internet Protocol version 6) est la version la plus récente du protocole Internet. Il utilise 8 octets, soit 128 bits, et offre donc 2^128 adresses possibles (environ 340 sextillions d’adresses!). Même en donnant une adresse IP à chaque grain de sable sur Terre, il en resterait encore... on est plutôt à l’aise ici.

<hr />

## Configuration
Une adresse IP peut être configurée de deux manières :

- **Statique**: Manuellement attribuée.
- **Dynamique**: Attribuée automatiquement par un serveur **DHCP** (Dynamic Host Configuration Protocol).

Chaque adresse IP est accompagnée d'un **masque de sous-réseau**, qui indique le réseau et l'adresse de l'hôte. Parce qu’on préfère éviter les erreurs de réseau en se trompant de sous-réseau!

<hr />

## Masque de sous-réseau
Le **masque de sous-réseau** est composé de 4 octets et souvent présenté sous forme d'adresse IP. Sa fonction : distinguer le réseau de l’hôte. Par exemple, pour un masque /24 (255.255.255.0), les 24 premiers bits représentent le réseau.

<hr />

## L'épuisement des adresses IPV4
Avec l'augmentation des appareils connectés, les adresses **IPv4** ont commencé à manquer. 

Pour rappel, il n’y a que 4,2 milliards d’adresses IPv4 possibles (un peu juste pour un monde hyperconnecté). C'est pourquoi **IPv6** a été développé avec ses 340 sextillions d'adresses.

Pour économiser ces adresses, on a d'abord découpé les adresses IP en blocs plus petits (CIDR), puis introduit des solutions comme le **NAT** (Network Address Translation). Ce sont un peu des "rustines", mais elles ont permis de repousser l’épuisement complet.

Les adresses IPv4 sont divisées en adresses **publiques** et **privées**. Les adresses privées ne sont pas routables sur Internet, et sont regroupées en classes :
  
| Classe | Début     | Masque         | CIDR |
|--------|-----------|----------------|------|
| A      | 10.0.0.0  | 255.0.0.0      | /8   |
| B      | 172.16.0.0| 255.255.0.0    | /16  |
| C      | 192.168.0.0| 255.255.255.0 | /24  |


**Le CIDR**, c'est un peu comme une maison avec plein de chambres. Plus le CIDR est petit, plus il y a de chambres (adresses) dans la maison (réseau).

<hr />

## RIR (Regional Internet Registry)
Les **RIR** sont des organisations qui distribuent les adresses IP aux entreprises et aux fournisseurs d'accès. Il en existe cinq :
  
- **AFRINIC** : Afrique
- **APNIC** : Asie-Pacifique
- **ARIN** : Amérique du Nord
- **LACNIC** : Amérique Latine et Caraïbes
- **RIPE NCC** : Europe, Moyen-Orient et Asie Centrale

Les RIRs gèrent la distribution des adresses IP, parce qu’il faut bien un peu d’organisation dans ce chaos d’adresses!

<hr />

## IANA
L'**IANA** (Internet Assigned Numbers Authority) gère les adresses IP au niveau mondial et assure la coordination de ces adresses et des noms de domaine. Elle est également responsable des adresses **IPv6**, car quelqu’un doit bien veiller à ce que tout reste ordonné!

<hr />

## Types d'adresses IPv6
Il existe plusieurs types d’adresses IPv6 :

- **Unicast** : Identifie une seule interface.
- **Multicast** : Identifie un groupe de nœuds.

![cast](https://castr.com/blog/wp-content/uploads/2023/05/Unicast-vs-Multicast-vs-Broadcast-1-scaled.jpg)

<hr />

### Node-local (Loopback)
Cette adresse est l’équivalent de l’adresse de bouclage IPv4 (127.0.0.1). En IPv6, le bouclage utilise l'adresse spéciale **::1/128**.

### Link-local
Les adresses Link-Local, qui commencent par **fe80::/10**, sont spécifiques à un lien de niveau 2 et ne sont jamais transférées par les routeurs. Toutes les interfaces IPv6 ont une adresse Link-Local, ce qui les rend idéales pour la découverte de voisins et la configuration automatique.

### Global Unicast
Similaire aux adresses publiques IPv4, les **Global Unicast** sont globalement routables. Les adresses de ce type commencent généralement par **2000::/3** et permettent l’interconnexion des réseaux sur Internet.

### Unique Local
Définies dans le **RFC 4193**, les **Unique Local Addresses (ULA)** sont comparables aux adresses privées IPv4 (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16). Elles ne sont pas routables sur Internet et permettent le routage privé entre sites interconnectés de manière sécurisée.

### Multicast Assigned
Ces adresses sont prédéfinies pour identifier des services spécifiques et bien connus. Elles commencent toujours par **FF**. Les adresses **FF02** sont limitées à un réseau local.

### Solicited-Node
En IPv6, la table **ARP** d’IPv4 est remplacée par le **Neighbor Discovery Protocol** (NDP). Une adresse **Solicited-Node Multicast** (FF02::1:ff00:0/104) permet de découvrir l’adresse de couche 2 (L2) d’un voisin sans diffusion globale (pas de Broadcast en IPv6).

<hr />

## Écriture d'adresse IPv6
Les adresses IPv6, écrites en hexadécimal sur 8 groupes de 4 chiffres (128 bits au total), sont certes longues, mais des règles de simplification existent pour les écrire de manière plus concise :

- Les zéros initiaux de chaque bloc peuvent être omis.
  Exemple : `FE80:0000:0000:0000:BB38:9F98:0241:8A95` devient `FE80::BB38:9F98:0241:8A95`

- Un bloc consécutif de zéros peut être remplacé une seule fois par `::`.
  Exemple : `2001:0DB8:00F4:0845:0000:0627:E202:24FE` devient `2001:DB8:F4:845:0:627:E202:24FE`


Attention aux erreurs de suppression de zéros ! Utiliser cette règle à tort peut rendre une adresse IPv6 ambiguë.

<hr />
