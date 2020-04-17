import { types, flow } from 'mobx-state-tree';
import axios from 'axios';
import UserModel from './UserModel';

const Auth = types
  .model('Auth', {
    loggedInStatus: types.optional(types.boolean, false),
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
        self.loggedInStatus = true;
        self.loading = false;
      } catch (error) {
        self.loggedInStatus = false;
        self.loading = false;
      }
    }),

    loginCheck: flow(function* loginCheck() {
      try {
        yield axios.get('http://localhost:8085/api/user/loginCheck', {
          withCredentials: true,
        });

        console.log('logged in good');
      } catch (error) {
        console.log('error', error);
        self.loggedInStatus = false;
        console.log('ghittt');
      }
    }),

    logout: flow(function* logout() {
      try {
        yield axios.get('http://localhost:8085/api/user/logout', {
          withCredentials: true,
        });

        self.loggedInStatus = false;
        console.log('logged out');
      } catch (error) {
        console.log('error', error);
        self.loggedInStatus = false;
      }
    }),
  }));

export default Auth;
