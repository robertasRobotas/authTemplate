const isLoggedIn = (req, res, next) => {
  if (req.user !== undefined) {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = isLoggedIn;
