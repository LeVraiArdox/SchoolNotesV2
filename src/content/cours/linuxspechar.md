---
title: 'Les caractères spéciaux'
tag: 'Linux'
description: 'Cours sur les caractères spéciaux en Linux'
heroImage: '/bashspechar.png'
---

Dans cette section nous allons voir l’utilisation de certain caractère spéciaux dans les commandes qui auront des effet divers.

- **Le caractère * ** veut concretement dire "tout" ou "n'importe quoi". Il est utilisé pour remplacer un ou plusieurs caractères dans un 
nom de fichier ou de répertoire. Par exemple, si vous voulez supprimer tous les fichiers .txt dans un répertoire, vous pouvez utiliser la 
commande `rm *.txt`.
- **Le caractère ~ ** (ou squiguigui pour les intimes) est un raccourci pour le répertoire personnel de l'utilisateur. Par exemple, si vous
voulez vous rendre dans le répertoire personnel de l'utilisateur `user`, vous pouvez utiliser la commande `cd ~user`.
- **Le caractère $ ** est utilisé pour accéder à une variable d'environnement. Par exemple, si vous voulez afficher le répertoire courant, vous
pouvez utiliser la commande `echo $PWD`.
- **Le caractère \ ** est utilisé pour échapper un caractère spécial. Par exemple, si vous voulez afficher le caractère *, vous pouvez utiliser
la commande `echo \*`.
- ** Les caractères && ** sont utilisés pour exécuter plusieurs commandes en une seule ligne. Par exemple, si vous voulez afficher le répertoire
courant et le répertoire parent, vous pouvez utiliser la commande `echo $PWD && echo $PWD/..`.
- ** Le caractère & ** est utilisé pour exécuter une commande en arrière-plan. Par exemple, si vous voulez exécuter une commande qui prend du temps,
vous pouvez utiliser la commande `commande &`. Attention cependant, si vous fermez la fenêtre du terminal, la commande sera interrompue.
- ** Le caractère | ** est utilisé pour rediriger la sortie d'une commande vers l'entrée d'une autre commande. Par exemple, si vous voulez afficher
les fichiers .txt dans un répertoire, vous pouvez utiliser la commande `ls | grep .txt`.
- ** Le caractère > ** est utilisé pour rediriger la sortie d'une commande vers un fichier. Par exemple, si vous voulez afficher le répertoire courant
dans un fichier, vous pouvez utiliser la commande `echo $PWD > fichier.txt`.
- ** Le caractère >> ** est utilisé pour ajouter la sortie d'une commande à un fichier. Par exemple, si vous voulez ajouter le répertoire parent à un fichier,
vous pouvez utiliser la commande `echo $PWD/.. >> fichier.txt`.
- ** Le caractère < ** est utilisé pour rediriger l'entrée d'une commande à partir d'un fichier. Par exemple, si vous voulez afficher le contenu d'un fichier,
vous pouvez utiliser la commande `cat < fichier.txt`.
- ** Le caractère `<<`** est utilisé pour rediriger l'entrée d'une commande à partir d'une chaîne de caractères. Par exemple, si vous voulez afficher une chaîne de caractères,
vous pouvez utiliser la commande `cat << EOF`.
- ** Le caractère ; ** est utilisé pour séparer les commandes sur une seule ligne. Par exemple, si vous voulez afficher le répertoire courant et le 
répertoire parent sur une seule ligne, vous pouvez utiliser la commande `echo $PWD; echo $PWD/..`.
- ** Les caractères &> ** sont utilisés pour rediriger la sortie standard et la sortie d'erreur d'une commande vers un fichier. Par exemple, si vous voulez
afficher le répertoire courant et le répertoire parent dans un fichier, vous pouvez utiliser la commande `echo $PWD &> fichier.txt`.
- ** Les caractères 2> ** sont utilisés pour rediriger la sortie d'erreur d'une commande vers un fichier. Par exemple, si vous voulez afficher le 
répertoire courant dans un fichier et rediriger les erreurs vers un autre fichier, vous pouvez utiliser la commande `echo $PWD > fichier.txt 2> erreur.txt`.
- ** Les caractères || ** sont utilisés pour exécuter une commande si la commande précédente a échoué. Par exemple, si vous voulez afficher le répertoire
courant et le répertoire parent, même si la première commande a échoué, vous pouvez utiliser la commande `commande1 || commande2`.
- ** Le caractère '' ** est utilisé pour échapper une chaîne de caractères. Par exemple, si vous voulez afficher une chaîne de caractères avec des espaces,
vous pouvez utiliser la commande `echo 'Bonjour le monde'`. La différence avec " est que les variables ne sont pas interprétées.
- ** Le caractère "" ** est utilisé pour échapper une chaîne de caractères. Par exemple, si vous voulez afficher une chaîne de caractères avec des espaces,
vous pouvez utiliser la commande `echo "Bonjour le monde"`. La différence avec ' est que les variables sont interprétées.
- ** Le caractère {} ** est utilisé pour regrouper des commandes. Par exemple, si vous voulez afficher le répertoire courant et le répertoire parent
sur une seule ligne, vous pouvez utiliser la commande `echo $PWD && { echo $PWD/..; echo $PWD/../..; }`.
- ** Le caractère [] ** est utilisé pour définir des options facultatives. Par exemple, si vous voulez afficher le répertoire courant et le répertoire parent
sur une seule ligne, vous pouvez utiliser la commande `echo $PWD && [ echo $PWD/.. ]`.
- ** Le caractère () ** est utilisé pour exécuter des commandes dans un sous-shell. Par exemple, si vous voulez afficher le répertoire courant et le répertoire parent
sur une seule ligne, vous pouvez utiliser la commande `echo $PWD && ( echo $PWD/.. )`.
- ** Le caractère # ** est utilisé pour commenter une ligne. Par exemple, si vous voulez ajouter un commentaire à une commande, vous pouvez utiliser 
la commande `echo $PWD # Affiche le répertoire courant`.
- ** Le caractère ` ** est utilisé pour exécuter une commande et utiliser le résultat dans une autre commande. Par exemple, si vous voulez afficher le répertoire
courant et le répertoire parent sur une seule ligne, vous pouvez utiliser la commande `echo $PWD && echo `pwd`/..`.
