---
title: 'Etude du reseau avec OSI et TCP/IP'
tag: 'Réseaux'
description: "Au secours, c'est long"
heroImage: '/network.png'
---

Ce cours est TREEEEEES long


Maintenant que nous connaissons les deux modèles nous permettant d’analyser ce qui se passe sur le réseau, nous
allons étudier en détails chacune des couches afin de comprendre leurs rôles et fonctionnements.
<br />
Pour se faire, nous utiliserons en parallèle les deux modèles, nous commencerons avec la couche 1 physique, pour
remonter jusqu’à la couche 7 Application.
<br />
<hr />

## Couche 1 : Physique
Le rôle principal de cette couche est de fournir un support pour transmettre la communication. Comme nous l’avons vu
dans le cours précédent. Tout réseau est basé sur un support de communication, il peut être filaire ou sans-fil.
<br />
Pour rappel, les principaux supports sont : les câbles pairs torsadés ou fils électriques (CPL), la fibre optique qui utilise
la lumière et le Wi-Fi qui utilise des ondes électromagnétiques de type micro-ondes.
<br />
Dans notre couche 1 **les signaux sont interprétés et sont convertis en bits et peuvent prendre deux valeurs 0 ou 1**.

Mais pourquoi les valeurs 0 et des 1 et pourquoi seulement deux valeurs ?
<br />
Ce choix est lié à une caractéristique technique des machines et équipements qui compose le réseau.
<br />
Nous trouvons dans nos machines des composants électroniques, qui sont alimentés par un courant électrique dont la
tension (qui s’exprime en volt : V ) varie entre 0V et 5V.
Si je n’ai que ces deux valeurs il est facile de faire la
distinction. On peut même le représenter graphiquement
par une courbe (sinusoïde) comme le montre le schéma ci-
contre.
<br />
**0 étant égale à l’absence de courant électrique ce qui
correspond à 0V et 1 correspond à la présence du
courant électrique soit 5V.**
<br />
![Physique](/physique.png)
<br />
Mais vous allez me dire, que je viens de dire que la tension
varient entre 0V et 5V. Ce qui induit la question suivante :
Comment interpréter les tensions 1, 2, 3 et 4 Volt ?
<br />
Et bien la réponse à cette question est très simple en réalité le 0 et le 1 ne correspondent pas uniquement a 0V et 5V.
- 0 : correspond en réalité à une tension comprise entre 0V et 1,9V. Pour ces valeurs là, on considéra que le courant est
inexistant, on dit que la valeur est fausse (anglais fasle)
- 1 : correspond en réalité à une tension comprise entre 2V et 5V. Pour ces valeurs là on considéra que le courant est
existant ou on dit que la valeur est vraie (anglais true)
<br />
Au premièr abord cela va vous paraitre bizarre, voir même imprécis de simplifier autant les choses et induire la question
suivante : Pourquoi ne pas attribuer un système avec plus de valeur ?
<br />
Et bien essayons en donnant une valeur allant 0 et
5 pour les tensions 0V, 1V, 2V, 3V, 4V et 5V cela
donnera la courbe ci-contre qui au premier abord
parait beaucoup plus précise.
<br />
Mais alors du coup comme çà se passe si j’ai pas pile poil 3V mais 3,3. En effet les tensions électriques sont toujours des
nombres ronds il nous faudrait donc encore plus de valeur pour tous les coder. Cela serait encore plus précis mais
également plus compliqué à gérer et notamment dans un cas particulier.
<br />
A votre avis lequel ?
<br />
La réponse vient des potentiels perturbations
électromagnétiques du courant.
<br />
En effet dans ce type d’événement physique la tension
du courant peut se retrouver altérée, une tension de
3V pourrait baisser à 2V ou monter à 4V comme le
montre la courbe ci-contre.
<br />
Mais du coup comment savoir si notre 4V n’est pas en
fait un 3 Volt avec une augmentation de tension ou 5V
avec une perte de tension. Et bien la réponse à la
question est impossible à déterminer.
<br />
Et c’est ici qu’on voit l’intérêt du binaire avec seulement deux valeurs on diminue drastiquement les problèmes
d’erreur en cas de perturbation du courant électrique.
<br />
![Physique2](/physique2.png)
<br />
<hr />

## CSMA/CD et CSMA/CA
Ces deux protocoles que nous avons vus lors de la présentation des couches du modèle OSI et TCP/IP ont pour fonction
la détection des collisions dans les réseaux.
- Le CSMA/CD : (Carrier Sense Multiple Access / Collision Detection) est le protocole qui a en charge la détection
des collisions dans les topologies en BUS ou sur les infrastructures utilisant des HUB (ancêtre du switch).
<br />
Ce protocole n’est quasiment plus utilisé, mais il est nécessaire d’en parler pour évoquer d’autres éléments importants
du réseau que nous verrons par la suite. La disparition de ce protocole est lié à l’abandon du hub au profit du switch et à
la disparition de la topologie en bus ainsi que d’autres éléments que nous verrons plus loin.
<br />
**Comment fonctionne le CSMA/CD** ?
<br />
Son fonctionnement est simple, tout machine connectée au réseau écoute ce dernier pour vérifier si une autre machine
est en train de transmettre de la donnée. Si le réseau est libre elle envoie son message *(à l’époque il était impossible que deux
machines communiquent en même temps sur le même segment de réseau).*
<br />
Si tout se passe bien le message est délivré au destinataire, toutefois il peut y avoir des collisions, même si la machine a
au préalable écouté le réseau. Ce phénomène est dû à la latence dans le réseau, deux machines qui écoutent ne peuvent
pas forcément se détecter dans le délai imparti et donc envoyer de la donnée en même temps ce qui induit une collision.
<br />
Dans le cas où il y a une collision un délai d’attente aléatoire sera calculé indépendamment par chaque machine avant de
renvoyer la donnée.
<br />
Ce procédé sera répété en boucle pour toutes les communication du réseau. On peut le visualiser grâce à ce schéma.
<br />
![CSMA/CD](/csmacd.png)
<br />
- Le CSMA/CA : (Carrier Sense Multiple Access with Collision Avoidance) est le protocole qui s’occupe de la
détection des collisions utilisée dans les réseaux Wi-Fi.
<br />
Dans un environnement sans fil, le procédé du CSMA/CD n'est pas toujours utilisable dans la mesure où deux stations
voulant communiquer avec un récepteur commun peuvent être tellement éloignées l’une de l’autre qu’elles ne
peuvent se détecter et donc encore moins s'entendre. Cela est dû à la portée du signal (Wi-Fi). Ainsi la norme
802.11 (norme du Wi-Fi) propose le protocole CSMA/CA pour palier à ce problème.
<br />
Pour éviter cela, un équipement est considéré comme le maître des transmissions et autorise ou non une station à
communiquer lorsque celle-ci le demande.
<br />
Pour cela, la station doit émettre une courte trame RTS (Request To Send) contenant quelques informations sur la
communication (débit, longueur de la trame, etc.). Si la station maître accepte cette communication, elle renvoie
alors une trame CTS (Clear To Send) et la station peut transmettre son message. En revanche, si la station ne
reçoit pas de messages elle doit attendre à nouveau avant de redemander une autorisation d'émettre.
<br />
![CSMA/CA](/csmaca.png)
<br />
<hr />

## Couche 2 : Liaison de données
Cette couche peut être subdivisée en deux sous-couches la couche MAC et la couche LLC
- La couche MAC : permet aux machines connectées de communiquer entre elles. Nous verrons par la suite comment
établir cette communication.
- La couche LLC : permet la détection des erreurs de transmission, mais attention nous avons dit détection et pas
correction. La différence est très importante, car la couche 2 voit les erreurs, mais ne règle pas le problème pour autant.
<br />
Comment se passe la communication entre les machines ?

Pour répondre à cette question, nous allons faire un comparatif avec une simple discussion et nous verrons que selon les
situations des problèmes vont se poser.
<br />
**Premier cas : une discussion comportant deux participants**
<br />
Pour pouvoir discuter ensemble lorsque nous sommes deux ce n’est pas très compliqué. L’un des interlocuteurs parle
(c’est l'émetteur) l’autre écoute (c’est le récepteur). Et de manière cyclique, les rôles vont s’inverser entre le participant A et
le participant B (du moins la plupart du temps).
<br />
Dans ce cas, comme nous avons que deux personnes, il est possible pour les interlocuteurs discutent sans même
connaître leurs noms ou prénoms.
<br />
**Second cas : une discussion comportant trois participants ou plus**
<br />
Dans ce cas, si les participants ne s’identifient pas (nom ou prénom), il y a de fortes probabilités de rencontrer des
problèmes de communication au cours de la discussion. Les problèmes de communication augmenteront de manière
exponentielle avec le nombre de participants. Des questions vont rester sans réponse, ou ce ne sera pas la bonne
personne qui y répondra.
<br />
C’est cette problématique que l’on retrouve dans les réseaux informatiques. Il est impératif pour garantir le bon
fonctionnement du réseau de savoir qui a envoyé la donnée. Pour résoudre ce problème, la couche 2 dispose d’un
identifiant : l’adresse MAC.
<br />
Mais avant d'étudier cette dernière je vais introduire une notion importante qui reviendra régulièrement quand on parle
de réseau
<br />
**Modes de communication**
- **Unicast** : Communication entre un expéditeur et un destinataire, similaire à une discussion.
- **Multicast** : Un expéditeur communique avec plusieurs destinataires, comme un mail groupé.
- **Broadcast** : Un expéditeur communique avec tous les membres d'un réseau, comparable à une émission de radio ou de télé, mais nécessite que les destinataires soient connectés au réseau.
- **Anycast** : Un expéditeur envoie un message à un groupe de destinataires, sans se soucier de qui le reçoit, tant qu'un membre du groupe le réceptionne. Utilisé notamment pour le routage.
<br />
**Adresse MAC**
<br />
L'adresse MAC est un identifiant unique pour chaque carte réseau (switch, routeur, ordinateur, serveur, etc.). Elle se situe à la couche 2 du modèle OSI et est codée sur 48 bits (6 octets) en hexadécimal (base 16 : chiffres 0-9 et lettres A-F, majuscules ou minuscules).
<br />
Exemple d’adresse MAC **5E:FF:56:A2:AF:15**
<br />
Les trois premiers octets dans notre exemple **5E:FF:56** sont réservés à l'identification du constructeur c’est ce qu’on
appelle le OUI (Organizationally Unique Identifier). Et les trois derniers octets dans notre exemple **A2:AF:15** sont
réservés à l’identification de la machine.
<br />
Il existe deux notations alternatives MAC (tout dépend du constructeur).

Elle peut être notée de cette façon 5EFF-56A2-AF15 comme sur les équipements Cisco par exemple, ou de cette façon
5E-FF-56-A2-AF-15 comme sur Windows.
<br />
Comme dit plus haut l’adresse MAC est un identifiant unique. De combien en dispose-t-on?

La réponse exacte à cette question est 281 474 976 710 656 soit en valeur approximative 281 000 milliards d’adresses
MAC possibles.

Pour terminer avec l’adresse MAC, notez qu’il en existe une qui n’est pas affectable, il s’agit de l’adresse
FF:FF:FF:FF:FF:FF, il s’agit de l’adresse de broadcast* de niveau deux.

**Broadcast** : Un broadcast dans un réseau d’ordinateurs est un message transmis à tous les participants 
du réseau sans nécessiter de réponse. Un ordinateur envoie un paquet de données simultanément à tous les 
autres participants. Contrairement à l’unicast, l’émetteur n’a pas besoin d’indiquer les adresses des destinataires. 
L’avantage du broadcast est qu’il permet de diffuser largement les informations avec une seule transmission.
<br />

**Binaire et Hexadécimal**
<br />
Commençons par un petit rappel: le binaire et l’hexadécimal sont tous les deux des système numériques et plus
précisément des bases arithmétiques. En arithmétique, une base désigne la valeur dont les puissances successives
interviennent dans l'écriture des nombres, ces puissances définissant l'ordre de grandeur de chacune des positions
occupées par les chiffres composant tout nombre.
<br />
Il y en a d’autres bien évidement dont certaines que l’on utilise tous les jours : la bases 10 ou base décimal que l’on
utilise tous les jours pour compter ou la base 60 pour le calcul du temps.
<br />
- Le binaire.

  Comment calculer en binaire ?
  En binaire, chaque chiffre (bit) est une puissance de 2, car nous sommes en base 2. La retenue intervient tous les 2 caractères, 
  contrairement à la base 10 où elle intervient tous les 10 caractères. Chaque bit est donc deux fois plus grand que le précédent.
  ![Binaire](/bintable.png)
  Comment convertir un nombre décimal en binaire ?
  Pour convertir un nombre décimal en binaire, on utilise la fonction ET logique. Cette fonction compare deux valeurs et retourne VRAI (1) si 
  les deux conditions sont remplies, sinon FAUX (0). 
  Pour la conversion, on vérifie si la valeur décimale est ≥ à la puissance de 2 correspondante. Si c'est vrai, le bit est 1, sinon il est 0.
  ![Binaire2](/bintodec.png)
  Par exemple, 21 en binaire s’écrit : 10101. Les premiers bits à 0 sont inutiles dans une simple conversion.
  Pour expliquer les 256 valeurs possibles dans un octet, multiplions les valeurs possibles par bit (2) par celles des autres bits : $2^8 = 256$.
  Pourquoi les puissances de 2 sont-elles rangées dans l’ordre décroissant dans un octet et pas dans l’ordre croissant ?
  Si les puissances de deux ne sont pas rangées dans l’ordre croissant, on ne pourra pas convertir l’ensemble des nombres décimaux.

<br />

- L'hexadécimal.

  L'hexadécimal est crucial en informatique, notamment pour les adresses MAC. En mathématiques, nous avons 10 chiffres (0-9), 
  mais en hexadécimal, nous utilisons 16 caractères. Pour cela, nous ajoutons les lettres A à F (majuscule ou minuscule) aux 
  chiffres 0 à 9, formant ainsi le tableau suivant :
  ![Hexadécimal](/hextable.png)
  Maintenant que nous avons compris comment est conçue la base 16, nous allons effectuer des conversions à savoir :
    - Conversion décimale vers hexadécimal
    - Conversion binaire vers hexadécimal

  **Conversion d’un nombre décimal en hexadécimal**

  Afin de convertir une valeur décimale en hexadécimale, il faut réaliser une division euclidienne par 16. Donc si nous
  voulons par exemple convertir la valeur décimale 79 en hexadécimal, nous allons faire les opérations suivantes

  Étape 1 : Comme dit ci-dessus on effectue une division euclidienne sur 79 ce qui nous donne le résultat suivant :
  $$
  79 / 16 = 4 \text{reste} 15
  $$
  Étape 2 : On continue la division en divisant cette fois-ci le quotient par 16 donc ce qui donne ceci :
  $$
  4 / 16 = 0 \text{reste} 4
  $$
  Étape 3 : Nous pouvons maintenant trouver notre valeur hexadécimale. Pour se faire, nous allons prendre les valeurs des
  restes (15 / 4) en remontant du dernier vers le premier. Pour les restes qui sont égaux aux valeurs 10, 11, 12,
  13, 14 et 15, nous les remplaçons par leurs valeurs hexadécimales.

  Donc 4 = 4 et 15 = F

  Ce qui nous donne pour notre exemple 79 en hexadécimal : 4F
  <br />
  Maintenant nous allons effectuer une conversion de la valeur hexadécimale 9B en décimal:

  Étape 1 : Pour commencer nous allons simplement écrire l’égalité que nous devons résoudre, ce qui nous donne l’égalité
  ci-contre.
    $$
    9B_{(16)} = x_{(10)}
    $$
  Étape 2 : Nous allons maintenant donner un rang (ou poids) à chaque quartet* de notre valeur hexadécimale, en
  commençant par le quartet le plus à droite qui pour rang 0. Le quartet suivant aura pour rang 1 et ainsi de suite. Ce qui
  dans notre exemple donne donc un rang de 0 pour B et un rang de 1 pour 9.

  **En informatique un quarter (ou nibble en anglais, signifiant grignoter) désigne un agrégat de 4 bits, soit un demi-octet.*

  $$
    10 >> 9B_{(16)} = x_{(10)}
  $$

  Étape 3 : Passons au calcul. Afin de pouvoir effectuer ce calcul nous allons multiplier chaque quarter de notre valeur
  décimale par 16n, [n] étant égale à la valeur du rang du quartet. *(nous multiplions par 16 car nous sommes en bases 16)*.
  Ce qui nous donne donc le calcul suivant :
  $$
  9B_{(16)} = x_{(10)} = 9*16^1 + 11*16^0
  $$

  Étape 4 : Une fois le calcul effectué on trouve donc le résultat ci-dessous :
  $$
    9B_{(16)} = x_{(10)}
  $$
  $$
   = 9*16^1 + 11*16^0 
  $$
  $$
   = 9*16 + 11*1
  $$
  $$
   = 144 + 11
  $$
  $$
   = 155
  $$
  <br />

  **Conversion binaire vers hexadécimal**
  Afin de convertir du binaire en hexadécimal, nous pourrions tout
  simplement faire une étape intermédiaire en passant par le
  décimal. Afin de gagner du temps, voici un tableau de
  correspondance binaire hexadécimal.

  | Hexadécimal | Binaire | Hexadécimal | Binaire |
  |-------------|---------|-------------|---------|
  | 0           | 0000    | 8           | 1000    |
  | 1           | 0001    | 9           | 1001    |
  | 2           | 0010    | A           | 1010    |
  | 3           | 0011    | B           | 1011    |
  | 4           | 0100    | C           | 1100    |
  | 5           | 0101    | D           | 1101    |
  | 6           | 0110    | E           | 1110    |
  | 7           | 0111    | F           | 1111    |
  <br />
  En s’appuyant sur notre tableau on peut donc écrire en binaire une
  adresse MAC:

    ```
    5E:FF:56:A2:AF:15
    01011110:11111111:01010110:10100010:10101111:00010101
    ```
<br />
<br />

  Le champ FCS (Frame Check Sequence) codé sur 4 octets qui permet de valider l'intégrité de la trame à 1 bit
  près. Il utilise un CRC (Cyclic Redundancy Check) qui englobe tous les champs de la trame. Ainsi, la station
  réceptrice peut décider si la trame est correcte et doit être transmise à la couche supérieure : LLC
<br />
Nous avons vu quels éléments étaient nécessaires aux machines pour communiquer ensemble. Mais nous n’avons pas vu
comment celles-ci dialoguaient entre elles, ou plutôt comment et à l’aide de quoi ces dernières interprètent les bits
circulant en couche 1.
<br />
Le protocole Ethernet va nous permettre deux choses :
- Définir la signification des 0 et 1 circulant sur la couche 1
- Déterminer l’ordre dans lequel les informations doivent circuler
<br />
Ce qui va permettre de structurer le message et comprendre le message, qu’on appelle trame. Cette trame peut prendre
plusieurs formes que nous allons devoir décortiquer dans les prochaines pages.

**À noter : en couche 2 il y a d’autres protocoles qu’Ethernet, mais il est de très loin le plus utilisé**.

**Ethernet II**
<br />
Les trames Ethernet modernes ont d'abord été utilisées dans la structure Ethernet II avant d'être standardisées en 
1983 par l'IEEE sous le protocole IEEE 802.3. Étudions cette structure et ses variations.
<br />
Voici les différents champs qui composent le cœur de la trame; l’ensemble des champs est égal à 1518 octets :
- Les adresses MAC destinataire et expéditeur, chacune codée sur 6 octets. Placer l'adresse du destinataire 
  en premier permet de savoir immédiatement si le message nous est destiné.
- Le champ longueur / type : qui indique le protocole utilisé en couche 3 pour transmettre la donnée, codé sur
  2 octets.
- La donnée avec un minimum attendu de 46 octets et maximum de 1500.
- Le champ FCS (Frame Check Sequence) codé sur 4 octets qui permet de valider l'intégrité de la trame à 1 bit
  près. Il utilise un CRC (Cyclic Redundancy Check) qui englobe tous les champs de la trame. Ainsi, la station
  réceptrice peut décider si la trame est correcte et doit être transmise à la couche supérieure : LLC
<br />
