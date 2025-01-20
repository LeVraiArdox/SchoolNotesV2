---
title: 'Logique'
tag: 'Maths'
description: 'Mé sé logique noon ?'
heroImage: '/meths.png'
---

La **Logique Mathématique** (ou logique formelle) est une branche des mathématiques qui étudie les fondements des mathématiques. Elle est utilisée pour démontrer la validité des arguments mathématiques. La logique mathématique est également utilisée en informatique pour la programmation et la conception de circuits électroniques.

Les objets fondamentaux de la logique mathématique sont:
- Les **formules**, modélisant les énoncés mathématiques.
- Les **Dérivations**, ou démonstrations formelles, qui permettent de prouver la validité des formules.
- Les **Sémantiques**, ou modèles, qui permettent d'interpréter les formules, qui définissent le "sens" des formules.
<br />

Un résultat mathématique (ou une proposition) est un énoncé vrai. Par exemple, la proposition "2 + 2 = 4" est vraie. Une proposition peut être vraie ou fausse, mais pas les deux à la fois. La logique mathématique permet de démontrer la validité des propositions mathématiques.

Une proposition est une formule qui peut être vraie ou fausse, mais jamais les deux. Par exemple, la proposition "2 + 2 = 5" est fausse. Les propositions sont souvent notées avec des lettres majuscules, comme "P" ou "Q".

Les Prédicats sont des formules qui dépendent d'une ou plusieurs variables. Par exemple, le prédicat "x > 0" est vrai si x est un nombre positif. Les prédicats sont souvent notés avec des lettres minuscules, comme "p" ou "q".

Les Connecteurs Logiques sont des opérateurs qui permettent de combiner des propositions pour former des formules plus complexes. Les connecteurs logiques les plus courants sont:
- La **négation** (noté ¬), qui inverse la valeur de la proposition. Par exemple, la négation de "P" est "¬P". En informatique, la négation est souvent notée avec le mot-clé "NOT".

| P | ¬P |
|---|----|
| V | F  |
| F | V  |

- La **conjonction** (noté ∧), qui est vraie si les deux propositions sont vraies. Par exemple, la conjonction de "P" et "Q" est "P ∧ Q". En informatique, la conjonction est souvent notée avec le mot-clé "AND".

| P | Q | P ∧ Q |
|---|---|-------|
| V | V | V     |
| V | F | F     |
| F | V | F     |
| F | F | F     |

- La **disjonction** (noté ∨), qui est vraie si au moins l'une des propositions est vraie. Par exemple, la disjonction de "P" et "Q" est "P ∨ Q". En informatique, la disjonction est souvent notée avec le mot-clé "OR".

| P | Q | P ∨ Q |
|---|---|-------|
| V | V | V     |
| V | F | V     |
| F | V | V     |
| F | F | F     |

- L'**implication** (noté ⇒), qui est fausse si la première proposition est vraie et la deuxième proposition est fausse. Par exemple, l'implication de "P" et "Q" est "P ⇒ Q". En informatique, l'implication est souvent notée avec le mot-clé "IF...THEN".

| P | Q | P ⇒ Q |
|---|---|-------|
| V | V | V     |
| V | F | F     |
| F | V | V     |
| F | F | V     |

- L'**équivalence** (noté ⇔), qui est vraie si les deux propositions ont la même valeur de vérité. Par exemple, l'équivalence de "P" et "Q" est "P ⇔ Q". En informatique, l'équivalence est souvent notée avec le mot-clé "IF AND ONLY IF".

| P | Q | P ⇔ Q |
|---|---|-------|
| V | V | V     |
| V | F | F     |
| F | V | F     |
| F | F | V     |

Les Tables de Vérité sont des tableaux qui montrent les valeurs de vérité des propositions en fonction des valeurs de vérité des propositions de base. Les tables de vérité sont utilisées pour déterminer la valeur de vérité des formules complexes.

Proprités: 

P ∧ (Q ∧ R) = (P ∨ Q) ∧ (P ∨ R)

| P | Q | R | Q ∧ R | P ∨ (Q ∧ R) | P ∨ Q | P ∨ R | (P ∨ Q) ∧ (P ∨ R) |
|---|---|---|-------|-------------|-------|-------|---------------------|
| V | V | V | V     | V           | V     | V     | V                   |
| V | V | F | F     | V           | V     | V     | V                   |
| V | F | V | F     | V           | V     | V     | V                   |
| V | F | F | F     | V           | V     | V     | V                   |
| F | V | V | V     | V           | V     | V     | V                   |
| F | V | F | F     | V           | V     | F     | F                   |

¬(P ∨ Q) = ¬P ∧ ¬Q

| P | Q | P ∨ Q | ¬(P ∨ Q) | ¬P | ¬Q | ¬P ∧ ¬Q |
|---|---|-------|----------|----|----|---------|
| V | V | V     | F        | F  | F  | F       |
| V | F | V     | F        | F  | V  | F       |
| F | V | V     | F        | V  | F  | F       |
| F | F | F     | V        | V  | V  | V       |

<br />

Les **Quantificateurs** sont des opérateurs qui permettent de définir des ensembles de valeurs pour les variables. Les quantificateurs les plus courants sont:
- Le **quantificateur universel** (noté ∀), qui signifie "pour tout". Par exemple, la formule "∀x P(x)" signifie que la proposition "P(x)" est vraie pour toutes les valeurs de x. En informatique, le quantificateur universel est souvent noté avec le mot-clé "FOR ALL".
- Le **quantificateur existentiel** (noté ∃), qui signifie "il existe". Par exemple, la formule "∃x P(x)" signifie qu'il existe au moins une valeur de x pour laquelle la proposition "P(x)" est vraie. En informatique, le quantificateur existentiel est souvent noté avec le mot-clé "THERE EXISTS". Il existe aussi des alternatives tel que "∃!" qui signifie "il existe un seul".

