---
title: 'Les Matrices'
tag: 'Maths'
description: 'Cours sur les matrices.'
heroImage: '/meths.png'
---

Une **matrice** est un tableau rectangulaire de nombres, de lettres ou de symboles disposés en lignes et en colonnes. Les éléments d'une matrice sont appelés des **coefficients**. Une matrice est définie par le nombre de lignes et de colonnes qu'elle contient. Par exemple, une matrice $2 \times 3$ a 2 lignes et 3 colonnes:

$$
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
$$
<br />
En informatique, les matrices sont souvent utilisées pour représenter des données tabulaires, des images, des graphiques, des réseaux de neurones, etc.

Par exemple, une image est une grande matrice de pixels, où chaque pixel est un nombre représentant une couleur. La résolution de l'image (nombre de pixels en largeur et en hauteur) est définie par le nombre de lignes et de colonnes de la matrice. Par exemple, une image en 1920x1080 pixels est représentée par une matrice $1920 \times 1080$ (je vais pas vous la montrer pour le bien de cette page et de vos yeux).

Si on désigne par $a_{ij}$ l'élément de la ligne $i$ et de la colonne $j$ d'une matrice $A$, alors on la notera $A = (a_{ij})$:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

- Une matrice carrée est une matrice qui a le même nombre de lignes et de colonnes. Par exemple, une matrice $3 \times 3$ est une matrice carrée.

$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{pmatrix}
$$

- Une matrice ligne est une matrice qui a une seule ligne. Par exemple, une matrice ligne $1 \times 3$ est $\begin{pmatrix} 1 & 2 & 3 \end{pmatrix}$.

- Une matrice colonne est une matrice qui a une seule colonne. Par exemple, une matrice colonne $3 \times 1$ est $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$.

Pour une matrice carrée, on appelle diagonale principale la diagonale qui relie le coin supérieur gauche au coin inférieur droit:

$$
A = \begin{pmatrix}
\color{red}{1} & 2 & 3 \\
4 & \color{red}{5} & 6 \\
7 & 8 & \color{red}{9}
\end{pmatrix}
$$

La trace d'une matrice carrée est la somme des éléments de sa diagonale principale. Par exemple, la trace de la matrice $A$ est $1 + 5 + 9 = \color{red}{15}$.

### Transposition de matrices

Une Matrice transposée est une matrice obtenue en échangeant les lignes et les colonnes d'une matrice donnée. Par exemple:

$$
A = \begin{pmatrix}
3 & 1 \\
-2 & 4
\end{pmatrix}
\quad
B = \begin{pmatrix}
1 & 3 & 2 \\
-2 & 0 & 4
\end{pmatrix}
\quad
A^T = \begin{pmatrix}
3 & -2 \\
1 & 4
\end{pmatrix}
\quad
B^T = \begin{pmatrix}
1 & -2 \\
3 & 0 \\
2 & 4
\end{pmatrix}
$$

C'est par exemple ce qui se passe lorsque vous réorientez une image de 90°, vous transposez la matrice de pixels.

<br />
<hr />

Exercice: On considère la matrice $A = \begin{pmatrix} 1 & -6 & 8 & 4 \\ 0 & 7 & 3 & 11 \\ 22 & 17 & 0 & 8 \end{pmatrix}$.
- Donner le format de $A$: $\color{red}{3 \times 4}$.
- Donner la valeur de chacun des éléments: $a_{14}$, $a_{23}$, $a_{33}$, $a_{32}$: $\color{red}{4}$, $\color{red}{3}$, $\color{red}{0}$, $\color{red}{17}$.
- Ecrire la matrice transposée de $A$: $A^T = \begin{pmatrix} 1 & 0 & 22 \\ -6 & 7 & 17 \\ 8 & 3 & 0 \\ 4 & 11 & 8 \end{pmatrix}$.

<hr />

### Operations de matrices

La somme de deux matrices $A$ et $B$ de même format $m \times n$ est une matrice $C = A + B$ de même format $m \times n$ où chaque élément $c_{ij}$ est la somme des éléments correspondants $a_{ij}$ et $b_{ij}$:

$$
A = \begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
\quad
B = \begin{pmatrix}
5 & 6 \\
7 & 8
\end{pmatrix}
\quad
C = A + B = \begin{pmatrix}
1+5 & 2+6 \\
3+7 & 4+8
\end{pmatrix} = \begin{pmatrix}
6 & 8 \\
10 & 12
\end{pmatrix}
$$

Pour multiplier une matrice par un scalaire (un nombre), on multiplie chaque élément de la matrice par ce nombre:

$$
2 \times \begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix} = \begin{pmatrix}
2 \times 1 & 2 \times 2 \\
2 \times 3 & 2 \times 4
\end{pmatrix} = \begin{pmatrix}
2 & 4 \\
6 & 8
\end{pmatrix}
$$

<br />
<hr />

### Propriétés des matrices
Soient A, B et C trois matrices de même dimension et $\lambda$ un scalaire. Les propriétés suivantes sont vérifiées:
- Commutativité: $A + B = B + A$
- Associativité: $(A + B) + C = A + (B + C)$
- Distributivité: $\lambda(A + B) = \lambda A + \lambda B$
- Distributivité: $(\lambda + \mu)A = \lambda A + \mu A$
- Associativité: $\lambda(\mu A) = (\lambda \mu)A$

