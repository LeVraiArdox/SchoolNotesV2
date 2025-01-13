---
title: 'Les variables de Python'
tag: 'Python'
description: 'Cours sur les variables en Python.'
heroImage: '/PythonComm.png'
---

# Les Variables

Une variable, c'est une boîte. Elle contient une valeur qui peut être modifiée.
En Python, on peut déclarer une variable en lui donnant un nom et une valeur.
Pour déclarer une variable, on utilise le signe égal `=`.

```python
a = 5
b = "Hello, World!"
```

Dans cet exemple, `a` est une variable de type `int` (entier) et `b` est une variable de type `str` (chaîne de caractères).
Une variable doit cepenadant respecter certaines règles:
- Le nom d'une variable ne doit pas commencer par un chiffre.
- Le nom d'une variable ne doit pas contenir de caractères spéciaux.
- Le nom d'une variable ne doit pas en majuscule.

```python
à = 5 # Erreur
1a = 5 # Erreur
a! = 5 # Erreur
A = 5 # Erreur
```

Pour utiliser une variable, il suffit de taper son nom.

```python
message = "Ardox est trop BG"
print(message)
```
```
Output: Ardox est trop BG
```

On peut également modifier la valeur d'une variable.

```python

message = "Ardox est trop BG"
print(message)
message = "Ardox est trop BG et il le sait"
print(message)
```
```
Output: 
Ardox est trop BG
Ardox est trop BG et il le sait
```

Si je veux faire une phrase complète, je peux utiliser la concaténation.

```python
nom = "Ardox"
print (nom + " est trop BG")
```
```
Output: Ardox est trop BG
```
Mais comme c'est un peu chiant de faire ça à chaque fois, et vu que des dev python sont des flemmards, on peut écrire avec des accolades:
    
```python
nom = "Ardox"
age = 18
print(f"Je m'appelle {nom} et j'ai {age} ans.")
```
```
Output: Je m'appelle Ardox et j'ai 18 ans.
```

**Attention**: Pour utiliser les accolades, il faut ajouter un `f` devant les guillemets.
Ce `f` signifie "format". Il permet de formater la chaîne de caractères.

Il existe trois principaux types de variables en Python:
- `int` : entier (1, 2, 3, ...)
- `float` : nombre à virgule (1.0, 2.5, 3.14, ...)
- `str` : chaîne de caractères ("Hello, World!", "Ardox est trop BG", ...)

Les variables, c'est bien beau, mais ça serait mieux si on pouvait les choisir nous même. C'est possible avec les `input()`.

```python

nom = input("Quel est ton nom ? ")
print(f"Bonjour, {nom}!")
```
```
Output:
Quel est ton nom ? Ardox
Bonjour, Ardox!
```
