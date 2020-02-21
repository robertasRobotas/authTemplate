var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8085/user/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);

       User.findOrCreate({ googleId: profile.id }, (err, user) => {
         return done(err, user);
       });
  }
));