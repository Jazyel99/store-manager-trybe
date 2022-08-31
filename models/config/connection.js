require('dotenv').config();
const mysql = require('mysql2/promise');

const { MYSQL_HOST, MYSQL_USER,
  MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_PORT } = process.env;

// ::DOING fazer conexão com o bando de dados
const connection = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  port: MYSQL_PORT,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

module.exports = connection;
