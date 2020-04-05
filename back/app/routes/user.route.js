const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/loginCheck');

router.get('/getUser', isLoggedIn, (req, res) => {
  return res.status(200).json({ user: req.user });
});

module.exports = router;
