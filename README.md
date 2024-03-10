# Paimon backend NestJS

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](./LICENSE)

A intenção do projeto :camel: Paimon é de forma simples, usando as melhores praticas do NestJS e TypeScript, ser um modelo de API Rest com serviço de `Autenticação` usando a biblioteca `Passaport` e um simples `CRUD` de usuarios :)


## Como rodar na minha máquina ?
### Configuração

- Renomeie o arquivo `example.env` para `.env`

- Configure as seguintes variaveis de ambiente `.env`


```
JWT_SECRET=
NODEJS_PORT=3000

MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_HOST=
MYSQL_PORT=3306
```

### Instalação

```bash
$ npm install
```
```bash
$ npm run typeorm migration:run
```


## Rodando a API

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




## Como foi implementado ?
  - Autenticação
  - CRUD | Usuarios
