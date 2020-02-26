const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./app/routes/user');
const passport = require('passport');

 mongoose.connect(process.env.MONGO_LINK_MLAB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use((req, res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Headers', 'http://localhost:3000');
    next();
});

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRoute);

module.exports = app;