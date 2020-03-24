const passport = require('passport');
const UserSchema = require('../models/user');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserSchema.findOne({ id }).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8085/user/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const findUser = await UserSchema.findOne({ email: profile._json.email });

      if (!findUser) {
        const user = new UserSchema({
          displayName: profile.displayName,
          email: profile._json.email,
          id: profile.id,
          picture: profile._json.picture
        });

        await user.save();
        done(null, user);
      } else {
        try {
          done(null, findUser);
        } catch (e) {
          console.log('error', e);
        }
      }
    }
  )
);
