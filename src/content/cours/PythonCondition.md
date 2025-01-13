---
title: 'Les conditions en Python'
tag: 'Python'
description: 'Cours sur les conditions en Python.'
heroImage: '/PythonComm.png'
---

# Les Conditions

En Python, on peut utiliser des conditions pour exécuter du code en fonction de certaines conditions.

## Condition `if`:

```python
age = int(input("Quel est ton âge ? "))

if age < 18:
    print("Tu veux des bonbons ?")
```
Si l'âge est inférieur à 18, la personne va dans la cave.

Condition `if`...`else`:

```python
age = int(input("Quel est ton âge ? "))
if age < 18:
    print("Tu veux des bonbons ?")
else:
    exit()
```
Si l'âge est inférieur à 18, la personne va dans la cave. Sinon, on sort du programme.

Condition `if`...`elif`...`else`:

```python
age = int(input("Quel est ton âge ? "))
if age < 18:
    print("Tu veux des bonbons ?")
elif age == 18:
    print("Tu veux une clope ?")
else:
    exit()
```
Si l'âge est inférieur à 18, la personne va dans la cave. Si l'âge est égal à 18, la personne fume une clope. Sinon, on sort du programme.

On peut associer plusieurs conditions:

```python
moula = float(input("Combien de moula as-tu ? "))
ficheS = input("est-tu fiché S ? ")

if moula > 1000 and ficheS == "non":
    print("Tu es un bon citoyen.")
elif moula > 1000 and ficheS == "oui":
    police.signaler("fraude fiscale")
else:
    print("Tu es un pauvre.")
```

## Condition ternaire:
Les conditions ternaires permettent d'écrire des conditions sur une seule ligne. C'est très utile pour simplifier le code.
```python
age = 18
message = "Tu es majeur" if age >= 18 else "Tu es mineur"
print(message)
```

## La boucle `while`:
La boucle `while` permet de répéter une action tant qu'une condition est vraie.
```python
i = 0
while i < 10:
    print("Hello, World!")
    i += 1
```
Ce code affiche "Hello, World!" 10 fois.

## La boucle `for`:
La boucle `for` permet de répéter une action un nombre déterminé de fois.
```Python
for i in range(11):
    print("Hello, World!")
    i += 1
```
Ce code affiche "Hello, World!" 10 fois.

