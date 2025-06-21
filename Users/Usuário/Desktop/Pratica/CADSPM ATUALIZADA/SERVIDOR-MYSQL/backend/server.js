const mysql = require('mysql2');
const express = require('express');
const app = express();

const config = {
  host: 'mysql',
  user: 'root',
  password: 'rootpass',
  database: 'testdb'
};

function conectarAoBanco() {
  const db = mysql.createConnection(config);

  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL. Tentando novamente em 5 segundos...');
      setTimeout(conectarAoBanco, 5000); // tenta novamente em 5 segundos
    } else {
      console.log('Conectado ao MySQL');

      app.get('/api', (req, res) => {
        db.query('SELECT NOW() AS hora', (err, result) => {
          if (err) return res.status(500).send(err);
          res.json({ hora: result[0].hora });
        });
      });

      app.listen(3000, () => {
        console.log('Servidor Node.js rodando na porta 3000');
      });
    }
  });
}

conectarAoBanco();