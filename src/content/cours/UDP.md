---
title: "TCP et UDP"
tag: "Réseaux"
description: "Cours sur les protocoles TCP et UDP."
heroImage: "/network.png"
---


UDP signifie **User Datagram Protocol**, et il s'agit d'un protocole de communication sans connexion. Le protocole
UDP est une alternative au protocole TCP.

Il ne garantit pas l’arrivée de la donnée à bon port. C'est un courrier simple.

Lorsque le protocole UDP est utilisé pour transporter les données, il va envoyer les données d'un hôte source vers un
hôte de destination, **sans chercher à savoir si l'hôte de destination a bien reçu l'ensemble des données**. Autrement
dit, il n'y a pas de vérification des erreurs : si l'on envoie un fichier via UDP, on ne sait pas si l'hôte distant a reçu
entièrement ce fichier ou s'il l'a reçu partiellement (ou si il ne l'a pas reçu tou court).

Note : lorsque l'on parle du protocole UDP, on évoque le principe du "fire and forget" c'est-à-dire "tire et oublie"
puisqu'avec UDP on envoie les paquets puis on ne s'en occupe plus, comme si on avait oublié qu'un paquet avait
été envoyé.

Puisque l'on ne vérifie pas que l'hôte distant a bien reçu les données, on économise des ressources, mais aussi du temps,
donc **le protocole UDP est plus rapide que le protocole TCP**.

Les unités de transmission de base, sur lesquelles repose le protocole, sont des datagrames.

L'en-tête d'un segment UDP contient très peu de champ : **le port source, le port de destination, la longueur totale du
datagrame, la somme de contrôle (pour vérifier l'intégrité du segment envoyé par le réseau) et les données**.
<br />
<hr />

## Quelles applications utilisent UDP ?
Du fait de sa structure minimaliste et de l’absence de mécanismes visant à garantir une transmission complète et
réussie, le User Datagram Protocol **n’est pas utilisé comme protocole de transport universel**. Au départ, il a plutôt été
conçu pour les applications ne nécessitant pas (encore) de service de transmission fiable. Par conséquent, le domaine
d’application de l’UDP est plutôt limité, mais souligne son énorme valeur comme le prouvent les **classes d’applications
suivantes pour UDP** :
<br />
- **Les applications « best effort delivery » (livraison des données best effort)**: le scénario d’utilisation classique de
l’UDP porte sur les applications basées sur une « livraison des données best effort ». Une transmission peu fiable des
informations suffit aux programmes utilisant l’User Datagram Protocol comme service « best effort », car ils
renouvellent régulièrement les informations quoiqu’il arrive. On peut citer comme exemple les applications qui
transmettent les valeurs mesurées ou qui exécutent toujours les mêmes tâches.
<br />
- **Les applications légères** : la faible surcharge de ce protocole de transport offre une aide optimale aux applications
construites de façon extrêmement simple. En association avec une absence d’établissement de connexion, ces
programmes profitent d’une performance particulièrement élevée dans le cadre du traitement et de la transmission de
paquets de données dans les réseaux.
<br />
- **Les applications disposant de mécanismes propres pour une transmission fiable** : l’UDP peut également s’avérer
intéressant pour les applications qui dépendent d’un échange d’informations fiable, mais disposent de mécanismes
propres pour répondre aux paquets. L’avantage de tels services est qu’ils ne sont pas tenus à des modèles fixes pour
garantir l’intégrité et l’exactitude des paquets de données envoyés. Ils peuvent décider de façon autonome comment et
quand réagir à des informations manquantes ou classées de façon arbitraire.
<br />
- **Les applications multicast** : tandis que les protocoles de transport fiables comme le TCP sont limités à l’utilisation
d’une communication de bout en bout, le protocole UDP supporte également les connexions IP multicast. Si une
application doit pouvoir envoyer simultanément des paquets IP de façon rapide et efficace à de nombreux destinataires,
l’UDP constitue une base adaptée.
<br />
- **Applications en temps réel (real-time applications)** : pour finir, l’UDP est également adapté comme protocole de
transport pour les services travaillant avec des exigences en temps réel – par exemple le streaming audio ou vidéo. Ces
derniers doivent pouvoir gérer de façon autonome l’envoi, la réception et la diffusion de flux de données, ce qui est
parfaitement possible avec la transmission UDP sans connexion.