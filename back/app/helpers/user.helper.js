const UserSchema = require('../models/user');

const findExistingUserOrAddToDB = async (profile) => {
  const findUser = await UserSchema.findOne({ email: profile._json.email });

  if (!findUser) {
    const user = new UserSchema({
      displayName: profile.displayName,
      email: profile._json.email,
      id: profile.id,
      picture: profile._json.picture
    });

    await user.save();
    return user;
  } else {
    try {
      return findUser;
    } catch (e) {
      console.log('error', e);
    }
  }
};

const findUser = async (userId) => {
  UserSchema.findOne({ id: userId }).then((user) => {
    console.log('user2', user);
    return user;
  });
};

module.exports = { findExistingUserOrAddToDB, findUser };
