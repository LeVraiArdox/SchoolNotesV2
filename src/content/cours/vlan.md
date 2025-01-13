---
title: "Les VLAN"
tag: "Réseaux"
description: "Cours sur les VLAN."
heroImage: "/network.png"
---

Toujours dans le but d'ameliorer et d'optimiser le fonctionnement des reseaux,
les chercheurs ont développé une technologie pour les switchs: les VLAN.

<br />
**Mais Jammy, c'est quoi un VLAN ?**
<br />
VLAN (virtual local area network) est un réseau local virtuel (nan jure).
C'est un réseau qui regroupe des machines sur un même réseau logique, mais qui
ne sont pas forcément sur le même réseau physique.
<br />
**Mais comment on les crée** ?
<br />
La réponse a l'aire complexe, mais en réalité c'est très simple.

La mise en place de VLAN revient a isoler logiquement les ports
se trouvant physiquement sur un switch. 

**Le but est de creer sur le meme port phyqique plusieurs reseaux virtuels
isolés logiquement les uns les autres, afin de rendre impossible la communication
entre eux.** (après on peut rendre la comm possible mais on verra ça plus tard).

![vlan](/vlan.png)
<br />
Derniers trucs a savoir:

- On peut creer **maximum 4096 VLAN** sur un switch (c'est pas mal). Cette valeur
dépend du type de switch et de la marque.
- Les VLAN sont numerotés de 1 a 4096. On peut aussi les nommer, ce qui est plus
pratique car on est pas des machines.
- Pour logiquement affecter un VLAN a un port, il faut que le port soit en mode
**Acces**. Le port pourra seulement communiquer avec les autres ports du meme VLAN.

**Mais Jammy, c'est quoi l'interet**
<br />
Demandez pas ça au prof, il va vous tuer. Mais en gros, ça permet de séparer
les flux: Les trames venant de machines ou équipements se trouvant sur un VLAN
ne pourront pas communiquer avec les autres VLAN. **C'est un peu comme des
appartements dans un immeuble, ils sont tous sur le meme immeuble, mais ils
ne se parlent pas.**

Aller, une petite definition: 
La **Segmentation** est le fait de diviser un réseau en plusieurs sous-réseaux
afin de limiter la diffusion des trames. Les VLAN sont une des solutions pour
segmenter un réseau. **Plus facilement, ça réduit la taille des domaines de broadcast.**

Et niveau sécurité ?
sur un VLAN, comme dit plus haut, les machines ne peuvent pas communiquer entre elles
si elles ne sont pas sur le meme VLAN. Le seul moyen de communiquer est de passer par
un routeur. **C'est un peu comme des voisins qui ne se parlent pas, mais qui peuvent
se parler par le gardien de l'immeuble.** On parle de sécurité implicite.

**Et si on veut que les VLAN communiquent entre eux ?**
<br />
Pour ça, deux prérequis:
- D'abord, il faut un **Trunk**. Un Trunk est un port qui va permettre de faire
passer plusieurs VLAN. C'est un peu comme un tuyau qui va permettre de faire
passer plusieurs liquides (ouais cherchez pas la logique de la metaphore). 
Pour ce faire, un champ supplémentaire, appelé **Tag** est ajouté a la trame.
Le Trunk permet également de faire circuler plusieures VLAN sur un meme cable.
- Ensuite, il faut un **Routeur**, et plus précisement un **Routeur Inter-VLAN**.
Ce routeur va creer des interfaces logiques (ou sub interfaces) et y faire figurer
l'identification du VLAN. A noter qu'il doit y avoir une interface par VLAN.

C'est a peu près tout pour les VLAN. C'est une technologie très utile et très
pratique pour les administrateurs réseaux. C'est un peu comme des legos, on peut
faire des trucs sympas avec.