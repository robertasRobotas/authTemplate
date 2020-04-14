import { types, flow } from 'mobx-state-tree';
import axios from 'axios';
import UserModel from './UserModel';

const Auth = types
  .model('User', {
    isLoggedIn: types.optional(types.boolean, false),
    user: types.maybeNull(UserModel),
    loading: types.optional(types.boolean, false),
  })
  .views((self) => ({
    getDisplayName() {
      return self.user.displayName;
    },
  }))
  .actions((self) => ({
    getUserData: flow(function* getUserData() {
      self.loading = true;

      try {
        const userData = yield axios.get(
          'http://localhost:8085/api/user/getUser',
          {
            withCredentials: true,
          }
        );

        self.user = {
          displayName: userData.data.user.displayName,
          id: userData.data.user.id,
          email: userData.data.user.email,
          picture: userData.data.user.picture,
        };
        self.isLoggedIn = true;
        self.loading = false;
      } catch (error) {
        self.isLoggedIn = false;
        self.loading = false;
      }
    }),
  }));

export default Auth;
