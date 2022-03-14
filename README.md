# Desenvolver uma plataforma de comunicação (processo seletivo Magalu)

### Setup

Separar o FrontEnd do BackEnd em pastas.

PostgresSQL (12)
npm (8.3)
knex (1)

1 - Backnnd
* Instalando dependencias (npm) Run: npm i;
* config DB (PostgreSQL)
  * psql -U postgres;
  * CREATE DATABASE communication;
  * npm i -g knex;
  * config knexfile.js usar knexfile-template.js como exemplo.
  * Run: knex migrate:latest  
