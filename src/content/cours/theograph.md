---
title: "Théorie des graphes"
tag: "Maths"
description: "Cours de théorie des graphes"
heroImage: "/meths.png"
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
>
> $$
> v(G) = m - n + p
> $$
>
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
>
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

**Codage de Prüfer** : Soit $T$ un arbre étiqueté à $n$ sommets. On peut associer à $T$ une suite de $n-2$ entiers entre 1 et $n$ de la manière suivante :

1. On supprime les feuilles de $T$ une à une, en les ajoutant à la suite.
2. On répète l’opération jusqu’à ce qu’il ne reste plus que deux sommets dans $T$.
3. On ajoute alors l’unique arête reliant ces deux sommets à la suite.
4. La suite obtenue est le codage de Prüfer de $T$.

![prufer](/prufer1.png)

On peut également effectuer un décodage de Prüfer pour retrouver l’arbre étiqueté à partir de la suite de Prüfer.

![prufer](/prufer2.png)

Le **nombre chromatique** d’un graphe est le nombre minimum de couleurs nécessaires pour colorier les sommets de telle sorte que deux sommets adjacents n’aient pas la même couleur.

Soit $G$ un graphe. Un sous ensemble $𝑆$ de $V$ est un **stable** s'il ne comprend que des sommets non adjacents deux à deux. Dans le graphe ci-dessous, $v_1$ et $v_2$ forment un stable. $v_2$ et $v_4$ aussi.

Le cardinal du plus grand stable est le **nombre de stabilité** de $G$. On le note $𝛼(G)$. Dans le graphe ci dessous, on a $a(g) = 2$

![chromatique](/chromatique.png)

> Le nombre chromatique $y(G)$:
>
> $$
> \omega(g) \leq y(g) \leq r + 1
> $$
>
> où $r$ est le degré maximum du graphe et $\omega(g)$ est l'ordre de sa plus grande clique

<hr />

## Graphes orientés

En donnant un sens aux arêtes d’un graphe, on obtient un **digraphe** (ou **graphe orienté**). Le mot « digraphe » est la contraction de l’expression anglaise «
directed graph ».

Un **digraphe fini** $G = (V, E)$ est défini par l’ensemble fini $V = {v_1, v_2, ..., v_n}$ dont les éléments sont appelés **sommets**, et par l’ensemble fini $E = {e_1, e_2, ..., e_m}$ dont les éléments sont appelés **arcs**.

Un arc $e$ de l’ensemble $E$ est défini par une paire ordonnée de sommets. Lorsque $e = (u, v)$, on dit que l’arc $e$ va de $u$ a $v$ et que $u$ est l’origine de $e$ et $v$ l’extrémité de $e$.

![digraphe](/diagraphe.png)

Soit $𝑣$ un sommet d’un graphe orienté.

On note $d^+(𝑣)$ le **degré exterieur** du sommet $𝑣$, c’est-à-dire le nombre d’arcs ayant 𝑣 comme extrémité **initiale**.

On note $d^-(𝑣)$ le **degré intérieur** du sommet $𝑣$, c’est-à-dire le nombre d’arcs ayant 𝑣 comme extrémité **finale**.

On définit le degré: $d(𝑣) = d^+(𝑣) + d^-(𝑣)$

![degré digraphe](/degréD.png)

Un **chemin** conduisant du sommet $𝑎$ au sommet $𝑏$ est une suite ayant pour éléments alternativement des sommets et des arcs, commençant et se terminant par un sommet, et telle que chaque arc est encadré à gauche par son sommet origine et à droite par son sommet destination. On ne peut donc pas prendre les arc à rebours.

Sur le digraphe ci-dessous, on peut voir par exemple le chemin $(v_3, e_2, v_2, e_1, v_1)$.

![chemin digraphe](/cheminD.png)

Par convention, tout chemin comporte au moins un arc.

On appelle **distance** entre deux sommets d’un digraphe la longueur du plus petit chemin les reliant. S’il n’existe pas de chemin entre les sommets $x$ et $y$, on pose $d(x, y) = \infty$.

Un **circuit** est un chemin dont les sommets de départ et de fin sont les mêmes.

Le digraphe ci-dessus ne contient pas de circuit.

Les notions de chemins et de circuits sont analogues à celles des chaînes et des cycles pour les graphes non orientés.

On peut représenter un digraphe par une **matrice d’adjacences**.

Dans une matrice d’adjacences, les lignes et les colonnes représentent les sommets du graphe. Un « 1 » à la position $(i, j)$ signifie qu’il existe un arc allant de $i$ à $j$.

![matrice digraphe](/matriceD.png)

On peut aussi représenter un digraphe en donnant pour chacun de ses sommets **la liste** des sommets qu’on peut atteindre directement en suivant un arc (dans le sens de la flèche). Par exemple, pour le même graph qu'au dessus:

- 1: 2, 4, 6
- 2: 4, 5
- 3: 4
- 4: 5
- 5: -
- 6: 2

> Le digraphe 𝐺 est **sans circuit** si et seulement si on peut attribuer un nombre $r(v)$ appelé le **rang de 𝒗**, à chaque sommet $v$ de manière que pour tout arc $(u, v)$ de $G$ on ait $r(u) < r(v)$

**L'algorithme de Dijkstra** permet de trouver le plus court chemin entre deux sommets d'un graphe (orienté ou non orienté).

Dans l'exemple du graphe ci-dessous, on va rechercher le chemin le plus court menant de M à S.

![dijkstra](/dijkstra.png)

On construit un tableau ayant pour colonnes chacun des sommets du graphe. On ajoute à gauche une colonne qui recensera les sommets choisis à chaque étape. Puisque l'on part du sommet M, on inscrit, sur la première ligne intitulée « **Départ** », $0_m$ dans la colonne M et $∞$ dans les autres colonnes.

| Départ | E        | L        | M     | N        | S        | T        |
| ------ | -------- | -------- | ----- | -------- | -------- | -------- |
| M      | $\infty$ | $\infty$ | $0_m$ | $\infty$ | $\infty$ | $\infty$ |

À partir de M, on voit sur le graphe que l'on peut rejoindre E, L et N en respectivement 10, 7 et 4 minutes.
Ces durées sont les durées les plus courtes ; elles sont inférieures au durées inscrites sur la ligne précédente qui étaient «∞».

| Départ | E        | L        | M     | N        | S        | T        |
| ------ | -------- | -------- | ----- | -------- | -------- | -------- |
| Départ | $\infty$ | $\infty$ | $0_m$ | $\infty$ | $\infty$ | $\infty$ |
| M (0)  | $10_m$   | $7_m$    | $0_m$ | $4_m$    | $\infty$ | $\infty$ |

On sélectionne le plus petit résultat de la dernière ligne. Ici, c'est « $4_m$ » qui correspond au chemin menant au sommet N en 4 minutes.

- On met en évidence cette sélection.
- On inscrit le sommet retenu et la durée correspondante dans la première colonne : N (4).
- On désactive les cases situées en dessous de notre sélection. On a trouvé le trajet le plus court menant à N ; il dure 4 minutes.

| Départ | E        | L        | M     | N        | S        | T        |
| ------ | -------- | -------- | ----- | -------- | -------- | -------- |
| Départ | $\infty$ | $\infty$ | $0_m$ | $\infty$ | $\infty$ | $\infty$ |
| M (0)  | $10_m$   | $7_m$    | X     | $4_m$    | $\infty$ | $\infty$ |
| N (4)  |          |          | X     | X        |          |          |

À partir de N, on peut rejoindre L et S (on ne se préoccupe plus de M qui a été « désactivé »).

- Si l'on rejoint L : On mettra 2 minutes pour aller de N à L et 4 minutes pour aller de M à N, soit au total 6 minutes. On indique donc 𝟔𝑵 dans la colonne L. Le N situé en indice signifie que l'on vient du sommet N.
- Si l'on rejoint S : On mettra 8 minutes pour aller de N à S et 4 minutes pour aller de M à N, soit au total 12 minutes. On indique donc 𝟏𝟐𝑵 dans la colonne S.

| Départ | E        | L        | M     | N        | S        | T        |
| ------ | -------- | -------- | ----- | -------- | -------- | -------- |
| Départ | $\infty$ | $\infty$ | $0_m$ | $\infty$ | $\infty$ | $\infty$ |
| M (0)  | $10_m$   | $7_m$    | X     | $4_m$    | $\infty$ | $\infty$ |
| N (4)  | $10_m$   | $6_N$    | X     | X        | $12_N$   | $\infty$ |

On sélectionne le plus petit résultat de la dernière ligne. Ici, c'est « $6_N$ » qui correspond au chemin menant au sommet L en 6 minutes.

- On met en évidence cette sélection.
- On inscrit le sommet retenu et la durée correspondante dans la première colonne : L (6).
- On désactive les cases situées en dessous de notre sélection. On a trouvé le trajet le plus court menant à L ; il dure 6 minutes.

| Départ | E        | L        | M     | N        | S        | T        |
| ------ | -------- | -------- | ----- | -------- | -------- | -------- |
| Départ | $\infty$ | $\infty$ | $0_m$ | $\infty$ | $\infty$ | $\infty$ |
| M (0)  | $10_m$   | $7_m$    | X     | $4_m$    | $\infty$ | $\infty$ |
| N (4)  | $10_m$   | $6_N$    | X     | X        | $12_N$   | $\infty$ |
| L (6)  |          | X        | X     | X        |          |          |

À partir de L, on peut rejoindre E et S (on ne se préoccupe plus de M ni de N qui ont été « désactivés »).

- Si l'on rejoint E : On mettra 14 minutes au total (8 minutes de L à E + 6 minutes de M à L). Ce trajet N'EST PAS plus rapide que le précédent qui durait 10 minutes; on recopie le contenu précédent 𝟏𝟎𝑴 dans la colonne E
- Si l'on rejoint S : On mettra 11 minutes au total (5 minutes de L à S + 6 minutes de M à L). Ce trajet est plus rapide que le précédent qui durait 12 minutes. On indique donc 𝟏𝟏𝑳 dans la colonne S

| Départ | E        | L        | M     | N        | S        | T        |
| ------ | -------- | -------- | ----- | -------- | -------- | -------- |
| Départ | $\infty$ | $\infty$ | $0_m$ | $\infty$ | $\infty$ | $\infty$ |
| M (0)  | $10_m$   | $7_m$    | X     | $4_m$    | $\infty$ | $\infty$ |
| N (4)  | $10_m$   | $6_N$    | X     | X        | $12_N$   | $\infty$ |
| L (6)  | $10_m$   | X        | X     | X        | $11_L$   | $\infty$ |

On sélectionne le plus petit résultat. Ici, c'est « $10_m$ » qui correspond au chemin menant au sommet E en 10 minutes.

| Départ | E        | L        | M     | N        | S        | T        |
| ------ | -------- | -------- | ----- | -------- | -------- | -------- |
| Départ | $\infty$ | $\infty$ | $0_m$ | $\infty$ | $\infty$ | $\infty$ |
| M (0)  | $10_m$   | $7_m$    | X     | $4_m$    | $\infty$ | $\infty$ |
| N (4)  | $10_m$   | $6_N$    | X     | X        | $12_N$   | $\infty$ |
| L (6)  | $10_m$   | X        | X     | X        | $11_L$   | $\infty$ |
| E (10) | X        | X        | X     | X        |          |          |

On sélectionne le plus petit résultat. C'est « $11_L$ » qui correspond au chemin menant au sommet S en 11 minutes. **On a trouvé le trajet le plus court** menant à S : il dure 11 minutes.

| Départ | E        | L        | M     | N        | S        | T        |
| ------ | -------- | -------- | ----- | -------- | -------- | -------- |
| Départ | $\infty$ | $\infty$ | $0_m$ | $\infty$ | $\infty$ | $\infty$ |
| M (0)  | $10_m$   | $7_m$    | X     | $4_m$    | $\infty$ | $\infty$ |
| N (4)  | $10_m$   | $6_N$    | X     | X        | $12_N$   | $\infty$ |
| L (6)  | $10_m$   | X        | X     | X        | $11_L$   | $\infty$ |
| E (10) | X        | X        | X     | X        | $11_L$   | $14_E$   |

Il reste toutefois à reconstituer le trajet qui correspond à cette durée de
11 minutes.

- On part de notre point d'arrivée : S
- On recherche la cellule marquée en rouge de la colonne S ; elle contient $11_L$. On note la lettre écrite en indice : L.
- On recherche la cellule marquée en rouge de la colonne L ; elle contient $6_N$. On note la lettre écrite en indice : N.
- On recherche la cellule marquée en rouge de la colonne N ; elle contient $4_m$. On note la lettre écrite en indice : M.
- On est arrivé à notre point de départ M après être passé par N et L et S (liste obtenue en listant les sommets en ordre inverse).

Le trajet optimal est donc **M - N - L - S**.