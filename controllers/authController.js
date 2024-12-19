const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');

// Registro de un nuevo usuario
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error });
  }
};

// Autenticación de un usuario existente
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};

module.exports = { register, login };
