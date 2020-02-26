const passport = require('passport');
const UserSchema = require('../models/user');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user,done)=>{
  done(null, user.id);
});

passport.deserializeUser((user,done)=>{
  UserSchema.findOne({id:user.id}).then((user)=>{
    done(null, user.id);
  });
});


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8085/user/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) =>{
    
   UserSchema.findOne({email: profile._json.email}).then((findUser)=>{

    if(!findUser)
    {
     const user = new UserSchema({
       displayName: profile.displayName,
       email: profile._json.email,
       id: profile.id,
       picture: profile._json.picture
   });
 
    user.save().then(()=>{
     done(null, user);
    });
 
    }else{
 console.log(findUser);
 console.log(accessToken);
 console.log(refreshToken);
      try{  
        done(null, findUser)
      }catch(e){
        console.log('error', e);
      }

    }


   });


  }
));