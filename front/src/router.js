import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Login, Main, About, Contact } from './components/pages';
import history from './history';
import { loginCheck } from './apiCalls/user';
import { getUserData } from './helpers/functions';

const PrivateRoute = ({ component: Component, path }) => {
  const userData = getUserData();
  console.log('userData', userData);
  return (
    <Route
      exact
      path={path}
      render={() => {
        loginCheck();
        return <Component userData={userData} />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <Router history={history}>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/' component={Main} />
      <PrivateRoute path='/about' component={About} />
      <PrivateRoute path='/contact' component={Contact} />
    </Router>
  );
};

export default Routes;
