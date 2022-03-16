# Desenvolver uma plataforma de comunicação (processo seletivo Magalu)

### Setup

Separar o frontEnd do backEnd em pastas.

PostgresSQL (12)
npm (8.3)
knex (1)

1 - Backend
* config DB (PostgreSQL):
  * psql -U postgres;
  * CREATE DATABASE communication;
  * config .env usar .env-template como exemplo.
* Start Backend:
  * cd backend;
  * Instalando dependencias - Run: npm i;
  * Run: npm start.
* Test Backend 
  * CREATE DATABASE communication_test;
  * Run test: npm test.


2 - Frontend
* Start Frontend:
  * cd frontend;
  * Instalando dependencias - Run: npm i;
  * Run: npm start.
* Test Frontend 
  * Run test: npm test;
