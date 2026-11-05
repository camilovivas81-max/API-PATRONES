const express = require('express');

const app = express();

app.use(express.json());

app.get('/prueba', (req, res) => {
    res.send("¡El servidor que node esta vivo!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor encendido. entra a http://localhost:${PORT}/prueba');
});