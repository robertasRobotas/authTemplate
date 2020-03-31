const passport = require('passport');
const { findExistingUserOrAddToDB } = require('../helpers/user.helper');
const serializeDeserialize = require('./serialization');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_LINK
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('profile', profile);

      const user = await findExistingUserOrAddToDB(profile);
      console.log(user);
      done(null, user);
    }
  )
);
