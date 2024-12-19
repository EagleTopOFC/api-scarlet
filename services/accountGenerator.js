const cron = require('node-cron');
const instagramBotService = require('./instagramBotService');
const Account = require('../models/Account');

// Configuración del proceso de generación automática de cuentas
const startAccountCreation = () => {
  // Ejecutar cada 5 minutos
  cron.schedule('*/5 * * * *', async () => {
    try {
      console.log('Iniciando verificación de cuentas...');

      // Verificar cuántas cuentas hay en la base de datos
      const accountCount = await Account.countDocuments({ platform: 'Instagram' });

      // Si el número de cuentas es menor al mínimo, se crean nuevas cuentas
      const MIN_ACCOUNTS = 1000;
      const ACCOUNTS_TO_CREATE = 100;

      if (accountCount < MIN_ACCOUNTS) {
        console.log(`Cuentas disponibles: ${accountCount}. Creando más cuentas...`);

        // Crear cuentas
        for (let i = 0; i < ACCOUNTS_TO_CREATE; i++) {
          await instagramBotService.createAccount(); // Llamada para crear cuenta
        }

        console.log(`${ACCOUNTS_TO_CREATE} cuentas creadas.`);
      } else {
        console.log('Suficientes cuentas disponibles. No se necesitan más.');
      }
    } catch (error) {
      console.error('Error en la creación de cuentas:', error);
    }
  });
};

module.exports = startAccountCreation;
