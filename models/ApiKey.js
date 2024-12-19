const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  key: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Relación con el usuario
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ApiKey', apiKeySchema);
