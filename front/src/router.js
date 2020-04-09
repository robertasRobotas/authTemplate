import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Main, Login, About, Contact } from './components/pages';
import history from './history';
import { getUserData } from './apiCalls/user';

const PrivateRoute = ({ component: Component, path, location, ...rest }) => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <Route
      exact
      path={path}
      render={(props) => {
        getUserData();
        return <Component {...props} userData={userData} />;
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
