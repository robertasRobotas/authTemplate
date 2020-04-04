const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/loginCheck');

router.get('/redirect', isLoggedIn, (req, res) => {
  console.log(' req.session', req.session);
  console.log(' req.user', req.user);

  return res.status(200).json({ text: 'ok' });
});

module.exports = router;
