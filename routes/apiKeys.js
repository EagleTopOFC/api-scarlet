const express = require('express');
const apiKeyController = require('../controllers/apiKeyController');
const router = express.Router();

// Ruta para generar la API Key
router.post('/generate', apiKeyController.generateApiKey);

module.exports = router;
