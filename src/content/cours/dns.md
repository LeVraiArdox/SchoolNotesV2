---
title: 'Le protocole DNS'
tag: 'Réseaux'
description: 'Cours sur le protocole DNS.'
heroImage: '/network.png'
---


# Le protocole DNS

Le protocole DNS (Domain Name System) est un protocole de communication de la couche 7 du modèle OSI qui permet de traduire un nom de domaine en adresse IP. 
Il est utilisé pour résoudre les noms de domaine en adresses IP.

Le DNS est un service essentiel pour le fonctionnement d'Internet. Il permet de traduire les noms de domaine en adresses IP,
ce qui permet aux utilisateurs de se connecter à des sites Web en utilisant des noms de domaine plutôt que des adresses IP.

Le DNS est un système distribué qui utilise une hiérarchie de serveurs pour résoudre les noms de domaine en adresses IP.
Il est basé sur un modèle client-serveur, où les clients envoient des requêtes aux serveurs DNS pour résoudre les noms de domaine.

Le protocole DNS utilise le port 53 pour la communication entre les clients et les serveurs DNS. Ce port est attribué
par l'IANA (Internet Assigned Numbers Authority) pour le protocole DNS. Il ne peut pas être utilisé par d'autres protocoles.
<br />
<hr />
## Architecture du DNS

Le DNS est basé sur un système distribué hiérarchique qui utilise une structure en arbre pour organiser les noms de domaine.

Tout en haut de la hiérarchie se trouve la racine, qui est représentée par un point (.) et qui contient les serveurs racine.
Les serveurs racine sont les serveurs DNS de premier niveau qui contiennent des informations sur les serveurs de noms de domaine de premier niveau (TLD).

Les TLD (Top Level Domain) sont les domaines de premier niveau, tels que .com, .org, .net, etc.
Chaque TLD est géré par un registre qui est responsable de l'enregistrement des noms de domaine dans ce domaine de premier niveau.

Sous les TLD se trouvent les domaines de second niveau, qui sont les domaines immédiatement sous les TLD.
Par exemple, dans le domaine de premier niveau .com, les domaines de second niveau sont des noms de domaine tels que google.com, facebook.com, lvardox.com etc.

Les domaines de second niveau peuvent contenir des sous-domaines, qui sont des domaines qui sont un niveau de plus bas dans la hiérarchie.
Par exemple, dans le domaine google.com, les sous-domaines peuvent être notes.lvardox.com, discord.lvardox.com etc.

Les serveurs DNS sont organisés en zones, qui sont des parties de l'arbre de domaine pour lesquelles un serveur DNS est autoritaire.
Chaque zone contient des enregistrements de ressources qui associent des noms de domaine à des adresses IP.

En résumé
| www                  | google                   | com                       | .      |
|----------------------|--------------------------|---------------------------|--------|
| sous-domaine (alias) | domaine                  | TLD                       | racine |

Il existe deux grands types de TLD:
- **gTLD** (Generic Top-Level Domain) : .com, .org, .net, .edu, .gov, etc.
- **ccTLD** (Country Code Top-Level Domain) : .fr, .uk, .de, .jp, etc.

Le gTLD est géré par l'ICANN (Internet Corporation for Assigned Names and Numbers), tandis que le ccTLD est géré par des organisations nationales.
<br />

**FQDN**: Fully Qualified Domain Name, c'est un nom de domaine qui inclut tous les niveaux de la hiérarchie DNS, de la racine au nom de domaine.
Par exemple, www.google.com est un FQDN, tandis que google.com est un nom de domaine relatif.

<hr />

## La résolution de noms de domaine 

La résolution de noms de domaine est le processus par lequel un client DNS traduit un nom de domaine en adresse IP.

| Type d'enregistrement | Description                                                                        |
|-----------------------|------------------------------------------------------------------------------------|
| A                     | Enregistrement de ressource qui associe un nom de domaine à une adresse IPv4.      |
| AAAA                  | Enregistrement de ressource qui associe un nom de domaine à une adresse IPv6.      |
| CNAME                 | Enregistrement de ressource qui associe un alias à un nom de domaine.              |
| MX                    | Enregistrement de ressource qui spécifie le serveur de messagerie pour un domaine. |
| NS                    | Enregistrement de ressource qui spécifie les serveurs de noms pour un domaine.     |
| PTR                   | Enregistrement de ressource qui associe une adresse IP à un nom de domaine.        |
| SOA                   | Enregistrement de ressource qui spécifie les informations sur la zone DNS.         |
| SRV                   | Enregistrement de ressource qui spécifie les services disponibles pour un domaine. |
| TXT                   | Enregistrement de ressource qui contient des informations textuelles.              |
| GLUE                  | Enregistrement de ressource qui associe un serveur de noms à une adresse IP.       |
<br />
<hr />
## WWW

Le sous-domaine www est un alias pour le domaine de premier niveau. Il est souvent utilisé pour désigner le site Web principal d'une organisation.
Par exemple, www.google.com est l'alias pour google.com. Lorsqu'un utilisateur saisit www.google.com dans son navigateur, le navigateur envoie une 
requête DNS pour résoudre le nom de domaine en adresse IP.

En réalité, www n'est pas un simple alias, c'est plutôt une "norme" qui a été adoptée pour désigner le site Web principal d'une organisation.
Il est recommandé d'utiliser www pour le site Web principal et de rediriger le domaine de premier niveau vers www pour des raisons de cohérence et de 
facilité d'utilisation.
<br />
<hr />
## Les zones DNS

Pour faciliter la gestion des enregistrements DNS, les serveurs DNS sont organisés en zones. Une zone DNS est une partie de l'arbre de domaine pour 
laquelle un serveur DNS est autoritaire. Chaque zone contient des enregistrements de ressources qui associent des noms de domaine à des adresses IP.

L'ensemble des DNS qu'on a vu sont stockés dans des fichiers sur les serveurs DNS. Ces fichiers sont appelés des fichiers de zone.
- **Fichier de zone principale**: Contient les enregistrements de ressources pour la zone principale.
- **Fichier de zone inverse**: Contient les enregistrements de ressources pour la résolution inverse des adresses IP en noms de domaine.
<br />
<hr />
## La résolution de noms de domaine

Afin de pouvoir trouver l'adresse IP que le client cherche, le serveur DNS doit effectuer une résolution de noms de domaine.
En gros, il envoie une requête DNS qui va être "Connais tu l'adresse IP de cette machine ?" ayant pour hôte "notes.lvardox.com".
Le serveur DNS va alors chercher dans ses fichiers de zone si il connait l'adresse IP de "notes.lvardox.com".
Si il la connait, il renvoie l'adresse IP au client. Sinon, il va demander à un autre serveur DNS de résoudre le nom de domaine.
<br />
![DNS](/dns.png)
<br />