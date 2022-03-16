# Desenvolver uma plataforma de comunicação (processo seletivo Magalu)

### Setup

Separar o frontEnd do backEnd em pastas.

PostgresSQL (12)
npm (8.3)
knex (1)

1 - Backend
* Instalando dependencias (npm) Run: npm i;
* config DB (PostgreSQL)
  * psql -U postgres;
  * CREATE DATABASE communication;
  * config .env usar .env-template como exemplo;
  * cd backend
  * npm start
2 - Test Backend 
  * CREATE DATABASE communication_test;
  * Run test: npm test;


1 - Frontend
* Instalando dependencias (npm) Run: npm i;
  * cd frontend
  * npm start
2 - Test frontend 
  * Run test: npm test;
