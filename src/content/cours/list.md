---
title: 'Les listes en Python'
tag: 'Python'
description: 'Cours sur les listes en Python.'
heroImage: '/PythonComm.png'
---

# Les Listes

En Python, une liste est une collection d'éléments ordonnés. 
Les éléments d'une liste peuvent être de différents types: entiers, chaînes de caractères, flottants, listes, etc.

## Création d'une liste:

```python
# Création d'une liste vide
liste_vide = []

# Création d'une liste d'entiers
liste_entiers = [1, 2, 3, 4, 5]

# Création d'une liste de chaînes de caractères
liste_chaines = ["a", "b", "c", "d", "e"]

# Création d'une liste de listes
liste_listes = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

## Accès aux éléments d'une liste:

Pour accéder à un élément d'une liste, on utilise son indice.
L'indice d'un élément est sa position dans la liste.
**Attention:** Les indices commencent à 0.

```python
liste = [1, 2, 3, 4, 5]

# Accès au premier élément de la liste
premier_element = liste[0]

# Accès au dernier élément de la liste
dernier_element = liste[4]
```

## Modification d'une liste:

Pour modifier un élément d'une liste, on utilise son indice.

```python
liste = [1, 2, 3, 4, 5]

# Modification du premier élément de la liste
liste[0] = 10

# Modification du dernier élément de la liste
liste[4] = 50
```

## Ajout d'éléments à une liste:

Pour ajouter un élément à une liste, on utilise la méthode `append()`.

```python
liste = [1, 2, 3, 4, 5]

# Ajout de l'élément 6 à la fin de la liste
liste.append(6)
```

On peut aussi incrémenter à une certaine position en utilisant la méthode `insert()`.

```python
liste = [1, 2, 3, 4, 5]

# Ajout de l'élément 6 à la position 2 de la liste
liste.insert(2, 6)
```

## Suppression d'éléments d'une liste:

Pour supprimer un élément d'une liste, on utilise la méthode `remove()`.

```python
liste = [1, 2, 3, 4, 5]

# Suppression de l'élément 3 de la liste
liste.remove(3)
```

## Longueur d'une liste:

Pour connaître la longueur d'une liste, on utilise la fonction `len()`.

```python
liste = [1, 2, 3, 4, 5]

# Longueur de la liste
longueur = len(liste)
```

## Parcourir une liste:

Pour parcourir une liste, on utilise une boucle `for`.

```python
liste = [1, 2, 3, 4, 5]

for element in liste:
    print(element)
```