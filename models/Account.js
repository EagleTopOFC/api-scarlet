const mongoose = require('mongoose');

// Esquema para las cuentas
const accountSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  platform: { type: String, required: true }, // Instagram, TikTok, YouTube, etc.
  createdAt: { type: Date, default: Date.now },
});

// Modelo para las cuentas
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
