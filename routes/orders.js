const express = require('express');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Ruta para crear una nueva orden
router.post('/create', authMiddleware, orderController.createOrder);

// Ruta para obtener las órdenes de un usuario
router.get('/', authMiddleware, orderController.getOrders);

module.exports = router;
