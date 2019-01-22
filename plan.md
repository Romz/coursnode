# Introduction Nodejs

## Base de Nodejs

- Initialisation du projet
- Faire un console.log
- Ajouter un fichier js
- Exporter une fonction qui dit hello
- Installer une librairie (chalk)
- Utiliser la librairie
- Montrer comment récupérer des argument (process.argv)
- Motrer comment utiliser minimist
- `var argv = require('minimist')(process.argv.slice(2));`

### Prompteur

- Utilisation de readline
- Utilisation avec inquirer
  - Montrer les différents types
  - Montrer avec await et async

### File system
- Utilisation de fs
- Récupérer le chemin courant (process.cwd())
- Lire un fichier
  - En asynchrone
  - En synchrone
- Ecrire un fichier

### Exécuter une commnade
- Montrer childprocess

### TP Contacts
Faire un utiliteur en ligne de commande permettant de gérer un carnet d'adresse.
Les contacts seront stockés en JSON dans un fichier et seront composé de :
  - Un nom
  - un prénom
  - Une adresse mail
  - Une liste de compétences (liste de sélection)

Elle devra contenir les commandes suivantes:

- **list**   : liste tous les contacts présents dans le fichier (nom et prénom)
- **add**    : Formulaire pour ajouter un contact et le sauvegarde dans un fichier
- **delete** : Formulaire qui liste les contacts et supprime celui choisis

Bonus:
- Ajouter un usage description
- Faire une fonction de recherche


## Introduction à Loopback

### Installation
`npm install -g loopback-cli`

### Création du projet
`lb`

### Ajouter un datasource
Faire un exemple avec mongodb
`lb datasource`

### Création d'un model
`lb model`

### Etendre le model User
 Créer un model qui hérite de user
 Editer le fichier model-config.json :
 Virer le model user
 Editer le accessToken:
 ```JSON
 "relations" : {
   "user" : {
     "type": "belongsTo",
     "model": "Account",
     "foreignKey": "userId"
   }
 }
 ```
Dans notre model, ajouter la relation vers l'access token:
```JSON
"relations": {
  "accessTokens": {
    "type": "hasMany",
    "model": "AccessToken",
    "foreignKey": "userId",
    "options": {
      "disableInclude": true
    }
  }
}
```

### Création d'une relation entre les models
`lb relation`

### Ajouter un hooks
Regarder test.js

### Faire des filtres
`filter[where][name][like]=test`

### Intégration des fichiers
`npm install loopback-component-storage`

```JSON
"provider": "filesystem",
"root": "media",
"nameConflict": "makeUnique",
"maxFileSize": "52428800"
```

https://github.com/tabvn/angular-blog/wiki/LoopBack-File-upload---Angular-2

### Gestion des permissions
TODO: tester le $owner






