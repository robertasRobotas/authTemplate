const { Router } = require('express');
const router = Router();
const googleUserRoute = require('./app/routes/google-user.route');
const facebookUserRoute = require('./app/routes/facebook-user.route');
const actionRoute = require('./app/routes/action.route');

const initializeRoutes = () => {
  router.use('/google', googleUserRoute);
  router.use('/facebook', facebookUserRoute);
  router.use('/api/action', actionRoute);

  return router;
};

module.exports = {
  initializeRoutes,
};
