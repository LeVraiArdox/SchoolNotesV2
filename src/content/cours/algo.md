---
title: "Algorithmes"
tag: "Maths"
description: "Ce cours est a lire pour perdre son âme."
heroImage: "/algohero.png"
---

# Algorithmes

Un Algorithme est une suite finie et non ambiguë d'instructions permettant de résoudre un problème ou d'obtenir un résultat:

```
Declaration:
    A=valeur
    B=valeur
    C=valeur
debut
    Ecrire('Entrez la valeur de A')
    Lire(A)
    Ecrire('Entrez la valeur de B')
    Lire(B)
    Si B n'est pas = a 0 alors
        C=A/B
        Ecrire('La division de A par B est: ', C)
    Sinon
        Ecrire('La division par 0 est impossible')
    FinSi
fin
```

Ceci est ce qu'on appelle un pseudo-code. En python, cela donnera:

```python
A = int(input('Entrez la valeur de A')) # Int permet de convertir la valeur en entier.
B = int(input('Entrez la valeur de B'))
if B != 0:
    C = A/B
    print('La division de A par B est: ', C)
else:
    print('La division par 0 est impossible')
```

On peut egalement ecrire des algorithmes sous forme d'algorigrammes.
<br />

<hr />

## Les types d'opérateurs

Il existe plusieurs types d'opérateurs en algorithmique:

- **Les opérateurs arithmétiques**:
  - Addition: `+`
  - Soustraction: `-`
  - Multiplication: `*`
  - Division: `/`
  - Modulo: `%`
  - Division entière: `//`
- **Les opérateurs de comparaison**:
  - Egalité: `==`
  - Différence: `!=`
  - Supérieur: `>`
  - Inférieur: `<`
  - Supérieur ou égal: `>=`
  - Inférieur ou égal: `<=`
- **Les opérateurs logiques**:
  - Et: `and`
  - Ou: `or`
  - Non: `not`

<hr />

## Les conditions
Il existe plusieurs types de conditions en algorithmique:
- La boucle `for`:
```
# Algorithme de Puissance
Variables
    N, p, R, i: Entiers
Debut
    Ecrire('Entrez la valeur de N')
    Lire(N)
    Ecrire('Entrez la valeur de p')
    Lire(p)
    R <- 1
    Pour i <- 1 à p
        R <- R * N
    FinPour
    Ecrire('La puissance de N^p est: ', R)
Fin
```
```python
N = int(input('Entrez la valeur de N'))
p = int(input('Entrez la valeur de p'))
R = 1
for i in range(1, p+1):
    R *= N
print('La puissance de N^p est: ', R)
```
- La boucle `while`:
```
i=0
tant que i < 10 faire
    Ecrire(i)
    i=i+1
fin
```
```python
i = 0
while i < 10:
    print(i)
    i += 1
```
- La condition `if`:
```
si a > b alors
    Ecrire('a est plus grand que b')
sinon si a < b alors
    Ecrire('a est plus petit que b')
sinon
    Ecrire('a est égal à b')
fin
```
```python
if a > b:
    print('a est plus grand que b')
elif a < b:
    print('a est plus petit que b')
else:
    print('a est égal à b')
```
- La condition `switch`:
```
switch a:
    cas 1: Ecrire('a est égal à 1')
    cas 2: Ecrire('a est égal à 2')
    sinon:
        Ecrire('a n'est ni égal à 1 ni à 2')
fin
```
```python
switch a:
    case 1:
        print('a est égal à 1')
        break
    case 2:
        print('a est égal à 2')
        break
    default:
        print('a n\'est ni égal à 1 ni à 2')
```
- la boucle `repeat`:
```
# Algorithme de division
Variables
    A, B, C: Entiers
Debut
    Ecrire('Entrez la valeur de A')
    Lire(A)
    Ecrire('Entrez la valeur de B')
    Lire(B)
    C <- 0
    Repeter
        A <- A - B
        C <- C + 1
    Jusqu'a A < B
    Ecrire('Le quotient de A par B est: ', C)
Fin
```
```python
A = int(input('Entrez la valeur de A'))
B = int(input('Entrez la valeur de B'))
C = 0
while A >= B:
    A -= B
    C += 1
print('Le quotient de A par B est: ', C)
```
<br />
<hr />
<br />

## Exercice:
Ecrire un algorithme qui demande un nombre de départ, et qui le calcule par la somme des entiers jusqu'à ce nombre.
```
Variables
    N, S, i: Entiers
Debut
    Ecrire('Entrez la valeur de N')
    Lire(N)
    S <- 0
    Pour i <- 1 à N
        S <- S + i
    FinPour
    Ecrire('La somme des entiers de 1 à N est: ', S)
Fin
```
```python
N = int(input('Entrez la valeur de N'))
S = 0
for i in range(1, N+1):
    S += i # += revient à faire S = S + i
print('La somme des entiers de 1 à N est: ', S)
```
<br />
<hr />

## Les tableaux
Un tableau est une structure de données qui permet de stocker plusieurs valeurs dans une seule variable. 
```
# Algorithme etudiants
Variables
    Notes[5]: Tableau Entiers
    i: Entier
Debut
    Pour i <- 1 à 5
        Ecrire('Entrez la note de l\'étudiant ', i)
        Lire(Notes[i])
    FinPour
Fin
```
En python, cela se fait de la manière suivante:
```python
tab = [1, 2, 3, 4, 5]
x = tab[2] # x vaut 3, car les indices commencent à 0 (0, 1, 2, 3, 4)
```
ou
```python
Tableau Identifiant[nombre] : Type
# Identifiant est le nom du tableau, on peut le changer
# nombre est le nombre d'éléments dans le tableau
# Type est le type des éléments du tableau (entier, réel, caractère, etc)
```
<br />
<hr />

## Les fonctions
Une fonction est un sous programme qui retourne un resultat:
```
Fonction Nom(): Type
Variables
    var1, var2: Type
Debut
    Instructions
    Retourne resultat
Fin
```
En python, cela se fait de la manière suivante:
```python
def Nom():
    var1 = 1
    var2 = 2
    return var1 + var2
```

Fonction qui permet de calculer la factorielle d'un nombre:

```
Fonction Factorielle(N: Entier): Entier
Variables
    i, F: Entiers
Debut
    F <- 1
    Pour i <- 1 à N
        F <- F * i
    FinPour
    Retourne F
Fin
```

```
# Utiliser la fonction Factorielle
Variables
    N: Entier
Debut
    Ecrire('Entrez un nombre')
    Lire(N)
    Ecrire('La factorielle de ', N, ' est: ', Factorielle(N))
Fin
```

En python, cela se fait de la manière suivante:

```python
def Factorielle(N): # N est un entier
    F = 1
    for i in range(1, N+1):
        F *= i
    return F

print(Factorielle(5)) # Affiche 120
```

<br />
<hr />

## Exercice:
On definit la suite de fibonacci la suite de reels (Fn) définie par:
$$
F_0 = 0
$$
$$
F_1 = 1
$$
$$
F_n = F_{n-1} + F_{n-2}
$$
Ecrire un algorithme qui permet de calculer le n-ieme terme de la suite de fibonacci.
```
Fonction Fibonacci(N: Entier): Entier
Variables
    i, F, F1, F2: Entiers 
Debut
    F1 <- 0
    F2 <- 1
    Pour i <- 2 à N 
        F <- F1 + F2
        F1 <- F2
        F2 <- F
    FinPour
    Retourne F
Fin
```
```python
def Fibonacci(N):
    F1 = 0
    F2 = 1
    for i in range(2, N):
        F = F1 + F2
        F1 = F2
        F2 = F
    return F

print(Fibonacci(5)) # Affiche 3

```

<hr />

## Complexité algorithmique
La complexité algorithmique est une mesure de la quantité de ressources nécessaires pour exécuter un algorithme. Elle est généralement exprimée en fonction de la taille de l'entrée de l'algorithme.
Il existe plusieurs types de complexité algorithmique:
- **Complexité temporelle**: mesure le temps d'exécution de l'algorithme en fonction de la taille de l'entrée.
- **Complexité spatiale**: mesure l'espace mémoire nécessaire pour exécuter l'algorithme en fonction de la taille de l'entrée.

Ces deux aspects sont des mesures clés de la performance d'un algorithme.
<br />
La complexité temporelle fait référence au temps nécessaire pour exécuter un algorithme en fonction de la taille de l'entrée, notée $n$. Elle est généralement exprimée en fonction de la notation "$O$" (notation de Landau). Par exemple, si un algorithme a une complexité temporelle de $O(n)$, cela signifie que le temps d'exécution de l'algorithme est proportionnel à la taille de l'entrée.
<br />
La noation Big-$O$ décrit le comportement asymptotique d'une fonction lorsque la variable tend vers l'infini. Par exemple, si une fonction $f(n)$ est $O(g(n))$, cela signifie que $f(n)$ est bornée par une constante fois $g(n)$ pour $n$ suffisamment grand.
<br />
Il existe plusieurs classes de complexité temporelle:
- **$O(1)$**: complexité constante. Le temps d'exécution de l'algorithme est indépendant de la taille de l'entrée.
- **$O(\log n)$**: complexité logarithmique. Le temps d'exécution de l'algorithme est proportionnel au logarithme de la taille de l'entrée.
- **$O(n)$**: complexité linéaire. Le temps d'exécution de l'algorithme est proportionnel à la taille de l'entrée.
- **$O(n \log n)$**: complexité linéarithmique. Le temps d'exécution de l'algorithme est proportionnel à la taille de l'entrée multipliée par le logarithme de la taille de l'entrée.
- **$O(n^2)$**: complexité quadratique. Le temps d'exécution de l'algorithme est proportionnel au carré de la taille de l'entrée.
- **$O(2^n)$**: complexité exponentielle. Le temps d'exécution de l'algorithme double à chaque augmentation de la taille de l'entrée.
- **$O(n!)$**: complexité factorielle. Le temps d'exécution de l'algorithme est proportionnel au produit de tous les entiers de 1 à $n$.

<br />
exemples de complexité temporelle:

**temps linéaire**:
```python
def linear_search(arr, x):
    for i in range(len(arr)): # O(n)
        if arr[i] == x: # si l'element est trouvé
            return i
    return -1
````

**temps quadratique**:

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n): # O(n)
        for j in range(0, n-i-1): # O(n)
            if arr[j] > arr[j+1]: # si l'element est plus grand
                arr[j], arr[j+1] = arr[j+1], arr[j] # on les echange
```

<hr />
