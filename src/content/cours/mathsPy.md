---
title: 'Les operations de base en Python'
tag: 'Python'
description: 'Cours sur les opérations de base en Python.'
heroImage: '/PythonComm.png'
---

# Les Opérations de Base

Les maths, c'est cool. Mais les maths en Python, c'est encore plus cool.
<br />
En Python, on peut faire des opérations mathématiques de base comme l'addition, la soustraction, la multiplication et la division.
```python
a = 5
b = 3
print(a + b) # Addition
print(a - b) # Soustraction
print(a * b) # Multiplication
print(a / b) # Division
```
On peut également incrémenter une variable.
```python
a = 5
a += 1
print(a) # Output: 6
```
On peut aussi utiliser les opérateurs de comparaison.
```python
a = 5
b = 3
print(a > b) # Output: True
print(a < b) # Output: False
print(a == b) # Output: False
print(a != b) # Output: True
```
Voici un exemple en temps réel:
```python
prénom = "Ardox"
age = 18
argent = 45697.0 # Ardox est riche lol

print(f"{prénom} a {age} ans et il avait {argent}€ en poche.")
benef = input("Combien de moula a fait Ardox ce mois ci ? ")
argent += float(benef)
print(f"{prénom} a {age} ans et il a {argent}€ en poche.")
```
```
Output: 
Combien de moula a fait Ardox ce mois ci ? 1000
Ardox a 18 ans et il a 46697.0€ en poche.
```