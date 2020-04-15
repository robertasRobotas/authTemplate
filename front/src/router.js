import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import { Login, Main, About, Contact } from './components/pages';
import { Spinner } from './components/atoms';
import history from './history';
import { loginCheck } from './apiCalls/user';
import { observer } from 'mobx-react';

const PrivateRoute = ({ component: Component, path, rootModel }) => {
  console.log('route', rootModel.auth);
  return (
    <Route
      exact
      path={path}
      render={(props) => {
        loginCheck();
        return (
          <>
            {rootModel.auth.loggedInStatus ? (
              <Component {...props} rootModel={rootModel} />
            ) : (
              <Redirect to='/login' />
            )}
          </>
        );
      }}
    />
  );
};

const Routes = ({ rootModel }) => {
  return (
    <>
      {!rootModel.auth.loading ? (
        <Router history={history}>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/' component={Main} rootModel={rootModel} />
          <PrivateRoute path='/about' component={About} rootModel={rootModel} />
          <PrivateRoute
            path='/contact'
            component={Contact}
            rootModel={rootModel}
          />
        </Router>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default observer(Routes);
