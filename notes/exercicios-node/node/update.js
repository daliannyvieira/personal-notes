// Inclui o banco
const conecta = require('./banco');

// Atualiza a localização de uma linha com ID especificado
conecta.query(
  'UPDATE employees SET location = ? Where ID = ?',
  ['Tacaratu', 11],
  (err, result) => {
    if (err) throw err;

    console.log(`Changed ${result.changedRows} row(s)`);
  }
);