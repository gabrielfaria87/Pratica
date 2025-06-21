const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'rootpass',
    database: 'testedb'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err.message);
        process.exit(1);
    } else {
        console.log('Conectado ao banco de dados MySQL');
    }
});

app.get('/api', (req, res) => {
    db.query('SELECT NOW() AS time', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ time: results[0].time });
    });
});

app.listen(port, () => {
    console.log(`Servidor Node.js rodando na porta ${port}`);
});
