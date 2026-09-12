const express= require('express');
const app= express();

const PORT= process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Nombre no configurado';

app.get('/', (req, res) => {
    res.json({ mensaje: `Hola, soy la API de alvaritol30` });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});