---
title: 'Architecture et BUS'
description: 'Cours sur les architectures et les BUS'
tag: 'Hardware'
heroImage: '/pcarchitect.png'
---

## Chipsets et BUS
Les **chipsets** sont des contrôleurs qui gèrent les différents composants d'un système. Il y a deux types principaux de chipsets :
- le **North bridge**:  Ce chipset est chargé de connecter le processeur (CPU), la carte graphique (GPU) et la mémoire vive (RAM), pour assurer un transfert de données rapide entre ces composants essentiels.
- le **South bridge**:  Ce chipset gère les autres composants qui n'ont pas besoin d'une vitesse de transfert aussi élevée, comme les ports USB, le stockage ou les cartes réseau.

Les chipsets Northbridge et Southbridge sont interconnectés.

![Chipset](/chipset.jpg)

<br />
Le **BUS** est le système de communication qui relie les composants aux chipsets pour permettre le transfert des données. Quelques exemples de bus :
- **FSB (Front Side Bus)** : Relie le Northbridge au Southbridge.
- **Bus mémoire** : Relie le Northbridge à la RAM.
- **Bus graphique** : Relie le Northbridge au GPU.
<br />
<hr />

## Types d'architecture
En informatique, architecture désigne la structure générale inhérente à un système informatique. Il existe plusieurs types d'architecture :
- **Architecture x86_64** : Utilise la structure classique avec Northbridge et Southbridge pour la liaison des composants. Cette architecture cherche la puissance, mais le processeur emmet beaucoup de chaleur et demande plus d'énergie.
- **Architecture ARM (Advanced RISC Machine)** : Cette architecture intègre le CPU, le GPU et la RAM sur une seule puce, connue sous le nom de **SoC (System on a Chip)**. Elle est utilisée dans des appareils comme les produits Apple, les tablettes, les smartphones, les montres connectées et certaines consoles de jeu (Nintendo Switch, PSVita). Cette architecture recherche l'economie d'energie et la faible emission de chaleur sans negliger la puissance.
<br />
L'architecture ARM présente plusieurs avantages : elle consomme moins d'énergie, ne chauffe pas beaucoup, et supprime la latence du système en éliminant le besoin de chipset pour la gestion du CPU, GPU et RAM.

<hr />

## Le processeur
Un microprocesseur est composé de plusieurs cœurs, qui sont les unités principales de calcul. Chaque cœur exécute les instructions de manière séquentielle, c'est-à-dire une par une. Pour exécuter plusieurs instructions simultanément, il est nécessaire d'avoir plusieurs cœurs. Par exemple, un processeur à deux cœurs peut traiter deux instructions en parallèle, améliorant ainsi les performances globales, notamment pour les tâches gourmandes en ressources comme le multitâche ou les jeux vidéo.
![CPU](/cpuarchitecture.jpg)
<br />
<hr />

### Le cache:
Les logiciels et applications effectuent souvent des opérations répétitives, ce qui implique de solliciter les mêmes informations à plusieurs reprises. La mémoire cache, une mémoire ultra-rapide intégrée directement dans le processeur, joue un rôle crucial en stockant temporairement les données fréquemment utilisées ou récemment consultées. Cela permet d'accélérer l'accès à ces informations et d'améliorer significativement la vitesse de traitement global du système, car le CPU n'a plus besoin de récupérer ces données à partir de la RAM ou du disque dur.
<br />
<hr />

### Architectures 32 bits et 64 bits
- **32 bits (x86)**: L'architecture 32 bits est capable de gérer un maximum de 3,5 Go de mémoire vive (RAM). Il est possible d'installer un système d'exploitation Windows 32 bits sur un processeur 64 bits, mais l'inverse n'est pas possible : un système Windows 64 bits ne peut pas fonctionner sur un processeur 32 bits. Cette architecture est aussi connue sous le nom de x86. De nos jours, les processeurs 32 bits sont considérés comme obsolètes, car ils ont été remplacés par des processeurs 64 bits, plus puissants et adaptés aux besoins actuels.
- **64 bits (x86_64)**: L'architecture 64 bits peut gérer jusqu'à 128 Go de mémoire vive, voire davantage selon la configuration de Windows et de la carte mère. Comme avec l'architecture 32 bits, un système Windows 32 bits peut être installé sur un processeur 64 bits, mais un système Windows 64 bits ne peut pas fonctionner sur un processeur 32 bits. Cette architecture est également appelée x64. Les processeurs 64 bits permettent d'exploiter pleinement la puissance des processeurs modernes, offrant une meilleure gestion des ressources, en particulier pour les systèmes nécessitant de grandes quantités de RAM et pour les applications gourmandes en calcul.
<br />
Il est également important de noter que le BIOS supporte à la fois les architectures 32 bits et 64 bits, tandis que l’UEFI ne prend en charge que les systèmes 64 bits.
<br />
<hr />

### Threads et Hyper-Threading
**Un thread** est un processus léger, une unité de traitement qui peut être gérée indépendamment par le système d'exploitation. Lorsqu’un programme est exécuté, un ou plusieurs threads sont créés pour s’assurer que les tâches reçoivent du temps processeur et de la mémoire nécessaires à leur exécution. Chaque programme comprend au moins un thread, mais de nombreux logiciels modernes utilisent plusieurs threads pour améliorer les performances, surtout pour les applications multitâches.
<br />
**L'Hyper-Threading** est une technologie développée par Intel qui permet à un seul cœur physique de simuler deux cœurs logiques. Cela permet à un processeur d'exécuter deux threads simultanément, ce qui améliore l'efficacité de traitement en optimisant l'utilisation des ressources du CPU. Bien qu’il ne double pas réellement la puissance du processeur, l’Hyper-Threading peut offrir des gains de performance dans certaines applications multitâches ou intensives.
<br />
<hr />

### Overclocking
**L'overclocking**, ou surfréquençage, consiste à augmenter la fréquence d'horloge (Hertz) d'un composant, généralement le processeur ou la carte graphique, pour en booster les performances au-delà des spécifications du fabricant. Cela permet d'obtenir des gains de performance significatifs, notamment pour les jeux ou les applications exigeantes. Cependant, cette augmentation de fréquence entraîne également une montée en température des composants et peut augmenter les risques d'erreurs, de plantages ou de réduction de la durée de vie du matériel. L'overclocking doit donc être réalisé avec précaution, en s'assurant que le système est correctement refroidi et stable.