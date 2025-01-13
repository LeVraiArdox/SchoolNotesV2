---
title: 'BIOS & filesystem'
tag: 'Hardware'
description: 'Cours sur les systèmes de fichiers et le BIOS/UEFI'
heroImage: '/bios.png'
---

## Systèmes de fichiers
Les systèmes de fichiers sont essentiels pour l’organisation et la gestion des données sur un support de stockage, tel qu’un disque dur, un SSD, ou une clé USB. Chaque système d'exploitation utilise généralement son propre type de système de fichiers pour stocker et récupérer les fichiers de manière optimale. Voici quelques-uns des types les plus courants :
<br />
- **NTFS (New Technology File System)**: Utilisé principalement par les systèmes d'exploitation Windows, NTFS est un système de fichiers robuste et sécurisé. Il prend en charge de grandes capacités de stockage, la gestion des permissions de fichiers, la compression, le cryptage et le journalisation, qui permet de minimiser la corruption des données en cas de plantage. C'est actuellement le système de fichiers par défaut sur les versions modernes de Windows.
- **EXT4 (Fourth Extended File System)** : EXT4 est le système de fichiers par défaut sur la plupart des distributions Linux. Il est reconnu pour sa stabilité, sa rapidité et sa flexibilité. EXT4 supporte des volumes de très grande taille et offre une meilleure gestion des données fragmentées par rapport aux versions antérieures du système de fichiers EXT. Grâce à des fonctionnalités comme la préallocation de blocs et la journalisation, EXT4 assure également une meilleure sécurité et performance.
- **APFS (Apple File System)** : Conçu par Apple pour ses systèmes d'exploitation macOS, iOS, et autres appareils, APFS est optimisé pour les performances sur les disques SSD et autres dispositifs de stockage flash. APFS offre des fonctionnalités avancées telles que le clonage de fichiers instantané, la prise en charge de la taille des fichiers dynamique, le chiffrement au niveau du volume, et des améliorations notables en termes de vitesse et de gestion de l'espace disque. Il est actuellement utilisé sur les Mac modernes, ainsi que sur les appareils iPhone et iPad.
<br />
![filesystem](/filesystem.jpg)
<br />
<hr />

## BIOS et UEFI
Le **BIOS (Basic Input/Output System)** et **l'UEFI (Unified Extensible Firmware Interface)** sont deux types de logiciels intégrés qui démarrent l'ordinateur et initialisent le matériel avant de lancer le système d'exploitation.
<br />
- **BIOS (Basic Input/Output System)** : Le BIOS est une interface très basique qui a été largement utilisée depuis les débuts de l’informatique personnelle. Il fonctionne en 16 bits et utilise un système de navigation rudimentaire où l'utilisateur interagit avec le système à l’aide des touches fléchées. Il ne prend en charge que les disques durs jusqu'à 2TB et a des limitations en termes de performance et de gestion de matériel moderne. Le BIOS est gravé dans une puce ROM sur la carte mère et fonctionne principalement en mode texte.
- **UEFI (Unified Extensible Firmware Interface)** : UEFI est l’évolution moderne du BIOS. C'est une interface plus avancée, avec une interface graphique, souvent accessible via la souris, en plus des touches du clavier. Contrairement au BIOS, l'UEFI prend en charge les systèmes 64 bits et permet de démarrer des disques de plus de 2TB. Il offre également une sécurité renforcée grâce à des fonctionnalités comme le "Secure Boot", qui vérifie l'intégrité du système d'exploitation avant de le lancer pour prévenir les attaques. UEFI est plus flexible et peut charger de multiples drivers, gérer des partitions de disque avec plus d’efficacité, et se mettre à jour plus facilement.