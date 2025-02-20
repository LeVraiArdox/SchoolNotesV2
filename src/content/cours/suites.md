---
title: 'Les suites'
tag: 'Maths'
description: 'Cours sur les suites.'
heroImage: '/meths.png'
---

# Les suites

Une **suite numérique** $(u_n)_{n \in \mathbb{N}}$ est une liste de nombres réels $u_0, u_1, u_2, \ldots$. Chaque nombre de la suite est appelé un terme de la suite.

<br />

Soit la suite $(u_n)$ pour tout entier naturel $n$ superieur à un entier naturel
$n_0$, on a: 
- $(u_n)$ est **croissante** si pour tout $n \geq n_0$, $u_{n + 1} \geq u_n$. 
- $(u_n)$ est **décroissante** si pour tout $n \geq n_0$, $u_{n + 1} \leq u_n$. 
- $(u_n)$ est **constante** si pour tout $n \geq n_0$, $u_{n + 1} = u_n$.

Une suite est **monotone** si elle est croissante ou décroissantete.

<br />

**Exemple**: On donne la suite $(u_n)$ définie par $u_n = \frac{1}{n+1}$ pour tout entier naturel $n$. Démontrer que la suite $(u_n)$ est décroissante.
<br />

**Solution**: On a $u_{n+1} - u_n = \frac{1}{n+2} - \frac{1}{n+1} = \frac{n+1 - (n+2)}{(n+1)(n+2)} = \frac{-1}{(n+1)(n+2)} < 0$ pour tout $n \in \mathbb{N}$. Donc la suite $(u_n)$ est décroissante.
<br />

<hr />

Une **suite arithmétique** est une suite numérique dans laquelle la différence entre deux termes consécutifs est constante. Cette différence est appelée la raison de la suite arithmétique.

<br />

**Propriété**: Pour tout $n \in \mathbb{N}$, $u_n = u_0 + nr$ où $r$ est la raison de la suite arithmétique.

$$(u_n)_{n \in \mathbb{N}} = u_0, u_1, u_2, \ldots$$

$$(u_{n+1} - u_n) = r$$

$$(u_{n+1} = u_n + r)$$

<br />

**Exemple**: Somme: $S=u_0 + u_1 + u_2 + \ldots + u_n$

- $S = u_0 + (u_0 + r) + (u_0 + 2r) + \ldots + (u_0 + nr)$
- $S = (n+1)u_0 + 1 + r + 2r + \ldots + nr$
- $S = (n+1)u_0 + 1 + r(1 + 2 + \ldots + n)$
- $S = \frac{n}{2} \cdot (u_0 + u_n) = \frac{n}{2} \cdot (2u_0 + nr)$
  <br />
  **Exemple 2**: Considérons la suite arithmétique $(u_n)$ tel que $u_5 = 7$ et $u_
  {9} = 19$.
- Déterminer la raison de la suite.
  - $u_5 = u_0 + 5r = 7$
  - $u_9 = u_0 + 9r = 19$
  - $u_0 + 5r = 7$ => $u_0 = 7 - 5r$
  - $u_0 + 9r = 19$
  - $(7 - 5r) + 9r = 19$
  - $7 + 4r = 19$
  - $4r = 12$
  - $r = 3$
- Exprimer $u_n$ en fonction de $n$.
  - $u_n = u_0 + nr$
  - $u_n = (7 - 5r) + 3n$
  - $u_n = 7 - 15 + 3n$
  - $u_n = -8 + 3n$
    <br />
    **Exemple 3**: Si on a un salaire de base de 30.000€ par an et une augmentation
    de 500€ par an, quel sera le salaire après 10 ans?
- $u_n = 30000 + 500n$
- $u_{10} = 30000 + 500 \cdot 10 = 30000 + 5000 = 35000$
  <br />
  <hr />

Une **suite géométrique** est une suite numérique dans laquelle le rapport entre deux termes consécutifs est constant. Ce rapport est appelé la raison de la suite géométrique.

$$(u_n)_{n \in \mathbb{N}} = u_0, u_1, u_2, \ldots$$
<br />

**Propriété**: Pour tout $n \in \mathbb{N}$, $u_n = u_0 \cdot q^n$ où $q$ est la raison de la suite géométrique.

Pour trouver la raison de la suite géométrique, on peut utiliser la formule suivante:
$$q = \frac{u_{n+1}}{u_n}$$
