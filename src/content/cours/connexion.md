---
title: 'Comment les équipements sont-ils connectés entre eux ?'
tag: 'Réseaux'
description: 'Cours sur les différents types de connexions entre équipements.'
heroImage: '/network.png'
---


## Les supports filaires
### 1. Les paires torsadées
Plus communément appelées Ethernet ou RJ45. Un câble « paires torsadées » est
une ligne symétrique formée de 8 fils conducteurs identifiés par un code couleur.

On distingue 2 types d’utilisation sur les 8 fils contenus dans notre câble à paires
torsadées.

Les fils : orange, orange/blanc, vert et vert/blanc sont destinés au transport de la donnée.

Les fils : bleu, bleu/blanc, marron et marron/blanc sont destinés à l’alimentation électrique (la PoE, que nous
aborderons plus loin)

Pourquoi le nom de paires torsadées ?
Cela vient du fait que nos 8 fils sont répartis en quatre paires enroulées en hélice. Cette configuration en hélice a pour
but principal de limiter la sensibilité aux interférences et la diaphonie dans les câbles multipaires.

Les câbles pairs torsadées peuvent être soit blindé ou non. Le schéma de la page suivante vous montre les différents
types de câble.

| Usage courant       | ISO 11801 | Blindage du câble   | Blindage de paire | 
|---------------------|-----------|----------------------|------------------|
| UTP                 | U/UTP     | aucun               | aucun             |
| STP                 | S/UTP     | tresse              | aucun             |
| FTP, STP            | F/UTP     | feuillard           | aucun             |
| SFTP, S-FTP, STP    | SF/UTP    | tresse, feuillard   | aucun             |
| STP                 | U/FTP     | aucun               | feuillard         |
| SSTP, SFTP, STP     | S/FTP     | tresse              | feuillard         |
| FFTP, STP           | F/FTP     | feuillard           | feuillard         |
| SSTP, SFTP, STP     | SF/FTP    | tresse, feuillard   | feuillard         |
<br />
Initialement il existait deux types de câbles Ethernet :
- **Le cable droit**: Un câble droit est un type de câble à paire torsadée utilisé dans les
réseaux locaux pour connecter un ordinateur à un switch de réseau tel
qu’un routeur. Ce type de câble est également parfois appelé câble
Patch. Le câble droit utilise une norme de câblage : les deux extrémités
utilisent la norme de câblage T568A ou les deux extrémités utilisent la
norme de câblage T568B.
![cable_droit](/cable_droit.png)
<br />
- **Le cable croisé**: Un câble Ethernet croisé est un type de câble Ethernet utilisé pour
connecter directement des périphériques informatiques. Contrairement
aux câbles droits, les câbles croisés utilisent deux normes de câblage
différentes : une extrémité utilise la norme de câblage T568A et l’autre
extrémité utilise la norme de câblage T568B. Le câblage interne des
câbles croisés Ethernet inverse les signaux de transmission et de
réception. Il est le plus souvent utilisé pour connecter deux
périphériques du même type : par exemple deux ordinateurs (via le
contrôleur d’interface réseau) ou deux commutateurs l’un à l’autre.
![cable_croise](/cable_croise.png)
<br />
**Pourquoi cette distinction entre les câbles droits et croisés ?**

Pour comprendre cette distinction, il faut nous intéresser au mode de fonctionnement des cartes réseau des ordinateurs
et aux équipements réseau.

Les PCs, serveurs et routeurs disposent de cartes réseau de type MDI (ces interfaces sont non croisées).
Les hubs et les switchs disposent de cartes réseau de type MDI X (ces interfaces sont croisées).

Du coup, lorsque l’on connectait deux équipements de même nature avec un câble droit, on se retrouvait avec le bus de
sortie de la carte réseau de l’équipement A relié au bus de sortie de l’équipement B. Il en allait de même pour leurs ports
d’entrée. Un tel câblage avait pour effet la création de collisions sur l’un des fils et l’absence de transmission sur le second
; il fallait alors utiliser un câble croisé.

Pour éviter l’utilisation de câble croisé entre deux PCs, par exemple, il fallait alors placer un switch entre ces derniers. Par
contre, il n’y avait pas d’autres possibilités que l’utilisation d’un câble croisé pour connecter deux switchs.

De nos jours, les équipements et ordinateurs modernes possèdent des cartes réseau de type MDI X Auto (ou « Auto Sens
») ; ce type de carte réseau est capable de permuter automatiquement le sens entrée-sortie des bus, du coup, plus besoin
de câble croisé.

- **Le cable PoE**: Les PoE (pour Power Over Ethernet) permettent de faire passer une alimentation électrique (initialement seulement un
courant continu d'une puissance maximale de 15,4 watts avec une tension d'environ 48 V), en plus des données à
100 Mbit/s ou 1 Gbit/s. Cette technologie est définie par la norme IEEE 802.3af, appartenant au standard IEEE
802.3 (Ethernet) ratifiée le 11 juin 2003 et publiée le 11 juillet 2003.
À ce jour, il existe plusieurs normes:

**IEEE 802.3af (PoE)** : L'alimentation électrique fournie est au maximum de 15,4 W pour une puissance maximum de 12,9
W au niveau du périphérique. La tension est de 48 V.

**IEEE 802.3at (PoE+)** : Si l'équipement fournissant l'alimentation et le périphérique répondent tous les deux à cette
norme, alors il est possible d'utiliser une puissance comprise entre 24 et 30 W, toujours pour une tension de 48V

**IEEE 802,3bt (4PPOE ou PoE++)** introduit deux niveaux supplémentaires de puissance maximale délivrée par le switch,
type 3 avec 55 W (avec une intensité maximale par paire de 600 mA) et type 4 avec 90 W (avec une intensité maximale
par paire de 960 mA) répartis sur les 4 paires du câble Ethernet. Compte-tenu des pertes dans le câble, la puissance
réellement disponible sur l'équipement est de 71 W sur l'équipement alimenté en type 4

| Catégories| Débits       | Longueur Max | POE supporter | Type                  | Impédance | Fréquence Max |
|-----------|--------------|--------------|---------------|-----------------------|-----------|---------------|
| 3         | 10 Mbits/s   | 150 m        | Non           | UTP                   | 100-120 Ohm| 16 MHz        |
| 4         | 16 Mbits/s   | 150 m        | Non           | UTP                   | 100 Ohm   | 20 MHz        |
| 5         | 100 Mbit/s   | 150 m        | Non           | UTP                   | 100 Ohm   | 100 MHz       |
| 5e        | 1 à 10 Gigabit/s*| 150 m       | Oui           | UTP, F/UTP, U/UTP     | 100 Ohm   | 100 MHz       |
| 6         | 5 à 10 Gigabit/s*| 150 m       | Oui           | UTP, F/UTP, U/UTP     | 100 Ohm   | 250 MHz       |
| 6a        | 10 Gbit/s    | 150 m        | Oui           | UTP, F/UTP, U/UTP, S/FTP| 100 Ohm   | 500 MHz       |
| 7         | 20 à 40 Gbit/s| 150 m        | Oui           | S/FTP, F/FTP          | 100 Ohm   | 600 MHz       |
| 7a        | 20 à 40 Gbit/s| 150 m        | Oui           | S/FTP, F/FTP          | 100 Ohm   | 1 GHz         |
| 8.1       | 20 à 40 Gbit/s| 150 m        | Oui           | F/FTP, U/FTP          | 100 Ohm   | 2 GHz         |
| 8.2       | 20 à 40 Gbit/s| 150 m        | Oui           | S/FTP, F/FTP          | 100 Ohm   | 2 GHz         |

* Varie selon la longueur du câble.
<br />
| Avantages                                                                                  | Inconvénients                                                                                       |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Ajout ou retrait de matériel sur le switch ou le hub sans interruption de fonctionnement.  | Cela peut être plus ou moins sensible aux perturbations électriques selon la qualité des câbles.    |
| Sécurité augmentée : un pirate doit passer par le port de services ouvert ou se connecter directement depuis l'intérieur du réseau. | Comme toute architecture réseau câblé, difficile à modifier car les câbles passent souvent dans les murs et plafonds. |
<br />
<br />
### 2. La Fibre Optique
La fibre optique est un câble dont l’âme très fine est en verre ou en plastique, et conduit un
signal lumineux, ce qui en fait un câble totalement insensible aux perturbations électriques.
Il offre un débit d'informations nettement supérieur à celui des câbles coaxiaux ou paire
torsadée et peut servir de support à un réseau « large bande » par lequel transitent aussi
bien la télévision, le téléphone, la visioconférence ou les données informatiques.

Le principe de la fibre optique date du début du XXe siècle, mais ce n'est qu'en 1970 qu’est développée une fibre utilisable
pour les télécommunications, dans les laboratoires de l'entreprise américaine Corning Glass Works (actuelle Corning
Incorporated).

Entourée d'une gaine protectrice, la fibre optique peut être utilisée pour conduire
de la lumière entre deux lieux distants de plusieurs centaines, voire milliers de
kilomètres. Le signal lumineux codé par une variation d'intensité est capable de
transmettre une grande quantité d'informations. En permettant les
communications à très longue distance et à des débits jusqu'alors impossibles.

Il existe trois types de fibres optiques :
- **Monomode**: La fibre monomode est la meilleure fibre existante à l'heure actuelle. C'est ce type de fibre qui est utilisé dans les cœurs
des réseaux mondiaux.
Un seul mode de propagation de la lumière existe : c'est le mode en ligne droite. 
![monomode](/monomode.png)
La fibre monomode possède un cœur très fin, de la taille d'un cheveu ! L'atténuation sur ce type de fibre est quasi nulle, c'est ce qui en fait sa force.
- - débit: plusieurs centaines de gigabit par seconde. Une record a été établie en 2021 avec un débit de 318 Terabit par seconde
- - Portée maximale : environ 100 Km
- - Affaiblissement : 0,5 dB/Km
- **Multimode à saut d’indice**: La fibre multimode à saut d'indice est la fibre la plus ordinaire. C'est ce type de fibre qui est utilisé dans les réseaux locaux
de type LAN. Etant donné que la fibre à saut d'indice est multimode, il existe plusieurs modes de propagation de la
lumière au sein de son cœur de silice.
Il existe dans cette fibre une très grande variation entre l'indice de réfraction du cœur et de la gaine optique.
C'est pour cela que les rayons lumineux se propagent par réflexion totale interne en "dent de scie". 
![multimode1](/multimode.png)
La fibre à saut d'indice possède un cœur très large. L'atténuation sur ce type de fibre est très importante, comme on peut
le voir sur la différence des impulsions d'entrée et de sortie
- - Débit : entre quelques dizaines de mégabits/s jusqu’à un gigabit/s
- - Portée maximale : environ 2 Km
- - Affaiblissement : 10 dB/Km
- **Multimode à gradient d’indice**: Elle est aussi utilisée dans les réseaux locaux. C'est une fibre multimode, donc plusieurs modes de propagation
coexistent. A la différence de la fibre à saut d'indice, il n'y a pas de grande différence d'indice de réfraction entre cœur et
gaine. Cependant, le cœur des fibres à gradient d'indice est constitué de plusieurs couches de matière ayant un indice de
réfraction de plus en plus élevé. Ces différentes couches de silice de densités multiples influent sur la direction des
rayons lumineux qui ont une forme elliptique. 
![multimode2](/multimode2.png)
La fibre à gradient d'indice possède un cœur de taille intermédiaire. L'atténuation sur ce type de fibre est moins
importante que sur les fibres à saut d'indice.
- - Débit : jusqu’a 10 Gigabits
- - Portée maximale : environ 2 Km
- - Affaiblissement : 10 dB/Km

| Catégorie           | Débit               | Portée maximale | Nombre de faisseaux |
|---------------------|---------------------|-----------------|---------------------|
| Monomode (base SX)  | 100 Gbit/s          | 100 Km          |   1                 |
| Multimode (base LX) | 100Mbit/s a 1Gbit/s | 2 Km            |   1                 |

| Avantages                                                           | Inconvénients                                                                                                                                |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|Insensible aux perturbations électriques, car le signal est lumineux.| C'est une technologie fragile qui nécessite des compétences particulieres pour son installation et son déploiement.                          |
|                                                                     | Comme toute architecture réseau câblé, il ne sera pas facile de modifier, car très souvent les câbles passent dans les murs et les plafonds. |

Il existe également des cartes réseaux fibre optique pour les ordinateurs mais leur prix reste encore élevé, entre 150€ et
600€.
<hr />
## Le Wi-Fi
Le Wi-Fi est un ensemble de protocoles de communication sans fil, régit par les normes du groupe IEEE 802.11 (ISO/CEI
8802-11). Un réseau Wi-Fi permet de relier par ondes radios, plusieurs appareils (ordinateur, routeur, smartphone,
modem Internet, etc.) au sein d'un réseau informatique afin de permettre la transmission de données entre eux. Au
cours du temps, il y a eu plusieurs évolutions de la technologie Wi-Fi avec surtout une amélioration de ses capacités.

![wifi](/wifi.png)
<br />
| Norme    | Nom commercal | Bande de fréquence | Débit théorique | Largeur de la bande      |Portée interieure | Portée exterieure | Date de sortie |
|----------|---------------|--------------------|-----------------|--------------------------|------------------|-------------------|----------------|
| 802.11ac | Wi-Fi 5       | 5GHz               | 3.5 Gbit/s      | 20, 40, 80, 160 Mhz      | 30 a 45 m        | 100 a 200 m       | 2013           | 
| 802.11ax | Wi-Fi 6       | 2,4 et 5 GHz       | 9.6 Gbit/s      | 20, 40, 80, 160 Mhz      | 30 a 50 m        | 100 a 200 m       | 2019           |
| 802.11ax | Wi-Fi 6E      | 6 GHz              | 9.6 Gbit/s      | 20, 40, 80, 160 Mhz      | 30 a 45 m        |  75 a 150 m       | 2020           |
| 802.11be | Wi-Fi 7       | 2.4, 5 et 6 GHz    | 46 Gbit/s       | 20, 40, 80, 160, 320 Mhz | Non spécifié     |  Non spécifié     | 2024           |
<br />
| Avantages                                             | Inconvénients                          |
|-------------------------------------------------------|----------------------------------------|
| grande flexibilité pour l'ajout de nouveaux appareils | Sensibilité aux attaques               | 
<br />
<hr />
## Le CPL (courant porteur en ligne)
La communication par CPL (Courant porteur en ligne) consiste à construire un réseau informatique via l’infrastructure
du réseau électrique d'une habitation ou d'un bureau, voire d'un quartier ou groupe de bureaux.

Le principe des CPL consiste à superposer au courant électrique alternatif de 50 ou 60 Hz un signal à plus haute
fréquence et de faible énergie. Ce deuxième signal se propage sur l’installation électrique et peut être reçu et décodé à
distance. Ainsi, le signal CPL est reçu par tout récepteur CPL de même catégorie se trouvant sur le même réseau
électrique. Cette façon de faire comporte cependant un inconvénient : le réseau électrique n'est pas adapté au transport
de hautes fréquences, car il n'est pas blindé. En conséquence, la plus grande partie de l'énergie injectée par le modem
CPL est rayonnée sous forme d'ondes radio. On classe traditionnellement les CPL en deux catégories en fonction du
débit offert.

![cpl](/cpl.png)
<br />
| Catégorie | Débit         | Bande passante         | Distance conseillée | Distance maximale |
|-----------|---------------|------------------------|---------------------|-------------------|
|Haut débit |0.2 a 2 Gbit/s | 1.6 a 30 Mhz           | 200 m               | 1000 m            |
|Bas débit  |0.2 a 2 Gbit/s | 9 a 150 Khz (europe)   | 200 m               | 1000 m            |
<br />
| Avantages                           | Inconvénients                                                                               |
|-------------------------------------|---------------------------------------------------------------------------------------------|
| Installation facile et peu couteuse |Sensible aux variations ou pannes electriques                                                |
|                                     |Les installations triphasées ne permettent pas de faire passer le signal sur une autre phase |
|                                     |Risque de piratage ou vol de données depuis l'exterieur                                      |
|                                     |Les parafoudres, multiprises avec filtre et onduleurs peuvent bloquer les hautes frequences  |
|                                     |Les CPL peuvent être perturbés par les ondes radio et les ondes wifi                         |
|                                     |Risque d'incompatibilité de certains materiels ou protocols                                  |
<br />
<br />
<hr />