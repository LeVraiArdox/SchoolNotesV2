---
title: "SMTP, POP3 et IMAP"
tag: "Réseaux"
description: "Cours sur les protocoles SMTP, POP3 et IMAP."
heroImage: "/network.png"
---

## SMTP 
Présentation : SMTP (Simple Mail Transfer Protocol) est le protocole standard utilisé pour envoyer des courriers
électroniques d'un serveur à un autre sur Internet. Il définit comment les messages sont envoyés, transférés et
relayés entre serveurs, ainsi que l'interface de communication entre les clients de messagerie et le serveur de
messagerie.
- Sécurité : SMTP lui-même ne fournit pas de chiffrement, mais il peut être sécurisé en utilisant STARTTLS pour
chiffrer la communication entre le client et le serveur.
- Port 25 pour SMTP standard, Port 587 pour SMTP sécurisé (avec STARTTLS), et Port 465
pour SMTPS (SMTP avec SSL/TLS).

## POP3
POP (Post Office Protocol) est un protocole standard pour récupérer des mails d'un serveur
de messagerie. Une fois téléchargés, les messages sont généralement supprimés du serveur.
- Sécurité: POP3 ne fournit pas de chiffrement par défaut, mais il peut être sécurisé en utilisant STARTTLS.
- Port : 110 pour POP3 standard, Port 995 pour POP3 sécurisé (avec SSL/TLS).

## IMAP
IMAP (Internet Message Access Protocol) est un protocole utilisé par les clients de messagerie
pour accéder aux messages électroniques stockés sur un serveur de messagerie. Contrairement à POP, IMAP
permet de gérer les courriels directement sur le serveur.
- Sécurité : IMAP peut être sécurisé en utilisant STARTTLS pour chiffrer la communication entre le client et le serveur.
- Port : 143 pour IMAP standard, Port 993 pour IMAPS (IMAP avec SSL/TLS).
