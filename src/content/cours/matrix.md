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

### Multiplier des matrices

Si on a une matrice $A = \begin{pmatrix} a & b & c \end{pmatrix}$ et une matrice $B = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$, le produit de $A$ et $B$ est une matrice $C = A \times B$ de format $1 \times 1$:

Si $A = \begin{pmatrix} \color{red}{1} & 2 & 3 \end{pmatrix}$ et $B = \begin{pmatrix} \color{red}{4} \\ 5 \\ 6 \end{pmatrix}$, alors $C = A \times B = \color{red}{1} \times \color{red}{4} \color{none}{+} 2 \times 5 + 3 \times 6 = 32$.

<br />

Si $A = \begin{pmatrix} \color{red}{2} & \color{red}{4} \\ 1 & 0 \end{pmatrix}$ et $B = \begin{pmatrix} \color{red}{-1} & 0 & 2 \\ \color{red}{-2} & 1 & 0 \end{pmatrix}$, alors $C = A \times B = \begin{pmatrix} \color{red}{2} \times \color{red}{-1} + \color{red}{4} \times \color{red}{-2} & 2 \times 0 + 4 \times 1 & 2 \times 2 + 4 \times 0 \\ 1 \times -1 + 0 \times -2 & 1 \times 0 + 0 \times 1 & 1 \times 2 + 0 \times 0 \end{pmatrix} = \begin{pmatrix} -10 & 4 & 4 \\ -1 & 0 & 2 \end{pmatrix}$.

<br />

**Attention**: On ne peut pas multiplier $A$ et $B$ si le nombre de colonnes de $A$ n'est pas égal au nombre de lignes de $B$. Par exemple, on ne peut pas multiplier une matrice $2 \times \color{red}{3}$ par une matrice $\color{red}{4} \color{none}{\times} \color{none}{2}$ car le nombre de colonnes de $A$ n'est pas égal au nombre de lignes de $B$ (ouais c'est pas clair, mais c'est comme ça).

<br />
<hr />

### Matrice inverse

La matrice inverse d'une matrice carrée $A$ est une matrice $A^{-1}$ telle que $A \times A^{-1} = A^{-1} \times A = I$ où $I$ est la matrice identité. La matrice identité est une matrice carrée où tous les éléments sont nuls sauf ceux de la diagonale principale qui sont égaux à 1:

$$
I = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

<br />

C'est pas hyper clair, mais en gros, si on a une matrice $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, alors sa matrice inverse $A^{-1}$ est $\begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix}$ car $A \times A^{-1} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \times \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

Bon, la non plus c'est pas ouf comme explication. Donc pour trouver l'inverse de $5$, on fait $5 \times \cdots = 1$, donc l'inverse de $5$ est $\frac{1}{5}$ car $5 \times \frac{1}{5} = 1$. Et on fait ça avec tous les termes de la matrice de base. Voilà.

C'est bien cool de faire des matrices inverses, mais il faut savoir quand est ce que on peut les faires. Déja on peut le faire que pour les matrices carrées. Ensuite, on peut le faire que pour les matrices carrées qui sont inversibles. Une matrice est inversible si son déterminant est différent de 0. Le déterminant d'une matrice est une valeur qui peut être calculée à partir de ses éléments. Le determinant doit être différent de 0 pour que la matrice soit inversible:

$$
A = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\quad
\text{det}(A) = ad - bc \neq 0
$$

<br />

Mais bon, tout ça c'est bien chiant, donc il existe une formule!
Je vous vois venir: *"Ah bah pourqoi t'as pas commencé par ça!"*... Eh beh ta geule.

La formule pour calculer l'inverse d'une matrice $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ est:

$$
A^{-1} = \frac{1}{\text{det}(A)} \times \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

C'est chiant aussi mais moins que la methode "traditionnelle". Malhereusement, dans la vrai vie, on utilise quasiment jamais des matrices $2 \times 2$, donc elle est bien cool mais on s'en fout un peu (sauf pour l'exam).

Btw, le determinant peut s'écrire sous forme de valeur absolue ($|A|$). Donc si $|A| \neq 0$, alors $A$ est inversible.

<br />

Pour les matrices $3 \times 3$, c'est un peu plus compliqué. La formule pour calculer le determinant d'une matrice $3 \times 3$ est:

$$
A = \begin{pmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{pmatrix}
\quad
\text{det}(A) = a(ei - fh) - b(di - fg) + c(dh - eg)
$$

Ouais pas ouf. Mais bon, on peut utiliser la méthode Laplace: on calcule le déterminant en fonction des déterminants de matrices plus petites. C'est un peu chiant mais c'est plus simple que la formule précédente:

$$
A = \begin{pmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{pmatrix}
\quad
\text{det}(A) = a \times \text{det}\begin{pmatrix} e & f \\ h & i \end{pmatrix} - b \times \text{det}\begin{pmatrix} d & f \\ g & i \end{pmatrix} + c \times \text{det}\begin{pmatrix} d & e \\ g & h \end{pmatrix}
$$

![Laplace](/MatrixLaplace.png)

Raah moi qui commencait a aimer les matrices...