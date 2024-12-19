const axios = require('axios');

// Función para obtener un correo temporal
const getTempMail = async () => {
  try {
    const response = await axios.get('https://api.temp-mail.org/request/mail/id');
    return response.data;
  } catch (error) {
    console.error('Error al obtener correo temporal:', error);
  }
};

module.exports = { getTempMail };
