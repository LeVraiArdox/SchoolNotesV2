---
title: 'Les fonctions'
tag: 'Python'
description: 'Cours sur les fonctions en Python.'
heroImage: '/PythonComm.png'
---

# Les fonctions

Une **fonction** est une partie du code qui effectue une tâche spécifique. Elle prend des arguments en entrée, 
effectue des opérations sur ces arguments, puis renvoie un résultat. Les fonctions sont utilisées pour éviter de 
répéter le même code plusieurs fois.
<br />
```python
def ma_fonction(arg1, arg2):
    resultat = arg1 + arg2
    return resultat
```
Ici, `ma_fonction` est le nom de la fonction, `arg1` et `arg2` sont les arguments de la fonction, et `resultat` est la
valeur renvoyée par la fonction.
<br />
Pour appeler une fonction, utilisez simplement son nom suivi des arguments entre parenthèses.
```python
print(ma_fonction(2, 4))
```
Dans cet exemple, `resultat` contiendra la valeur `6`, car `2 + 4 = 6`.
<br />
Les fonctions peuvent ne pas prendre d'arguments ou ne pas renvoyer de valeur.
```python
def afficher_message():
    print("Bonjour !")
```
Ici, `afficher_message` est une fonction qui affiche le message "Bonjour !". Pour l'appeler, utilisez simplement son nom.
```python
afficher_message()
```
Cela affichera "Bonjour !" dans la console.
<br />
Les fonctions peuvent également avoir des arguments facultatifs avec des valeurs par défaut.
```python
def dire_bonjour(nom="Anonyme"):
    print("Bonjour,", nom)
```
Ici, `dire_bonjour` est une fonction qui affiche "Bonjour, [nom]" où `[nom]` est l'argument fourni. Si aucun argument n'est
fourni, le nom par défaut est "Anonyme".
```python
dire_bonjour("Alice")
dire_bonjour()
```
Cela affichera "Bonjour, Alice" puis "Bonjour, Anonyme" dans la console.

**Attention**! En python, l'indentation (les espaces en début de ligne) est très importante. Elle définit les blocs de code.
