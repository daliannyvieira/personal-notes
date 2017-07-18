// Inclui o banco
const conecta = require('./banco');

// Deleta uma linha com ID especificado
conecta.query(
  'DELETE FROM employees WHERE id = ?', [16], (err, result) => {
    if (err) throw err;

    console.log(`Deleted ${result.affectedRows} row(s)`);
  }
);