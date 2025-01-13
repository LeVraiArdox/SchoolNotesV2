---
title: "NAT"
tag: "Réseaux"
description: "Cours sur le NAT (Network Address Translation)."
heroImage: "/network.png"
---

# NAT (Network Address Translation)

Le NAT (Network Address Translation) est une technique permettant de traduire les adresses IP d'un réseau en une seule adresse IP publique. 
Cela permet de masquer les adresses IP privées des appareils connectés à un réseau local.

**Mais Jammy, pourquoi faire ça?**

Et bien, c'est simple. Imaginez que vous avez un réseau local avec plusieurs appareils connectés.
Si vous voulez que ces appareils puissent accéder à Internet, vous avez besoin d'une adresse IP publique pour chacun d'eux.
Or, les adresses IP publiques sont limitées. C'est là qu'intervient le NAT.
<br />
Le NAT permet de masquer les adresses IP privées des appareils connectés à un réseau local derrière une seule adresse IP publique.
Ainsi, tous les appareils connectés à ce réseau local peuvent accéder à Internet en utilisant la même adresse IP publique.
<br />
**Mais comment ça marche?**
Lors de la translation d’adresse, le routeur qui effectue la translation va dans le paquet IP remplacer l’IP source privée
de l’expéditeur par l’IP public de son interface connecté à Internet. Ci-dessous une visualisation schématique du NAT.
<br />
![NAT](/NAT.png)
<br />
On trouvera deux grands types de traduction d’adresses internes :
- Les traductions statiques : Un routeur NAT dans ce cas maintient une table qui enregistre les adresses IP internes avec
les adresses IP publiques enregistrées. Ce type de NAT est principalement utilisé par les appareils existant dans un
réseau privé et nécessitant un accès Internet. On peut également établir des correspondances de ports TCP/UDP pour
réaliser ce que l’on appelle communément le transfert de ports (port forwarding en anglais) ou DNAT.
- Les traductions dynamiques : Un routeur NAT dans ce cas attribue dynamiquement une adresse IP publique à un appareil
interne lorsqu’il envoie un paquet à un serveur externe. Cette adresse IP publique est ensuite utilisée pour
transmettre les réponses du serveur externe à l’appareil interne. Ce type de NAT est principalement utilisé par les
fournisseurs d’accès Internet pour attribuer des adresses IP publiques à leurs clients.
  - Overloading : (appelé également NAT surchargé ou encore NAT Masquerable) est probablement le type de NAT le
plus utilisé. Vous pouvez configurer la surcharge NAT de deux manières, en fonction du nombre d'adresses IP
publiques dont vous disposez.
  - Overlapping : la correspondance entre une adresse IP interne (local) qui se chevauche avec des adresses externes
(d’un autre réseau local) et inversement. Cela peut être utile pour les entreprises qui ont des réseaux locaux
séparés qui doivent communiquer entre eux.
<br />
