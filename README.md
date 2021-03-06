## Description

Backend de l'application de sport

## Endpoint:
#### Exercices
- GET       /exercises
#### Utilisateurs
- POST      /users/register
- POST      /users/login
- PUT       /users
#### Entrainements
- POST      /trainings
- GET       /trainings/user/:idUser
- GET       /trainings/:idEntrainement
- PUT       /trainings/:idEntrainement
- DELETE    /trainings/:idEntrainement


## Installation

```bash
$ npm install
```
Il faut aussi créer, grâce aux scripts de création et d'insertion, la base de données en local

Enfin, il est important de créer un fichier ormconfig.json qui définira les accès à la BDD
#### Exemple
```bash
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "dbsport",
    "entities": ["dist/**/*{.ts,.js}"],
    "synchronize": true
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```