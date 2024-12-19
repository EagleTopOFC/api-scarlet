const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Ruta para obtener información del usuario
router.get('/me', authMiddleware, userController.getUserInfo);

module.exports = router;
