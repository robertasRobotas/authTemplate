const express = require('express');
const router = express.Router();
const passport = require('passport');
const facebookPassportSetup = require('../configs/passport-facebook');
const isLoggedIn = require('../middlewares/loginCheck');

router.get(
  '/auth',
  passport.authenticate('facebook', {
    scope: []
  })
);

router.get(
  '/auth/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

module.exports = router;
