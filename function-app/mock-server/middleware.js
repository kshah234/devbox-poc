const cmdbCiServer = require('./middlewares/cmdb-ci-server');
const health = require('./middlewares/health');

module.exports = (req, res, next) => {
  const middlewareChain = [cmdbCiServer, health];
  let index = 0;

  const run = () => {
    const middleware = middlewareChain[index++];
    if (middleware) {
      middleware(req, res, run);
    } else {
      next();
    }
  };

  run();
};
