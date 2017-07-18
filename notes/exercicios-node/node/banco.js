// Inclui o mysql
const mysql = require('mysql');

// Configura os dados de acesso ao banco
const conecta = mysql.createConnection({
  host: 'localhost',
  user: 'dali',
  password: '123456789',
  database: 'api'
});

// Exporta o banco
module.exports = conecta;