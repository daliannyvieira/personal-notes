// Inclui o banco
const conecta = require('./banco');

// Insere uma nova linha
const employee = { name: 'Camila', location: 'Rio' };

conecta.query('INSERT INTO employees SET ?', employee, (err, res) => {
  if(err) throw err;

  console.log('Insert ID:', res.insertId);
});