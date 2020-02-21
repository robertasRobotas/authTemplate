const express = require('express');
const router = express.Router();
const passport = require('passport');
const googlePassportSetup = require('../configs/passport-google');

router.get('/goo',(req,res)=>{
	console.log(req);
	return res.status(200).json({status:'good'})
});

router.get('/redirect',(req,res)=>{
	console.log('redirect');
	return res.redirect('http://nodejs.org');
});

router.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
	  console.log('hittttt');
    res.redirect(process.env.REDIRECT_AFTER_LOGIN);
  });

module.exports = router;