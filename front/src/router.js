import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import { Login, Main, About, Contact } from './components/pages';
import history from './history';
import { loginCheck } from './apiCalls/user';

const PrivateRoute = ({ component: Component, path, rootModel }) => {
  return (
    <Route
      exact
      path={path}
      render={(props) => {
        loginCheck();
        return (
          <>
            {rootModel.auth.isLoggedIn ? (
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
    <Router history={history}>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/' component={Main} rootModel={rootModel} />
      <PrivateRoute path='/about' component={About} rootModel={rootModel} />
      <PrivateRoute path='/contact' component={Contact} rootModel={rootModel} />
    </Router>
  );
};

export default Routes;
