const controllers = require('./controllers');

const router = (app) => {
  app.get('/page1', controllers.page1);
  app.get('/', controllers.page1);
};

module.exports = router;
