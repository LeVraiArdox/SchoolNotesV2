---
title: "Les différentes topologies"
tag: "Réseaux"
description: "Cours sur les différentes topologies de réseaux."
heroImage: "/network.png"
---


## La topologie en anneau

Un réseau a une topologie en anneaux quand toutes ses stations sont connectées en chaîne les unes aux autres par une
liaison bipoint de la dernière à la première. Chaque station joue le rôle de station intermédiaire. Chaque station qui
reçoit une trame, l'interprète et la réémet à la station suivante de la boucle si c'est nécessaire. La défaillance d'un hôte
rompt la structure d'un réseau en anneaux si la communication est unidirectionnelle ; en pratique, un réseau en
anneaux est souvent composé de 2 anneaux contrarotatifs. En cas de collision de deux messages, les deux seraient
perdus, mais les règles d'accès à l'anneau (par exemple, la détention d'un jeton) sont censées éviter ce cas de figure.

![anneau](/anneau.gif)
<br />

## La topologie en Bus 

La topologie réseau en bus est représenté par un câblage unique
des unités réseau. Il a un faible coût de déploiement et la défaillance d'un nœud
ne scinde pas le réseau en deux sous-réseaux. Ces unités sont reliées de façon passive
par dérivation électrique ou optique. - Lorsqu'une station est défectueuse, elle
ne perturbe pas le réseau. - Lorsque le support est en panne, c'est l'ensemble du
réseau qui ne fonctionne plus. - Le signal émis par une station se propage dans un
seul ou dans les deux sens. - Si la transmission est bidirectionnelle : toutes les
stations connectées reçoivent les signaux émis sur le bus en même temps (au délai
de propagation près). - Le bus, dans le cas de câbles coaxiaux, est terminé à ses
extrémités par des adaptateurs d'impédance (des « bouchons ») pour éliminer les réflexions
du signal
<br />
![bus](/bus.png)
<br />

## La topologie Hiérarchique 

Aussi connu sous le nom de Réseau en arbre, il est divisé
en niveaux. Le sommet, de haut niveau, est connecté à plusieurs nœuds de niveau inférieur,
dans la hiérarchie. Ces nœuds peuvent être eux-mêmes connectés à plusieurs nœuds
de niveau inférieur. Le tout dessine alors un arbre ou une arborescence. Le point
faible de ce type de topologie réside dans l'ordinateur "père" de la hiérarchie qui,
s'il tombe en panne, interdit alors toute communication entre les deux moitiés du
réseau.
<br />
![hierarchique](/hierarchie.png)
<br />

## La topologie en Etoile 

La topologie réseau en étoile aussi appelée Hub and Spoke
est la topologie la plus courante actuellement. Omniprésente, elle est aussi très
souple en matière de gestion et de dépannage d'un réseau : la panne d'un nœud ne
perturbe pas le fonctionnement global du réseau. En revanche, l'équipement central
(un hub et plus souvent sur les réseaux modernes un switch) qui relie tous les nœuds,
constitue un point unique de défaillance : une panne à ce niveau rend le réseau totalement
inutilisable. Le réseau Ethernet est un exemple de topologie en étoile. L'inconvénient
principal de cette topologie réside dans la longueur des câbles utilisés.
<br />
![etoile](/etoile.png)
<br />

## La topologie Maillée 

Une topologie maillée correspond à plusieurs liaisons point
à point. Une unité réseau peut avoir N connexions point à point vers plusieurs autres
unités. Chaque terminal est relié à tous les autres. L'inconvénient est le nombre
de liaisons nécessaires qui devient très élevé lorsque le nombre de terminaux l'est
: s'il y a N terminaux, le nombre de liaisons nécessaires est de N(N-1) x 2 Cette
topologie se rencontre dans les grands réseaux de distribution (exemple : Internet).
L'information peut parcourir le réseau en suivant des itinéraires divers, sous le
contrôle de puissants superviseurs de réseaux, ou grâce à des méthodes de routage.
Elle existe aussi dans le cas de couvertures Wi-Fi, on parle alors de topologie Mesh
mais ne concerne que les routeurs Wi-Fi. Ceux-ci se relaient les paquets grâce au
protocole OLSR (Optimized Link State Routing Protocol)
<br />
![maillée](/maille.png)
<br />
## L’ Architecture Campus Cisco


Ce schéma qui résume les différentes couches matérielles d’une
topologie maillée d’un point de vue théorique :
<br />
1. Les End Devices : qui se traduisent par les périphériques de bout
de réseau, il s’agit des périphériques utilisateurs PC, tablette,
smartphone, imprimante.
<br />
2. La couche d’accès : on retrouve ici des switchs Layer 2 et des
points d’accès Wi-Fi. En terme de débit, les équipements auront des
bandes passantes de 1 Gbit/s par port.
<br />
3. La couche de distribution : on trouvera ici des switch layer 3 dont
la bande passante par port se situe entre 2,5 Gbit/s et 10 Gbit/s.
<br />
4. La couche cœur de réseau : on retrouvera ici des switch layer 3
cœur de réseau et des routeurs. Les équipements du cœur de réseau
peuvent avoir des bandes passantes extrêmement importantes, par
exemple les switchs Cisco Nexus 9364D-GX2A proposent des ports
jusqu’à 800 Gbit/s.
<br />
5. La connexion au FAI
<br />
![cisco](/cisco.png)
<br />
<hr />