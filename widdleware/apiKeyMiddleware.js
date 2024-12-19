const ApiKey = require('../models/ApiKey');

async function verifyApiKey(req, res, next) {
  const apiKey = req.headers['authorization']?.split(' ')[1]; // Bearer <API_KEY>
  if (!apiKey) {
    return res.status(401).send('No API Key provided');
  }

  const apiKeyDoc = await ApiKey.findOne({ key: apiKey });
  if (!apiKeyDoc) {
    return res.status(403).send('Invalid API Key');
  }

  req.userId = apiKeyDoc.userId;
  next();
}

module.exports = verifyApiKey;
