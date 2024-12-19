// Enviar notificación mediante webhook
const sendWebhook = (url, data) => {
  const axios = require('axios');

  axios.post(url, data)
    .then(response => {
      console.log('Webhook enviado:', response.data);
    })
    .catch(error => {
      console.error('Error al enviar webhook:', error);
    });
};

module.exports = { sendWebhook };
