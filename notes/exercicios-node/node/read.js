// Inclui o banco
const conecta = require('./banco');

// Mostra a tabela
conecta.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received:');
  console.log(rows);
});