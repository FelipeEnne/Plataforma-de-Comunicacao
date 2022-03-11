# Desenvolver uma plataforma de comunicação (processo seletivo Magalu)

### Setup

Separar o FrontEnd do BackEnd em pastas.

PostgresSQL (12)
npm (8.3)

1 - Backnnd
* Instalando dependencias (npm)
* config DB (PostgreSQL)
  * CREATE DATABASE communication;
  * config knexfile.js usar knexfile-template.js como exemplo.
  * knex migrate:make create_table_communication;