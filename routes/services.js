const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

// Ruta para obtener todos los servicios disponibles
router.get('/', serviceController.getServices);

// Ruta para obtener un servicio específico por ID
router.get('/:id', serviceController.getServiceById);

module.exports = router;
