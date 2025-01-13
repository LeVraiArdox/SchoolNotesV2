---
title: "Dérivation"
tag: "Maths"
description: "La dérivation est une opération mathématique qui permet de calculer la pente d\\'une courbe."
heroImage: '/meths.png'
---

# Dérivation

## Coeficient directeur d'une droite

Le coefficient directeur d'une droite est le nombre qui permet de déterminer la pente de la droite. Dans $ax+b$, $a$ est le coefficient directeur.
<br />
Par exemple, pour la droite $y = 2x + 3$, le coefficient directeur est 2: la droite monte de 2 en y pour 1 en x.
![2x+1](/2x+1.png)
<br />
Pour calculer le coefficient directeur d'une droite, on utilise la formule suivante :

$$
\frac{y_2 - y_1}{x_2 - x_1}
$$

<hr />

## Sens de variation d'une droite

Le sens de variation d'une droite est la direction dans laquelle la droite évolue. Pour déterminer le sens de variation d'une droite, on regarde le coefficient directeur de la droite:

- Si le coefficient directeur est positif, la droite monte.
- Si le coefficient directeur est négatif, la droite descend.

<hr />

## Tengente à une courbe

La tangente à une courbe est une droite qui touche la courbe en un seul point.
<br />
L'équation de la tangente à une courbe en un point $x_0$ est donnée par la formule suivante:

$$
y = f'(a)(x - a) + f(a)
$$

<hr />

## coefficient directeur d'une tangente

Le coefficient directeur d'une tangente est égal à la dérivée de la fonction en ce point.
<br />
Pour calculer le coefficient directeur d'une tangente, par exemple pour la fonction $f(x) = x^2$ en $x = 2$ et $y = 4$, on utilise la formule suivante:

$$
P_1 = (1.9, 3.61) \quad P_2 = (2.1, 4.41)
$$

$$
a = \frac{y_2 - y_1}{x_2 - x_1} = \frac{4.41 - 3.61}{2.1 - 1.9} = 4
$$

$$
t: y = 4x - 4
$$

$$
4 = 4*2 - 4
$$

$$
b = 4 - 8 = -4
$$

$$
f(x) = x^n
$$

$$
f'(x) = nx^{n-1}
$$

$$
f(x) = x^2
$$

$$
f'(x) = 2x
$$

$$
a = f'(2) = 2*2 = 4
$$

<hr />

## Dérivée d'une fonction

La dérivée d'une fonction est la fonction qui donne le coefficient directeur de la tangente à la courbe de la fonction en chaque point.
<br />
Pour calculer la dérivée d'une fonction, on utilise la formule suivante:

$$
f'(x) = \lim_{x_1 \to x_0} \frac{y_1 - y_0}{x_1 - x_0} = \frac{dy}{dx} = \frac{d}{dx}f(x)
$$

<br />
Dérivée des fonctions usuelles:

| Fonction | Dérivée |
|----------|---------|
| $x$      | 1       |
| $x^2$    | $2x$    |
| $x^3$    | $3x^2$  |
| $\sqrt{x}$ | $\frac{1}{2\sqrt{x}}$ |
| $\frac{1}{x}$ | $-\frac{1}{x^2}$ |
| $x^n$    | $nx^{n-1}$ |

<br />
Nous, on va surtout retenir la dernière.
<br />

<hr />

## Les opérations sur les dérivées

Soient $u$ et $v$ deux fonctions dérivables, et $k$ une constante. Les règles de dérivation sont les suivantes:
| Fonction | Dérivée |
|----------|---------|
| $u + v$ | $u' + v'$ |
| $u - v$ | $u' - v'$ |
| $ku$ | $ku'$ |
| $u \times v$ | $u'v + uv'$ |
| $\frac{u}{v}$ | $\frac{u'v - uv'}{v^2}$ |
| $u^n$ | $nu^{n-1}u'$ |
| $e^u$ | $e^uu'$ |

<hr />

## Application de la dérivation

Soit $f(x) = \frac{x^3}{3} - x^2 + 3$. Montrer le tableau de variation de $f$.

$$
f'(x) = x^2 - 2x - 3 = 0
$$

$$
\delta = b^2 - 4ac = 4 + 12 = 16
$$

$$
x_1 = \frac{-b - \sqrt{\delta}}{2a} = \frac{2 - 4}{2} = -1
$$

$$
x_2 = \frac{-b + \sqrt{\delta}}{2a} = \frac{2 + 4}{2} = 3
$$

$$
f(-1) = \frac{(-1)^3}{3} - (-1)^2 + 3 = -\frac{1}{3} - 1 + 3 = \frac{5}{3} = 1.67
$$

$$
f(3) = \frac{3^3}{3} - 3^2 + 3 = 3^2 - 9 + 3 = 9 - 9 + 3 = 3
$$

$$
f'(x) = (x+1)(x-3)
$$

$$
\begin{array}{
    |c|c|c|c|c|
}
\hline
x & -\infty & -1 & 3 & +\infty \\
\hline
f'(x) & - & 0 & + & + \\
\hline
f(x) & \nearrow & 1.67 & \searrow & 3 \\
\hline
\end{array}
$$

<hr />
