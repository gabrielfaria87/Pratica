const express = require('express');
const app = express();
const port = 3001; // porta que será sinalizada na -p

app.get('/', (req, res) => {
    res.send('Olá, Mundo!!')
});

app.listen(port, () => {
    console.log(`app rodando na porta: ${port}`);
});

