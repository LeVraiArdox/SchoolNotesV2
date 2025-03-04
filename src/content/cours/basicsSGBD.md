---
title: 'Les SGBD'
tag: 'Bases de données'
description: 'Cours sur les Systèmes de Gestion de Bases de Données.'
heroImage: '/sgdb.png'
---

Une base de donnée est une collection de données **structurées** suivant la réalité modélisée. 

On trouve les bases de données partout: Sites marchands, reseaux sociaux, applications financières, gestion des comptes etc.

Il existe deux types de BDD: 
- Les BD relationelles (prédominants: données de gestion)
- Les BD objet, NoSQL (orientées web, orientées documents, données non structurées)

Un **SGBDR** est un système de gestion de base de données relationelles. C'est different d'un système de fichiers en plusieurs points:

- Accès au données: Un SGBD permet d'accéder aux données de manière structurée, en utilisant un langage de requête (SQL).
- Redondance des données: Un SGBD permet de réduire la redondance des données, en utilisant des relations.
- Performance d'accès: Un SGBD permet d'optimiser les accès aux données, en utilisant des index, des vues, des procédures stockées, des triggers, etc.
- Concurence d'accès: Un SGBD permet de gérer la concurrence d'accès aux données, en utilisant des verrous, des transactions, etc.
- Sécurité et protection des données: Un SGBD permet de gérer la sécurité et la protection des données, en utilisant des droits d'accès, des rôles, des profils, etc.
- Intégrité des données: Un SGBD permet de garantir l'intégrité des données, en utilisant des contraintes d'intégrité, des déclencheurs, etc.

![SGBD](/sgbd.png)

Il y a **3 etapes** pour la conception d'une base de données:

1. **Modélisation conceptuelle**: On modélise la réalité à l'aide d'un modèle conceptuel de données (MCD). Ce niveau représente le contenu de la base de données, sans se soucier de la manière dont les données sont stockées. Par exemple, il y a des étudiants dans une ecole, donc on a une **entité** `Etudiant` avec des attributs `nom`, `prenom`, `date_naissance`, etc.
2. **Modélisation logique**: On transforme le MCD en un modèle logique de données (MLD). Ce niveau représente la manière dont les données sont stockées dans la base de données. Par exemple, on a une table `Etudiant` avec des colonnes `nom`, `prenom`, `date_naissance`, etc.
3. **Modélisation physique**: On implémente le MLD dans un SGBD. Ce niveau représente la manière dont les données sont stockées sur le disque dur. Par exemple, on a une table `Etudiant` stockée dans un fichier `Etudiant.dat`.

Le mot **entité** est utilisé pour désigner un objet du monde réel (ex: un étudiant, un professeur, un cours, etc.). Une entité est caractérisée par des **attributs** (ex: le nom, le prénom, la date de naissance, etc.). Une entité est représentée par un **rectangle** dans un MCD.

Le mot **relation** est utilisé pour désigner un ensemble d'entités du même type (ex: un ensemble d'étudiants, un ensemble de professeurs, un ensemble de cours, etc.). Une relation est caractérisée par des **tuples** (ex: un tuple = une ligne = un enregistrement). Une relation est représentée par un **tableau** dans un MLD.

Un modèle **entité-association** (MEA) est un modèle conceptuel de données (MCD) qui permet de modéliser la réalité à l'aide d'entités et d'associations. Une entité est un objet du monde réel (ex: un étudiant, un professeur, un cours, etc.). Une association est une relation entre deux entités (ex: un étudiant suit un cours, un professeur enseigne un cours, etc.). Une association est caractérisée par des **cardinalités** (ex: un étudiant suit 0 ou plusieurs cours, un cours est suivi par 0 ou plusieurs étudiants, etc.). Une association est représentée par un **losange** dans un MEA.

![MEA](/MEA.png)

Un modèle relationel, quant à lui, est un modèle logique de données (MLD) qui permet de modéliser la réalité à l'aide de relations. Une relation est un ensemble d'entités du même type (ex: un ensemble d'étudiants, un ensemble de professeurs, un ensemble de cours, etc.). Une relation est caractérisée par des **attributs** (ex: le nom, le prénom, la date de naissance, etc.). Une relation est représentée par un **tableau** dans un MLD.

![MLD](/MLD.png)

Etude de cas: BD d'une ecole

- **Les besoins**:
  - Gerer les inscriptions a des modules
  - Gerer l'affectation de tuteurs a des etudiants
  - Gerer le planing des salles
- **Les objers a modéliser**:
  - Les etudiants
  - Les modules
  - Les tuteurs
  - Les salles
- **Les liens entre les objets (scenarios)**:
  - Les etudiants s'inscrivent a un ou plusieurs modules pour une année.
  - Le cours d'un module a lieu dans une salle donnée; il débute a une heure connue et dure un certain temps.

![Etude de cas](/sgbdex.png)

Il existe **2 catégories d'entités**:
- Les entités fortes (ou régulières): Elles existent indépendamment des autres entités. Ex: un étudiant, un professeur, un cours, etc.
- Les entités faibles (ou dépendantes): Elles n'existent pas sans les autres entités. Ex: une inscription, une affectation, un planning, etc.

Par exemple, l'identité CONTRAT n'existe que si l'entité CLIENT existe. L'entité CONTRAT est donc une entité faible.

Un **attribut** peut être facultatif ou obligatoire. Un attribut est facultatif s'il peut être nul (ex: le numéro de téléphone d'un étudiant). Un attribut est obligatoire s'il ne peut pas être nul (ex: le nom d'un étudiant).

Par exemple, l'attribut DATE_NAISSANCE de l'entité ETUDIANT est un attribut obligatoire. Par contre, l'attribut NUMERO_TELEPHONE de l'entité ETUDIANT est un attribut facultatif.

Un **identifiant** est un attribut qui permet d'identifier de manière **unique** une entité. Un identifiant peut être simple ou composé. Un identifiant est simple s'il est composé d'un seul attribut (ex: le numéro d'étudiant). Un identifiant est composé s'il est composé de plusieurs attributs (ex: le nom et le prénom de l'étudiant). Souvent, l'identifiant est un chiffre généré automatiquement par le SGBD (ex: le numéro d'étudiant).

Les **relations** représentent les liens entre les entités. Une relation est caractérisée par des **cardinalités**. Une cardinalité est le nombre d'entités d'un côté de la relation par rapport au nombre d'entités de l'autre côté de la relation. Il existe 3 types de cardinalités: 1-1, 1-n, n-m.

Par exemple, la relation INSCRIPTION entre les entités ETUDIANT et MODULE est une relation 1-n. Un étudiant peut s'inscrire à 1 ou plusieurs modules. Un module peut être suivi par 1 ou plusieurs étudiants.

Contrairement aux entités, les relations n'ont pas de relations propres. Les relations sont caractérisées par des attributs. 

Par exemple, l'attribut DATE_INSCRIPTION de la relation INSCRIPTION est un attribut qui permet de stocker la date d'inscription d'un étudiant à un module.

La **Dimension** ou degré d'une relation est le nombre d'entités qui participent à la relation. Il existe 3 types de relations:

- **Dimension 1 (ou réflective)**: elle ne concerne qu'une seule entité (ex: un étudiant s'inscrit à un module).
- **Dimension 2**: c'est la relation la plus courante, elle concerne deux entités (ex: un étudiant s'inscrit à un module).
- **Dimension 3**: elle concerne trois entités (ex: un étudiant s'inscrit à un module pour une année).

=> De manière générale, une relation peut être caractérisée par n dimensions.

La **Cardinalité** d'une relation est le nombre d'entités qui participent à la relation. Il existe 3 types de cardinalités:

- **Cardinalité 1-1**: une entité d'un côté de la relation est associée à une seule entité de l'autre côté de la relation (ex: un étudiant est inscrit à un seul module).
- **Cardinalité 1-n**: une entité d'un côté de la relation est associée à plusieurs entités de l'autre côté de la relation (ex: un étudiant est inscrit à plusieurs modules).
- **Cardinalité n-m**: plusieurs entités d'un côté de la relation sont associées à plusieurs entités de l'autre côté de la relation (ex: plusieurs étudiants sont inscrits à plusieurs modules).

Plus simplement, on peut résumer a ça:
- Cardinalité un a plusieurs: un département peut avoir plusieurs employés, mais un employé ne peut appartenir qu'à un seul département.
- Cardinalité plusieurs a plusieurs: un employé peut travailler sur plusieurs projets, et un projet peut être réalisé par plusieurs employés.
- Cardinalité un a un: un employé a un seul numéro de sécurité sociale, et un numéro de sécurité sociale est attribué à un seul employé.

Les cardinalités maximales et minimales traduisent les contraintes propres aux entités et aux relations. Dans un schema, elles sont représentées comme suit:
- **0-1**: aucune ou une seule 
- **0-n**: aucune ou plusieurs
- **1-1**: une seule
- **1-n**: une ou plusieurs