---
title: "Ensembles"
tag: "Maths"
description: "Cours sur les ensembles en mathématiques."
heroImage: "/meths.png"
---

Un ensemble dest une collection de nombres ou d'objets distincts. Chaque objet est appelé un **élément** de l'ensemble. Les éléments d'un ensemble peuvent être de différents types, tels que des nombres, des lettres, des fonctions, des ensembles, ou encore des objets plus complexes. L'ensemble qui ne contient aucun élément est appelé l'**ensemble vide**, et est noté $\emptyset$.

Un ensemble est défini par sa **propriété d'appartenance**, qui permet de déterminer si un objet donné fait partie de l'ensemble ou non. On utilise généralement la notation $\in$ pour indiquer l'appartenance à un ensemble. Par exemple, si $x$ est un élément de l'ensemble $A$, on écrit $x \in A$. Si $x$ n'est pas un élément de $A$, on écrit $x \notin A$.

Un ensemble $E$ peut être défini de deux manières différentes :
- en **énumérant ses éléments** : $E = \{a, b, c, \ldots\}$ ;
  - par exemple, $E = { Nombres < 15 } = \{0, 1, 2, 3, \cdots, 13, 14\}$ ;
- à l'aide d'un **autre ensemble $F$ et d'une propriété** : 
  - $E = \{x \in F \mid P(x)\}$ ;
  - par exemple, $E = { Nombres pairs < 15 } = \{x \in \mathbb{N} \mid x \text{ est pair et } x < 15\}$.

La notion entre crochets $\{\cdots\}$ est la notion universellement adoptée pour définir un ensemble. Lorsqu'on énumère les éléments d'un ensemble, leur ordre n'a pas d'importance. Par exemple, les ensembles $\{1, 2, 3\}$ et $\{3, 2, 1\}$ sont équivalents.

Le nombre d'éléments de $E$ est appelé le **cardinal** de $E$, et est noté:
$$
n(E) = Card(E) = |E|
$$

Pour donner un sens a cette définition, lorsque $n = 0$, on a $E = \emptyset$ et donc $Card(\emptyset) = 0$.

Étant donné un ensemble $E$, on peut définir un **sous-ensemble** $F$ de $E$ en utilisant la notation $F \subseteq E$. Cela signifie que tous les éléments de $F$ sont également des éléments de $E$. Si $F$ est un sous-ensemble de $E$ et qu'il existe un élément de $E$ qui n'est pas un élément de $F$, on dit que $F$ est un **sous-ensemble propre** de $E$, et on utilise la notation $F \subset E$. Par exemple, si $E = \{1, 2, 3, 4\}$, alors $\{1, 2\}$ est un sous-ensemble de $E$, mais $\{1, 2\} \neq E$.

Au cas ou c'est pas claire: $\mathbb{N} \subseteq \mathbb{R}$

L'ensemble de toutes les parties de $E$ se note $\mathcal{P}(E)$. On a toujours $\emptyset \in \mathcal{P}(E)$ et $E \in \mathcal{P}(E)$, et donc $Card(\mathcal{P}(E)) = 2^{Card(E)}$.

Exemple: $\mathbb{N}_3 = \{1, 2, 3\}$, 
alors $\mathcal{P}(\mathbb{N}_3) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$

<hr />

### Ensemble des nombres

Les ensembles de nombres les plus couramment utilisés sont les suivants:
- les **nombres naturels** $\mathbb{N} = \{0, 1, 2, 3, \ldots\}$ ;
- les **nombres entiers** $\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$ ;
- les **nombres rationnels** $\mathbb{Q} = \{p/q \mid p \in \mathbb{Z}, q \in \mathbb{N}^*\}$ ;
- les **nombres réels** $\mathbb{R}$ ;

Il existe aussi les **nombres irrationnels** ($\mathbb{I}$), qui ne peuvent pas être exprimés comme le quotient de deux entiers. Par exemple, $\sqrt{2}$ est un nombre irrationnel.

<hr />

### Opérations sur les ensembles

- La **réunion** (OR): $A \cup B = \{x \in E \mid x \in A \text{ ou } x \in B\}$: Dans A ou B
- L'**intersection** (AND): $A \cap B = \{x \in E \mid x \in A \text{ et } x \in B\}$: Dans l'intersection de A et B
- La **différence** (NOT): $A \setminus B = \{x \in A \text{ et } x \notin B\}$: Dans A mais pas dans B
- La **différence symétrique** (XOR): $A \Delta B = (A \setminus B) \cup (B \setminus A)$: Dans A ou B mais pas dans l'intersection
- Le **complément** (NOT): $A^c = \{x \in E \mid x \notin A\}$: Pas dans A

Quelques propriétés:
$
A \cup A = A \\
A \cup B = B \cup A \\
A \cup A^c = E \\
A \cup E = E \\
A \cup \emptyset = A \\
(A \cup B)^c = A^c \cap B^c \\
A \cap A = A \\
A \cap B = B \cap A \\
A \cap A^c = \emptyset \\
A \cap E = A \\
A \cap \emptyset = \emptyset \\
(A \cap B)^c = A^c \cup B^c \\
A \setminus B = A \cap B^c \\
A \Delta B = (A \cup B) \setminus (A \cap B) \\
A \Delta B = (A \setminus B) \cup (B \setminus A) \\
$

Une **extension** de l'opération de réunion est la **réunion disjointe** de deux ensembles $A$ et $B$, notée $A \sqcup B$. Cela signifie que $A$ et $B$ n'ont pas d'éléments en commun, c'est-à-dire que $A \cap B = \emptyset$.

<hr />

### Produit cartésien

Le **produit cartésien** de deux ensembles $A$ et $B$, noté $A \times B$, est l'ensemble de tous les couples ordonnés $(a, b)$ tels que $a \in A$ et $b \in B$. Formellement, on a:
$$
A \times B = \{(a, b) \mid a \in A, b \in B\}
$$

Par exemple, si $A = \{1, 2\}$ et $B = \{a, b\}$, alors $A \times B = \{(1, a), (1, b), (2, a), (2, b)\}$.

Le produit cartésien de $n$ ensembles $A_1, A_2, \ldots, A_n$ est défini de manière similaire:
$$
A_1 \times A_2 \times \ldots \times A_n = \{(a_1, a_2, \ldots, a_n) \mid a_1 \in A_1, a_2 \in A_2, \ldots, a_n \in A_n\}
$$
