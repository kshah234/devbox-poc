const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  if (req.path === '/health' && req.method === 'GET') {
    const stubPath = path.join(__dirname, '../stubs/health/default.json');
    const responseData = JSON.parse(fs.readFileSync(stubPath));
    return res.status(200).json(responseData);
  }
  next();
};
