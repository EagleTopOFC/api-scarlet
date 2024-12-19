const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = authMiddleware;
