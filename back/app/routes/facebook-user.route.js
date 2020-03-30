const express = require('express');
const router = express.Router();
const passport = require('passport');
const facebookPassportSetup = require('../configs/passport-facebook');
const isLoggedIn = require('../middlewares/loginCheck');

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['read_stream', 'publish_actions']
  })
);

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

module.exports = router;
