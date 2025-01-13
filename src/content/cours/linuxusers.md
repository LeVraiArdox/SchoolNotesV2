---
title: 'Les utilisateurs, les groupes et les permissions'
tag: 'Linux'
description: 'Cours sur les utilisateurs, les groupes et les permissions en Linux'
heroImage: '/linuxperm.png'
---

# Les utilisateurs

Cette catégorie d’utilisateur regroupe les utilisateurs que vous allez créer dans le système, mais également les utilisateur généré par le système lors de la mise en place d’application, service, etc.

Ces utilisateurs on un champs d’action limiter sur la machine qui ce limite a une partie des commandes et des droits d’accès restreint a certain répertoire ou du moins des droits limité sur une partie d’entre eux.

Donc tout comme sous Windows l’utilisateur que vous créer lors de l’installation de l’OS n’a pas les plein droits sur la machine.

Si vous souhaitez changer d’utilisateur via la ligne de commande, il vous faudra utilise la commande `su` (pour switch User). Syntaxe : `su nomdelutilisateur`.

## Le super utilisateur (root)

En gros c'est le dictateur de la machine, il a tout les droits sur la machine, il peut tout faire, tout voir, tout modifier, tout supprimer, tout installer, tout désinstaller, tout casser, tout réparer, tout c'est tout.

Utiliser les privilèges du compte root. Pour ce faire il vous faudra utilisé la commande `sudo` (pour SuperUser Do). L’utilisation de cette commande est souvent accompagner de la demande d’un mot de passe (soit celui de votre utilisateur, soit celui de root en fonction de distribution et de la configuration effectué). Syntaxe `sudo command`. Attention la commande sudo ne confère la totalité des privilèges du compte utilisateur root. 

## Le home 

C'est bon d'etre chez soi, et bien c'est pareil pour les utilisateurs, chaque utilisateur a son propre répertoire personnel, qui est généralement situé dans `/home/nomdelutilisateur`.

Quand on ouvre un terminal, on est dans le répertoire personnel de l'utilisateur. Pour revenir dans le répertoire personnel de l'utilisateur, on peut utiliser la commande `cd` ou `cd ~`.

## Le fichier /etc/passwd

Le fichier `/etc/passwd` contient les informations sur les utilisateurs du système. Chaque ligne du fichier contient les informations suivantes sur un utilisateur :

- Nom d'utilisateur
- Mot de passe (généralement `x`, car le mot de passe est stocké dans le fichier `/etc/shadow`)
- UID (User ID)
- GID (Group ID)
- Description de l'utilisateur
- Répertoire personnel de l'utilisateur
- Shell de l'utilisateur

## Le fichier /etc/shadow

Le fichier `/etc/shadow` contient les mots de passe chiffrés des utilisateurs du système. Chaque ligne du fichier contient les informations suivantes sur un utilisateur :

- Nom d'utilisateur
- Mot de passe chiffré
- Dernière date de changement de mot de passe
- Durée minimale avant le changement de mot de passe
- Durée maximale avant le changement de mot de passe
- Durée d'avertissement avant le changement de mot de passe
- Durée d'inactivité avant le verrouillage du compte
- Date d'expiration du compte
- Réservé

Ce fichier est protégé en écriture et en lecture par l'utilisateur root. Il est donc impossible de le lire ou de le modifier sans les privilèges du compte root.
De plus, il est éxtrement important de ne pas modifier ce fichier sans savoir ce que vous faites, car une erreur peut rendre votre système inutilisable.

## Gesion des utilisateurs

Pour gérer les utilisateurs, vous pouvez utiliser les commandes suivantes :

- `useradd nomdelutilisateur` : pour ajouter un utilisateur
- `userdel nomdelutilisateur` : pour supprimer un utilisateur
- `usermod nomdelutilisateur` : pour modifier un utilisateur
- `passwd nomdelutilisateur` : pour changer le mot de passe d'un utilisateur
- `su nomdelutilisateur` : pour changer d'utilisateur
- `chfn nomdelutilisateur` : pour modifier les informations de l'utilisateur

<hr />

# Les groupes

Les groupes sont des ensembles d'utilisateurs qui partagent des droits d'accès à des fichiers et des répertoires. Les groupes permettent de simplifier 
la gestion des droits d'accès en attribuant des droits à un groupe plutôt qu'à chaque utilisateur individuellement.

## Le fichier /etc/group

Le fichier `/etc/group` contient les informations sur les groupes du système. Chaque ligne du fichier contient les informations suivantes sur un groupe :

- Nom du groupe
- Mot de passe (généralement `x`, car le mot de passe est stocké dans le fichier `/etc/gshadow`)
- GID (Group ID)
- Liste des utilisateurs du groupe

## Le fichier /etc/gshadow

Le fichier `/etc/gshadow` contient les mots de passe chiffrés des groupes du système. Chaque ligne du fichier contient les informations suivantes sur un groupe :

- Nom du groupe
- Mot de passe chiffré
- Liste des administrateurs du groupe
- Liste des membres du groupe

Ce fichier est protégé en écriture et en lecture par l'utilisateur root. Il est donc impossible de le lire ou de le modifier sans les privilèges du compte root.
De plus, il est éxtrement important de ne pas modifier ce fichier sans savoir ce que vous faites, car une erreur peut rendre votre système inutilisable.

## Gestion des groupes

Pour gérer les groupes, vous pouvez utiliser les commandes suivantes :

- `addgroup nomdugroupe` : pour ajouter un groupe
- `usermod -aG nomdugroupe nomdelutilisateur` : pour ajouter un utilisateur à un groupe
- `usermod -G nomdugroupe nomdelutilisateur` : pour modifier les groupes d'un utilisateur
- `delgroup nomdugroupe` : pour supprimer un groupe
- `groupmod nomdugroupe` : pour modifier un groupe

<hr />

# Les permissions

Les permissions sont des droits d'accès accordés aux utilisateurs et aux groupes pour lire, écrire et exécuter des fichiers et des répertoires. 
Les permissions sont attribuées à trois catégories d'utilisateurs : le propriétaire du fichier, le groupe propriétaire du fichier et les autres utilisateurs.

## Les permissions de fichiers

Les permissions de fichiers sont représentées par une série de 10 caractères. Les trois premiers caractères représentent les permissions du propriétaire du fichier,
les trois caractères suivants représentent les permissions du groupe propriétaire du fichier, et les trois derniers caractères représentent les permissions des autres utilisateurs.

Les permissions sont représentées par les caractères suivants :

- `r` : lecture
- `w` : écriture
- `x` : exécution
- `-` : absence de permission

## La commande chmod

La commande `chmod` permet de modifier les permissions d'un fichier ou d'un répertoire. La syntaxe de la commande est la suivante :

`chmod [permissions] [nomdufichier]`

Les permissions peuvent être spécifiées de deux manières :

- En mode symbolique : `chmod u=rwx,g=rw,o=r fichier.txt`
- En mode numérique : `chmod 755 fichier.txt`

Les permissions peuvent être modifiées de la manière suivante :

- `+` : ajouter une permission
- `-` : supprimer une permission
- `=` : définir une permission

## La commande chown

La commande `chown` permet de modifier le propriétaire et le groupe propriétaire d'un fichier ou d'un répertoire. La syntaxe de la commande est la suivante :

`chown [propriétaire]:[groupe] [nomdufichier]`

C'est un coup d'état en gros, vous prenez le contrôle du fichier ou du répertoire.

<hr />