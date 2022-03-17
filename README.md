# Desenvolver uma plataforma de comunicação

<!-- TABLE OF CONTENTS -->

## Índice
* [Sobre o projeto](#sobre-o-projeto)
  * [Construído com](#construído-com)
* [Execute no seu computador](#execute-no-seu-computador)
* [Como usar](#como-usar)
* [Scenes](#scenes)
* [Trabalho futuro](#trabalho-futuro)
* [Licença](#licença)
* [Contato](#contato)

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Plataforma em que você pode agendar uma comunicação (processo seletivo Magalu).

### Construído com
* HTML
* CSS
* Git
* GitHub
* npm
* NodeJS
* PostgresSQL (version 12)
* knex 
* ReactJS
* TypeScript
* Jest

## Execute no seu computador

1 - Backend
* config Banco de Dados (PostgreSQL):
  * psql -U postgres (Conectar ao banco de dados com o nome postgres);
  * CREATE DATABASE communication (Criar database communication);
  * config .env usar .env-template como exemplo.
* Start Backend:
  * cd backend (Entrar na pasta Backend);
  * Run: npm i (Instalar dependências);
  * Run: npm start (Iniciar o Backend).
* Test Backend (Para o Backend antes de rodar os testes)
  * CREATE DATABASE communication_test (Criar database communication_test);
  * Run test: npm test.

2 - Frontend
* Start Frontend:
  * cd frontend;
  * Run: npm i (Instalar dependências);
  * Run: npm start (Iniciar o Frontend).
* Test Frontend (Para o Frontend antes de rodar os testes)
  * Run test: npm test;


## Trabalho futuro

* Arrumar testes no React (data-time e axios);
* Adicionar Docker para o projeto.

## Licença

Distribuído sob a licença MIT.

<!-- Contato -->
## Contato
Felipe Enne Mendes Ribeiro
* Email - felipeenne@gmail.com
* <a href="https://www.linkedin.com/in/felipe-enne/" target="_blank">LinkedIn</a>
* <a href="https://felipeenne.com/" target="_blank">Portfolio</a>