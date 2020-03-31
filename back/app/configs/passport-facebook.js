const passport = require('passport');
const { findExistingUserOrAddToDB } = require('../helpers/user.helper');
const serializeDeserialize = require('./serialization');

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_LINK,
      profileFields: ['email', 'name', 'photos']
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('profile', profile);
      const user = await findExistingUserOrAddToDB(profile);
      done(null, user);
    }
  )
);
