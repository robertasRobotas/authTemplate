import React from 'react';
import axios from 'axios';
import { Route, Router } from 'react-router-dom';
import { Main, Login } from './pages';
import history from './history';

const Routes = () => {
  return (
    <Router history={history}>
      <Route path='/' exact component={Main} />
      <Route path='/login' exact component={Login} />
    </Router>
  );
};

export default Routes;
