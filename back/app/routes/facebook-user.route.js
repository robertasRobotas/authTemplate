const express = require('express');
const router = express.Router();
const passport = require('passport');
const facebookPassportSetup = require('../configs/passport-facebook');
const isLoggedIn = require('../middlewares/loginCheck');

router.get(
  '/auth',
  passport.authenticate('facebook', {
    scope: ['public_profile,email,user_friends'],
  })
);

router.get(
  '/auth/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  }),
  function (req, res) {
    res.redirect(process.env.REDIRECT_AFTER_LOGIN);
  }
);

module.exports = router;
