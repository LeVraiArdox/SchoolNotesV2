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