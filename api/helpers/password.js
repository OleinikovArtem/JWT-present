const crypto = require('crypto');

const generatePassword = (password) => {
  return crypto.createHash('md5').update(password).digest('hex');
};

module.exports = {
  generatePassword,
};
