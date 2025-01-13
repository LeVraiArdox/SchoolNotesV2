---
title: 'Le Stockage'
tag: 'Hardware'
description: 'Cours sur les mémoires et les stockages'
heroImage: '/ramhero.png'
---

# Les memoires et Stockages

Les données ne sont pas toutes au même endroit. Elles sont stockées dans des composants différents, avec des roles particuliers.

## Bits et Octets

Avant de connaitre les details sur le stockage, il est interessant de savoir comment les données sont stockées.
Les données sont stockées sous forme de bits (0 ou 1) et les groupes de 8 bits sont appelés des octets.
<br />
1Ko = 1000 octets, 1Mo = 1000Ko, 1Go = 1000Mo etc. 
<br />
**ATTENTION**: Ne pas confondre **Bit** et **Byte**. Un Bit (Mb, Gb...) est une unité de mesure de la quantité de données, tandis qu'un Byte (MB, GB...) est la traduction de octet en anglais.

<hr />

## Les mémoires
- **Vive**: RAM (Random Access Memory), les données stockées ici sont temporaires et volatiles
- **Morte** : Morte et non volatile: Rom, PROM, EPROM, EEPROM et CD-ROM
- **Cache** : L1, L2, L3 (partagé). Petite mémoire vive rapide, generallement pour le processeur.

<br />
*La plus rapide est la mémoire cache, la seconde est la vive et pour finir la mémoire de masse.*
<br />
**La RAM est volatile!** elle est utilisée par le CPU pour un stockage rapide.

*(Variante : VRAM (carte graphique)).*

![ram](/ram.jpg)

### Il existe plusieurs types de memoire morte:
- **ROM (Read-Only Memory)**: On peut juste lire.
- **PROM (Programmable Read-Only Memory)**: On peut programmer.
- **EPROM (Erasable Programmable Read-Only Memory)**: On peut Effacer.
- **EEPROM (Electrically Erasable Programmable Read-Only Memory)**: On peut effacer electriquement.

<hr />

## Les Stockages

Les dites "Mémoires de masse" sont utilisées pour stocker les données de manière permanente. Elles sont plus lentes que les mémoires vive et morte.
La mémoire de masse conserve durablement, les données sont donc persistantes et gérable avec un système de fichier (NTFS (Windows), EXT4 / BTRFS (Linux), APFS (MacOs)) contrairement à la RAM et la VRAM. 
<br />
### Il existe deux types de memoire de masse:
- **Hard Disk Drive (HDD)**: Disque dur, les données sont stockées sur des disques magnétiques. Plus lent, plus réparable et meilleure pérénnité des données. Il est magnétique et mécanique (bras de lecture).
- **Solid State Drive (SSD)**: Disque dur solide, les données sont stockées sur des puces flash. Plus rapide, plus résistant, plus leger, silencieux et a faible emission de chaleur. Le plus utilisés : SATA 3 et PCIe NVME avec un débit de 600Mbits/s 

![disques](/hddssd.png)

<hr />

## Les stockages annexes

Il existe un type de stockage dit SD. Il est utilisé pour les appareils portables comme les smartphones, les tablettes, les appareils photo, les cartes de jeux, les consoles de jeux...
Le stockage SD est un type de memoire Flash Il y a eu un combat commercial entre plusieurs constructeurs de carte flash (Multimedia card, Compact flash, CarteFuji-Olympus...) mais seul le SD a survecu.

<br />

Il extste également le LTO (Linear Tape-Open) qui est un type de stockage magnétique utilisé pour les données de longue durée. Il est utilisé pour les serveurs et les centres de données. Il est magnétique et a une capactié de 12To.

<hr />

## Interfaces de Connexion : Série et Parallèle

### Le transfert en série
L'interface série est une méthode de communication dans laquelle les bits de données sont transmis un par un sur une seule ligne de communication. Ce principe permet une réduction significative du câblage nécessaire, rendant l'architecture plus simple et plus facile à synchroniser. Cette approche est particulièrement avantageuse pour les communications sur de longues distances, où la réduction des interférences et des coûts de câblage sont des considérations importantes.
<br />
Exemples d'interfaces série incluent des standards modernes tels que USB (Universal Serial Bus), SATA (Serial ATA) et PCIe (Peripheral Component Interconnect Express). Chacune de ces technologies a été conçue pour offrir des vitesses de transfert élevées tout en minimisant les problèmes de synchronisation.
<br />
### Le transfert en parallèle
L'interface parallèle, en revanche, permet d'envoyer plusieurs bits de données simultanément sur plusieurs lignes de communication. Cela se traduit par un débit plus rapide, mais nécessite un câblage plus complexe. Ce type d'interface est souvent utilisé pour des connexions internes où la vitesse est primordiale.
<br />
Des exemples notables d'interfaces parallèles incluent PATA (Parallel ATA), SCSI (Small Computer System Interface) et les connexions de mémoire RAM.
<br />
L'interface parallèle a été abandonnée, car il posait des problèmes de synchronisation et de coûts de câblage. De plus, un seul retard sur une ligne pouvait retarder toute la communication.

![seripara](/serial-vs-parallel.jpg)

<hr />

## Le partitionnement

Le partitionnement est le processus qui consiste à diviser un disque de stockage, comme un disque dur ou un SSD, en plusieurs sections logiques appelées partitions. Chaque partition agit comme une unité de stockage indépendante, ce qui permet aux utilisateurs de mieux organiser et gérer leurs données. Cette technique est essentielle pour optimiser l'utilisation de l'espace de stockage et faciliter l'installation de systèmes d'exploitation multiples ou la gestion de différents types de données.
<br />
Il existe deux principales méthodes de partitionnement : le MBR (Master Boot Record, utilisé avec le BIOS legacy) et le GPT (GUID Partition Table, utilisé avec l'UEFI).
<br />
|                                   | MBR                                                                                      | GPT                                                          |
|-----------------------------------|------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| **Capacité maximale de partition**     | 2 To                                                                                     | 9,4 Zio (1 Zio = 1 milliard de téraoctets)                   |
| **Nombre maximal de partitions**       | 4 partitions principales (ou 3 principales + un nombre infini de partitions logiques)   | 128 partitions principales                                   |
| **Support de l'interface firmware**    | BIOS                                                                                    | UEFI                                                         |
| **Compatibilité avec les systèmes d'exploitation** | Windows 7 et systèmes plus anciens (Windows 95/98, Windows XP 32 bits, Windows 2000, Windows 2003 32 bits) | Systèmes récents comme Windows 11, Windows 10 64 bits, Windows 8/8.1 64 bits |



<hr />

## Les stockages en réseau

Le stockage ne s'effectue pas uniquement localement.  Il existe des solutions de stockage en réseau qui permettent de stocker des données sur des serveur.
<br />
Le **NAS (Network Attached Storage)** est un dispositif de stockage (le plus souvent un groupement de disques durs) directement rattaché à un réseau local. Il est utilisé pour du stockage, de la sauvegarde, du partage de fichiers ou en tant que lecteur multimédia. Il dispose de son propre Système d’exploitation dédié à la gestion de fichiers, son propre outil de configuration et son propre système de fichier. Il utilise les protocoles réseau CIFS et SMB pour Windows, NFS pour Linux et de disque Indépendants (RAID). Il est Simple d’administration.  
<br />
le **SAN (Storage Area Network)** est un réseau haut débit dédié au stockage des données, composé de baies de stockage qui ont leur Propre système de fichier. 
<br />
le **DAS (Direct Attached Storage)** est un dispositif de stockage directement rattaché à un serveur afin que celui-ci puisse assurer, entre autres, le rôle de serveur de fichiers. Il n’est pas rattaché à un réseau. Il utilise des protocoles de connexion (ATA, SATA, eSATA, IDE, SCSI, ...) 
<br />
![sanvsnan](/sanvsnas.png)

<hr />

## Le RAID

Le RAID (Redundant Array of Independent Disks) est une technologie de stockage qui permet de regrouper plusieurs disques durs en une seule unité logique, dans le but d'améliorer les performances, la protection des données et la fiabilité des systèmes critiques. Il existe différents niveaux de RAID, chacun offrant des avantages spécifiques en matière de performances, de tolérance aux pannes et de capacité de stockage.
<br />
Le RAID utilise plusieurs disques dur pour:
- Répartir les données (striping) 
- Dupliquer les données (mirroring) 
- Combiner à la fois la redondance et la répartition, afin d’améliorer la performance ou de protéger contre les pannes de disque. 
<br />
Le système RAID peut être implémenté soit en matériel (via un contrôleur RAID dédié) soit en logiciel (via le système d’exploitation). Le choix dépend des besoins en termes de performances et de gestion. 
| Niveau de RAID | Tolérance aux pannes         | Performances                       | Espaces disponibles | Usage                                                         |
|----------------|------------------------------|------------------------------------|----------------------|---------------------------------------------------------------|
| 0              | Non                           | Très élevées                       | 100%                 | Performances prioritaires (montage vidéo, jeux)               |
| 1              | Oui (1 disque)                | Bonne (lecture rapide)             | 50%                  | Systèmes critiques (bases de données, serveur)                |
| 5              | Oui (1 disque)                | Lecture rapide, écriture plus lente| (N-1)/N              | Serveurs de fichier, équilibre entre performances et redondance |
| 6              | Oui (2 disques)               | Lecture rapide, écriture plus lente| (N-2)/N              | Grands systèmes de stockage, forte tolérance aux pannes       |
| 10             | Oui (1 disque par miroir)     | Très élevées                       | 50%                  | Systèmes à hautes performances et haute disponibilité (bases de données critiques) |
<br />
**redondance**: solution de backup. Il en existe plusieurs:
- **Niveau 0 (striping)**: Deux disques distincts, vus en une seule unité logique (deux livres dans une seule étagère). ![raid0](https://www.prepressure.com/images/raid-level-0-striping.svg) Cette solution est bien pour sa vitesse, mais si un disque tombe, l'autre est inexploitable.
<br />
- **Niveau 1 (mirroring)**: Deux disques identiques, un pour la sauvegarde (deux fois le meme livre, un sur l'étagere, l'autre dans la réserve). ![raid1](https://www.prepressure.com/images/raid-level-1-mirroring.svg) Une bonne solution pour la backup, car si un disque tombe, il y a toujours l'autre. Cependant, il est plus lent car en plus de prendre en charge les données, il doit copier les données sur l'autre. (en plus, c'est du gachis). Ici, on parle de haute disponibilité et de tolérance aux pannes.
<br />
- **Niveau 3 (bandes avec parité)**:  Plus compliqué. ![raid3](https://www.prepressure.com/images/raid-level-5-striping-with-parity.svg) L'avantage est qu'il y a aucune perte de donées, mais c'est tres lent, cher et difficile a mettre en oeuvre.
<br />
<hr />

## Le formatage
Le formatage est le processus de préparation d'un disque dur ou d'un autre support de stockage pour qu'il puisse être utilisé par un système d'exploitation.
<br />
Il existe différent type de système de ficher au niveau du formatage de partitions:
-  **FAT32**: 4Go max, cross platform, c'est le moins sécurisé
-  **NTFS**: 256To max, sécurisé, c'est le systeme de fichier utilisé par Windows
-  **EXT4**: 16To max, sécurisé, c'est le systeme de fichier le plus utilisé par Linux. *(il existe plein de filesystem pour Linux)*
-  **APFS**: 16To max, sécurisé, c'est le systeme de fichier utilisé par macOS
<br />
**Pour les disques mecaniques (HDD), il existe deux methodes de partitionnement:**
- **Haut niveau**: Effacement des ficher dans l’index (on n'efface pas les données), c'est comme arracher le sommaire d'un livre, mais on garde les pages.
- **Bas niveau**: Effacement des données, le disque est entierement réécrit par des 0, c'est comme brûler le livre.
<br />
![disk](/hard-disk-structure.png)
<br />
<hr>

## La sauvegarde
Pour assurer une bonne sauvegarde, idéalement, on va faire la technique 3.2.1: **3 copies**, **2 emplacements de stockage différents** (HDD, SSD, SD...)  et **1 des 3 fichiers Hors site**.
<br />
![321](/321.png)
<br />
<hr />