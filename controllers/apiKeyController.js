const ApiKey = require('../models/ApiKey');
const User = require('../models/User');
const crypto = require('crypto');

// Generar y asociar la API Key al usuario
async function generateApiKey(req, res) {
  try {
    const user = await User.findById(req.userId);  // Asumiendo que tienes autenticación
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    const newApiKey = crypto.randomBytes(32).toString('hex');
    const apiKey = new ApiKey({ key: newApiKey, userId: user._id });
    await apiKey.save();

    res.status(200).send({ apiKey: newApiKey });
  } catch (error) {
    res.status(500).send('Error generando la API Key');
  }
}

module.exports = { generateApiKey };
