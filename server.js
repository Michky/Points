const express = require('express');
const app = express();

// Configurar ruta para servir archivos estáticos
app.use(express.static('public'));

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});