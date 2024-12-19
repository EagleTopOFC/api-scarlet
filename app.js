const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importa la función de creación automática de cuentas
const startAccountCreation = require('./services/accountGenerator');

// Crear la aplicación Express
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/smm-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });

// Ejecutar la creación de cuentas automáticamente
startAccountCreation();

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
