---
title: 'Les commandes de base'
tag: 'Linux'
description: 'Cours sur les commandes de base sous Linux'
heroImage: '/bash.png'
---

# Les commandes de base

## 1. man 

Man pour manuel. Il s'agit  probablement la commande la plus utile dans l’apprentissage de l’utilisation de la ligne de 
commande sous Linux. En effet cette dernière permet d’obtenir le manuel d’utilisation d’une autre commande. Le manuel 
d’un commande contiens la syntaxe de la commande cette a dire comme celle-ci doit être rédiger (l’ordre des différent élément), 
un exemple et la liste de différent paramètre (avec description) de cette dernière.
<br />
Syntaxe: `man [option si necessaire] [commande]`

<hr />

## 2. pwd

Pwd pour Print Working Directory, ou en français impression du répertoire de travail. Cette commande permet de demander au système de 
nous indiquer où l’on se trouve dans l’arborescence de notre OS Linux c’est-à-dire dans quel répertoire nous somme au niveau de la ligne de commande.
<br />
Syntaxe: `pwd`

<hr />

## 3. ls

Ls pour list. Cette commande permet d’afficher le contenu d’un répertoire. Elle permet de lister les fichiers et les répertoires
présents dans le répertoire courant.
<br />
Syntaxe: `ls [option si necessaire] [chemin du répertoire]` ou `ls [option si necessaire]` (pour le répertoire courant)

<hr />

## 4. cd

Cd pour Change Directory. Cette commande permet de changer de répertoire. Elle permet de se déplacer dans l’arborescence de notre OS Linux.
<br />
Syntaxe: `cd [chemin du répertoire]` ou `cd` (pour revenir au répertoire personnel)

<hr />

**Petite astuce**: Sous Linux comme sur beaucoup d’autres OS (Windows, Cisco IOS) il existe un simple moyen rapide de rappeler une commande déjà exécutée. 
Pour ce faire il suffit d’utiliser les flèches directionnelles haut et bas du clavier.
Cela vous permet de naviguer dans l’histoire des commande exécuté. Il faut savoir que l'historique garde les 500 dernière commandes 
(change selon les version et les distributions) et commence à effacer les plus anciennes une fois que le nombres maximum est dépassé.

A noter également que cette historique est propre a chaque utilisateurs de la machine.

**Une bonne partie des commande non pas de retour dans le prompt lorsque l’exécution c’est bien déroulé**. Donc garder à l’esprit que s’il 
n’y a rien d’afficher après avoir exécuter une commande c’est que celle-ci a été correctement exécuter. Dan le cas contraire le système 
affichera un message dans le prompt. 

<hr />

## 5. touch 

Touch est une commande qui permet de créer un fichier vide. Cette commande est très utile pour créer rapidement un fichier vide.
<br />
Syntaxe: `touch [nom du fichier]`

**Attention**: Si on met un espace après le nom du fichier, la commande touch va créer un fichier vide avec un espace à la fin du nom. (Exemple: `touch lien travail.txt` va créer deux fichiers nommé "lien" et "travail.txt ")
</div>

<hr />

## 6. nano

Nano est un éditeur de texte en ligne de commande. Il est très simple d’utilisation et permet de modifier un fichier texte.
<br />
Syntaxe: `nano [nom du fichier]` ou `nano` (pour créer un nouveau fichier)

<hr />

## 7. echo

Echo est une commande qui permet d’afficher un message à l’écran. Elle est très utile pour afficher des messages à l’utilisateur.
<br />
Syntaxe: `echo [message]`

Il est possible d'écrire dans un fichier avec la commande echo. Pour ce faire il suffit de rediriger la sortie standard 
de la commande echo vers un fichier. (Exemple: `echo "Bonjour" > fichier.txt` va écrire "Bonjour" dans le fichier fichier.txt)
<br />
`>` permet de remplacer le contenu du fichier par le message (écrasement).
`>>` permet d'ajouter le message à la fin du fichier (incrémentation).
C'est aussi possible dans l'autre sens (`<` ou `<<`) (exemple: `cat < fichier.txt` va afficher le contenu du fichier fichier.txt)
</div>

<hr />

## 8. tail

Tail est une commande qui permet d’afficher les dernières lignes d’un fichier. Elle est très utile pour afficher les dernières 
lignes d’un fichier de log. 
<br />
Syntaxe: `tail [option si necessaire] [nom du fichier]` 

<hr />

Petite généralité: `$(commande)` permet d'exécuter une commande et d'utiliser le résultat dans une autre commande.
Par exemple, `echo "Nous sommes dans $(pwd)` va afficher "Nous sommes dans /home/user" si vous êtes dans le répertoire /home/user.
</div>

<hr />

## 9. cat

Cat est une commande qui permet d’afficher le contenu d’un fichier. Elle est très utile pour afficher le contenu d’un fichier texte.
<br />
Syntaxe: `cat [nom du fichier]`

<hr />

## 10. grep 

Grep est une commande qui permet de rechercher un motif dans un fichier. Elle est très utile pour rechercher un mot dans un fichier texte.
<br />
Syntaxe: `grep [option si necessaire] [motif] [nom du fichier]`
<br />
Exemple: `grep "motif" fichier.txt` va afficher toutes les lignes du fichier fichier.txt contenant le mot "motif".

<hr />

## 11. wc

Wc est une commande qui permet de compter le nombre de lignes, de mots et de caractères dans un fichier. 
Elle est très utile pour compter le nombre de lignes, de mots et de caractères dans un fichier texte.
<br />
Syntaxe: `wc [option si necessaire] [nom du fichier]`

<hr />

## 12. mkdir 

Mkdir (pour make directory) est une commande qui permet de créer un répertoire. Elle est très utile pour créer un répertoire.
<br />
Syntaxe: `mkdir [nom du répertoire]`

Attention: Si on met un espace après le nom du répertoire, la commande mkdir va créer un répertoire avec un espace à la fin du nom. 
(Exemple: `mkdir dossier travail` va créer deux répertoires nommé "dossier" et "travail")
</div>
Petite astuce: Il est possible de créer plusieurs répertoires récursivement en une seule commande. 
Pour ce faire, il suffit d'utiliser l'option -p. (Exemple: `mkdir -p dossier1/dossier2/dossier3` va 
créer les répertoires dossier1, dossier2 et dossier3)
</div>

<hr />

## 13. cp 

Cp (pour copy) est une commande qui permet de copier un fichier ou un répertoire. Elle est très utile pour copier un fichier ou un répertoire.
<br />
Syntaxe: `cp [option si necessaire] [nom du fichier ou répertoire] [destination]`

<hr />

## 14. mv

Mv (pour move) est une commande qui permet de déplacer un fichier ou un répertoire. Elle est très utile pour déplacer un fichier ou un répertoire.
<br />
Syntaxe: `mv [option si necessaire] [nom du fichier ou répertoire] [destination]`

Petite astuce: Si vous voulez renommer un fichier ou un répertoire, vous pouvez utiliser la commande 
mv pour le déplacer dans le même répertoire avec un autre nom.
</div>

<hr />

## 15. rm et rmdir

Rm (pour remove) est une commande qui permet de supprimer un fichier ou un répertoire. Elle est très utile pour supprimer un fichier ou un répertoire.
<br />
Rmdir (pour remove directory) est une commande qui permet de supprimer un répertoire vide. Elle est très utile pour supprimer un répertoire vide.
<br />
Syntaxe: `rm [option si necessaire] [nom du fichier ou répertoire]` ou `rmdir [option si necessaire] [nom du répertoire]`

Petite astuce: Pour supprimer un répertoire et son contenu, vous pouvez utiliser la commande rm avec l'option -r.
</div>

<hr />

## 16. find 

Find est une commande qui permet de rechercher des fichiers dans un répertoire. Elle est très utile pour rechercher des fichiers dans un répertoire.
<br />
Syntaxe: `find [option si necessaire] [répertoire] -name [nom du fichier]`

<hr />

C'est tout pour les commandes de base. N'hésitez pas à consulter le manuel de chaque commande pour en savoir plus sur ses options et son utilisation.