const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/loginCheck');

router.get('/getUser', isLoggedIn, (req, res) => {
  console.log(req.user);

  return res.status(200).json({ text: 'xddd' });
});

module.exports = router;
