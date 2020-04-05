const express = require('express');
const router = express.Router();
const passport = require('passport');
const googlePassportSetup = require('../configs/passport-google');
const isLoggedIn = require('../middlewares/loginCheck');

router.get(
  '/auth',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
    ],
  })
);

router.get(
  '/auth/callback',
  (req, res, next) => {
    logger('LOGGED IN');
    next();
  },
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect(process.env.REDIRECT_AFTER_LOGIN);
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('connect.sid');
  res.redirect('http://localhost:3000/login');
});

module.exports = router;
