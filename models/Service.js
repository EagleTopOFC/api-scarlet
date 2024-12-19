const mongoose = require('mongoose');

// Esquema para los servicios
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  platform: { type: String, required: true }, // Instagram, TikTok, YouTube, etc.
  createdAt: { type: Date, default: Date.now },
});

// Modelo para los servicios
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
