const passport = require('passport');
const { findExistingUserOrAddToDB } = require('../helpers/user.helper');
const serializeDeserialize = require('./serialization');

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: 'http://www.example.com/auth/facebook/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await findExistingUserOrAddToDB(profile);
      done(null, user);
    }
  )
);
