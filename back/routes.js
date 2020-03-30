const { Router } = require('express');
const router = Router();
const googleUserRoute = require('./app/routes/google-user.route');
const facebookUserRoute = require('./app/routes/google-user.route');

const initializeRoutes = () => {
  router.use('/user', googleUserRoute);
  router.use('/xx', facebookUserRoute);

  return router;
};

module.exports = {
  initializeRoutes
};
