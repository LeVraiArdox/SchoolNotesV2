---
title: 'Théorie des graphes'
tag: 'Maths'
description: "Cours de théorie des graphes"
heroImage: '/meths.png'
---

Le problème des sept ponts de Königsberg (aujourd’hui Kaliningrad, Russie) résolu par Leonhard Euler en 1736 est à l’origine de **la théorie des graphes.**

Ce problème consiste à déterminer **s'il existe ou non une promenade** dans les rues de Königsberg permettant, à partir d'un point de départ au choix, de passer une et **une seule fois** par chaque pont, et de revenir à son point de départ, étant entendu qu'on ne peut traverser la rivière Pregel qu'en passant sur les ponts.

De manière générale, un graphe permet de représenter la structure, les connexions d'un ensemble complexe en expriment les relations entre les éléments de cet ensemble: reseaux de communication, réseaux routiers, circuits électriques etc.

Dans un graphe, on distingue **les sommets** et les **arêtes** ou **arcs**. Ce sont les éléments de base d'un graphe. Un sommet est un point du graphe, une arête est une liaison entre deux sommets.

## Graphes non orientés

Un graphe non orienté est un graphe dont les arêtes n'ont pas de direction. On peut les représenter par des lignes ou des segments de droites.

Un **graphe fini** $G = (V, E)$ est défini par l'ensemble fin $V = \{v_1, v_2, ..., v_n\}$ dont les éléments sont appelés **sommets**, et par l'ensemble fini $E = \{e_1, e_2, ..., e_m\}$ dont les éléments sont appelés **arêtes**.

![graphe non orienté](/GNO.png)

Si on peut dessiner un graphe 𝐺 dans le plan sans qu’aucune arête n’en coupe une autre (les arêtes ne sont pas forcément rectilignes), on dit que 𝐺 est **planaire**.

![graphe planaire](/planaire.png)

Un graphe est **simple** si au plus une arête relie deux sommets et s’il n’y a pas de boucle sur un sommet.

On peut imaginer des graphes avec une arête qui relie un sommet à lui-même (une boucle), ou plusieurs arêtes reliant les deux mêmes sommets. On appellera ces graphes des **multigraphes**.

Un graphe est **connexe** s’il est possible, à partir de n’importe quel sommet, de rejoindre tous les autres en suivant les arêtes.

Un graphe **non connexe** se décompose en composantes connexes.

![graphe connexe](/connex.png)

Un graphe est **complet** si chaque sommet du graphe est relié directement à tous les autres sommets.

![graphe complet](/complet.png)

Un graphe est **biparti** si ses sommets peuvent être divisés en deux ensembles $X$ et $Y$, de sorte que toutes les arêtes du graphe relient un sommet dans $X$ à un sommet dans $Y$.

![graphe biparti](/biparti.png)

Soit $G = (V, E)$ un graphe. Le graphe $G' = (V,E')$ est un **graphe partiel** de $G$ si $E' \subseteq E$.

Pour un sous-ensemble de sommets $𝐴$ inclus dans $𝑉$, le sous-graphe de $𝐺$ induit par $𝐴$ est le graphe $𝐺′ = (𝐴, 𝐸(𝐴))$ dont l’ensemble des sommets est $𝐴$ et l’ensemble des arêtes $𝐸(𝐴)$ est formé de toutes les arêtes de $𝐺$ ayant leurs deux extrémités dans $𝐴$ . Autrement dit, on obtient $𝐺′$ en enlevant un ou plusieurs sommets au graphe $𝐺$, ainsi que toutes les arêtes incidentes à ces sommets.

On appelle **clique** un sous-graphe complet de 𝐺.

![partiel](/partiel.png)

On appelle **degré du sommet** $𝑣$, et on note $𝒅(𝒗)$, le nombre d’arêtes incidentes à ce sommet. Attention ! Une boucle sur un sommet compte double.

Dans un graphe simple, on peut aussi définir le degré d’un sommet comme étant le nombre de ses voisins (la taille de son voisinage). Dans le multigraphe ci-contre, on a les degrés :

![degré](/degré.png)

Le **degré d’un graphe** est le degré **maximum** de tous ses sommets.
Dans l’exemple ci-dessous, le degré du graphe est 4, à cause du sommet $𝑣_3$.

![degré graphe](/degréG.png)

Un graphe dont tous les sommets ont le même degré est dit régulier. Si le degré commun est $𝑘$, alors on dit que le graphe est **𝒌-régulier**.

![régulier](/régulier.png)

> Théorème : La somme des degrés des sommets d’un graphe est égale à deux fois le nombre d’arêtes.

Une suite décroissante (au sens large) d’entiers est **graphique** s’il existe un **graphe simple** dont les degrés des sommets correspondent à cette suite.

Une **chaîne** dans $𝐺$, est une suite ayant pour éléments alternativement des sommets et des arêtes, commençant et se terminant par un sommet, et telle que chaque arête est encadrée par ses extrémités.
On dira que la **chaîne** a pour **longueur** le **nombre d’arêtes de la chaîne**.
Le graphe ci-dessous contient, entre autres, les chaînes :

![chaîne](/chaine.png)

- On appelle **distance** entre deux sommets la longueur de la plus petite chaîne les reliant.
- On appelle **diamètre** d’un graphe la plus longue des distances entre deux sommets
- Une **chaîne** est élémentaire si chaque sommet y apparaît au plus une fois.
- Une chaîne est **simple** si chaque arête apparaît au plus une fois.
- Une chaîne dont les sommets de départ et de fin sont les mêmes est appelée **chaîne fermée**.
- Une chaîne fermée simple est appelée **cycle**.

> Théorème : Pour un graphe $𝐺$ ayant $𝒎$ arêtes, $𝒏$ sommets et $𝒑$ composantes connexes, on définit :
> $$
> v(G) = m - n + p
> $$
> $v(G)$ est appelé le nombre **cyclomatique**. Prononcer « nu de G ».
>
> On a $v(G) > 0$ pour tout graphe $G$.
> $v(G) = 0$ si et seulement si $G$ est sans cycle.

On appelle **cycle eulérien** d’un graphe $𝐺$ un cycle passant **une et une seule fois** par **chacune des arêtes de** $𝐺$. Un graphe est dit eulérien s’il possède un cycle eulérien.

On appelle **chaîne eulérienne** d'un graphe $𝐺$ une chaîne passant **une et une seule fois** par **chacune des arêtes de** $𝐺$. Un graphe est dit semi-eulérien s’il possède une chaîne eulérienne.

Un graphe ne possédant que des chaînes eulériennes est **semi-eulérien**.

Plus simplement, on peut dire qu’un graphe est eulérien (ou semi-eulérien) s’il est possible de dessiner le graphe sans lever le crayon et sans passer deux fois sur la même arête.

> Un graphe est eulérien s’il est connexe et si tous ses sommets sont de degré pair.
> 
> Il est semi-eulérien si tous ses sommets sauf deux sont de degré pair; les chaînes eulériennes du graphe auront alors ces deux sommets pour extrémités.

On appelle **cycle hamiltonien** d’un graphe $𝐺$ un cycle passant **une et une seule fois** par chacun des sommets de $𝐺$. Un graphe est dit **hamiltonien** s’il possède un cycle hamiltonien.

On appelle **chaîne hamiltonienne** d’un graphe $𝐺$ une chaîne passant **une et une seule fois** par chacun des sommets de $𝐺$.

Contrairement aux graphes eulériens, il n’existe pas de caractérisation simple des graphes hamiltoniens. On peut énoncer quelques propriétés et conditions suffisantes :
- Un graphe possédant un sommet de degré 1 ne peut pas être hamiltonien 
- Si un sommet dans un graphe est de degré 2, alors les deux arêtes incidentes à ce sommet doivent faire partie du cycle hamiltonien 
- Les graphes complets $𝐾_𝑛$ sont hamiltoniens

Soit $𝐺$ un **graphe simple**. Un **couplage** $𝑪$ de $𝑮$ est un **sous-graphe partiel 1-régulier** de $𝐺$. On peut aussi dire qu’un **couplage** est un ensemble d’arêtes deux à deux non-adjacentes.

Un sommet $𝑣$ est **saturé** par un couplage $𝐶$ si $𝑣$ est l’extrémité d’une arête de $𝐶$. Dans le cas contraire, $𝑣$ est **insaturé**.

Un **couplage maximum** est un couplage contenant le plus grand nombre possible d’arêtes. Un graphe peut posséder plusieurs couplages maximum.

![couplage](/couplage.png)

Un **couplage parfait** est un couplage où **chaque sommet du graphe est saturé**.

![couplage parfait](/couplageP.png)

Si $𝐶$ est un couplage de $𝐺$, on appelle **chaîne alternée** une chaîne élémentaire de $𝐺$ dont les arêtes sont alternativement dans $𝐶$ et hors de $𝐶$.

Une chaîne alternée est dite **augmentante** si elle relie deux sommets insaturés. Ci-dessus, à gauche, la chaîne 1-4-3-6 est augmentante.

On dit qu’un graphe est **planaire** si on peut le dessiner dans le plan de sorte que ses arêtes ne se croisent pas. Rappelons que les arêtes ne sont pas forcément rectilignes.

Une **carte**, ou **graphe planaire topologique**, est une représentation particulière d’un multigraphe planaire fini.

![carte](/carte.png)

> Théorème : La somme des degrés des régions d’une carte connexe est égale à deux fois le nombre d’arêtes.

> Théorème (Euler, 1752) : Euler a établi une formule célèbre qui relie le nombre de sommets 𝑆, le nombre d’arêtes 𝐴 et le nombre de régions 𝑅 d’une carte connexe :
> $$
> S - A + R = 2
> $$

![euler](/euler.png)

### Représentations non-graphiques d’un graphe

Un graphe peut être représenté de manière non-graphique par une **matrice d’adjacence** ou une **liste d’adjacence**. Une matrice $(n \times m)$ est un tableau de $n$ lignes et $m$ colonnes.Dans une matrice d’adjacences, les lignes et les colonnes représentent les sommets du graphe. Un « 𝟏 » à la position $(i, j)$ signifie que le sommet $i$ est adjacent au sommet $j$.

![matrice](/matrice.png)

On peut aussi représenter un graphe simple en donnant pour chacun de ses sommets **la liste des sommets** auxquels il est adjacent. Ce sont les listes d’adjacences.

![liste](/liste.png)

On appelle **arbre** tout graphe connexe sans cycle.

Un graphe sans cycle mais non connexe est appelé une **forêt**.

Une **feuille** ou **sommet pendant** est un sommet de degré 1.

![arbre](/arbre.png)