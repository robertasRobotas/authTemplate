const express = require('express');
const router = express.Router();
const passport = require('passport');
const googlePassportSetup = require('../configs/passport-google');

router.get('/redirect', (req, res) => {
  console.log(' req.session', req.session);
  console.log(' req.user', req.user);

  return res.status(200).json({ text: 'ok' });
});

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
    ]
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect(process.env.REDIRECT_AFTER_LOGIN);
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.clearCookie('connect.sid');
  res.redirect('http://localhost:3000/login');
});

module.exports = router;
