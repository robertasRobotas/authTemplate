import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

const User = types
  .model('User', {
    displayName: types.string,
    id: types.string,
    email: types.string,
    picture: types.string,
  })
  .views((self) => ({
    getDisplayName() {
      return self.displayName;
    },
  }))
  .actions((self) => ({
    changeDisplayName() {
      self.displayName = 'makaka';
    },
    getUserData: flow(function* getUserData() {
      const userData = yield axios.get(
        'http://localhost:8085/api/user/getUser',
        {
          withCredentials: true,
        }
      );
      console.log('userData', userData);
      self.displayName = userData.data.user.displayName;
      self.id = userData.data.user.id;
      self.email = userData.data.user.email;
      self.picture = userData.data.user.picture;
    }),
  }));

export default User;
