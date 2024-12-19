const Account = require('../models/Account');
const faker = require('faker'); // Para generar datos aleatorios

// Lógica para crear cuentas automáticamente
const createAccount = async () => {
  try {
    // Generación de datos aleatorios para la cuenta
    const email = faker.internet.email();
    const username = faker.internet.userName();
    const password = faker.internet.password();

    // Crear la cuenta en la base de datos
    const newAccount = new Account({
      email,
      username,
      password,
      platform: 'Instagram', // Puedes hacerlo dinámico para más plataformas
      createdAt: new Date(),
    });

    await newAccount.save();
    console.log('Cuenta de Instagram creada:', username);
  } catch (error) {
    console.error('Error al crear cuenta de Instagram:', error);
  }
};

module.exports = { createAccount };
