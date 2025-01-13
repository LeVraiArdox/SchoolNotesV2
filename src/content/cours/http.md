---
title: "HTTP et HTTPS"
tag: "Réseaux"
description: "Cours sur HTTP et HTTPS."
heroImage: "/network.png"
---


HTTP (Hypertext Transfer Protocol) et HTTPS (Hypertext Transfer Protocol Secure) sont des protocoles de communication utilisés pour transférer des données sur le Web.
HTTPS est une version sécurisée de HTTP qui utilise le chiffrement (comme SSL ou TSL) pour protéger les données pendant le transfert.

HTTP est un protocole de communication de la couche application son rôle est déterminé comment la page Web est
transmise du serveur au client, de ce fait ils ne peuvent donc à eux seuls assurer le fonctionnement d’un service
Web.

Afin de fournir un service Web complet, HTTP doit fonctionner avec d’autres protocoles ou langages tels que :
- **HTML** (HyperText Markup Language) : définit la structure et le contenu de la page Web. C'est le squelette de la page.
- **CSS** (Cascading Style Sheets) : définit la présentation de la page Web. C'est le design de la page.
- **URI** (Uniform Resource Identifier) : permet d’identifier les ressources abstraites ou physiques sur internet.

L’ensemble des normes concernant le formatage des pages WEB et le fonctionnement des protocoles et langages qui
y sont liés est géré par le World Wide Web Consortium plus connu par les développeurs sous le sigle W3C.

Actuellement nous utilisons principalement la version 2 de ces protocoles qui fonctionne avec le protocole de
transport TCP sur les port 80 (HTTP) et 443 (HTTPS).
Cependant la prochaine version d HTTP : HTTP3 repose sur le protocole QUIC, développé par Google en 2012 et
adopté en novembre 2018, l’IETF (Internet Engineering Task Force)

Les clients HTTP les plus connus sont les navigateurs Web permettant à un utilisateur d'accéder à un serveur contenant
les données. Il existe aussi des systèmes pour récupérer automatiquement le contenu d'un site tel que les aspirateurs de
site Web ou les robots d'indexation.

![HTTP](/httpdummies.png)
<br />
## Les codes de statut HTTP
Les codes de statut HTTP sont des codes numériques qui indiquent le résultat d'une requête HTTP. Ils sont divisés en cinq classes :
- **1xx** : Informationnel - La requête a été reçue et le processus continue.
- **2xx** : Succès - La requête a été reçue, comprise et acceptée.
- **3xx** : Redirection - Il faut prendre des mesures supplémentaires pour compléter la requête.
- **4xx** : Erreur du client - La requête contient une syntaxe incorrecte ou ne peut pas être satisfaite.
- **5xx** : Erreur du serveur - Le serveur a échoué à remplir une demande apparemment valide.

Voici quelques exemples de codes de statut HTTP :
- **200 OK** : La requête a réussi.
- **301 Moved Permanently** : La ressource demandée a été déplacée de façon permanente.
- **404 Not Found** : La ressource demandée n'a pas été trouvée.
- **500 Internal Server Error** : Une erreur interne du serveur s'est produite.

Les codes de statut HTTP sont utiles pour diagnostiquer les problèmes de communication entre les clients et les serveurs Web.
<br />
