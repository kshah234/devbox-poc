const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && req.path === '/cmdb_ci_server') {
    const name = req.query.name

    const stubFile = name === 'us6salxdev00002' ? 'us002.json' : 'default.json';
    const stubPath = path.join(__dirname, '../stubs/cmdb-ci-server', stubFile);

    const responseData = JSON.parse(fs.readFileSync(stubPath));
    return res.status(200).json(responseData);
  }
  next();
};
